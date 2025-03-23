import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import * as database from '../utils/database';
import * as poster from '../utils/poster';
import { PiracyActs, BountiesDescription, Bounties } from './piracy-acts';

const PiracyCommand = new SlashCommandBuilder()
  .setName('piracy')
  .setDescription('Report an act of piracy');

for (let index = 0; index < PiracyActs.length; index++) {
  const act = PiracyActs[index];
  const description = BountiesDescription[index];

  PiracyCommand.addSubcommand((subcommand) =>
    subcommand
      .setName(act)
      .setDescription(description)
      .addUserOption((option) =>
        option
          .setName('username')
          .setDescription('Username of Pirate')
          .setRequired(true)
      )
  );
}

module.exports = {
  data: PiracyCommand,

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    const commandUsed = interaction.options.getSubcommand();
    const bountyIncrease = Bounties.get(commandUsed);

    if (!bountyIncrease) {
      interaction.editReply('Something went wrong updating bounty');
      return;
    }
    const username = interaction.options.getUser('username')?.username;
    if (!username) {
      interaction.editReply(`No such user ${username}, please try again`);
      return;
    }
    const newBounty = await database.updateBounty(username, bountyIncrease);
    const pirateName = await database.getPirateName(username);
    const image = await database.getImageUrl(username);

    if (!pirateName || !image || !newBounty) {
      console.log('Failure interacting with database');
      interaction.editReply('Something went wrong updating bounty');
      return;
    }

    const newPosterURL = await poster.generatePoster(
      pirateName,
      image,
      parseInt(newBounty)
    );

    if (newPosterURL.length === 0) {
      console.log('Was not able to generate poster');
      interaction.editReply('Something went wrong updating bounty');
      return;
    }

    await database.updatePoster(username, newPosterURL);
    interaction.editReply(newPosterURL);
  }
};
