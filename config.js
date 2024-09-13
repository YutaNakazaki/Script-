import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281216085238', 'yuta21', true],
  ['6285859543327']
] // nomor owner

global.mods = ['6281216085238'] 
global.prems = ['6281216085238', '6285859543327']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.betabotz.eu.org': 'https://api.betabotz.eu.org/api/asupan/douyin?apikey=mZFLxRh8'
}

// daftar di sini https://api.betabotz.eu.org
global.lann = 'https://api.betabotz.eu.org/api/asupan/douyin?apikey=mZFLxRh8'

// setting limit user
global.limit = 69

// Sticker WM
global.packname = 'Yuta21' 
global.author = '@yuuta21' 
//--info NS [ NANS ]
global.NSnama = 'Yuta Botz'
global.NSig = 'https://www.instagram.com/yutanakazaki21' 
global.NSgc = 'https://whatsapp.com/channel/0029VaS5lqHDp2QFrb4pqF2q'
global.NSthumb = 'https://i.ibb.co.com/c2GJCLb/Proyek-Baru-3-1552683.png'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.eror = 'Error, Kesalahan tidak terduga'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // max warning

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
