import Undead from '../Undead';

test('testing Undead class', () => {
    const undead = {
        name: 'Player',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    const result = new Undead('Player', 'Undead')
    expect(result).toEqual(undead)
})

test('testing the level up whith 0 health', () => {
    expect(() => {
        const undead = new Undead('Player', 'Undead')
        undead.health = 0;
        undead.levelUp()
    }).toThrow('Нельзя повысить левел умершего')
})

test('testing the level up', () => {
    const undead = {
        name: 'Player',
        type: 'Undead',
        health: 100,
        level: 1+1,
        attack: 25*1.2,
        defence: 25*1.2
    }
    const result = new Undead('Player', 'Undead')
    result.levelUp()
    expect(result).toEqual(undead)
})

test('testing with 10 damage points', () => {
    const undead = {
        name: 'Player',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    undead.health = undead.health - 10 * (1 - undead.defence / 100)

    const result = new Undead('Player', 'Undead')
    result.damage(10)
    expect(result).toEqual(undead)
})