import Swordsman from '../Swordsman';

test('testing Swordsman class', () => {
    const swordsman = {
        name: 'Player',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    const result = new Swordsman('Player', 'Swordsman')
    expect(result).toEqual(swordsman)
})

test('testing the level up whith 0 health', () => {
    expect(() => {
        const swordsman = new Swordsman('Player', 'Swordsman')
        swordsman.health = 0;
        swordsman.levelUp()
    }).toThrow('Нельзя повысить левел умершего')
})

test('testing the level up', () => {
    const swordsman = {
        name: 'Player',
        type: 'Swordsman',
        health: 100,
        level: 1+1,
        attack: 40*1.2,
        defence: 10*1.2
    }
    const result = new Swordsman('Player', 'Swordsman')
    result.levelUp()
    expect(result).toEqual(swordsman)
})

test('testing with 10 damage points', () => {
    const swordsman = {
        name: 'Player',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    swordsman.health = swordsman.health - 10 * (1 - swordsman.defence / 100)

    const result = new Swordsman('Player', 'Swordsman')
    result.damage(10)
    expect(result).toEqual(swordsman)
})