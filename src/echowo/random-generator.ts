export class randomGenerator {
    public static getRandomNumber (minimum : number, maximum : number) : number {
        let myRandomNumber
        minimum = Math.ceil(minimum)
        maximum = Math.floor(maximum)
        myRandomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum)
        return myRandomNumber
    }
}