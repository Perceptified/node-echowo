import { Replacements } from "./echowo/replacements"
import { Interjections } from "./echowo/interjections"
import { Command } from 'commander'
import { EchowoHelp } from "./echowo/help"

const program = new Command()
const helpInstance = new EchowoHelp()

program
    .name(helpInstance.getProgramName())
    .description(helpInstance.getProgramDescription())
    .version(helpInstance.getProgramVersion())
    //.option(helpInstance.getOptions().toString())
Replacements.uwuTransform("test")
Interjections.insertInterjections("Gosh dang doodle, I am jerking on my noodle!")