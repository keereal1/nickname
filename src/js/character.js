export default class Character {
    constructor(name, type) {
        this.name = name
        
        if (name.length < 2 || name.length > 10) {
            throw new Error('Некорретное имя')
        }

        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (types.includes(type)) {
            this.type = type
        } else {
            throw new Error('Некорретный тип')
        }

        this.health = 100,
        this.level = 1,
        this.attack = 25,
        this.defence = 25
    }

    levelUp() {
        if(this.health === 0) {
            throw new Error('Нельзя повысить левел умершего')
        } else {
        this.level++
        this.attack = this.attack * 1.2
        this.defence = this.defence * 1.2
        this.health = 100 
        }
    }

    damage(points) {
        if(this.health >= 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw new Error('Персонаж умер')
        }
    }
}
