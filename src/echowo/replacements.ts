import { echowoReplacements } from "../data/replacements.json"
export class Replacements {
    /**
     * @description Provides the UwU-fied replacements for the input strings
     * @param inputString input to node-echowo
     */
    public static uwuTransform(inputString : string) {
        var transformedString : string
        var uwuIsms = new Map<string, string>()
        uwuIsms.forEach((value:string, key:string) => {
            console.log(key,value)
        })
    }
}