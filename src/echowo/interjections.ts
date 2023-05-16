import { randomGenerator } from "./random-generator"
import { uwuInterjections } from "../data/interjections.json"
export class Interjections {
    public static insertInterjections(inputString : string) {
        let inputCharArray = Array.from(inputString)
        let spaceIndices = []
        for(let counter = 0; counter < inputString.length; counter = counter + 1) {
            if(inputString[counter] === " ") {
                spaceIndices.push(counter)
            }
        }
        for(let counter = 0; counter < spaceIndices.length; counter = counter + 1) {
            let number = randomGenerator.getRandomNumber(0, uwuInterjections.length)
            inputCharArray[spaceIndices[counter]] = " " + uwuInterjections[number] + " "
        }
        inputString = inputCharArray.join("")
        // console.log(spaceIndices.toString())
        // console.log(spaceIndices.toString())
        return inputString
    }
    
}