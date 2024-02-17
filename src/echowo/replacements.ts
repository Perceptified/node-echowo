import { echowoReplacements } from "../data/replacements.json"
import { fileHandler } from "./file-handling"
export class Replacements {
    /**
     * @description Provides the UwU-fied replacements for the input strings
     * @param inputString input to node-echowo
     */
    public static uwuTransform(inputString : string) {
        let myFileHandler = new fileHandler
        var transformedString : string
        var uwuIsms = new Map<string, string>()
        uwuIsms = myFileHandler.loadData("replacements.json").echowoReplacements
        
        uwuIsms.set("er", echowoReplacements.er)
        uwuIsms.set("ll", echowoReplacements.ll)
        uwuIsms.set("ma", echowoReplacements.ma)
        uwuIsms.set("mam", echowoReplacements.mam)
        uwuIsms.set("na", echowoReplacements.na)
        uwuIsms.set("nan", echowoReplacements.nan)
        uwuIsms.set("or", echowoReplacements.or)
        uwuIsms.set("orr", echowoReplacements.orr)
        uwuIsms.set("pl", echowoReplacements.pl)
        uwuIsms.set("pr", echowoReplacements.pr)
        uwuIsms.set("ulge", echowoReplacements.ulge)
        // uwuIsms.set("eck", echowoReplacements.eck)

        for(let content of inputString) {
            uwuIsms.forEach((value, key) => {
                // console.log("found: " + key + " Replacing With: " + value)
                inputString = inputString.replace(key, value)
            })
        }
        return inputString
        // console.log(inputString)
    }
}