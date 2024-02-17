import { Replacements } from "./echowo/replacements"
import { Interjections } from "./echowo/interjections"
import { Command, OptionValues } from "commander"
import { TestStrings } from "./data/test-strings.json"
import { helpInfo, echowoOptions } from "./data/help.json"


const program = new Command()
let inputString : string
let guaranteed : boolean

program.name(helpInfo.programName)
    .description(helpInfo.programDescription)
    .version(helpInfo.programVersion)
    .option('-c, --conservative', echowoOptions["-c"], 'false')
    .argument('<inputString>', 'Input String to be owo-fied.')
program.parse(process.argv)
const options = program.opts()
if(options.conservative === true) {
    guaranteed = false
}
else {
    guaranteed = true
}
inputString = program.args.join(" ")
inputString = Replacements.uwuTransform(inputString)
inputString = Interjections.insertInterjections(inputString, guaranteed)
console.log(inputString)