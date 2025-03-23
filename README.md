# MarineHQ - OPTCG Bounty Bot

This is a fan-made Discord Bot for the [One Piece trading card game](https://en.onepiece-cardgame.com) communities to use if they want to run their own 'Bounty Board' as a sort of mini-game alongside tournaments and casual events.

## Demo

https://github.com/LoveGlitchCoffee/marinehq/assets/10636469/a6781c31-d034-41f8-93e2-40141620fe0f

## Setup

To run this bot for your own community, you will need to set up `config.json` in the `src` to use:

1. Your own Discord App's ID and Token
2. A PSQL database endpoint (such as [neon.tech](https://neon.tech)), and a table called `pirates` matching the columns `(pirate_name, username, bounty, image_url, poster_url)`
3. An image host that runs on [chevereto API](https://chevereto.com) (such as [freeimage.host](https://freeimage.host))
4. Somewhere to host the bot

## Contributing

If you want to improve the code, or add some new events to score, please check out [CONTRIBUTING](./CONTRIBUTING.md).

## Credits

This Discord Bot was made by Hung Hoang for [Spellbound Games](https://spellboundgames.co.uk)' OPTCG community.

Projects leveraged by this bot:

* [One Piece Poster Generator](https://github.com/YuskaWu/one-piece-wanted-poster) by YuskaWu
* [discordjs](https://discord.js.org)
