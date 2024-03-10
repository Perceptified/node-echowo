import * as path from "path"
import * as fs from "fs"

export class fileHandler {
    public loadData(fileName: string) {
        const filePath = path.join(__dirname, "..", fileName)
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
}
