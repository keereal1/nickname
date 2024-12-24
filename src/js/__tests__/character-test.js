import Character from '../character';

test('testing character class short name', () => {
    expect(() => new Character('K')).toThrow('Некорретное имя')
})

test('testing character class long name', () => {
    expect(() => new Character('MoreThenTenLetterName')).toThrow('Некорретное имя')
})

test('testing character class type', () => {
    expect(() => new Character('Bob', 'Cook')).toThrow('Некорретный тип')
})