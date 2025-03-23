# MarineHQ - OPTCG Bounty Bot

This is a fan-made Discord Bot for the [One Piece trading card game](https://en.onepiece-cardgame.com) communities to use if they want to run their own 'Bounty Board' as a sort of mini-game alongside tournaments and casual events.

For example, [this is how it's being used](https://spellboundgames.co.uk/pages/one-piece-bounty-board) at Spellbound Games in London, UK.

## Demo

https://github.com/LoveGlitchCoffee/marinehq/assets/10636469/a6781c31-d034-41f8-93e2-40141620fe0f

## Setup

To set up and run this bot for your community, follow these steps:

### 1. Requirements

- **Discord App Credentials**: Obtain your Discord App's `clientID` and `discordToken` from the [Discord Developer Portal](https://discord.com/developers/applications).
- **Database**: Set up a PostgreSQL database (e.g., via [neon.tech](https://neon.tech)) with a table named `pirates` that includes the following columns:
  - `pirate_name`
  - `username`
  - `bounty`
  - `image_url`
  - `poster_url`
- **Image Hosting**: Use an image hosting service that supports the [Chevereto API](https://chevereto.com) (e.g., [freeimage.host](https://freeimage.host)).
- **Hosting Environment**: Deploy the bot to a hosting platform of your choice (e.g., [Heroku](https://www.heroku.com), [Railway](https://railway.app), or a self-hosted server).

### 2. Configure `config.json`

Create a `config.json` file in the `src` directory with the following structure and populate the fields as described:

```json
{
  "DATABASE_URL": "<Your PostgreSQL database connection string>",
  "discordToken": "<Your Discord bot token>",
  "testClientID": "<Your test Discord application client ID>",
  "clientID": "<Your production Discord application client ID>",
  "imageHostRequestUrl": "<The API endpoint of your image hosting service>",
  "imageAPIKey": "<The API key for your image hosting service>"
}
```

Once these steps are complete, you can start the bot and enjoy running your own Bounty Board!

## Contributing

If you want to improve the code, or add some new events to score, please check out [CONTRIBUTING](./CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](./LICENSE).

## Credits

This Discord Bot was created by Hung Hoang for [Spellbound Games](https://spellboundgames.co.uk)' OPTCG community.

Projects leveraged by this bot:

- [One Piece Poster Generator](https://github.com/YuskaWu/one-piece-wanted-poster) by YuskaWu
- [discord.js](https://discord.js.org)
