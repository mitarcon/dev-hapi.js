const { mkdirSync, writeFile, existsSync } = require('fs')
const { promisify } = require('util')
const { join } = require('path')

const write = promisify(writeFile)

const PUBLIC_UPLOADS = join(__dirname, '..', '..', 'public', 'uploads')

async function uploadFile ({ buffer, name }) {
  try {
    // Validar si existe el archivo
    const existPath = await existsSync(PUBLIC_UPLOADS)
    if (!existPath) {
      mkdirSync(PUBLIC_UPLOADS, { recursive: true })
    }

    // Guardar archivo
    let fullName = join(PUBLIC_UPLOADS, name)
    await write(fullName, buffer)

    return fullName
  } catch (err) {
    console.log(err)
    return null
  }
}

module.exports = {
  uploadFile
}
