import Zombie from '../Zombie';

test('testing Zombie class', () => {
    const zombie = {
        name: 'Player',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    const result = new Zombie('Player', 'Zombie')
    expect(result).toEqual(zombie)
})

test('testing the level up whith 0 health', () => {
    expect(() => {
        const zombie = new Zombie('Player', 'Zombie')
        zombie.health = 0;
        zombie.levelUp()
    }).toThrow('Нельзя повысить левел умершего')
})

test('testing the level up', () => {
    const zombie = {
        name: 'Player',
        type: 'Zombie',
        health: 100,
        level: 1+1,
        attack: 40*1.2,
        defence: 10*1.2
    }
    const result = new Zombie('Player', 'Zombie')
    result.levelUp()
    expect(result).toEqual(zombie)
})

test('testing with 10 damage points', () => {
    const zombie = {
        name: 'Player',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    zombie.health = zombie.health - 10 * (1 - zombie.defence / 100)

    const result = new Zombie('Player', 'Zombie')
    result.damage(10)
    expect(result).toEqual(zombie)
})
