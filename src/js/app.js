const game = new Game();
game.start();

import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game';

console.log(Game, GameSavingData, loadGame, saveGame)