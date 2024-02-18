import { Replacements } from "./echowo/replacements"
import { Interjections } from "./echowo/interjections"
import { Command, OptionValues } from "commander"
import { TestStrings } from "./data/test-strings.json"
import { helpInfo, echowoOptions } from "./data/help.json"
import { fileHandler } from "./echowo/file-handling"

const program = new Command()
let inputString : string
let guaranteed : boolean
let instanceFileHandler = new fileHandler()
let configuration = instanceFileHandler.loadData("./data/config.json")
var uwuReplacements = configuration.uwuReplacements
uwuReplacements = Object.entries(uwuReplacements)
uwuReplacements = new Map<string, string>(uwuReplacements)

let uwuInterjections = configuration.uwuInterjections

program.name(helpInfo.programName)
    .description(helpInfo.programDescription + "\n" + helpInfo.configuration)
    .description(helpInfo.licenseInfo + "\n" + helpInfo.licenseLink)
    .description(helpInfo.sourceLink)
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
inputString = Replacements.uwuTransform(inputString, uwuReplacements)
inputString = Interjections.insertInterjections(inputString, uwuInterjections, guaranteed)
console.log(inputString)