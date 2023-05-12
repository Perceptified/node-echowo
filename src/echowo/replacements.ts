export class Replacements {
    /**
     * @description Provides the UwU-fied replacements for the input strings
     * @param inputString input to node-echowo
     */
    public static UwuTransform(inputString : string) {
        var transformedString : string
        var uwuIsms = new Map<string, string>()
        uwuIsms.set("ll", "ww")
        uwuIsms.set("orr", "oww")
        uwuIsms.set("or", "ow")
        uwuIsms.set("er", "ew")
        uwuIsms.set("na", "nya")
        uwuIsms.set("nan", "nyan")
        uwuIsms.set("ma", "mya")
        uwuIsms.set("mam", "myam")
        uwuIsms.set("pl", "pw")
        uwuIsms.set("pr", "pw")
        uwuIsms.forEach((value:string, key:string) => {
            console.log(key,value)
        })
    }
}