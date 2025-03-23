export const PiracyActs: string[] = [
  'kaido-drop',
  'emperor-slayer',
  'treasure-hunter',
  'admirals-orders',
  'two-year-training',
  'straw-hat',
  'conqueror-haki',
  'true-nakama',
  'king',
  'honesty-impact',
  'cat-burglar',
  'shogun'
];

export const Bounties = new Map<string, number>([
  [PiracyActs[0], 5000],
  [PiracyActs[1], 3000],
  [PiracyActs[2], 1000],
  [PiracyActs[3], 3000],
  [PiracyActs[4], 3000],
  [PiracyActs[5], 5000],
  [PiracyActs[6], 5000],
  [PiracyActs[7], 3000],
  [PiracyActs[8], 3000],
  [PiracyActs[9], 15000],
  [PiracyActs[10], 2000],
  [PiracyActs[11], 3000]
]);

export const BountiesDescription: string[] = [
  'Kill 7 Characters with Purple 10-drop Kaido',
  'Kill any of: 10 drop Big Mom, 10 drop Kaido, 9 drop Shanks, 9 drop Edward Newgate',
  'Play 4 searches',
  'Playing a Black deck, K.O. 5 characters through effect',
  'Jet Pistol a Pacifista',
  'Have 5 characters that are different Straw Hats on the board',
  'Have 5 different characters that canonically have Conquerors Haki',
  'Block for your teammate in Buddy Battle',
  'Win a tournament',
  'K.O. a Stage',
  'Win a game with OP03-040 Nami Leader secondary win con',
  'Have 5 different characters that are different Wano characters'
];
