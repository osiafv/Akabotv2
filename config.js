const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
  zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
  'https://zenzapi.xyz': 'Your Key',
}
global.rapidkey = '463dbc2754msh0edcce776730996p15e089jsnb8a3a15ca92d'
//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

// Other
global.owner = ['62895704151428']
global.premium = ['6281248249833']
global.ownername = 'Riz'
global.botname = '© Aka'
global.packname = '© Aka'
global.linkz = "https://chat.whatsapp.com/H59XJsXCOt0DAGM3oaCadC" //your theme url which will be displayed on whatsapp
global.gc = 'https://chat.whatsapp.com/H59XJsXCOt0DAGM3oaCadC'
global.linkyt = 'https://youtube.com/channel/UC9Si3U0o9dGS9MDfJR5iF6Q'
global.linkgc = 'https://chat.whatsapp.com/DwP6uHYBWBc6TBSsNJrzwN'
global.limitawal = '100'
global.author = '@Riz'
global.sessionName = 'sessionya'
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⌕'
global.mess = {
  success: 'Berhasil',
  admin: 'Fitur Khusus Admin!',
  botAdmin: 'Bot Harus Jadi Admin!',
  owner: 'Fitur Khusus Owner',
  group: 'Fitur Hanya Untuk Group!',
  private: 'Fitur Hanya Untuk Private Chat!',
  bot: 'Fitur Khusus Pengguna Nomor Bot',
  wait: 'Tunggu sebentar, sedang di proses',
  endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
  register: 'Ups Dia Belum Daftar',
}
global.limitawal = {
  premium: "Infinity",
  free: 50,
  monayawal: 100000
}
global.uangawal = {
  premium: "Infinity",
  free: 100000,
  monayawal: 100000
}
global.rpg = {
  darahawal: 100,
  besiawal: 15,
  goldawal: 10,
  emeraldawal: 5,
  umpanawal: 5,
  potionawal: 1
}

global.premiums = "Infinity",
  global.free = 100

global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi? &imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
})
