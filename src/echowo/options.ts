import { echowoOptions } from "../data/help.json"

export class EchowoOptions { 
    public getOptions() : Map <string, string> {
        var myOptions = new Map<string, string>()
        myOptions.set("-g, --guaranteed", echowoOptions["-g"])
        return myOptions
    }
}