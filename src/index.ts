import { Replacements } from "./echowo/replacements"
import { Interjections } from "./echowo/interjections"
import { Command } from 'commander'
import { EchowoHelp } from "./echowo/help"
// import { EchowoOptions } from "./echowo/options"
import { TestStrings } from "./data/test-strings.json"
import { echowoOptions } from "./data/help.json"
const program = new Command()
const helpInstance = new EchowoHelp()
let inputString : string
program.name(helpInstance.getProgramName())
    .description(helpInstance.getProgramDescription())
    .version(helpInstance.getProgramVersion())
    .option("-c", echowoOptions["-c"], "false")
    .argument("<inputString>", "String for OwO-fication.")
    
    // Replacements.uwuTransform("Lola met Mark at the mall. She noticed his bulge, cracking her neck. He was really tall. They walked and talked, exploring every store. Lola's eyes sparkled with delight as they found a plush, purple pillow. Mark couldn't help but smile, knowing he had found the perfect gift.")
    // console.log(Interjections.insertInterjections(TestStrings.Normal, true))
    // inputString = program.parse()
const options = program.opts()