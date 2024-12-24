import Magician from '../Magician';

test('testing Magician class', () => {
    const magician = {
        name: 'Player',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    const result = new Magician('Player', 'Magician')
    expect(result).toEqual(magician)
})

test('testing the level up whith 0 health', () => {
    expect(() => {
        const magician = new Magician('Player', 'Magician')
        magician.health = 0;
        magician.levelUp()
    }).toThrow('Нельзя повысить левел умершего')
})

test('testing the level up', () => {
    const magician = {
        name: 'Player',
        type: 'Magician',
        health: 100,
        level: 1+1,
        attack: 10*1.2,
        defence: 40*1.2
    }
    const result = new Magician('Player', 'Magician')
    result.levelUp()
    expect(result).toEqual(magician)
})

test('testing with 10 damage points', () => {
    const magician = {
        name: 'Player',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    magician.health = magician.health - 10 * (1 - magician.defence / 100)

    const result = new Magician('Player', 'Magician')
    result.damage(10)
    expect(result).toEqual(magician)
})