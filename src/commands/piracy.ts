import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import * as database from '../utils/database';
import * as poster from '../utils/poster';
import { PiracyActs } from './piracy-acts';

const PiracyCommand = new SlashCommandBuilder()
  .setName('piracy')
  .setDescription('Report an act of piracy');

PiracyActs.forEach((act) => {
  PiracyCommand.addSubcommand((subcommand) =>
    subcommand
      .setName(act.name)
      .setDescription(act.description)
      .addUserOption((option) =>
        option
          .setName('username')
          .setDescription('Username of Pirate')
          .setRequired(true)
      )
  );
});

module.exports = {
  data: PiracyCommand,

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    const commandUsed = interaction.options.getSubcommand();
    const act = PiracyActs.find((act) => act.name === commandUsed);

    if (!act) {
      interaction.editReply('Cannot find the piracy act - try again later');
      return;
    }

    const username = interaction.options.getUser('username')?.username;
    if (!username) {
      interaction.editReply(`No such user ${username} - try again later`);
      return;
    }

    const newBounty = await database.updateBounty(username, act.bounty);
    // the pirate name on the board might not be the same as their discord username... I think (?)
    const pirateName = await database.getPirateName(username);
    const image = await database.getImageUrl(username);

    if (!pirateName || !image || !newBounty) {
      console.log('Failure interacting with database');
      interaction.editReply(
        'Something went wrong updating bounty value for user - try again later'
      );
      return;
    }

    const newPosterURL = await poster.generatePoster(
      pirateName,
      image,
      parseInt(newBounty)
    );

    if (newPosterURL.length === 0) {
      console.log('Was not able to generate poster');
      interaction.editReply('Something went wrong updating bounty poster for user - try again later');
      return;
    }

    await database.updatePoster(username, newPosterURL);
    interaction.editReply(newPosterURL);
  }
};
