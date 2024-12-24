import Bowman from '../Bowman';

test('testing Bowman class', () => {
    const bowman = {
        name: 'Player',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    const result = new Bowman('Player', 'Bowman')
    expect(result).toEqual(bowman)
})

test('testing the level up whith 0 health', () => {
    expect(() => {
        const bowman = new Bowman('Player', 'Bowman')
        bowman.health = 0;
        bowman.levelUp()
    }).toThrow('Нельзя повысить левел умершего')
})

test('testing the level up', () => {
    const bowman = {
        name: 'Player',
        type: 'Bowman',
        health: 100,
        level: 1+1,
        attack: 25*1.2,
        defence: 25*1.2
    }
    const result = new Bowman('Player', 'Bowman')
    result.levelUp()
    expect(result).toEqual(bowman)
})

test('testing with 10 damage points', () => {
    const bowman = {
        name: 'Player',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    bowman.health = bowman.health - 10 * (1 - bowman.defence / 100)

    const result = new Bowman('Player', 'Bowman')
    result.damage(10)
    expect(result).toEqual(bowman)
})