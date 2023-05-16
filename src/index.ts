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
let testString = "Lola met Mark at the mall. She noticed his bulge, cracking her neck. He was really tall. They walked and talked, exploring every store. Lola's eyes sparkled with delight as they found a plush, purple pillow. Mark couldn't help but smile, knowing he had found the perfect gift."
// Replacements.uwuTransform("Lola met Mark at the mall. She noticed his bulge, cracking her neck. He was really tall. They walked and talked, exploring every store. Lola's eyes sparkled with delight as they found a plush, purple pillow. Mark couldn't help but smile, knowing he had found the perfect gift.")
console.log(Interjections.insertInterjections(testString, true))
program.parse()