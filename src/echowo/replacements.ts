// import { echowoReplacements } from "../data/replacements.json"
// import { fileHandler } from "./file-handling"
export class Replacements {
    /**
     * @description Provides the UwU-fied replacements for the input strings
     * @param inputString input to node-echowo
     */
    public static uwuTransform(inputString : string, uwuReplacements : Map<string, string>) {
        // let myFileHandler = new fileHandler
        var transformedString : string
        // var uwuIsms = myFileHandler.loadData("./data/replacements.json").echowoReplacements
        // uwuIsms = Object.entries(uwuIsms)
        // uwuIsms = new Map<string, string>(uwuIsms)

        for(let content of inputString) {
            uwuReplacements.forEach((value : string, key : string) => {
                inputString = inputString.replace(key, value)
            })
        }
        return inputString
    }
}