import Validator from '../nickname-validate';

test('testing non-matching name with first and lastnumber', () => {
    const newValidate = new Validator;
    const result = newValidate.validateUsername('2alex2')
    expect(result).toBe(false)
})

test('testing non-matching name with cyrillic', () => {
    const newValidate = new Validator;
    const result = newValidate.validateUsername('алекс')
    expect(result).toBe(false)
})

test('testing non-matching name with too many numbers ', () => {
    const newValidate = new Validator;
    const result = newValidate.validateUsername('alex1234')
    expect(result).toBe(false)
})

test('testing matching name', () => {
    const newValidate = new Validator;
    const result = newValidate.validateUsername('alex-al_ex2')
    expect(result).toBe(true)
})