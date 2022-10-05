/**
   * Original aka-Morou Dika Ardnt.
*/
process.on('uncaughtException', console.error) //Safe Log Error
require('./config')
const { default: akabotConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
let cp = require('child_process')
let { promisify } = require('util')
const exec = promisify(cp.exec).bind(cp)
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const { color, bgcolor } = require("./lib/color")

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
require("http").createServer((_, res) => res.end("Sedang Berjalan!")).listen(8080)

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
/*
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')


global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
*/
// save database every 30seconds
setInterval(() => {
  fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
async function startaka() {
  let { version, isLatest } = await fetchLatestBaileysVersion()
  const aka = akabotConnect({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['RizBot', 'Mac', '3.0.0'],
    auth: state,
    version
  })

  store.bind(aka.ev)
  console.log(bgcolor(color('Starting', 'green', 'white')))
  await sleep(1000)
  console.log(color(' ====================================================', 'red'))
  console.log(color("│ > Name Author : Riz"))
  console.log(color("│ > Version : V4 "))
  console.log(color("│ > Type : Multi Device"))
  console.log(color("│ > Language : JavaScript"))
  console.log(color(' ====================================================', 'red'))
  console.log(color(' ====================================================', 'red'))
  console.log(color('[ By AKA ]', 'cyan'), color('Bot Sudah Online!'))

  // Anti Call
  aka.ev.on('call', async (fatihh) => {
    let botNumber = await aka.decodeJid(aka.user.id)
    let ciko = db.settings[botNumber].anticall
    if (!ciko) return
    console.log(fatihh)
    for (let tihh of fatihh) {
      if (tihh.isGroup == false) {
        if (tihh.status == "offer") {
          let pa7rick = await aka.sendTextWithMentions(tihh.from, `*${aka.user.name}* tidak bisa menerima panggilan ${tihh.isVideo ? `video` : `suara`}. Maaf @${tihh.from.split('@')[0]} kamu akan diblockir. Jika tidak sengaja silahkan hubungi Owner untuk dibuka !`)
          aka.sendContact(tihh.from, global.owner, pa7rick)
          await sleep(8000)
          await aka.updateBlockStatus(tihh.from, "block")
        }
      }
    }
  })

  aka.ev.on('messages.upsert', async chatUpdate => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
      mek = chatUpdate.messages[0]
      if (!mek.message) return
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
      if (mek.key && mek.key.remoteJid === 'status@broadcast') return
      if (!aka.public && !mek.key.fromMe && !global.owner && chatUpdate.type === 'notify') return
      if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
      if (mek.key.id.startsWith('FatihArridho_')) return
      m = smsg(aka, mek, store)
      require("./aka.js")(aka, m, chatUpdate, store)
    } catch (err) {
      console.log(err)
    }
  })

  // Group Update
  aka.ev.on('groups.update', async pea => {
    console.log(pea)
    // Get Profile Picture Group
    try {
      ppgc = await aka.profilePictureUrl(pea[0].id, 'image')
    } catch {
      ppgc = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
    }
    let wm_fatih = { url: ppgc }
    if (pea[0].announce == true) {
      aka.sendMessage(pea[0].id, { image: { url: ppgc }, caption: `「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !` })
    } else if (pea[0].announce == false) {
      aka.sendMessage(pea[0].id, { image: { url: ppgc }, caption: `「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !` })
    } else if (pea[0].restrict == true) {
      aka.sendMessage(pea[0].id, { image: { url: ppgc }, caption: `「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !` })
    } else if (pea[0].restrict == false) {
      aka.sendMessage(pea[0].id, { image: { url: ppgc }, caption: `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !` })
    } else {
      aka.sendMessage(pea[0].id, { image: { url: ppgc }, caption: `「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*` })
    }
  })
  aka.ev.on('group-participants.update', async (anu) => {
    console.log(anu)
    try {
      let metadata = await aka.groupMetadata(anu.id)
      let participants = anu.participants
      for (let num of participants) {
        // Get Profile Picture User
        try {
          ppuser = await aka.profilePictureUrl(num, 'image')
        } catch {
          ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
        }

        // Get Profile Picture Group
        try {
          ppgroup = await aka.profilePictureUrl(anu.id, 'image')
        } catch {
          ppgroup = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
        }

        if (anu.action == 'add') {

          var button = [{ buttonId: `.introo`, buttonText: { displayText: `Intro Dulu` }, type: 1 }, { buttonId: `.owner`, buttonText: { displayText: `Owner` }, type: 1 }]
          aka.sendMessage(anu.id, { caption: `Hai @${num.split("@")[0]} Selamat Datang Di ${metadata.subject}\nKenapa kok Bisa masuk sini nyasar kah?`, location: { jpegThumbnail: await aka.reSize(ppuser, 200, 200) }, buttons: button, footer: `Intro Dulu Gan\n\n${botname}`, mentions: [num] })
          //aka.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Hai Kontol @${num.split("@")[0]} Selamat Datang Di ${metadata.subject}\nKenapa kok Bisa masuk sini nyasar kah?`})
        } else if (anu.action == 'remove') {
          var button = [{ buttonId: `.byee`, buttonText: { displayText: `Selamat Tinggal` }, type: 1 }, { buttonId: `.owner`, buttonText: { displayText: `Owner` }, type: 1 }]
          aka.sendMessage(anu.id, { caption: `Yahh Si @${num.split("@")[0]} Telah Keluar ${metadata.subject}`, location: { jpegThumbnail: await aka.reSize(ppuser, 200, 200) }, buttons: button, footer: `Ucapkan Selamat Tinggal\n\n${botname}`, mentions: [num] })
          //aka.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Yahh Si @${num.split("@")[0]} Telah Keluar ${metadata.subject}` })
        } else if (anu.action == 'promote') {
          var button = [{ buttonId: `.promotee`, buttonText: { displayText: `Selamat Di Promote` }, type: 1 }, { buttonId: `.owner`, buttonText: { displayText: `Owner` }, type: 1 }]
          aka.sendMessage(anu.id, { caption: `Selamat @${num.split("@")[0]} Telah Di Promote Di ${metadata.subject}`, location: { jpegThumbnail: await aka.reSize(ppuser, 200, 200) }, buttons: button, footer: `Jangan Jadi Penghianat Grub Bro\n\n${botname}`, mentions: [num] })
          //aka.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Ciee yang Di Promote @${num.split('@')[0]} Selamatnya\nPromote Di ${metadata.subject}` })
        } else if (anu.action == 'demote') {
          var button = [{ buttonId: `.demotee`, buttonText: { displayText: `Yah DI demote` }, type: 1 }, { buttonId: `.owner`, buttonText: { displayText: `Owner` }, type: 1 }]
          aka.sendMessage(anu.id, { caption: `Mampus Kapok Sih DIkasih Gelar Gk Di gunain Sebaik Mengungkin @${num.split("@")[0]} Telah Di Dempte Di ${metadata.subject}`, location: { jpegThumbnail: await aka.reSize(ppuser, 200, 200) }, buttons: button, footer: `Yahaha Mampus\n\n${botname}`, mentions: [num] })
          //aka.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Mampus Di Demote @${num.split('@')[0]} Sok Ngatur Sih\nDemote Di${metadata.subject}` })
        }
      }
    } catch (err) {
      console.log(err)
    }
  })

  // Setting
  aka.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {}
      return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
  }

  aka.ev.on('contacts.update', update => {
    for (let contact of update) {
      let id = aka.decodeJid(contact.id)
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
    }
  })

  aka.getName = (jid, withoutContact = false) => {
    id = aka.decodeJid(jid)
    withoutContact = aka.withoutContact || withoutContact
    let v
    if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
      v = store.contacts[id] || {}
      if (!(v.name || v.subject)) v = aka.groupMetadata(id) || {}
      resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
    })
    else v = id === '0@s.whatsapp.net' ? {
      id,
      name: 'WhatsApp'
    } : id === aka.decodeJid(aka.user.id) ?
      aka.user :
      (store.contacts[id] || {})
    return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
  }

  aka.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    let list = []
    for (let i of kon) {
      list.push({
        displayName: await aka.getName(i + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await aka.getName(i + '@s.whatsapp.net')}\nFN:${await aka.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:okeae2410@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:Gak Afa\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
      })
    }
    aka.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
  }

  aka.setStatus = (status) => {
    aka.query({
      tag: 'iq',
      attrs: {
        to: '@s.whatsapp.net',
        type: 'set',
        xmlns: 'status',
      },
      content: [{
        tag: 'status',
        attrs: {},
        content: Buffer.from(status, 'utf-8')
      }]
    })
    return status
  }

  aka.public = false

  aka.serializeM = (m) => smsg(aka, m, store)

  aka.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode
      if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); aka.logout(); }
      else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startaka(); }
      else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startaka(); }
      else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); aka.logout(); }
      else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); aka.logout(); }
      else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startaka(); }
      else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startaka(); }
      else if (reason === DisconnectReason.Multidevicemismatch) { console.log("Multi device mismatch, please scan again"); aka.logout(); }
      else aka.end(`Unknown DisconnectReason: ${reason}|${connection}`)
    }
    console.log('Connected...', update)
  })

  aka.ev.on('creds.update', saveState)

  /** Resize Image
    *
    * @param {Buffer} Buffer (Only Image)
    * @param {Numeric} Width
    * @param {Numeric} Height
    */
  aka.reSize = async (image, width, height) => {
    let jimp = require('jimp')
    var oyy = await jimp.read(image);
    var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
  }
  // Add Other

  /**
*
* @param {*} jid
* @param {*} url
* @param {*} caption
* @param {*} quoted
* @param {*} options
*/
  aka.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
    let mime = '';
    let res = await axios.head(url)
    mime = res.headers['content-type']
    if (mime.split("/")[1] === "gif") {
      return aka.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
    }
    let type = mime.split("/")[0] + "Message"
    if (mime === "application/pdf") {
      return aka.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "image") {
      return aka.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "video") {
      return aka.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "audio") {
      return aka.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
    }
  }

  /** Send List Messaage
  *
  *@param {*} jid
  *@param {*} text
  *@param {*} footer
  *@param {*} title
  *@param {*} butText
  *@param [*] sections
  *@param {*} quoted
  */
  aka.sendListMsg = (jid, text = '', footer = '', title = '', butText = '', sects = [], quoted) => {
    let sections = sects
    var listMes = {
      text: text,
      footer: footer,
      title: title,
      buttonText: butText,
      sections
    }
    aka.sendMessage(jid, listMes, { quoted: quoted })
  }

  /** Send Button 5 Location
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} location
 * @param [*] button
 * @param {*} options
 */
  aka.send5ButLoc = async (jid, text = '', footer = '', lok, but = [], options = {}) => {
    let bb = await aka.reSize(lok, 300, 300)
    aka.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
  }

  /** Send Button 5 Message
   * 
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} button
   * @returns 
   */
  aka.send5ButMsg = (jid, text = '', footer = '', but = []) => {
    let templateButtons = but
    var templateMessage = {
      text: text,
      footer: footer,
      templateButtons: templateButtons
    }
    aka.sendMessage(jid, templateMessage)
  }

  /** Send Button 5 Image
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} image
       * @param [*] button
       * @param {*} options
       * @returns
       */
  aka.send5ButImg = async (jid, text = '', footer = '', img, but = [], buff, options = {}) => {
    aka.sendMessage(jid, { image: img, caption: text, footer: footer, templateButtons: but, ...options })
  }

  /** Send Button 5 Video
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} Video
       * @param [*] button
       * @param {*} options
       * @returns
       */
  aka.send5ButVid = async (jid, text = '', footer = '', vid, but = [], buff, options = {}) => {
    let lol = await aka.reSize(buf, 300, 300)
    aka.sendMessage(jid, { video: vid, jpegThumbnail: lol, caption: text, footer: footer, templateButtons: but, ...options })
  }

  /** Send Button 5 Gif
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} Gif
       * @param [*] button
       * @param {*} options
       * @returns
       */
  aka.send5ButGif = async (jid, text = '', footer = '', gif, but = [], buff, options = {}) => {
    let ahh = await aka.reSize(buf, 300, 300)
    let a = [1, 2]
    let b = a[Math.floor(Math.random() * a.length)]
    aka.sendMessage(jid, { video: gif, gifPlayback: true, gifAttribution: b, caption: text, footer: footer, jpegThumbnail: ahh, templateButtons: but, ...options })
  }

  /**
       * 
       * @param {*} jid 
       * @param {*} buttons 
       * @param {*} caption 
       * @param {*} footer 
       * @param {*} quoted 
       * @param {*} options 
       */
  aka.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
    let buttonMessage = {
      text,
      footer,
      buttons,
      headerType: 2,
      ...options
    }
    aka.sendMessage(jid, buttonMessage, { quoted, ...options })
  }

  /**
   * 
   * @param {*} jid 
   * @param {*} text 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
  aka.sendText = (jid, text, quoted = '', options) => aka.sendMessage(jid, { text: text, ...options }, { quoted })

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} caption 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
  aka.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await aka.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
  }

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} caption 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
  aka.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await aka.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
  }

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} quoted 
   * @param {*} mime 
   * @param {*} options 
   * @returns 
   */
  aka.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await aka.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
  }

  /**
   * 
   * @param {*} jid 
   * @param {*} text 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
  aka.sendTextWithMentions = async (jid, text, quoted, options = {}) => aka.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
  aka.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options)
    } else {
      buffer = await imageToWebp(buff)
    }

    await aka.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
  }

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
  aka.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options)
    } else {
      buffer = await videoToWebp(buff)
    }

    await aka.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
  }

  /**
   * 
   * @param {*} message 
   * @param {*} filename 
   * @param {*} attachExtension 
   * @returns 
   */
  aka.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
  }

  aka.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(message, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }

    return buffer
  }

  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} filename
   * @param {*} caption
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
  aka.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
    let types = await aka.getFile(path, true)
    let { mime, ext, res, data, filename } = types
    if (res && res.status !== 200 || file.length <= 65536) {
      try { throw { json: JSON.parse(file.toString()) } }
      catch (e) { if (e.json) throw e.json }
    }
    let type = '', mimetype = mime, pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require('./lib/exif')
      let media = { mimetype: mime, data }
      pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
      await fs.promises.unlink(filename)
      type = 'sticker'
      mimetype = 'image/webp'
    }
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await aka.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
    return fs.promises.unlink(pathFile)
  }

  /**
   * 
   * @param {*} jid 
   * @param {*} message 
   * @param {*} forceForward 
   * @param {*} options 
   * @returns 
   */
  aka.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    let vtype
    if (options.readViewOnce) {
      message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
      vtype = Object.keys(message.message.viewOnceMessage.message)[0]
      delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
      delete message.message.viewOnceMessage.message[vtype].viewOnce
      message.message = {
        ...message.message.viewOnceMessage.message
      }
    }

    let mtype = Object.keys(message.message)[0]
    let content = await generateForwardMessageContent(message, forceForward)
    let ctype = Object.keys(content)[0]
    let context = {}
    if (mtype != "conversation") context = message.message[mtype].contextInfo
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo
    }
    const waMessage = await generateWAMessageFromContent(jid, content, options ? {
      ...content[ctype],
      ...options,
      ...(options.contextInfo ? {
        contextInfo: {
          ...content[ctype].contextInfo,
          ...options.contextInfo
        }
      } : {})
    } : {})
    await aka.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
    return waMessage
  }

  aka.cMod = (jid, copy, text = '', sender = aka.user.id, options = {}) => {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0]
    let isEphemeral = mtype === 'ephemeralMessage'
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
    let content = msg[mtype]
    if (typeof content === 'string') msg[mtype] = text || content
    else if (content.caption) content.caption = text || content.caption
    else if (content.text) content.text = text || content.text
    if (typeof content !== 'string') msg[mtype] = {
      ...content,
      ...options
    }
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
    if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
    else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
    copy.key.remoteJid = jid
    copy.key.fromMe = sender === aka.user.id

    return proto.WebMessageInfo.fromObject(copy)
  }


  /**
   * 
   * @param {*} path 
   * @returns 
   */
  aka.getFile = async (PATH, save) => {
    let res
    let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
      mime: 'application/octet-stream',
      ext: '.bin'
    }
    filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
    if (data && save) fs.promises.writeFile(filename, data)
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data
    }

  }

  return aka
}

startaka()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
