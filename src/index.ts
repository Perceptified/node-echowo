import { Replacements } from "./echowo/replacements"
import { Interjections } from "./echowo/interjections"
import { Command, OptionValues } from 'commander'
import { EchowoHelp } from "./echowo/help"
import { TestStrings } from "./data/test-strings.json"
import { echowoOptions } from "./data/help.json"

const program = new Command()
const helpInstance = new EchowoHelp()
let inputString : string
let guaranteed : boolean
program.name(helpInstance.getProgramName())
    .description(helpInstance.getProgramDescription())
    .version(helpInstance.getProgramVersion())
    .option("-c, --conservative", echowoOptions["-c"], "false")
    .argument("<inputString>", "Input String to be owo-fied.")
    .parse()
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