import { randomGenerator } from "./random-generator"
// import { uwuInterjections } from "../data/interjections.json"

import * as path from "path"
import * as fs from "fs"

export class Interjections {
    /**
     * @description Takes the input string and a number of interjections to insert (in guaranteed mode, one at least)
     * @param inputString : string string to be outfitted with interjections
     * @returns the inputString with interjections
     */

    public static insertInterjections(inputString : string, guaranteed : boolean) {
        function loadData(fileName: string) {
            const filePath = path.join(process.execPath, "..", fileName)
            // console.log(JSON.parse(fs.readFileSync(filePath, 'utf-8')).uwuInterjections.toString())
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        }
        
        let uwuInterjections = loadData("interjections.json").uwuInterjections;
        console.log(uwuInterjections.toString())
        let inputCharArray = Array.from(inputString)
        let spaceIndices = []
        let interjectionIndices = []
        let numberOfInterjections : number
        for(let counter = 0; counter < inputString.length; counter = counter + 1) {
            if(inputString[counter] === " ") {
                spaceIndices.push(counter)
            }
        }
        if(guaranteed) {
            numberOfInterjections = randomGenerator.getRandomNumber(1, spaceIndices.length)
        }
        else {
            numberOfInterjections = randomGenerator.getRandomNumber(0, spaceIndices.length)
        }
        for(let counter = 0; counter < numberOfInterjections; counter = counter + 1) {
            let number = randomGenerator.getRandomNumber(0, spaceIndices.length)
            interjectionIndices.push(number)
        }
        for(let counter = 0; counter < interjectionIndices.length; counter = counter + 1) {
            let number = randomGenerator.getRandomNumber(0, uwuInterjections.length)
            inputCharArray[spaceIndices[interjectionIndices[counter]]] = " " + uwuInterjections[number] + " "
        }
        inputString = inputCharArray.join("")
        return inputString
    }
}