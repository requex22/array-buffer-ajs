import MathCharacter from './MathCharacter';

export default class Daemon extends MathCharacter {
  constructor(name, attack = 25, stoned = false, range) {
    super(name, attack, stoned, range);
  }
}