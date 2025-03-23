# Contributing to MarineHQ

Thank you for considering contributing to MarineHQ! We welcome contributions of all kinds, especially code changes and new event tracking features.

## Adding New Acts of Piracy

To add a new act of piracy to be tracked, follow these steps:

1. **Update the `PiracyActs` File**:
   Open the `/src/commands/piracy-acts.ts` file and add your new act to the `PiracyActs` array. Use the following format and place it in the appropriate category section:

   ```typescript
   {
     name: '<unique-act-name>',
     bounty: <bounty-value>,
     description: '<description-of-the-act>',
     category: '<category>'
   }
   ```

   For example, if you want to add an act called "sky-pirate" with a bounty of 4000, the description "Win a game using only flying characters," and the category "Blue," you would add:

   ```typescript
   {
     name: 'sky-pirate',
     bounty: 4000,
     description: 'Win a game using only flying characters',
     category: 'Blue'
   }
   ```

   As a rule of thumb: an easily achievable act should be worth 1000 or 2000, and mid-difficulty should be around 5000-6000 and something very silly or mega complicated can even go up to 10000.

2. **Submit a Pull Request**:
   Once you've added the act, submit a pull request. If the value and description are deemed worthy, it will be included in the project.

## Local Development Setup

To contribute code, you need a working [Node.js](https://nodejs.org/en) and [Docker](https://www.docker.com/get-started) setup. Follow these steps to set up the project locally:

1. **Clone the Repository**:
   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/marinehq/marinehq.git
   cd marinehq
   ```

2. **Create a Local `config.json` following the explanation in the [README](./README.md).**

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Run the Project**:

   ```bash
   npm start
   ```

⚠️ work in progress ⚠️
