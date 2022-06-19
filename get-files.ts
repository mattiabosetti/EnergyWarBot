import fs, {Dirent} from 'fs'

const getFiles = (dir: string, suffisso: string): string[] => {
    const files: Dirent[] = fs.readdirSync(dir, {
        withFileTypes: true
    })


    let commandFiles: string[] = []

    for (const file of files) {
        if(file.isDirectory()){
            commandFiles = [
                ...commandFiles,
                ...getFiles(dir + '/' + file.name, suffisso)
            ]
        } else if (file.name.endsWith(suffisso)) {
            commandFiles.push(dir + '/' + file.name)
        }
    }

    return commandFiles
}



export default getFiles