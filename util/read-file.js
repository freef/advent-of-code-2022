import fs from 'fs'
import path from 'path'

const readFile = (file) => {
    const input = path.normalize(file)
    return fs.readFileSync(input, 'utf8')
}

export default readFile 
