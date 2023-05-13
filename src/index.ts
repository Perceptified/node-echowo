import { Replacements } from "./echowo/replacements"
import { Interjections } from "./echowo/interjections"
import { Command } from 'commander'
import { EchowoHelp } from "./echowo/help"
import { EchowoOptions } from "./echowo/options"
const program = new Command()
const helpInstance = new EchowoHelp()
const optionInstance = new EchowoOptions()
program.name(helpInstance.getProgramName())
program.description(helpInstance.getProgramDescription())
program.version(helpInstance.getProgramVersion())
optionInstance.getOptions().forEach((value : string, key : string) => {
    program.option(key, value)
})
Replacements.uwuTransform("test")
program.parse()