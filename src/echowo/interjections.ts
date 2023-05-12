export class Interjections {
    uwuInterjections : string[] = [
        "UwU",
        "^_^",
        "~=[„_„]",
        "(^U^)",
        "OwO",
        "^w^",
        "murr...",
        "nya!",
        "nyanyan!",
        "huoooh...",
        ":3",
        "*wags tail*",
        "nyea~",
        "nyu...",
        "rawr!",
        "*pounces*"
    ]
    public static insertInterjections(inputString : string) {
        var inputCharArray = Array.from(inputString)
        inputCharArray.forEach(function(value) {
            console.log(value + "\n")
        })
    }
}