import Character from './character';

export default class Magician extends Character {
    constructor(name, type, level) {
        super(name, type, level)
        this.attack = 10,
        this.defence = 40
    }
}