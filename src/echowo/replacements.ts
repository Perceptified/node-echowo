export class Replacements {
    /**
     * @description Provides the UwU-fied replacements for the input strings
     * @param inputString input to node-echowo
     */
    public static uwuTransform(inputString : string, uwuReplacements : Map<string, string>) {
        var transformedString : string
        uwuReplacements.forEach((value: string, key : string) => {
            inputString = inputString.replace(key, value)
        })

        return inputString
    }
}