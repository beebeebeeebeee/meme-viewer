const fs = require('fs')
const {exec} = require('child_process');
const path = require('path');

const DB_PATH = DB_PATH

function readEnv() {
    const lines = fs.readFileSync('.env')
        .toString()
        .split('\n')
        .filter(e => e !== "")
    const envs = Object.fromEntries(lines.map(e => {
        const idx = e.indexOf("=")
        return [e.substring(0, idx), e.substring(idx + 1)]
    }))
    process.env = {
        ...process.env,
        ...envs
    }
}

function open(file) {
    exec(`open "${file}"`)
}

const DB = {
    read: () => {
        if (!fs.existsSync(DB_PATH)) {
            return DB.write([])
        }

        return JSON.parse(fs.readFileSync(DB_PATH))
    },
    write: (obj) => {
        fs.writeFileSync(DB_PATH, JSON.stringify(obj))
        return obj
    }
}


async function main() {
    readEnv()
    const {FOLDER_PATH: folderPath} = process.env
    const seenList = DB.read()
    const imageList = fs.readdirSync(folderPath).filter(e => !seenList.includes(e))

    if (imageList.length === 0) {
        console.log('No image left, please refill some images.')
        return
    }

    const selectedImage = imageList[Math.floor(Math.random() * imageList.length)]
    DB.write([...seenList, selectedImage])
    open(path.join(folderPath, selectedImage))
}

void main()
