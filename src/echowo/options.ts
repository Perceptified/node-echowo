import { echowoOptions } from "../data/help.json"

export class EchowoOptions { 
    public getOptions() : Map <string, string> {
        var myOptions = new Map<string, string>()
        myOptions.set("-g, --guaranteed", echowoOptions["-g"])
        // myOptions.set("-h, --help", echowoOptions["-h"])
        myOptions.set("-v, --version", echowoOptions["-v"])
        return myOptions
    }
}