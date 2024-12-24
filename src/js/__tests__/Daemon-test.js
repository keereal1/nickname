import Daemon from '../Daemon';

test('testing Daemon class', () => {
    const daemon = {
        name: 'Player',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    const result = new Daemon('Player', 'Daemon')
    expect(result).toEqual(daemon)
})

test('testing the level up whith 0 health', () => {
    expect(() => {
        const daemon = new Daemon('Player', 'Daemon')
        daemon.health = 0;
        daemon.levelUp()
    }).toThrow('Нельзя повысить левел умершего')
})

test('testing the level up', () => {
    const daemon = {
        name: 'Player',
        type: 'Daemon',
        health: 100,
        level: 1+1,
        attack: 10*1.2,
        defence: 40*1.2
    }
    const result = new Daemon('Player', 'Daemon')
    result.levelUp()
    expect(result).toEqual(daemon)
})

test('testing with 10 damage points', () => {
    const daemon = {
        name: 'Player',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    daemon.health = daemon.health - 10 * (1 - daemon.defence / 100)

    const result = new Daemon('Player', 'Daemon')
    result.damage(10)
    expect(result).toEqual(daemon)
})

test('testing the damage with negative health', () => {
    expect(() => {
        const daemon = new Daemon('Player', 'Daemon')
        daemon.health = -1;
        daemon.damage(10)
    }).toThrow('Персонаж умер')
})
