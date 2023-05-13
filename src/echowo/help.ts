import { programName, copyrightInfo, programVersion, helpText, programDescription } from "../data/help.json"
import { EchowoOptions } from "./options"

export class EchowoHelp {
    public outputHelp() : void {
        console.log(this.getProgramName())
        console.log(this.getCopyrightInfo())
        console.log(this.getProgramVersion())
        console.log(this.getHelpText())
        // console.log(this.getOptions())
    }
    public getProgramName() : string {
        return programName
    }
    public getCopyrightInfo() : string {
        return copyrightInfo
    }
    public getProgramVersion() : string {
        return programVersion
    }
    public getHelpText() : string {
        return helpText
    }
    public getProgramDescription() : string {
        return programDescription
    }
    public getOptions() : Map<string, string> {
        var options = new EchowoOptions()
        return options.getOptions()
    }
}