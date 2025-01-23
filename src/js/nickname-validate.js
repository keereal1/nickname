export default class Validator {
    validateUsername(userName) {
        const re = /^([a-zA-Z-_]+[0-9]{0,3})$/
        return re.test(userName)
    }
}