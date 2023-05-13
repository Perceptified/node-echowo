import { Replacements } from "./echowo/replacements"
import { Interjections } from "./echowo/interjections"
import { Command } from 'commander'

const program = new Command()

program
    .name("node-echowo")
    .description("owo-ifies input strings with random replacements and interjections")
    .version("2023-13-05")
    .option("-h --help", )


Replacements.uwuTransform("test")
Interjections.insertInterjections("Gosh dang doodle, I am jerking on my noodle!")