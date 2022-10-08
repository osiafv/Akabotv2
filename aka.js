/**
   * Create By Dika Ardnt
   * Follow ig saya @naando.io
*/
process.on('uncaughtException', console.error) //Safe Log Error
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { spawn, execSync } = require("child_process")
let cp = require('child_process')
let { promisify } = require('util')
const exec = promisify(cp.exec).bind(cp)
const axios = require('axios')
const crypto = require('crypto')
const path = require('path')
const os = require('os')
var sim = require('similarity')
const threshold = 0.72;
const hx = require('hxz-api')
const xa = require('xfarr-api')
const IkyyClient = require("ikyy");
const ikyy = new IkyyClient();
const maker = require('mumaker')
const thiccysapi = require('textmaker-thiccy')
const textpro = require('./lib/textpro')
const { facebook, facebook2 } = require('./lib/scrapedl.js')
const { color, bgcolor } = require("./lib/color")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const Jimp = require('jimp')
const speed = require('performance-now')
const ms = require('ms')
const humanizeDuration = require("humanize-duration")
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
let { msgFilter } = require('./lib/antispam')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

//------------[ Database ]---------------------
//rpg function\\
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./storage/user/darah.js')
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('./storage/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./storage/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./storage/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('./storage/user/buruan.js')
const { addInventoriBan, cekBannedUser, unBanned, getbanned } = require('./storage/listhitam/banned.js')

const { addSewaGroup, getSewaExpired, getSewaPosition, expiredCheck, checkSewaGroup } = require("./lib/sewa");
let sewa = JSON.parse(fs.readFileSync('./storage/group/sewa.json'));

let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let register = JSON.parse(fs.readFileSync('./storage/user/register.json'))
let _registered = JSON.parse(fs.readFileSync('./storage/user/register.json'))
let captcha = fs.readFileSync('./storage/user/captcha.json');
let _banUser = JSON.parse(fs.readFileSync('./storage/listhitam/banUser.json'));

//Game
const tebakkimia = fs.readFileSync('./src/game/result/tebakkimia.json');
const asahotak = fs.readFileSync('./src/game/result/asahotak.json');
const susunkata = fs.readFileSync('./src/game/result/susunkata.json');
const tebakkalimat = fs.readFileSync('./src/game/result/tebakkalimat.json');
const tekateki = fs.readFileSync('./src/game/result/tekateki.json');
const caklontong = fs.readFileSync('./src/game/result/caklontong.json');
const tebakbendera = fs.readFileSync('./src/game/result/tebakbendera.json');
const tebakanime = fs.readFileSync('./src/game/result/tebakanime.json');
const tebakkabupaten = fs.readFileSync('./src/game/result/tebakkabupaten.json');
const tebaklagu = fs.readFileSync('./src/game/result/tebaklagu.json');
const tebaklirik = fs.readFileSync('./src/game/result/tebaklirik.json');
//ListMenu
//Game
const _tbkkimia = JSON.parse(fs.readFileSync('./src/game/dbgame/tebakkimia.json'))
const _asahotak = JSON.parse(fs.readFileSync('./src/game/dbgame/asahotak.json'))
const _susunkata = JSON.parse(fs.readFileSync('./src/game/dbgame/susunkata.json'))
const _tebakkalimat = JSON.parse(fs.readFileSync('./src/game/dbgame/tebakkalimat.json'))
const _tekateki = JSON.parse(fs.readFileSync('./src/game/dbgame/tekateki.json'))
const _caklontong = JSON.parse(fs.readFileSync('./src/game/dbgame/caklontong.json'))
const _tebakbendera = JSON.parse(fs.readFileSync('./src/game/dbgame/tebakbendera.json'))
const _tebakanime = JSON.parse(fs.readFileSync('./src/game/dbgame/tebakanime.json'))
const _tebakkabupaten = JSON.parse(fs.readFileSync('./src/game/dbgame/tebakkabupaten.json'))
const _tebaklirik = JSON.parse(fs.readFileSync('./src/game/dbgame/tebaklirik.json'))
const _tebaklagu = JSON.parse(fs.readFileSync('./src/game/dbgame/tebaklagu.json'))
const _gamegrub = JSON.parse(fs.readFileSync('./src/game/dbgame/gamegrub.json'))

let tebakgambar = []
let gamewaktu = 50
let waktu = 60000
//----------------------------------------------------------------

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
  users: {},
  chats: {},
  database: {},
  game: {},
  settings: {},
  others: {},
  sticker: {},
  anonymous: {},
  ...(global.db || {})
}
// read database
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakkata = db.game.tebakkata = []
let tebaktebakan = db.game.tebakan = []
/*
let tebaklagu = db.game.tebaklagu = []
let tebakgambar = db.game.tebakgambar = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let vote = db.others.vote = []
*/

/*-----[⬇️FUNCTIONAL]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// UCAPAN WAKTU By Mans
const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
if (time2 < "23:59:00") {
  var ucapanWaktu = 'Selamat Malam'
}
if (time2 < "19:00:00") {
  var ucapanWaktu = 'Selamat Petang'
}
if (time2 < "18:00:00") {
  var ucapanWaktu = 'Selamat Sore'
}
if (time2 < "15:00:00") {
  var ucapanWaktu = 'Selamat Siang'
}
if (time2 < "11:00:00") {
  var ucapanWaktu = 'Selamat Pagi'
}
if (time2 < "05:00:00") {
  var ucapanWaktu = 'Selamat Malam'
}
// TANGGAL By Zack Mans 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwuk = (time2 + ' ' + thisDaye + ', ' + hri + '' + buln[bulnh] + '' + syear)
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
const emo = ['❤', '😍', '😘', '💕', '😻', '💑', '👩‍❤‍👩', '👨‍❤‍👨', '💏', '👩‍❤‍💋‍👩', '👨‍❤‍💋‍👨', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '💋', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👩‍❤️‍👨', '👩‍❤️‍👩', '👨‍❤️‍👨', '👩‍❤️‍💋‍👨', '👬', '👭', '👫', '🥰', '😚', '😙', '👄', '🌹', '😽', '❣️', '❤️', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🙂', '😛', '😝', '😜', '🤪', '🤗', '😺', '😸', '😹', '☺', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👯‍♂️', '👯', '👯‍♀️', '💃', '🕺', '🔥', '⭐️', '✨', '💫', '🎇', '🎆', '🍻', '🥂', '🍾', '🎂', '🍰', '☹', '😣', '😖', '😫', '😩', '😢', '😭', '😞', '😔', '😟', '😕', '😤', '😠', '😥', '😰', '😨', '😿', '😾', '😓', '🙍‍♂', '🙍‍♀', '💔', '🙁', '🥺', '🤕', '☔️', '⛈', '🌩', '🌧,😯', '😦', '😧', '😮', '😲', '🙀', '😱', '🤯', '😳', '❗', '❕', '🤬', '😡', '😠', '🙄', '👿', '😾', '😤', '💢', '👺', '🗯️', '😒', '🥵', '👋']
const emojis = emo[Math.floor(Math.random() * (emo.length))]

module.exports = aka = async (aka, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    var prefix = /^[0-9°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[0-9°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
    //var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
    const isCmd = body.startsWith(prefix)
    const command = body.toLowerCase().split(' ')[0] || ''
    //const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const botNumber = await aka.decodeJid(aka.user.id)
    const isPremiums = global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const isCreators = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isCreator = isPremiums || [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isPremium = isCreators || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const itsMe = m.sender == botNumber ? true : false
    const text = q = args.join(" ")
    const sender = m.sender
    const from = m.chat
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)

    // Group
    const groupMetadata = m.isGroup ? await aka.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isSewa = checkSewaGroup(from, sewa)
    const isAspam = msgFilter.isFiltered(m.sender)
    const replyLimit = isPremium ? `1 limit terpakai\nKamu Pengguna Premium Limit Kamu Jadi ${getLimit(m.sender)}\n${mess.wait}` : `1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`
    const idgame = groupMetadata.id ? groupMetadata.id : m.sender.split('@')[0]

    try {
      let isNumber = x => typeof x === 'number' && !isNaN(x)
      let limitUser = isPremium ? global.premiums : global.free
      let user = global.db.users[m.sender]
      if (typeof user !== 'object') global.db.users[m.sender] = {}
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('afkReason' in user)) user.afkReason = ''
        if (!isNumber(user.limit)) user.limit = limitUser
      } else global.db.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
      }

      let chats = global.db.chats[m.chat]
      if (typeof chats !== 'object') global.db.chats[m.chat] = {}
      if (chats) {
        if (!('mute' in chats)) chats.mute = false
        if (!('antilink' in chats)) chats.antilink = false
      } else global.db.chats[m.chat] = {
        mute: false,
        antilink: false,
      }

      let setting = global.db.settings[botNumber]
      if (typeof setting !== 'object') global.db.settings[botNumber] = {}
      if (setting) {
        if (!isNumber(setting.status)) setting.status = 0
        if (!('autobio' in setting)) setting.autobio = false
        if (!('templateImage' in setting)) setting.templateImage = true
        if (!('templateVideo' in setting)) setting.templateVideo = false
        if (!('templateGif' in setting)) setting.templateGif = false
        if (!('templateMsg' in setting)) setting.templateMsg = false
      } else global.db.settings[botNumber] = {
        status: 0,
        autobio: false,
        templateImage: true,
        templateVideo: false,
        templateGif: false,
        templateMsg: false,
      }

    } catch (err) {
      console.error(err)
    }

    //itung mundor fax
    const hariRaya = new Date('6 1, 2022 00:00:00')
    const sekarang = new Date().getTime();
    const Selisih = hariRaya - sekarang;
    const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
    const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
    const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`

    async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
      let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
      let now = Date.now();
      let distance = from - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
    }

    // Public & Self
    if (!aka.public) {
      if (!m.key.fromMe && !isCreator && !isPremium) return
    }
    //Checker======================================================
    //expiredCheck(aka, sewa)
    //if (!m.key.fromMe && !isCreator && !isPremium && !isAdmins){ return }

    //registered
    const getRegisteredRandomId = () => {
      return _registered[Math.floor(Math.random() * _registered.length)].id
    }
    const addRegisteredUser = (userid, sender, serials) => {
      const obj = { id: userid, name: sender, serial: serials }
      _registered.push(obj)
      fs.writeFileSync('./storage/user/register.json', JSON.stringify(_registered))
    }

    const checkRegisteredUser = (sender) => {
      let status = false
      Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === sender) {
          status = true
        }
      })
      return status
    }
    const createSerial = (size) => {
      return crypto.randomBytes(size).toString('hex').slice(0, size)
    }

    const serialUser = createSerial(18)
    let isRegistered = checkRegisteredUser(m.sender)


    let isBan = cekBannedUser(m.sender)
    reban = `Maaf Kamu Telah Di Banned Karena ${getbanned(m.sender)}`


    let picaks = [flaming, fluming, flarun, flasmurf]
    let picak = picaks[Math.floor(Math.random() * picaks.length)]

    // Push Message To Console && Auto Read
    /*if (m.message) {
        aka.readMessages([m.key])
        console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
    }*/

    const reply = (teks) => {
      aka.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
    }
    const ads = (teks) => {
      aka.sendMessage(m.chat, { text: teks, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') } }, { quoted: m })
    }
    const replay = (teks) => {
      aka.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${linkz}` } } }, { quoted: m })
    }
    const Laporerr = (teks) => {
      teks1 = `Masalah di ${command} ${text} ${teks}\nYang Command : @${m.sender.split("@")[0]}`
      aka.sendMessage(global.owner + "@s.whatsapp.net", { text: teks1, mentions: [m.sender], contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${linkz}` } } }, { quoted: m })
    }


    // Detect Group Invite
    if (m.mtype === 'groupInviteMessage') {
      reply(`Ketik join untuk bergabung ke group whatsapp anda`)
    }

    // console log command 
    if (!m.isGroup && isCmd) {
      if (isAspam) return
      aka.readMessages([m.key])
      console.log("‣", bgcolor('Command On PRIVATE CHAT', 'magenta'));
      console.log(" From :", color(pushname, "yellow"), "Number :", color(m.sender, "green"), "Tanggal :", bgcolor(jangwuk, 'blue'));
      console.log(" Command :", color(command.toLowerCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
    }
    if (m.isGroup && isCmd) {
      msgFilter.addFilter(m.sender, 3000)
      if (isAspam) return
      aka.readMessages([m.key])
      console.log("‣", bgcolor('Command On', 'magenta'), "GROUP", color(groupName, "orange"), "ID GROUP", color(groupMetadata.id, "green"));
      console.log(" From :", color(pushname, "yellow"), "Number :", color(m.sender, "green"), "Tanggal :", bgcolor(jangwuk, 'blue'));
      console.log(" Command :", color(command.toLowerCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
    }

    const reSize = async (buffer, ukur1, ukur2) => {
      return new Promise(async (resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
      })
    }



    let DarahAwal = global.rpg.darahawal
    const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
    const isCekDarah = getDarah(m.sender)
    const isUmpan = getUmpan(m.sender)
    const isPotion = getPotion(m.sender)
    const isIkan = getIkan(m.sender)
    const isAyam = getAyam(m.sender)
    const isKelinci = getKelinci(m.sender)
    const isDomba = getDomba(m.sender)
    const isSapi = getSapi(m.sender)
    const isGajah = getGajah(m.sender)
    const isMonay = getMonay(m.sender)
    const isLimit = getLimit(m.sender)
    const isBesi = getBesi(m.sender)
    const isEmas = getEmas(m.sender)
    const isEmerald = getEmerald(m.sender)
    const isInventory = cekInventoryAdaAtauGak(m.sender)
    const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
    const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
    const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
    const ikan = ['🐟', '🐠', '🐡']

    const jumlahlimit = isPremium ? global.limitawal.premium : global.limitawal.free
    const jumlahuang = isPremium ? global.uangawal.premium : global.uangawal.free
    if (command.toLowerCase() === 'daftar') {
      if (isRegistered) return reply('Akun Kamu Sudah Terverify! Jangan Daftar Lagi!')
      fs.writeFileSync('./storage/user/register.json', JSON.stringify(_registered))
      addRegisteredUser(m.sender, m.pushName, serialUser)
      addInventoriDarah(m.sender, DarahAwal)
      addInventori(m.sender)
      addInventoriMonay(m.sender, jumlahuang)
      addInventoriBuruan(m.sender)
      addInventoriLimit(m.sender, jumlahlimit)
      var anuu = `*Terimakasih Sudah Mendaftarkan Diri Dalam Database AKA Bot WhatsApp*
Ketik .my Untuk Informasi Lainnya

┌─❑ _*「 PENDAFTARAN USER 」*_
│ 
├❏ _*Nama : ${pushname}*_
├❏ _*API : @${m.sender.split('@')[0]}*_
├❏ _*Serial:* ${serialUser}*_
├❏ _*Total:* ${_registered.length} Pengguna*_
└─❑ _*「 Aka Botz 」*_`
      console.log(anuu)
      aka.sendMessage(m.sender, { text: anuu, mentions: [m.sender] }, { quoted: m })
      aka.sendMessage(from, { text: `Tq Udah Daftar`, mentions: [m.sender] }, { quoted: m })
      aka.sendMessage("120363042343353505@g.us", { text: anuu, mentions: [m.sender] }, { quoted: m })
    }
    if (command.toLowerCase() === 'verify') {
      if (isRegistered) return reply('Akun Kamu Sudah Terverify! Jangan Daftar Lagi!')
      fs.writeFileSync('./storage/user/register.json', JSON.stringify(_registered))
      addRegisteredUser(m.sender, m.pushName, serialUser)
      addInventoriDarah(m.sender, DarahAwal)
      addInventori(m.sender)
      addInventoriMonay(m.sender, jumlahuang)
      addInventoriBuruan(m.sender)
      addInventoriLimit(m.sender, jumlahlimit)
      var anuu = `*Terimakasih Sudah Mendaftarkan Diri Dalam Database AKA Bot WhatsApp*
Ketik .my Untuk Informasi Lainnya

┌─❑ _*「 PENDAFTARAN USER 」*_
│ 
├❏ _*Nama : ${pushname}*_
├❏ _*API : @${m.sender.split('@')[0]}*_
├❏ _*Serial:* ${serialUser}*_
├❏ _*Total:* ${_registered.length} Pengguna*_
└─❑ _*「 Aka Botz 」*_`
      console.log(anuu)
      aka.sendMessage(from, { text: `Tq Udah Daftar`, mentions: [m.sender] }, { quoted: m })
      aka.sendMessage(m.sender, { text: anuu, mentions: [m.sender] }, { quoted: m })
      aka.sendMessage("120363042343353505@g.us", { text: anuu, mentions: [m.sender] }, { quoted: m })
    }
    var butCmd2 = [{ buttonId: `verify`, buttonText: { displayText: `Daftar` }, type: 1 }]
    var veriymage = getBuffer(global.flaming + `Resgister`)

    if (!isRegistered && isCmd) {
      if (!isRegistered) return aka.sendButtonText(from, butCmd2, `Ups Kamu Belum Mendaftar`, `Silahkan Pencet Tombol Button Dibwah Ini Untuk Mendaftar\nAkaBot`, m)
    }
    /*if (m.sender.includes('62')) {
     reply(`Maaf Bot Only In Indonesia `)
    }*/
    // write database every 1 minute


    if (isBan && isCmd) {
      if (isBan) return reply(reban)
    }


    setInterval(() => {
      fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
    }, 60 * 1000)

    async function addCountCmd(nama, sender, _db) {
      addCountCmdUser(nama, sender, _cmdUser)
      var posi = null
      Object.keys(_db).forEach((i) => {
        if (_db[i].nama === nama) {
          posi = i
        }
      })
      if (posi === null) {
        _db.push({ nama: nama, count: 1 })
        fs.writeFileSync('./database/command.json', JSON.stringify(_db, null, 2));
      } else {
        _db[posi].count += 1
        fs.writeFileSync('./database/command.json', JSON.stringify(_db, null, 2));
      }
    }

    async function addCountCmdUser(nama, sender, u) {
      var posi = null
      var pos = null
      Object.keys(u).forEach((i) => {
        if (u[i].jid === sender) {
          posi = i
        }
      })
      if (posi === null) {
        u.push({ jid: sender, db: [{ nama: nama, count: 0 }] })
        fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
        Object.keys(u).forEach((i) => {
          if (u[i].jid === sender) {
            posi = i
          }
        })
      }
      if (posi !== null) {
        Object.keys(u[posi].db).forEach((i) => {
          if (u[posi].db[i].nama === nama) {
            pos = i
          }
        })
        if (pos === null) {
          u[posi].db.push({ nama: nama, count: 1 })
          fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
        } else {
          u[posi].db[pos].count += 1
          fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
        }
      }
    }

    async function getPosiCmdUser(sender, _db) {
      var posi = null
      Object.keys(_db).forEach((i) => {
        if (_db[i].jid === sender) {
          posi = i
        }
      })
      return posi
    }

    // reset limit every 12 hours
    let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
      let user = Object.keys(global.db.users)
      let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
      for (let jid of user) global.db.users[jid].limit = limitUser
      console.log('Reseted Limit')
    }, {
      scheduled: true,
      timezone: "Asia/Jakarta"
    })

    // auto set bio
    if (db.settings[botNumber].autobio) {
      let setting = global.db.settings[botNumber]
      if (new Date() * 1 - setting.status > 1000) {
        let uptime = await runtime(process.uptime())
        await aka.setStatus(`${aka.user.name} | Runtime : ${runtime(uptime)}`)
        setting.status = new Date() * 1
      }
    }

    const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
      let po = aka.prepareMessageFromContent(from, { "listMessage": { "title": title, "description": desc, "buttonText": "Pilih Disini", "footerText": "𝐻𝑒𝑟𝑚𝑎𝑛 𝐶ℎ𝑎𝑛𝑒𝑙᭄𓅂", "listType": "SINGLE_SELECT", "sections": list, quoted: mek } }, {})
      return aka.relayWAMessage(po, { waitForAck: true, quoted: mek })
    }

    // Anti Link
    if (db.chats[m.chat].antilink) {
      if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/` + await aka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return reply(`Ehh maaf kamu admin`)
        if (isCreator) return reply(`Ehh maaf kamu owner bot ku`)
        aka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
      }
    }

    // Mute Chat
    if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
    }

    // Respon Cmd with media
    if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
      let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
      let { text, mentionedJid } = hash
      let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
        userJid: aka.user.id,
        quoted: m.quoted && m.quoted.fakeObj
      })
      messages.key.fromMe = areJidsSameUser(m.sender, aka.user.id)
      messages.key.id = m.key.id
      messages.pushName = m.pushName
      if (m.isGroup) messages.participant = m.sender
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
      }
      aka.ev.emit('messages.upsert', msg)
    }

    if (('family100' + m.chat in _family100) && !isCmd && !m.key.fromMe) {
      kuis = true
      let room = _family100['family100' + m.chat]
      let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
      let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
      if (!isSurender) {
        let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
        if (room.terjawab[index]) return !0
        room.terjawab[index] = m.sender
      }
      let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
      let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
      }).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
      aka.sendMessage(from, { text: caption, mentions: parseMention(caption) }).then(mes => { return _family100['family100' + m.chat].pesan = mesg }).catch(_ => _)
      //aka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
      if (isWin || isSurender) delete _family100['family100' + m.chat]
    }

    //===============< Function Game >==========================
    if (_tbkkimia.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = _tbkkimia[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakkimia`, buttonText: { displayText: 'Tebak Kimia' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _tbkkimia[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
      }
    }
    //======================================================
    if (_asahotak.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _asahotak[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya asahotak`, buttonText: { displayText: 'Asah Otak' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _asahotak[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya asahotak`, buttonText: { displayText: 'Asah Otak' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _asahotak[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_susunkata.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _susunkata[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya susunkata`, buttonText: { displayText: 'Susun Kata' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _susunkata[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya susunkata`, buttonText: { displayText: 'Susun Kata' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _susunkata[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_tebakkalimat.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _tebakkalimat[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakkalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _tebakkalimat[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakkalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _tebakkalimat[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_tekateki.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _tekateki[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tekateki`, buttonText: { displayText: 'Teka Teki' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _tekateku[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tekateku.json", JSON.stringify(_tekateku))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tekateki`, buttonText: { displayText: 'Teka Teki' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _tekateki[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_caklontong.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _caklontong[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya caklontong`, buttonText: { displayText: 'Cak Lontong' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _caklontong[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya caklontong`, buttonText: { displayText: 'Cak Lontong' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _caklontong[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_tebakbendera.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _tebakbendera[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakbendera`, buttonText: { displayText: 'Tebak Bendera' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _tebakbendera[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakbendera`, buttonText: { displayText: 'Tebak Bendera' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _tebakbendera[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_tebakanime.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _tebakanime[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakanime`, buttonText: { displayText: 'Tebak Anime' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _tebakanime[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakanime`, buttonText: { displayText: 'Tebak Anime' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _tebakanime[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_tebakkabupaten.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _tebakkabupaten[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakkabupaten`, buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _tebakkabupaten[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebakkabupaten`, buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _tebakkabupaten[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_tebaklirik.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _tebaklirik[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebaklirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _tebaklirik[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebaklirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _tebaklirik[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //======================================================
    if (_tebaklagu.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      let jawaban = _tebaklagu[idgame].jawaban
      if (budy.toLowerCase() == 'nyerah') {
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebaklagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `Yahaha Nyerah Cupuu\nJawabnnya adalah ${jawaban}`, aka.user.name, m)
        delete _tebaklagu[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
        return
      }
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}gamenya tebaklagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }, { buttonId: `${prefix}tebak`, buttonText: { displayText: 'List Game' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete _tebaklagu[idgame]
        delete _gamegrub[idgame]
        fs.writeFileSync("./src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
      } else {
        if (sim(budy.toLowerCase(), jawaban) >= threshold) m.reply('Jawaban kamu hampir benar')
        else m.reply(`Salah\nKetik nyerah Untuk Melewati Permainan, Bagi Yang Merasa Cupu`)
      }
    }
    //==========================================================

    if (tebaklagu.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = tebaklagu[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete tebaklagu[idgame]
      } else reply('*Jawaban Salah!*')
    }

    if (kuismath.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = kuismath[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
        delete kuismath[idgame]
      } else reply('*Jawaban Salah!*')
    }

    if (tebakgambar.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = tebakgambar[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak gambar`, buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete tebakgambar[idgame]
      } else reply('*Jawaban Salah!*')
    }

    if (tebakkata.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = tebakkata[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak kata`, buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete tebakkata[idgame]
      } else reply('*Jawaban Salah!*')
    }

    if (caklontong.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = caklontong[idgame]
      deskripsi = caklontong_desk[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lontong`, buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete caklontong[idgame]
        delete caklontong_desk[idgame]
      } else reply('*Jawaban Salah!*')
    }

    if (tebakkalimat.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = tebakkalimat[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak kalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete tebakkalimat[idgame]
      } else reply('*Jawaban Salah!*')
    }

    if (tebaklirik.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = tebaklirik[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete tebaklirik[idgame]
      } else reply('*Jawaban Salah!*')
    }

    if (tebaktebakan.hasOwnProperty(idgame) && !isCmd && !m.key.fromMe) {
      kuis = true
      jawaban = tebaktebakan[idgame]
      if (budy.toLowerCase() == jawaban) {
        let limss = [1, 2, 3, 4, 5, 2, 1, 1, 3, 10, 4]
        const limits = Math.ceil(Math.random() * 10000)
        !isPremium && addMonay(m.sender, limits)
        await aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak tebakan`, buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\nKamu Mendapatkan Uang ${limits}\n\nIngin bermain lagi? tekan button dibawah`, aka.user.name, m)
        delete tebaktebakan[idgame]
      } else reply('*Jawaban Salah!*')
    }

    //TicTacToe
    this.game = this.game ? this.game : {}
    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
      let ok
      let isWin = !1
      let isTie = !1
      let isSurrender = !1
      // reply(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
      isSurrender = !/^[1-9]$/.test(m.text)
      if (m.sender !== room.game.currentTurn) { // nek wayahku
        if (!isSurrender) return !0
      }
      if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
        reply({
          '-3': 'Game telah berakhir',
          '-2': 'Invalid',
          '-1': 'Posisi Invalid',
          0: 'Posisi Invalid',
        }[ok])
        return !0
      }
      if (m.sender === room.game.winner) isWin = true
      else if (room.game.board === 511) isTie = true
      let arr = room.game.render().map(v => {
        return {
          X: '❌',
          O: '⭕',
          1: '1️⃣',
          2: '2️⃣',
          3: '3️⃣',
          4: '4️⃣',
          5: '5️⃣',
          6: '6️⃣',
          7: '7️⃣',
          8: '8️⃣',
          9: '9️⃣',
        }[v]
      })
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX
        isWin = true
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
      if (room.x !== room.o) await aka.sendText(room.x, str, m, { mentions: parseMention(str) })
      await aka.sendText(room.o, str, m, { mentions: parseMention(str) })
      if (isTie || isWin) {
        delete this.game[room.id]
      }
    }

    //Suit PvP
    this.suit = this.suit ? this.suit : {}
    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
    if (roof) {
      let win = ''
      let tie = false
      if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
        if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
          aka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
          delete this.suit[roof.id]
          return !0
        }
        roof.status = 'play'
        roof.asal = m.chat
        clearTimeout(roof.waktu)
        //delete roof[roof.id].waktu
        aka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
        if (!roof.pilih) aka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
        if (!roof.pilih2) aka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) aka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
          else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p
            aka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
          }
          delete this.suit[roof.id]
          return !0
        }, roof.timeout)
      }
      let jwb = m.sender == roof.p
      let jwb2 = m.sender == roof.p2
      let g = /gunting/i
      let b = /batu/i
      let k = /kertas/i
      let reg = /^(gunting|batu|kertas)/i
      if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0]
        roof.text = m.text
        reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
        if (!roof.pilih2) aka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
      }
      if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
        roof.text2 = m.text
        reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
        if (!roof.pilih) aka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
      }
      let stage = roof.pilih
      let stage2 = roof.pilih2
      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih)
        if (b.test(stage) && g.test(stage2)) win = roof.p
        else if (b.test(stage) && k.test(stage2)) win = roof.p2
        else if (g.test(stage) && k.test(stage2)) win = roof.p
        else if (g.test(stage) && b.test(stage2)) win = roof.p2
        else if (k.test(stage) && b.test(stage2)) win = roof.p
        else if (k.test(stage) && g.test(stage2)) win = roof.p2
        else if (stage == stage2) tie = true
        aka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
        delete this.suit[roof.id]
      }
    }

    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of mentionUser) {
      let user = global.db.users[jid]
      if (!user) continue
      let afkTime = user.afkTime
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
    }

    if (db.users[m.sender].afkTime > -1) {
      let user = global.db.users[m.sender]
      reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
      user.afkTime = -1
      user.afkReason = ''
    }

    switch (command) {
      case prefix + 'afk': {
        let user = global.db.users[m.sender]
        user.afkTime = + new Date
        user.afkReason = text
        reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ttc': case prefix + 'ttt': case prefix + 'tictactoe': {
        let TicTacToe = require("./lib/tictactoe")
        this.game = this.game ? this.game : {}
        if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply(`Kamu masih didalam game`)
        let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
        if (room) {
          reply('Partner ditemukan!')
          room.o = m.chat
          room.game.playerO = m.sender
          room.state = 'PLAYING'
          let arr = room.game.render().map(v => {
            return {
              X: '❌',
              O: '⭕',
              1: '1️⃣',
              2: '2️⃣',
              3: '3️⃣',
              4: '4️⃣',
              5: '5️⃣',
              6: '6️⃣',
              7: '7️⃣',
              8: '8️⃣',
              9: '9️⃣',
            }[v]
          })
          let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
          if (room.x !== room.o) await aka.sendText(room.x, str, m, { mentions: parseMention(str) })
          await aka.sendText(room.o, str, m, { mentions: parseMention(str) })
        } else {
          room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
          }
          if (text) room.name = text
          reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
          this.game[room.id] = room
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'delttc': case prefix + 'delttt': {
        this.game = this.game ? this.game : {}
        try {
          if (this.game) {
            delete this.game
            aka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
          } else if (!this.game) {
            reply(`Session TicTacToe🎮 tidak ada`)
          } else reply(`?`)
        } catch (e) {
          reply('rusak')
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'suitpvp': case prefix + 'suit': {
        this.suit = this.suit ? this.suit : {}
        let poin = 10
        let poin_lose = 10
        let timeout = 60000
        if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return reply(`Selesaikan suit mu yang sebelumnya`)
        if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
        if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
        if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
        let id = 'suit_' + new Date() * 1
        let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
        this.suit[id] = {
          chat: await aka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
          id: id,
          p: m.sender,
          p2: m.mentionedJid[0],
          status: 'wait',
          waktu: setTimeout(() => {
            if (this.suit[id]) aka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
          }, 60000), poin, poin_lose, timeout
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      /* case prefix+'donasi': case prefix+'sewabot': case prefix+'sewa': case prefix+'buypremium': case prefix+'donate': {
         aka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/f8d35118f27c5b371da2b.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n⌕ 15k Per Group via E-Walet 1 Month\n⌕ 20k via pulsa 1 Month\n\n Premium Price Bot\n⌕ 10k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6281252848955 (Owner)\n\nDonate For Me : \n\n⌕ Paypal : https://www.paypal.me/Rifando35\n⌕ Saweria : https://saweria.co/Nando35` }, { quoted: m })
       }
         addCountCmd(`#${command.slice(1)}`, sender, _cmd)
         break*/

      /*case prefix+'tqtoo': {
        let anu = `Terima kasih
      
      Dika Ardnt
      ⌕ https://github.com/DikaArdnt
      
      Fatih Arridho
      ⌕ https://github.com/FatihArridho
      
      Whwhwh
      ⌕ https://github.com/Nando35
      
      Alya
      ⌕ https://github.com/AliyaBot
      `
          let btn = [{ urlButton: { displayText: 'Instagram', url: 'https://instagram.com/naando.jpeg' } }]
        let templateButtons = btn
    var templateMessage = {
      text: anu,
      footer: 'Nih Om Jangan Lupa Like',
      templateButtons: templateButtons
    }
    aka.sendMessage(from, templateMessage)
       }
      addCountCmd(`#${command.slice(1)}`, sender, _cmd)
      break*/

      case prefix + 'chat': {
        if (!isCreator) return reply(mess.owner)
        if (!q) return reply(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
        if (args[0] === 'mute') {
          aka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'unmute') {
          aka.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'archive') {
          aka.chatModify({ archive: true }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'unarchive') {
          aka.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'read') {
          aka.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'unread') {
          aka.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'delete') {
          aka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true } } }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'family100': {
        if ('family100' + m.chat in _family100) {
          reply('Masih Ada Sesi Yang Belum Diselesaikan!')
          throw false
        }
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
        let random = anu[Math.floor(Math.random() * anu.length)]
        console.log(random)
        let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
        _family100['family100' + m.chat] = {
          id: 'family100' + m.chat,
          pesan: await aka.sendText(m.chat, hasil, m),
          ...random,
          terjawab: Array.from(random.jawaban, () => false),
          hadiah: 6,
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'halah': case prefix + 'hilih': case prefix + 'huluh': case prefix + 'heleh': case prefix + 'holoh':
        if (!m.quoted && !text) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
        ter = command[1].toLowerCase()
        tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
        reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      /*case prefix+'tebak': {
        if (!text) return reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
        if (args[0] === "lagu") {
        if (tebaklagu.hasOwnProperty(idgame)) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!"
        let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
        let result = anu[Math.floor(Math.random() * anu.length)]
        console.log(result)
        let msg = await aka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
        aka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
        tebaklagu[idgame] = result.jawaban.toLowerCase()
        })
        await sleep(60000)
        if (tebaklagu.hasOwnProperty(idgame)) {
        console.log("Jawaban: " + result.jawaban)
        aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[idgame]}\n\nIngin bermain? tekan button dibawah`, aka.user.name, m)
        delete tebaklagu[idgame]
        }
        } else if (args[0] === 'gambar') {
        if (tebakgambar.hasOwnProperty(idgame)) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!"
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
        let result = anu[Math.floor(Math.random() * anu.length)]
        console.log(result)
        aka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
        tebakgambar[idgame] = result.jawaban.toLowerCase()
        })
        await sleep(60000)
        if (tebakgambar.hasOwnProperty(idgame)) {
        console.log("Jawaban: " + result.jawaban)
        aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak gambar`, buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[idgame]}\n\nIngin bermain? tekan button dibawah`, aka.user.name, m)
        delete tebakgambar[idgame]
        }
        } else if (args[0] === 'kata') {
        if (tebakkata.hasOwnProperty(idgame)) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!"
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
        let result = anu[Math.floor(Math.random() * anu.length)]
        console.log(result)
        aka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
        tebakkata[idgame] = result.jawaban.toLowerCase()
        })
        await sleep(60000)
        if (tebakkata.hasOwnProperty(idgame)) {
        console.log("Jawaban: " + result.jawaban)
        aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak kata`, buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[idgame]}\n\nIngin bermain? tekan button dibawah`, aka.user.name, m)
        delete tebakkata[idgame]
        }
        } else if (args[0] === 'kalimat') {
        if (tebakkalimat.hasOwnProperty(idgame)) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!"
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
        let result = anu[Math.floor(Math.random() * anu.length)]
        console.log(result)
        aka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
        tebakkalimat[idgame] = result.jawaban.toLowerCase()
        })
        await sleep(60000)
        if (tebakkalimat.hasOwnProperty(idgame)) {
        console.log("Jawaban: " + result.jawaban)
        aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak kalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[idgame]}\n\nIngin bermain? tekan button dibawah`, aka.user.name, m)
        delete tebakkalimat[idgame]
        }
        } else if (args[0] === 'lirik') {
        if (tebaklirik.hasOwnProperty(idgame)) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!"
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
        let result = anu[Math.floor(Math.random() * anu.length)]
        console.log(result)
        aka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
        tebaklirik[idgame] = result.jawaban.toLowerCase()
        })
        await sleep(60000)
        if (tebaklirik.hasOwnProperty(idgame)) {
        console.log("Jawaban: " + result.jawaban)
        aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[idgame]}\n\nIngin bermain? tekan button dibawah`, aka.user.name, m)
        delete tebaklirik[idgame]
        }
        } else if (args[0] === 'lontong') {
        if (caklontong.hasOwnProperty(idgame)) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!"
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
        let result = anu[Math.floor(Math.random() * anu.length)]
        console.log(result)
        aka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
        caklontong[idgame] = result.jawaban.toLowerCase()
            caklontong_desk[idgame] = result.deskripsi
        })
        await sleep(60000)
        if (caklontong.hasOwnProperty(idgame)) {
        console.log("Jawaban: " + result.jawaban)
        aka.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lontong`, buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[idgame]}\nDeskripsi : ${caklontong_desk[idgame]}\n\nIngin bermain? tekan button dibawah`, aka.user.name, m)
        delete caklontong[idgame]
            delete caklontong_desk[idgame]
        }
        }
        }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break*/
      case prefix + 'tebak': case prefix + 'game':
        var sections = [];
        const listgame = {
          title: 'List Gamenya',
          rows: [
            { title: `Play Game Tebak Kabupaten`, rowId: `${prefix}gamenya tebakkabupaten` },
            { title: `Play Game Tebak Anime`, rowId: `${prefix}gamenya tebakanime` },
            { title: `Play Game Tebak Bendera`, rowId: `${prefix}gamenya tebakbendera` },
            { title: `Play Game Tebak Lagu`, rowId: `${prefix}gamenya tebaklagu` },
            { title: `Play Game Tebak Lirik`, rowId: `${prefix}gamenya tebaklirik` },
            { title: `Play Game Tebak Kalimat`, rowId: `${prefix}gamenya tebakkalimat` },
            { title: `Play Game Tebak Kimia`, rowId: `${prefix}gamenya tebakkimia` },
            { title: `Play Game Susun Kata`, rowId: `${prefix}gamenya susunkata` },
            { title: `Play Game Asah Otak`, rowId: `${prefix}gamenya asahotak` },
          ]
        }
        sections.push(listgame)
        var sendm10 = aka.sendMessage(
          from,
          {
            text: `Berikut List Game`,
            footer: global.namebot,
            title: "[ Bermain ]",
            buttonText: "click untuk melihat listgame➡️",
            sections
          }, { quoted: m }
        )
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'gamenya': {
        if (_gamegrub.hasOwnProperty(idgame)) return aka.sendButtonText(from, [{ buttonId: `nyerah`, buttonText: { displayText: `nyerah` }, type: 1 }], `Masih ada permainan yang sedang berlangsung`, `Ketik Nyerah / Klick Tombol Dibawah Ini Jika Ingin Bermain Game lain\n\nAkaBot`, m)
        _gamegrub[idgame] = { user: idgame, game: args[0] }

        if (args[0] === 'tebakkabupaten') {
          if (_tebakkabupaten.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          let datta = tebakkabupaten
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.title
          let gambar = data.url
          let hint = data.title.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `*TEBAK KABUPATEN*\n\nApa nama kabupaten dari lambang tersebut!\nWaktu : ${waktu}s\nHint : ${hint}`
          _tebakkabupaten[idgame] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }
          fs.writeFileSync("./src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
          aka.sendMessage(from, { image: { url: gambar }, caption: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          await sleep(_tebakkabupaten[idgame].time)
          if (_tebakkabupaten.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
          }
        } else if (args[0] === 'tebakanime') {
          if (_tebakanime.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          let datta = tebakanime
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.jawaban
          let gambar = data.image
          let japan = data.name_jp
          let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${waktu}s\nHint : ${hint}`
          _tebakanime[idgame] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }
          fs.writeFileSync("./src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
          aka.sendMessage(from, { image: { url: gambar }, caption: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          await sleep(_tebakanime[idgame].time)
          if (_tebakanime.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
          }
        } else if (args[0] === 'tebakbendera') {
          if (_tebakbendera.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          /*
          / 1000 = 1 detik
          / 60000 = 1 menit
          >_tebakbendera
          */
          let datta = tebakbendera
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.name
          let gambar = data.img
          let hint = data.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `*TEBAK BENDERA*\n\nApa nama bendera pada gambar tersebut!\nWaktu : ${waktu}s\nHint : ${hint}`
          _tebakbendera[idgame] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }
          fs.writeFileSync("./src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
          aka.sendMessage(from, { image: { url: gambar }, caption: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          await sleep(_tebakbendera[idgame].time)
          if (_tebakbendera.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
          }
        } else if (args[0] === 'tebaklagu') {
          if (_tebaklagu.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          let datta = tebaklagu
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.title
          let soal = data.artists
          let songs = data.songs
          let hint = data.title.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n_Apa Nama Judulnya_\n*Artist:* ${soal}\n\nWaktu : ${waktu}s\nHint : ${hint}`
          _tebaklagu[idgame] = { user: idgame, jawaban: jawaban.toLowerCase(), time: waktu }
          fs.writeFileSync("./src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
          aka.sendMessage(from, { text: teks }, { quoted: m })
          await aka.sendMessage(from, { audio: { url: songs }, mimetype: 'audio/mp4', ptt: true, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          await sleep(_tebaklagu[idgame].time)
          if (_tebaklagu.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
          }
        } else if (args[0] === 'tebaklirik') {
          if (_tebaklirik.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          let datta = tebaklirik
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.jawaban
          let soal = data.soal
          let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s\nHint : ${hint}`
          _tebaklirik[idgame] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }
          fs.writeFileSync("./src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
          aka.sendMessage(from, { text: teks }, { quoted: m })
          await sleep(_tebaklirik[idgame].time)
          if (_tebaklirik.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
          }
        } else if (args[0] === 'tebakkalimat') {
          if (_tebakkalimat.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          let datta = tebakkalimat
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.jawaban
          let soal = data.soal
          let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s\nHint : ${hint}`
          _tebakkalimat[idgame] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }
          fs.writeFileSync("./src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
          aka.sendMessage(from, { text: teks }, { quoted: m })
          await sleep(_tebakkalimat[idgame].time)
          if (_tebakkalimat.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
          }
        } else if (args[0] === 'susunkata') {
          if (_susunkata.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          let datta = susunkata
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.jawaban
          let soal = data.soal
          let tipe = data.tipe
          let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔;\n\n*Soal :* ${soal}\n*Tipe :* ${tipe}\n\nWaktu : ${waktu}s\nHint : ${hint}`
          _susunkata[idgame] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }
          fs.writeFileSync("./src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
          aka.sendMessage(from, { text: teks }, { quoted: m })
          await sleep(_susunkata[idgame].time)
          if (_susunkata.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
          }
        } else if (args[0] === 'asahotak') {
          if (_asahotak.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          let datta = asahotak
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.jawaban
          let soal = data.soal
          let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Soal :* ${soal}adalah\n\nWaktu : ${waktu}s\nHint : ${hint}`
          _asahotak[idgame] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }
          fs.writeFileSync("./src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
          aka.sendMessage(from, { text: teks }, { quoted: m })
          await sleep(_asahotak[idgame].time)
          if (_asahotak.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
          }
        } else if (args[0] === 'tebakkimia') {
          if (_tbkkimia.hasOwnProperty(idgame)) return m.reply("Masih ada permainan yang sedang berlangsung")
          let datta = tebakkimia
          let jsonData = JSON.parse(datta);
          let xm = Math.floor(Math.random() * jsonData.length);
          let data = jsonData[xm];
          console.log(data)//hasil di tampilkan di cmd
          let jawaban = data.lambang
          let unsur = data.unsur
          let hint = data.lambang.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔\n\nLambang unsur dari ${unsur} adalah\nWaktu : ${waktu}s\nHint : ${hint}`
          aka.sendMessage(from, { text: teks }, { quoted: m }).then(() => {
            _tbkkimia[idgame] = jawaban.toLowerCase()
            fs.writeFileSync("./src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
          })
          await sleep(waktu)
          if (_tbkkimia.hasOwnProperty(idgame)) {
            console.log("Jawaban: " + jawaban)
            reply("Waktu Habis\nJawaban: " + jawaban)
            fs.writeFileSync("./src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
          }
        }
        await sleep(60000)
        delete _gamegrub[idgame]
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      case prefix + 'kuismath': case prefix + 'math': {
        if (kuismath.hasOwnProperty(idgame)) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
        let { genMath, modes } = require('./src/math')
        if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
        let result = await genMath(text.toLowerCase())
        aka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
          kuismath[idgame] = result.jawaban
        })
        await sleep(result.waktu)
        if (kuismath.hasOwnProperty(idgame)) {
          console.log("Jawaban: " + result.jawaban)
          reply("Waktu Habis\nJawaban: " + kuismath[idgame])
          delete kuismath[idgame]
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'jodohku': {
        if (!m.isGroup) return reply(mess.group)
        let member = participants.map(u => u.id)
        let me = m.sender
        let jodoh = member[Math.floor(Math.random() * member.length)]
        let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
        let ments = [me, jodoh]
        let buttons = [
          { buttonId: `${prefix}jodohku`, buttonText: { displayText: 'Jodohku' }, type: 1 }
        ]
        await aka.sendButtonText(m.chat, buttons, jawab, aka.user.name, m, { mentions: ments })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'jadian': {
        if (!m.isGroup) return reply(mess.group)
        let member = participants.map(u => u.id)
        let orang = member[Math.floor(Math.random() * member.length)]
        let jodoh = member[Math.floor(Math.random() * member.length)]
        let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
        let menst = [orang, jodoh]
        let buttons = [
          { buttonId: `${prefix}jadian`, buttonText: { displayText: 'Jodohku' }, type: 1 }
        ]
        await aka.sendButtonText(m.chat, buttons, jawab, aka.user.name, m, { mentions: menst })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'react': {
        if (!isCreator) return reply(mess.owner)
        reactionMessage = {
          react: {
            text: args[0],
            key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
          }
        }
        aka.sendMessage(m.chat, reactionMessage)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'join': {
        //if (!isCreator) return reply(mess.owner)
        if (!text) return reply(`Masukkan Link Group!`)
        if (!args[0]) return reply("Linknya mana kak?")
        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
        vdd = args[0]
        let vcc = vdd.split("https://chat.whatsapp.com/")[1]
        if (!vcc) return reply("Link invalid!")
        if (isCreator) {
          await aka.groupAcceptInvite(vcc).then(async (res) => reply(jsonformat(res))).catch(_ => _)
          reply("Succes")
        } else {
          aka.query({
            tag: "iq",
            attrs: {
              type: "get",
              xmlns: "w:g2",
              to: "@g.us"
            },
            content: [{ tag: "invite", attrs: { code: vcc } }]
          }).then(async (res) => {
            sizny = res.content[0].attrs.size
            if (sizny < 5) {
              teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 5 anggota`
              aka.sendMessage(m.chat, { text: teks }, { quoted: m })
            } else if (sizny > 5) {
              await aka.groupAcceptInvite(vcc).then(async (res) => reply(jsonformat(res))).catch(_ => _)
              reply("Succes")
            } else {
              reply("Error")
            }
          }).catch(_ => _)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'leave': {
        if (!isCreator) return reply(mess.owner)
        await aka.groupLeave(m.chat).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'setexif': {
        if (!isCreator) return reply(mess.owner)
        if (!text) return reply(`Example : ${prefix + command} packname|author`)
        global.packname = text.split("|")[0]
        global.author = text.split("|")[1]
        reply(`Exif berhasil diubah menjadi\n\n⌕ Packname : ${global.packname}\n⌕ Author : ${global.author}`)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'kick': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        let users = m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (users.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        await aka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
      }
        break
      case prefix + 'add': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        let users = m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (users.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        await aka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
      }
        break
      case prefix + 'promote': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        let users = m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (users.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        await aka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
      }
        break
      case prefix + 'demote': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        let users = m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (users.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        await aka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
      }
        break
      case prefix + 'block': {
        if (!isCreator) return reply(mess.owner)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (users.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        await aka.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
      }
        break
      case prefix + 'unblock': {
        if (!isCreator) return reply(mess.owner)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (users.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        await aka.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
      }
        break
      case prefix + 'ban': {
        if (!isCreator) return replay(mess.owner)
        if (!q) return reply(`Pilih add or del, Example : ${prefix + command} add/(Reply pesan atau nomor)/reasonnya or del (Reply pesan atau nomor)`)
        swn = args.join(" ")
        jenisnya = swn.split("/")[0];
        nomor = swn.split("/")[1];
        reason = swn.split("/")[2];
        num = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (num.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (num.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        if (jenisnya === "add") {
          if (!reason) return replay(`alasannya apa`)
          if (isBan) return reply(`Dia Sudah Ada Di Database DaftarHitam`)
          addInventoriBan(num, reason)
          replay(`Successfully banned the user`)
        } else if (jenisnya === "del") {
          unBanned(num)
          replay(`Successfully unbanned the user`)
        } else {
          replay("Error")
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'sewa':
        if (!isCreator) return reply('Khusus Owner')
        if (!q) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
        if (args[0].toLowerCase() === 'add') {
          addSewaGroup(from, args[1], sewa)
          reply(`Success`)
        } else if (args[0].toLowerCase() === 'del') {
          sewa.splice(getSewaPosition(from, sewa), 1)
          fs.writeFileSync('./storage/group/sewa.json', JSON.stringify(sewa))
          reply(mess.success)
        } else {
          reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
        }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'sewalist':
      case prefix + 'listsewa':
        if (isBan) return reply(mess.ban)
        let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
        for (let i of sewa) {
          let cekvippsewa = ms(i.expired - Date.now())
          txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
        }
        reply(txtnyee)
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'sewacheck':
      case prefix + 'ceksewa':
        if (!m.isGroup) return reply('khusus Grup')
        if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
        let cekvipsewa = humanizeDuration(getSewaExpired(from, sewa))
        let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa}`
        reply(sewanya)
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'setname': case prefix + 'setsubject': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        if (!text) return reply(`Text ?`)
        await aka.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'setdesc': case prefix + 'setdesk': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        if (!text) return reply(`Text ?`)
        await aka.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'setppbot': {
        if (!isCreator) return reply(mess.owner)
        if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        let media = await aka.downloadAndSaveMediaMessage(quoted)
        await aka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
        reply(mess.success)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'setppgroup': case prefix + 'setppgrup': case prefix + 'setppgc': {
        if (!m.isGroup) return reply(mess.group)
        if (!isAdmins) return reply(mess.admin)
        if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        let media = await aka.downloadAndSaveMediaMessage(quoted)
        await aka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
        reply(mess.success)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'tagall': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : `Si ${pushname} Lagi Mancing Keributan`}*\n\n`
        for (let mem of participants) {
          teks += `⌕ @${mem.id.split('@')[0]}\n`
        }
        aka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'hidetag': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        aka.sendMessage(m.chat, { text: q ? q : `Si ${pushname} Lagi Mancing Keributan`, mentions: participants.map(a => a.id) }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'style': case prefix + 'styletext': {
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis // -1 limit
        let { styletext } = require('./lib/scraper')
        if (!text) return reply(`Masukkan Query text!`)
        let anu = await styletext(text)
        let teks = `Srtle Text From ${text}\n\n`
        for (let i of anu) {
          teks += `⌕ *${i.name}* : ${i.result}\n\n`
        }
        reply(teks)
      }
        break
      case prefix + 'vote': {
        if (!m.isGroup) return reply(mess.group)
        if (m.chat in vote) return reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
        if (!text) return reply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
        reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
        vote[m.chat] = [q, [], []]
        await sleep(1000)
        upvote = vote[m.chat][1]
        devote = vote[m.chat][2]
        teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
        let buttonsVote = [
          { buttonId: `${prefix}upvote`, buttonText: { displayText: '𝚄𝙿𝚅𝙾𝚃𝙴' }, type: 1 },
          { buttonId: `${prefix}devote`, buttonText: { displayText: '𝙳𝙴𝚅𝙾𝚃𝙴' }, type: 1 }
        ]

        let buttonMessageVote = {
          text: teks_vote,
          footer: aka.user.name,
          buttons: buttonsVote,
          headerType: 1
        }
        aka.sendMessage(m.chat, buttonMessageVote)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'upvote': {
        if (!m.isGroup) return reply(mess.group)
        if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
        isVote = vote[m.chat][1].concat(vote[m.chat][2])
        wasVote = isVote.includes(m.sender)
        if (wasVote) return reply(`Kamu Sudah Vote`)
        vote[m.chat][1].push(m.sender)
        menvote = vote[m.chat][1].concat(vote[m.chat][2])
        teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
        let buttonsUpvote = [
          { buttonId: `${prefix}upvote`, buttonText: { displayText: '𝚄𝙿𝚅𝙾𝚃𝙴' }, type: 1 },
          { buttonId: `${prefix}devote`, buttonText: { displayText: '𝙳𝙴𝚅𝙾𝚃𝙴' }, type: 1 }
        ]

        let buttonMessageUpvote = {
          text: teks_vote,
          footer: aka.user.name,
          buttons: buttonsUpvote,
          headerType: 1,
          mentions: menvote
        }
        aka.sendMessage(m.chat, buttonMessageUpvote)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'devote': {
        if (!m.isGroup) return reply(mess.group)
        if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
        isVote = vote[m.chat][1].concat(vote[m.chat][2])
        wasVote = isVote.includes(m.sender)
        if (wasVote) return reply(`Kamu Sudah Vote`)
        vote[m.chat][2].push(m.sender)
        menvote = vote[m.chat][1].concat(vote[m.chat][2])
        teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
        let buttonsDevote = [
          { buttonId: `${prefix}upvote`, buttonText: { displayText: '𝚄𝙿𝚅𝙾𝚃𝙴' }, type: 1 },
          { buttonId: `${prefix}devote`, buttonText: { displayText: '𝙳𝙴𝚅𝙾𝚃𝙴' }, type: 1 }
        ]

        let buttonMessageDevote = {
          text: teks_vote,
          footer: aka.user.name,
          buttons: buttonsDevote,
          headerType: 1,
          mentions: menvote
        }
        aka.sendMessage(m.chat, buttonMessageDevote)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'cekvote':
        if (!m.isGroup) return reply(mess.group)
        if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
        teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${aka.user.id}
`
        aka.sendTextWithMentions(m.chat, teks_vote, m)
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'deletevote': case 'delvote': case prefix + 'hapusvote': {
        if (!m.isGroup) return reply(mess.group)
        if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
        delete vote[m.chat]
        reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'group': case prefix + 'grup': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        if (args[0] === 'close') {
          await aka.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'open') {
          await aka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
        } else {
          let buttons = [
            { buttonId: `${prefix}group open`, buttonText: { displayText: 'Open' }, type: 1 },
            { buttonId: `${prefix}group close`, buttonText: { displayText: 'Close' }, type: 1 }
          ]
          await aka.sendButtonText(m.chat, buttons, `Mode Group`, aka.user.name, m)

        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'editinfo': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        if (args[0] === 'open') {
          await aka.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'close') {
          await aka.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
        } else {
          let buttons = [
            { buttonId: `${prefix}editinfo open`, buttonText: { displayText: 'Open' }, type: 1 },
            { buttonId: `${prefix}editinfo close`, buttonText: { displayText: 'Close' }, type: 1 }
          ]
          await aka.sendButtonText(m.chat, buttons, `Mode Edit Info`, aka.user.name, m)

        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'antilink': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        if (args[0] === "on") {
          if (db.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
          db.chats[m.chat].antilink = true
          reply(`Antilink Aktif !`)
        } else if (args[0] === "off") {
          if (!db.chats[m.chat].antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
          db.chats[m.chat].antilink = false
          reply(`Antilink Tidak Aktif !`)
        } else {
          let buttons = [
            { buttonId: `${prefix}antilink on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilink off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await aka.sendButtonText(m.chat, buttons, `Mode Antilink`, aka.user.name, m)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'mute': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        if (args[0] === "on") {
          if (db.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
          db.chats[m.chat].mute = true
          reply(`${aka.user.name} telah di mute di group ini !`)
        } else if (args[0] === "off") {
          if (!db.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
          db.chats[m.chat].mute = false
          reply(`${aka.user.name} telah di unmute di group ini !`)
        } else {
          let buttons = [
            { buttonId: `${prefix}mute on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}mute off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await aka.sendButtonText(m.chat, buttons, `Mute Bot`, aka.user.name, m)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'linkgroup': case prefix + 'linkgc': {
        if (!m.isGroup) return reply(mess.group)
        let response = await aka.groupInviteCode(m.chat)
        aka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ephemeral': {
        if (!m.isGroup) return reply(mess.group)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
        if (!text) return reply(`Masukkan value enable/disable`)
        if (args[0] === 'enable') {
          await aka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'disable') {
          await aka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(err)))
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'delete': case prefix + 'del': {
        if (!m.quoted) throw false
        let { chat, fromMe, id, isBaileys } = m.quoted
        if (!isBaileys) return reply(`Pesan tersebut bukan dikirim oleh bot!`)
        aka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id } })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'bcgc': case prefix + 'bcgroup': {
        if (!isCreator) return reply(mess.owner)
        if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
        let getGroups = await aka.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let anu = groups.map(v => v.id)
        reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
        for (let i of anu) {
          await sleep(1500)
          let btn = [{
            urlButton: {
              displayText: 'Source Code',
              url: 'https://github.com/DikaArdnt/zets-Morou'
            }
          }]
          let txt = `「 Broadcast Bot 」\n\n${text}`
          aka.send5ButImg(i, txt, aka.user.name, global.thumb, btn)
        }
        reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'bc': case prefix + 'broadcast': case prefix + 'bcall': {
        if (!isCreator) return reply(mess.owner)
        if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
        let anu = await store.chats.all().map(v => v.id)
        reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
        for (let yoi of anu) {
          await sleep(1500)
          let btn = [{
            urlButton: {
              displayText: 'Source Code',
              url: 'https://github.com/DikaArdnt/zets-Morou'
            }
          }]
          let txt = `「 Broadcast Bot 」\n\n${text}`
          aka.send5ButImg(yoi, txt, aka.user.name, global.thumb, btn)
        }
        reply('Sukses Broadcast')
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'infochat': {
        if (!m.quoted) return reply('Reply Pesan')
        let msg = await m.getQuotedObj()
        if (!m.quoted.isBaileys) return reply(`Pesan tersebut bukan dikirim oleh bot!`)
        let teks = ''
        for (let i of msg.userReceipt) {
          let read = i.readTimestamp
          let unread = i.receiptTimestamp
          let waktu = read ? read : unread
          teks += `⌕ @${i.userJid.split('@')[0]}\n`
          teks += ` ┗━⌕ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⌕ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
        }
        aka.sendTextWithMentions(m.chat, teks, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'q': case prefix + 'quoted': {
        if (!m.quoted) return reply('Reply Pesannya!!')
        let wokwol = await aka.serializeM(await m.getQuotedObj())
        if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
        await wokwol.quoted.copyNForward(m.chat, true)
      }
        break
      case prefix + 'listpc': {
        let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
        let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
        for (let i of anu) {
          let nama = store.messages[i].array[0].pushName
          teks += `⌕ *Nama :* ${nama}\n⌕ *User :* @${i.split('@')[0]}\n⌕ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
        }
        aka.sendMessage(from, { text: teks, mentions: store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id) }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'listgc': {
        let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
        let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
        var anuu = aka.groupMetadata(`${anu}`)
        if (anuu.owner === "undefined") {
          loldd = false
        } else {
          loldd = anuu.owner
        }
        for (let i of anu) {
          let metadata = await aka.groupMetadata(i)
          if (metadata.owner === "undefined") {
            loldd = false
          } else {
            loldd = metadata.owner
          }
          teks += `⌕ *Nama :* ${metadata.subject}\n⌕ *Owner :* ${loldd ? '@' + loldd.split("@")[0] : "undefined"} \n⌕ *ID :* ${metadata.id}\n⌕ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⌕ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
        }
        aka.sendMessage(from, { text: teks, mentions: [anuu.owner] }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'listonline': case prefix + 'liston': {
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        aka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⌕ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ebinary': {
        if (!m.quoted.text && !text) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
        let { eBinary } = require('./lib/binary')
        let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
        let eb = await eBinary(teks)
        reply(eb)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'dbinary': {
        if (!m.quoted.text && !text) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
        let { dBinary } = require('./lib/binary')
        let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
        let db = await dBinary(teks)
        reply(db)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'toimage': case prefix + 'toimg': {
        if (!quoted) return reply(`Reply Image`)
        if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
        reply(mess.wait)
        let media = await aka.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) throw err
          let buffer = fs.readFileSync(ran)
          aka.sendMessage(m.chat, { image: buffer, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          fs.unlinkSync(ran)
        })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'tomp4': case prefix + 'tovideo': {
        if (!quoted) return reply(`Reply Image`)
        if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
        reply(mess.wait)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await aka.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await aka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
        await fs.unlinkSync(media)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'tomp3': case prefix + 'toaudio': {
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        if (!quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        reply(mess.wait)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        aka.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'tomp3': {
        if (/document/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
        if (!quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
        reply(mess.wait)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        aka.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${aka.user.name}.mp3`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'tovn': case prefix + 'toptt': {
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
        if (!quoted) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
        reply(mess.wait)
        let media = await quoted.download()
        let { toPTT } = require('./lib/converter')
        let audio = await toPTT(media, 'mp4')
        aka.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'tts': {
        var teksnya = encodeURIComponent(q) ? encodeURIComponent(q) : 'Mana Teksnya?'
        var ano = await getBuffer(`https://hadi-api.herokuapp.com/api/tts?language=id&text=${encodeURIComponent(teksnya)}`)
        encmedia = await aka.sendMessage(from, { audio: ano, mimetype: 'audio/mpeg', ptt: true, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'togif': {
        if (!quoted) return reply(`Reply Image`)
        if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
        reply(mess.wait)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await aka.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await aka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
        await fs.unlinkSync(media)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'tourl': {
        reply(mess.wait)
        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
        let media = await aka.downloadAndSaveMediaMessage(quoted)
        if (/image/.test(mime)) {
          let anu = await TelegraPh(media)
          reply(util.format(anu))
        } else if (!/image/.test(mime)) {
          let anu = await TelegraPh(media)
          reply(util.format(anu))
        }
        await fs.unlinkSync(media)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'imagenobg': case prefix + 'removebg': case prefix + 'remove-bg': {
        if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        let remobg = require('remove.bg')
        let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
        let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
        hmm = await './src/remobg-' + getRandom('')
        localFile = await aka.downloadAndSaveMediaMessage(quoted, hmm)
        outputFile = await './src/hremo-' + getRandom('.png')
        reply(mess.wait)
        remobg.removeBackgroundFromImageFile({
          path: localFile,
          apiKey: apinobg,
          size: "regular",
          type: "auto",
          scale: "100%",
          outputFile
        }).then(async result => {
          aka.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: mess.success, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          await fs.unlinkSync(localFile)
          await fs.unlinkSync(outputFile)
        })
      }
        break

      //────────────────────[ MAKER ]────────────────────

      case prefix + 'couple': case prefix + 'ppcouple': case prefix + 'ppcp': {
        reply(mess.wait)
        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
        let random = anu[Math.floor(Math.random() * anu.length)]
        var ppmedia = aka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        setTimeout(() => {
          var buttons = [
            { buttonId: `${prefix}ppcp`, buttonText: { displayText: 'Next PpCouple' }, type: 1 }
          ]
          var buttonMessage = {
            image: { url: random.female },
            caption: `Couple Female🙎🏻‍♀️`,
            footer: aka.user.name,
            buttons: buttons,
            headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
          }
          aka.sendMessage(m.chat, buttonMessage, { quoted: m })
        }, 2000)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'patrick':
      case prefix + 'patricksticker': {
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await aka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'attp': {
        if (!q) return reply(`Mana Teksnya?`)
        reply(mess.wait)
        const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
        aka.sendMessage(from, { sticker: buff }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ttp': {
        //if(!isCreator) return reply(`Servernya Eror`)
        reply(mess.wait)
        var teksnya = encodeURIComponent(q) ? encodeURIComponent(q) : 'Mana Teksnya?'
        const buff = await (`http://zekais-api.herokuapp.com/text2png?text=${teksnya}&color=white&apikey=IsAr5wp8`)
        //const buff = await (`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(q)}`)
        //const buff = await (`http://hadi-api.herokuapp.com/api/canvas/ttp?text=${encodeURIComponent(q)}`)
        encmedia = await aka.sendImageAsSticker(from, buff, m, { packname: global.packname, author: global.author }, { quoted: m })
        await fs.unlinkSync(encmedia)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'dogesticker':
      case prefix + 'dogestick':
      case prefix + 'doge': {
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await aka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'lovesticker':
      case prefix + 'lovestick': {
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await aka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'gura':
      case prefix + 'gurastick': {
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await aka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'emojimix': {
        if (!q) return reply(`*Example :* ${command} 😅+🤔`)
        let [emoji1, emoji2] = q.split`+`
        let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
        for (let res of kuntuh.results) {
          let encmedia = await aka.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.packname2, categories: res.tags })
          await fs.unlinkSync(encmedia)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'sticker': case prefix + 'stiker': case prefix + 's': case prefix + 'stickergif': case prefix + 'sgif': {
        if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
        reply(mess.wait)
        if (/image/.test(mime)) {
          let media = await quoted.download()
          let encmedia = await aka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
          let media = await quoted.download()
          let encmedia = await aka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
          await fs.unlinkSync(encmedia)
        } else {
          reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'swm': case prefix + 'take': case prefix + 'stickerwm': {
        if (!m.quoted) return reply(`Send/Reply Photo/video With Caption ${prefix}take *kamu tuh|Jomblo akut*`)
        if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
        const swn = args.join(" ")
        const pcknm = swn.split("|")[0];
        const atnm = swn.split("|")[1];
        if (m.quoted.isAnimated === true) {
          let media = await aka.downloadAndSaveMediaMessage(quoted)
          aka.sendMessage(from, { sticker: media, packname: pcknm, author: atnm }, { quoted: m })
        } else if (/image/.test(mime)) {
          let media = await quoted.download()
          let encmedia = await aka.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
          let media = await quoted.download()
          let encmedia = await aka.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
          await fs.unlinkSync(encmedia)
        } else {
          reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'smeme': case prefix + 'stickermeme': case prefix + 'stickmeme': {
        let { TelegraPh } = require('./lib/uploader')
        if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix}smeme textbawah|textatas`)
        swn = args.join(" ")

        atnm = swn.split("|")[0];
        pcknm = swn.split("|")[1];
        let atnmm = atnm ? atnm : ' '
        let pcknmm = pcknm ? pcknm : ' '
        reply(mess.wait)
        if (/image/.test(mime)) {
          let media = await aka.downloadAndSaveMediaMessage(quoted)
          mem = await TelegraPh(media)
          meme = await getBuffer(`https://api.memegen.link/images/custom/${encodeURIComponent(pcknmm)}/${encodeURIComponent(atnmm)}.png?background=${mem}`)
          let memek = await aka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
          await fs.unlinkSync(memek)
        } else {
          reply(`Khusus Untuk Video`)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      //────────────────────[ SEARCHING ]────────────────────

      case prefix + 'yts': case prefix + 'ytsearch': {
        if (!text) return reply(`Example : ${prefix + command} story wa anime`)
        let yts = require("yt-search")
        let search = await yts(text)
        var sections = [];
        var urut = 1
        for (let i of search.all) {
          const list = {
            title: 'Youtube Search',
            rows: [
              {
                title: `⭔ No : ${urut++} Video`,
                rowId: `${prefix}ytvideo ${i.url}`,
                description: `⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Video ID : ${i.videoId}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author}\n⭔ Url : ${i.url}`
              }, {
                title: `⭔ No : ${urut++} Audio`,
                rowId: `${prefix}ytaudio ${i.url}`,
                description: `⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Video ID : ${i.videoId}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author}\n⭔ Url : ${i.url}`
              },
            ]
          }
          sections.push(list)
        }
        var sendm10 = aka.sendMessage(
          from,
          {
            text: `Berikut Yt Search`,
            footer: global.namebot,
            title: "[ Yt Search 🔎 ]",
            buttonText: "Click and see search results➡️",
            sections
          }, { quoted: m }
        )
        /*
                        let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                        let no = 1
                        for (let i of search.all) {
                            teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                        }
                        aka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }},  caption: teks }, { quoted: m })
            
              */
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'google': {
        if (!text) return reply(`Example : ${prefix + command} fatih arridho`)
        let google = require('google-it')
        google({ 'query': text }).then(res => {
          let teks = `Google Search From : ${text}\n\n`
          for (let g of res) {
            teks += `⌕ *Title* : ${g.title}\n`
            teks += `⌕ *Description* : ${g.snippet}\n`
            teks += `⌕ *Link* : ${g.link}\n\n────────────────────────\n\n`
          }
          reply(teks)
        })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'gimage': {
        if (!text) return reply(`Example : ${prefix + command} kaori cicak`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
          n = result
          images = n[Math.floor(Math.random() * n.length)].url
          let buttons = [
            { buttonId: `${prefix}gimage ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }
          ]
          let buttonMessage = {
            image: { url: images },
            caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
            footer: aka.user.name,
            buttons: buttons,
            headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
          }
          aka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'dashboard':
        addCountCmd('#dashboard', sender, _cmd)
        var posi = await getPosiCmdUser(sender, _cmdUser)
        _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
        _cmd.sort((a, b) => (a.count < b.count) ? 1 : -1)
        var posi = await getPosiCmdUser(sender, _cmdUser)
        var jumlahCmd = _cmd.length
        if (jumlahCmd > 55) jumlahCmd = 55
        var jumlah = _cmdUser[posi].db.length
        if (jumlah > 20) jumlah = 20
        var totalUser = 0
        for (let x of _cmdUser[posi].db) {
          totalUser = totalUser + x.count
        }
        var urut = 1
        var urutt = 1
        var total = 0
        for (let o of _cmd) {
          total = total + o.count
        }
        var teks = `*AKA BOT DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
        teks += `*Most Command Global*\n`
        for (let u = 0; u < jumlahCmd; u++) {
          teks += `${urut++}• ${_cmd[u].nama} : ${_cmd[u].count}\n`
        }
        teks += `\n*Most Command User*\n`
        for (let i = 0; i < jumlah; i++) {
          teks += `${urutt++}• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
        }
        reply(teks)
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'play': case prefix + 'ytplay': {
        if (!text) return reply(`Example : ${prefix + command} story wa anime`)
        let yts = require("yt-search")
        yts(text).then(function(search) {
          let buttons = [
            { buttonId: `${prefix}ytmp33 ${search.all[0].url}`, buttonText: { displayText: '♫ Audio' }, type: 1 },
            { buttonId: `${prefix}ytmp44 ${search.all[0].url}`, buttonText: { displayText: '► Video' }, type: 1 }
          ]
          let buttonMessage = {
            image: { url: search.all[0].thumbnail },
            caption: `
⭔ Title : ${search.all[0].title}
⭔ Ext : Search
⭔ ID : ${search.all[0].videoId}
⭔ Duration : ${search.all[0].timestamp}
⭔ Viewers : ${search.all[0].views}
⭔ Upload At : ${search.all[0].ago}
⭔ Author : ${search.all[0].author.name}
⭔ Channel : ${search.all[0].author.url}
⭔ Description : ${search.all[0].description}
⭔ Url : ${search.all[0].url}`,
            footer: botname,
            buttons: buttons,
            headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
          }
          aka.sendMessage(m.chat, buttonMessage, { quoted: m })
        }).catch(function(error) {
          console.error(error);
          reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
          Laporerr(error)
        });
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ytmp3': case prefix + 'ytmp33': case prefix + 'ytaudio': {
        let { yta } = require('./lib/y2mate')
        if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
        if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_, Dan Bermain .tebak Untuk Mendapatkan Uang")
        !isPremium && kurangLimit(m.sender, 1)
        reply(replyLimit)
        if (args[0].includes('shorts')) {
          ikyy.yt.ytmp3(args[0]).then(function(ress) {
            console.log(ress);
            aka.sendMessage(m.chat, { document: { url: ress.result }, mimetype: 'audio/mpeg', fileName: `${ress.title}.mp3`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          })
        } else {
          ikyy.yt.ytmp3(args[0]).then(function(datmp3) {
            console.log(datmp3);
            var ress = datmp3.result
            dataa = axios.get(`https://tinyurl.com/api-create.php?url=${ress}`)
            reply(`*Link* : ${ress} \nklik Link diatas Untuk Download Manual Bila Video/audio Tidak Muncul`)
            //if (!Number(limitdata3.size.split('MB')[0])) return reply(`File Kamu Kebesaran\n*Link* : ${dataa.data} \nklik Link diatas Untuk Download manual`)
            if (Number(datmp3.size.split('MB')[0]) >= 100) return reply(`File Kamu Kebesaran\n*Link* : ${ress} \nklik Link diatas Untuk Download manual`)
            aka.sendMessage(m.chat, { document: { url: ress }, mimetype: 'audio/mpeg', fileName: `${datmp3.title}.mp3`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          })
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ytmp4': case prefix + 'ytmp44': case prefix + 'ytvideo': {
        let { ytv } = require('./lib/y2mate')
        if (!args[0]) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtF`)
        if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_, Dan Bermain .tebak Untuk Mendapatkan Uang")
        !isPremium && kurangLimit(m.sender, 1)
        reply(replyLimit)
        if (args[0].includes('shorts')) {
          ikyy.yt.ytmp4(args[0]).then(function(ress) {
            console.log(ress);
            aka.sendMessage(m.chat, { video: { url: ress.result }, mimetype: 'video/mp4', fileName: `${ress.title}.mp4`, caption: `⭔ Title : ${ress.title}\n⭔ Resolusi : ${ress.quality}\n⭔ Desc : ${ress.desc}` }, { quoted: m })
          })
        } else {
          ikyy.yt.ytmp4(args[0]).then(function(datmp4) {
            console.log(datmp4);
            var ress = datmp4.result
            dataa = axios.get(`https://tinyurl.com/api-create.php?url=${ress}`)
            reply(`*Link* : ${ress} \nklik Link diatas Untuk Download Manual Bila Video/audio Tidak Muncul`)
            //if (!Number(limitdata.size.split('MB')[0])) return reply(`File Kamu Kebesaran\n*Link* : ${dataa.data} \nklik Link diatas Untuk Download manual`)
            if (Number(datmp4.size.split('MB')[0]) >= 100) return reply(`File Kamu Kebesaran\n*Link* : ${ress} \nklik Link diatas Untuk Download manual`)
            aka.sendMessage(m.chat, { video: { url: ress }, mimetype: 'video/mp4', fileName: `${datmp4.tittle}.mp4`, caption: `⭔ Title : ${datmp4.title}\n⭔ Size : ${datmp4.size}\n⭔ Resolusi : ${datmp4.quality}\n⭔ Type : Mp4`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })

          })
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'getmusic': {
        let { yta } = require('./lib/y2mate')
        if (!text) return reply(`Example : ${prefix + command} 1`)
        if (!m.quoted) return reply('Reply Pesan')
        if (!m.quoted.isBaileys) return reply(`Hanya Bisa Membalas Pesan Dari Bot`)
        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
        if (!urls) return reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
        let quality = args[1] ? args[1] : '128kbps'
        let media = await yta(urls[text - 1], quality)
        if (media.filesize >= 100000) return reply('File Melebihi Batas ' + util.format(media))
        aka.sendImage(m.chat, media.thumb, `⌕ Title : ${media.title}\n⌕ File Size : ${media.filesizeF}\n⌕ Url : ${urls[text - 1]}\n⌕ Ext : MP3\n⌕ Resolusi : ${args[1] || '128kbps'}`, m)
        aka.sendMessage(m.chat, { document: await getBuffer(media.dl_link), mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'getvideo': {
        let { ytv } = require('./lib/y2mate')
        if (!text) return reply(`Example : ${prefix + command} 1`)
        if (!m.quoted) return reply('Reply Pesan')
        if (!m.quoted.isBaileys) return reply(`Hanya Bisa Membalas Pesan Dari Bot`)
        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
        if (!urls) return reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
        let quality = args[1] ? args[1] : '360p'
        let media = await ytv(urls[text - 1], quality)
        if (media.filesize >= 100000) return reply('File Melebihi Batas ' + util.format(media))
        aka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⌕ Title : ${media.title}\n⌕ File Size : ${media.filesizeF}\n⌕ Url : ${urls[text - 1]}\n⌕ Ext : MP3\n⌕ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'pinterest': case prefix + 'pin': {
        if (isUrl) return reply(`Jangan Gunakan Link.. Khusus untuk pencarian contoh\nExample : ${prefix + command} aesthetik`)
        if (!text) return reply(`Example : ${prefix + command} aesthetik`)
        reply(mess.wait)
        let { pinterest } = require('./lib/scraper')
        let anu = await pinterest(text)
        result = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [{ buttonId: `${prefix}pinterest ${text}`, buttonText: { displayText: '► NEXT' }, type: 1 }]
        //let buttons = []
        let buttonMessage = {
          image: { url: result },
          caption: `*Klik Next Untuk Melanjutkan*`,
          footer: aka.user.name,
          buttons: buttons,
          headerType: 4,
          contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
        }
        aka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      //────────────────────[ ANIMEH ]────────────────────

      case prefix + 'waifu': case prefix + 'megumin': case prefix + 'shinobu': case prefix + 'awoo': case prefix + 'neko': case prefix + 'bully': case prefix + 'cuddle': case prefix + 'hug': case prefix + 'cry': case prefix + 'kiss': case prefix + 'lick': case prefix + 'pat': case prefix + 'bonk': case prefix + 'yeet': {
        reply(mess.wait)
        let link
        if (/waifu/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/waifu`)
        if (/neko/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/neko`)
        if (/awoo/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/awoo`)
        if (/megumin/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/megumin`)
        if (/shinobu/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/shinobu`)
        if (/bully/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/bully`)
        if (/cuddle/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/cuddle`)
        if (/hug/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/hug`)
        if (/cry/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/cry`)
        if (/kiss/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/kiss`)
        if (/lick/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/lick`)
        if (/pat/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/pat`)
        if (/bonk/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/bonk`)
        if (/yeet/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/yeet`)
        let buttons = [{ buttonId: `${command}`, buttonText: { displayText: '► NEXT' }, type: 1 }]
        let buttonMessage = {
          image: { url: heriWibu.url },
          caption: `_*Yeah Boyh*_`,
          footer: aka.user.name,
          buttons: buttons,
          headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
        }
        aka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'coffe': case prefix + 'kopi': {
        let buttons = [
          { buttonId: `${prefix}coffe`, buttonText: { displayText: 'Next Image' }, type: 1 }
        ]
        let buttonMessage = {
          image: { url: 'https://coffee.alexflipnote.dev/random' },
          caption: `☕ Random Coffe`,
          footer: aka.user.name,
          buttons: buttons,
          headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
        }
        aka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'wallpaper': {
        if (!text) return reply(`Masukkan Query Title`)
        let { wallpaper } = require('./lib/scraper')
        let anu = await wallpaper(text)
        result = anu[Math.floor(Math.random() * anu.length)]
        console.log(result)
        let buttons = [
          { buttonId: `${prefix}wallpaper ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }
        ]
        let buttonMessage = {
          image: { url: result.image },
          caption: `⌕ Title : ${result.title}\n⌕ Category : ${result.type}\n⌕ Detail : ${result.source}\n⌕ Media Url : ${result.image || result.image || result.image}`,
          footer: aka.user.name,
          buttons: buttons,
          headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
        }
        aka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'wikimedia': {
        if (!text) return reply(`Masukkan Query Title`)
        let { wikimedia } = require('./lib/scraper')
        let anu = await wikimedia(text)
        result = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
          { buttonId: `${prefix}wikimedia ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }
        ]
        let buttonMessage = {
          image: { url: result.image },
          caption: `⌕ Title : ${result.title}\n⌕ Source : ${result.source}\n⌕ Media Url : ${result.image}`,
          footer: aka.user.name,
          buttons: buttons,
          headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
        }
        aka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'quotesanime': case prefix + 'quoteanime': {
        let { quotesAnime } = require('./lib/scraper')
        let anu = await quotesAnime()
        result = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
          { buttonId: `${prefix}quotesanime`, buttonText: { displayText: 'Next' }, type: 1 }
        ]
        let buttonMessage = {
          text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
          footer: 'Press The Button Below',
          buttons: buttons,
          headerType: 2
        }
        aka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'motivasi': case prefix + 'dilanquote': case prefix + 'bucinquote': case prefix + 'katasenja': case prefix + 'puisi': {
        let anu = await fetchJson(api('zenz', '/api/' + command, {}, 'apikey'))
        let buttons = [
          { buttonId: `${prefix}motivasi`, buttonText: { displayText: 'Next' }, type: 1 }
        ]
        let buttonMessage = {
          text: anu.result.message,
          footer: 'Press The Button Below',
          buttons: buttons,
          headerType: 2
        }
        aka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      //────────────────────[ TEXT PROO ]────────────────────

      case prefix + 'candy': case prefix + 'christmas': case prefix + '3dchristmas': case prefix + 'sparklechristmas':
      case prefix + 'deepsea': case prefix + 'scifi': case prefix + 'rainbow2': case prefix + 'waterpipe': case prefix + 'spooky':
      case prefix + 'pencil': case prefix + 'circuit': case prefix + 'discovery': case prefix + 'metalic': case prefix + 'fiction': case prefix + 'demon':
      case prefix + 'transformer': case prefix + 'berry': case prefix + 'thunder': case prefix + '.': case prefix + '3dstone2':
      case prefix + 'neonlight': case prefix + 'glitch': case prefix + 'harrypotter': case prefix + 'brokenglass': case prefix + 'papercut':
      case prefix + 'watercolor': case prefix + 'multicolor': case prefix + 'neondevil': case prefix + 'underwater': case prefix + 'graffitibike':
      case prefix + 'snow': case prefix + 'cloud': case prefix + 'honey': case prefix + 'ice': case prefix + 'fruitjuice': case prefix + 'biscuit': case prefix + 'wood':
      case prefix + 'chocolate': case prefix + 'strawberry': case prefix + 'matrix': case prefix + 'blood': case prefix + 'dropwater': case prefix + 'toxic':
      case prefix + 'lava': case prefix + 'rock': case prefix + 'bloodglas': case prefix + 'halloween': case prefix + 'darkgold': case prefix + 'joker': case prefix + 'wicker':
      case prefix + 'firework': case prefix + 'skeleton': case prefix + 'blackpink': case prefix + 'sand': case prefix + 'glue': case prefix + '1917': case prefix + 'leaves': case prefix + 'demon': {
        if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`)
        reply(mess.wait)
        let link
        if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
        if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
        if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
        if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
        if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
        if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
        if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
        if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
        if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
        if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
        if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
        if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
        if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
        if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
        if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
        if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
        if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
        if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
        if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
        if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
        if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
        if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
        if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
        if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
        if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
        if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
        if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
        if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
        if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
        if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
        if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
        if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
        if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
        if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
        if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
        if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
        if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
        if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
        if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
        if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
        if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
        if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
        if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
        if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
        if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
        if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
        if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
        if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
        if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
        if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
        if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
        if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
        if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
        if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
        if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
        if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
        if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
        let anu = await maker.textpro(link, q)
        aka.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        break

      case prefix + 'textmaker': {
        if (args.length < 1) return reply(`Example :\n${prefix + command} glitch/glow text`)
        if (args[0] === 'glitch') {
          if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
          let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
          aka.sendMessage(from, { image: { url: teds }, caption: `Made by ${global.botname}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        } else if (args[0] === 'glow') {
          if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
          let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
          aka.sendMessage(from, { image: { url: teds }, caption: `Made by ${global.botname}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        } else {
          reply(`*Text Maker List :*\n•> glitch\n•> glow`)
        }
      }
        break
      //logo maker
      case prefix + 'horror2': case prefix + 'whitebear': case prefix + 'thunder2': case prefix + 'blackpink': case prefix + 'neon': case prefix + 'matrix2': case prefix + 'sky': case prefix + 'magma': case prefix + 'sand': case prefix + 'pencil':
      case prefix + 'graffiti': case prefix + 'metallic': case prefix + 'steel': case prefix + 'underwater': case prefix + 'luxury': case prefix + 'glue2': case prefix + 'fabric': case prefix + 'neonlight': case prefix + 'lava': case prefix + 'toxic': case prefix + 'ancient':
      case prefix + 'christmas2': case prefix + 'sci_fi': case prefix + 'rainbow': case prefix + 'classic': case prefix + 'halloween2': case prefix + 'watercolor2': case prefix + 'halloweenfire': case prefix + 'writing': case prefix + 'foggy': case prefix + 'marvel':
      case prefix + 'skeleton2': case prefix + 'sketch': case prefix + 'wonderful': case prefix + 'multicolor2': case prefix + 'batman': case prefix + 'juice': {
        if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`)
        reply(mess.wait)
        let link
        if (/horror/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
        if (/whitebear/.test(command)) link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
        if (/thunder2/.test(command)) link = `https://textpro.me/create-thunder-text-effect-online-881.html`
        if (/blackpink/.test(command)) link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
        if (/neon/.test(command)) link = `https://textpro.me/neon-light-text-effect-online-882.html`
        if (/matrix2/.test(command)) link = `https://textpro.me/matrix-style-text-effect-online-884.html`
        if (/sky/.test(command)) link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
        if (/magma/.test(command)) link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
        if (/sand/.test(command)) link = `https://textpro.me/sand-writing-text-effect-online-990.html`
        if (/pencil/.test(command)) link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
        if (/graffiti/.test(command)) link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
        if (/metallic/.test(command)) link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
        if (/steel/.test(command)) link = `https://textpro.me/steel-text-effect-online-921.html`
        if (/underwater/.test(command)) link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
        if (/luxury/.test(command)) link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
        if (/glue2/.test(command)) link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
        if (/fabric/.test(command)) link = `https://textpro.me/fabric-text-effect-online-964.html`
        if (/neonlight/.test(command)) link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
        if (/lava/.test(command)) link = `https://textpro.me/lava-text-effect-online-914.html`
        if (/toxic/.test(command)) link = `https://textpro.me/toxic-text-effect-online-901.html`
        if (/ancient/.test(command)) link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
        if (/christmas2/.test(command)) link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
        if (/sci_fi/.test(command)) link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
        if (/rainbow/.test(command)) link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
        if (/classic/.test(command)) link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
        if (/watercolor2/.test(command)) link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
        if (/halloween2/.test(command)) link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
        if (/halloweenfire/.test(command)) link = `https://textpro.me/halloween-fire-text-effect-940.html`
        if (/writing/.test(command)) link = `https://textpro.me/sand-writing-text-effect-online-990.html`
        if (/foggy/.test(command)) link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
        if (/marvel/.test(command)) link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
        if (/skeleton2/.test(command)) link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
        if (/sketch/.test(command)) link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
        if (/wonderful/.test(command)) link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
        if (/collwall/.test(command)) link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
        if (/multicolor2/.test(command)) link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
        if (/batman/.test(command)) link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
        if (/juice/.test(command)) link = `https://textpro.me/fruit-juice-text-effect-861.html`
        let anu = await textpro(link, q)
        aka.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        break
      case prefix + 'wolf': case prefix + 'bear': case prefix + 'lion': case prefix + '3dspace': case prefix + 'glitch2': case prefix + 'glitch3': case prefix + 'pornhub': case prefix + 'retro': case prefix + 'horror': case prefix + '8bit': case prefix + 'cool': case prefix + 'pornhub2': case prefix + 'grafiti': case prefix + 'graffiti': case prefix + 'harrypot': case 'glitch3': {
        if (!q) return reply(`Example: ${prefix + command} ajg | ea`)
        reply(mess.wait)
        inilogo4 = args.join(" ")
        teks1 = q.split("|")[0]
        teks2 = q.split("|")[1]
        let link

        if (/cool/.test(command)) link = "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
        if (/pornhub/.test(command)) link = "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
        if (/retro/.test(command)) link = "https://textpro.me/create-3d-retro-text-effect-online-free-1065.html"
        if (/horror/.test(command)) link = "https://textpro.me/create-a-cinematic-horror-text-effect-1045.html"
        if (/8bit/.test(command)) link = "https://textpro.me/video-game-classic-8-bit-text-effect-1037.html"
        if (/glitch2/.test(command)) link = "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"
        if (/glitch3/.test(command)) link = "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
        if (/3dspace/.test(command)) link = "https://textpro.me/create-space-3d-text-effect-online-985.html"
        if (/lion/.test(command)) link = "https://textpro.me/create-lion-logo-mascot-online-938.html"
        if (/bear/.test(command)) link = "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html"
        if (/wolf/.test(command)) link = "https://textpro.me/create-wolf-logo-galaxy-online-936.html"
        if (/glitch3/.test(command)) link = "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
        if (/harrypot/.test(command)) link = "https://textpro.me/create-harry-potter-text-effect-online-1025.html"
        if (/blackpinkneon/.test(command)) link = "https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html"
        if (/grafiti/, /graffiti/.test(command)) link = "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
        if (/pornhub2/.test(command)) link = "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
        let anu = await maker.textpro(link, [`${teks1}`, `${teks2}`])
        aka.sendMessage(from, { image: { url: anu }, caption: "Here you go!", contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        break


      case prefix + 'carbon': case prefix + 'pencil': case prefix + 'natural': case prefix + 'thewall': case prefix + 'neonlight2': case prefix + 'summertime': case prefix + 'dropwater2': case prefix + 'joker': case prefix + 'holographic': case prefix + 'bokeh': case prefix + 'greenneon': case prefix + 'neon': case prefix + '3dneon': case prefix + 'glitch': case prefix + 'blackpink2': case prefix + 'blackpinkneon': case prefix + 'window': case prefix + 'thunder': case prefix + '3davengers': case prefix + '3dstone': case prefix + 'neondevil': case prefix + 'transformer': case prefix + 'papercut': case prefix + 'lion2': case prefix + 'waterdrop': case prefix + '3dbox':
        reply(mess.wait)
        let link
        if (/3dbox/.test(command)) link = "https://textpro.me/3d-box-text-effect-online-880.html"
        if (/waterdrop/.test(command)) link = "https://textpro.me/dropwater-text-effect-872.html"
        if (/lion2/.test(command)) link = "https://textpro.me/create-lion-logo-mascot-online-938.html"
        if (/papercut/.test(command)) link = "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
        if (/transformer/.test(command)) link = "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
        if (/neondevil/.test(command)) link = "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"
        if (/3dstone/.test(command)) link = "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"
        if (/3davengers/.test(command)) link = "https://textpro.me/create-3d-avengers-logo-online-974.html"
        if (/thunder/.test(command)) link = "https://textpro.me/online-thunder-text-effect-generator-1031.html"
        if (/window/.test(command)) link = "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"
        if (/blackpink2/.test(command)) link = "https://textpro.me/create-blackpink-logo-style-online-1001.html"
        if (/glitch/.test(command)) link = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"
        if (/3dneon/.test(command)) link = "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
        if (/neon/.test(command)) link = "https://textpro.me/neon-text-effect-online-879.html"
        if (/greenneon/.test(command)) link = "https://textpro.me/green-neon-text-effect-874.html"
        if (/bokeh/.test(command)) link = "https://textpro.me/bokeh-text-effect-876.html"
        if (/holographic/.test(command)) link = "https://textpro.me/holographic-3d-text-effect-975.html"
        if (/joker/.test(command)) link = "https://textpro.me/create-logo-joker-online-934.html"
        if (/dropwater2/.test(command)) link = "https://textpro.me/dropwater-text-effect-872.html"
        if (/summertime/.test(command)) link = "https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html"
        if (/neonlight2/.test(command)) link = "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
        if (/thewall/.test(command)) link = "https://textpro.me/break-wall-text-effect-871.html"
        if (/natural/.test(command)) link = "https://textpro.me/natural-leaves-text-effect-931.html"
        if (/carbon/.test(command)) link = "https://textpro.me/carbon-text-effect-833.html"
        if (/pencil/.test(command)) link = "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
        let anu = await maker.textpro(link, [`${q}`])
        aka.sendMessage(from, { image: { url: anu }, caption: "Here you go!", contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        break

      //────────────────────[ PRIMBON ]────────────────────

      case prefix + 'nomerhoki': case prefix + 'nomorhoki': {
        if (!Number(text)) return reply(`Example : ${prefix + command} 6288292024190`)
        let anu = await primbon.nomer_hoki(Number(text))
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nomor HP :* ${anu.message.nomer_hp}\n⌕ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⌕ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⌕ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'artimimpi': case prefix + 'tafsirmimpi': {
        if (!text) return reply(`Example : ${prefix + command} belanja`)
        let anu = await primbon.tafsir_mimpi(text)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Mimpi :* ${anu.message.mimpi}\n⌕ *Arti :* ${anu.message.arti}\n⌕ *Solusi :* ${anu.message.solusi}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ramalanjodoh': case prefix + 'ramaljodoh': {
        if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
        let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌕ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌕ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌕ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌕ *Hasil :* ${anu.message.result}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ramalanjodohbali': case prefix + 'ramaljodohbali': {
        if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
        let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌕ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌕ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌕ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌕ *Hasil :* ${anu.message.result}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'suamiistri': {
        if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
        let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama Suami :* ${anu.message.suami.nama}\n⌕ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⌕ *Nama Istri :* ${anu.message.istri.nama}\n⌕ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⌕ *Hasil :* ${anu.message.result}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ramalancinta': case prefix + 'ramalcinta': {
        if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
        let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌕ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌕ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌕ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌕ *Sisi Positif :* ${anu.message.sisi_positif}\n⌕ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'artinama': {
        if (!text) return reply(`Example : ${prefix + command} Dika Ardianta`)
        let anu = await primbon.arti_nama(text)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama :* ${anu.message.nama}\n⌕ *Arti :* ${anu.message.arti}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'kecocokannama': case prefix + 'cocoknama': {
        if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
        let [nama, tgl, bln, thn] = text.split`,`
        let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama :* ${anu.message.nama}\n⌕ *Lahir :* ${anu.message.tgl_lahir}\n⌕ *Life Path :* ${anu.message.life_path}\n⌕ *Destiny :* ${anu.message.destiny}\n⌕ *Destiny Desire :* ${anu.message.destiny_desire}\n⌕ *Personality :* ${anu.message.personality}\n⌕ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'kecocokanpasangan': case prefix + 'cocokpasangan': case prefix + 'pasangan': {
        if (!text) return reply(`Example : ${prefix + command} Dika|Novia`)
        let [nama1, nama2] = text.split`|`
        let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
        if (anu.status == false) return reply(anu.message)
        aka.sendImage(m.chat, anu.message.gambar, `⌕ *Nama Anda :* ${anu.message.nama_anda}\n⌕ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⌕ *Sisi Positif :* ${anu.message.sisi_positif}\n⌕ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'jadianpernikahan': case prefix + 'jadiannikah': {
        if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⌕ *karakteristik :* ${anu.message.karakteristik}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'sifatusaha': {
        if (!ext) return reply(`Example : ${command} 28, 12, 2021`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Lahir :* ${anu.message.hari_lahir}\n⌕ *Usaha :* ${anu.message.usaha}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'rejeki': case prefix + 'rezeki': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Lahir :* ${anu.message.hari_lahir}\n⌕ *Rezeki :* ${anu.message.rejeki}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'pekerjaan': case prefix + 'kerja': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Lahir :* ${anu.message.hari_lahir}\n⌕ *Pekerjaan :* ${anu.message.pekerjaan}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ramalannasib': case prefix + 'ramalnasib': case prefix + 'nasib': {
        if (!text) return reply(`Example : 7, 7, 2005`)
        swn = args.join(" ")
        tgl = swn.split("/")[0];
        bln = swn.split("/")[1];
        thn = swn.split("/")[2];
        let anu = await primbon.ramalan_nasib(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Analisa :* ${anu.message.analisa}\n⌕ *Angka Akar :* ${anu.message.angka_akar}\n⌕ *Sifat :* ${anu.message.sifat}\n⌕ *Elemen :* ${anu.message.elemen}\n⌕ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'potensipenyakit': case prefix + 'penyakit': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Analisa :* ${anu.message.analisa}\n⌕ *Sektor :* ${anu.message.sektor}\n⌕ *Elemen :* ${anu.message.elemen}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'artitarot': case prefix + 'tarot': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendImage(m.chat, anu.message.image, `⌕ *Lahir :* ${anu.message.tgl_lahir}\n⌕ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⌕ *Arti :* ${anu.message.arti}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'fengshui': {
        if (!text) return reply(`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
        let [nama, gender, tahun] = text.split`,`
        let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama :* ${anu.message.nama}\n⌕ *Lahir :* ${anu.message.tahun_lahir}\n⌕ *Gender :* ${anu.message.jenis_kelamin}\n⌕ *Angka Kua :* ${anu.message.angka_kua}\n⌕ *Kelompok :* ${anu.message.kelompok}\n⌕ *Karakter :* ${anu.message.karakter}\n⌕ *Sektor Baik :* ${anu.message.sektor_baik}\n⌕ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'haribaik': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.petung_hari_baik(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Lahir :* ${anu.message.tgl_lahir}\n⌕ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⌕ *Info :* ${anu.message.info}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'harisangar': case prefix + 'taliwangke': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Lahir :* ${anu.message.tgl_lahir}\n⌕ *Hasil :* ${anu.message.result}\n⌕ *Info :* ${anu.message.info}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'harinaas': case prefix + 'harisial': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Hari Lahir :* ${anu.message.hari_lahir}\n⌕ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⌕ *Hari Naas :* ${anu.message.hari_naas}\n⌕ *Info :* ${anu.message.catatan}\n⌕ *Catatan :* ${anu.message.info}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'nagahari': case prefix + 'harinaga': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Hari Lahir :* ${anu.message.hari_lahir}\n⌕ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⌕ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'arahrejeki': case prefix + 'arahrezeki': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Hari Lahir :* ${anu.message.hari_lahir}\n⌕ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⌕ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'peruntungan': {
        if (!text) return reply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
        let = [nama, tgl, bln, thn, untuk] = text.split`,`
        let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama :* ${anu.message.nama}\n⌕ *Lahir :* ${anu.message.tgl_lahir}\n⌕ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⌕ *Hasil :* ${anu.message.result}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'weton': case prefix + 'wetonjawa': {
        if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.weton_jawa(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Tanggal :* ${anu.message.tanggal}\n⌕ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⌕ *Watak Hari :* ${anu.message.watak_hari}\n⌕ *Naga Hari :* ${anu.message.naga_hari}\n⌕ *Jam Baik :* ${anu.message.jam_baik}\n⌕ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'sifat': case prefix + 'karakter': {
        if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
        let [nama, tgl, bln, thn] = text.split`,`
        let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama :* ${anu.message.nama}\n⌕ *Lahir :* ${anu.message.tgl_lahir}\n⌕ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'keberuntungan': {
        if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
        let [nama, tgl, bln, thn] = text.split`,`
        let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Nama :* ${anu.message.nama}\n⌕ *Lahir :* ${anu.message.tgl_lahir}\n⌕ *Hasil :* ${anu.message.result}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'memancing': {
        if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
        let [tgl, bln, thn] = text.split`,`
        let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Tanggal :* ${anu.message.tgl_memancing}\n⌕ *Hasil :* ${anu.message.result}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'masasubur': {
        if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
        let [tgl, bln, thn, siklus] = text.split`,`
        let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Hasil :* ${anu.message.result}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'zodiak': case prefix + 'zodiac': {
        if (!text) return reply(`Example : ${command} 7 7 2005`)
        let zodiak = [
          ["capricorn", new Date(1970, 0, 1)],
          ["aquarius", new Date(1970, 0, 20)],
          ["pisces", new Date(1970, 1, 19)],
          ["aries", new Date(1970, 2, 21)],
          ["taurus", new Date(1970, 3, 21)],
          ["gemini", new Date(1970, 4, 21)],
          ["cancer", new Date(1970, 5, 22)],
          ["leo", new Date(1970, 6, 23)],
          ["virgo", new Date(1970, 7, 23)],
          ["libra", new Date(1970, 8, 23)],
          ["scorpio", new Date(1970, 9, 23)],
          ["sagittarius", new Date(1970, 10, 22)],
          ["capricorn", new Date(1970, 11, 22)]
        ].reverse()

        function getZodiac(month, day) {
          let d = new Date(1970, month - 1, day)
          return zodiak.find(([_, _d]) => d >= _d)[0]
        }
        let date = new Date(text)
        if (date == 'Invalid Date') throw date
        let d = new Date()
        let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
        let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

        let zodiac = await getZodiac(birth[1], birth[2])

        let anu = await primbon.zodiak(zodiac)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Zodiak :* ${anu.message.zodiak}\n⌕ *Nomor :* ${anu.message.nomor_keberuntungan}\n⌕ *Aroma :* ${anu.message.aroma_keberuntungan}\n⌕ *Planet :* ${anu.message.planet_yang_mengitari}\n⌕ *Bunga :* ${anu.message.bunga_keberuntungan}\n⌕ *Warna :* ${anu.message.warna_keberuntungan}\n⌕ *Batu :* ${anu.message.batu_keberuntungan}\n⌕ *Elemen :* ${anu.message.elemen_keberuntungan}\n⌕ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⌕ *Catatan :* ${anu.message.catatan}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'shio': {
        if (!text) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
        let anu = await primbon.shio(text)
        if (anu.status == false) return reply(anu.message)
        aka.sendText(m.chat, `⌕ *Hasil :* ${anu.message}`, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'stalker': case prefix + 'stalk': {
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply('Limit Harian Anda Telah Habis')
        if (!text) return reply(`Example : ${prefix + command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
        let [type, id, zone] = args
        if (type.toLowerCase() == 'ff') {
          if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
          let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
          if (anu.status == false) return reply(anu.result.message)
          reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
        } else if (type.toLowerCase() == 'ml') {
          if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
          if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
          let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
          if (anu.status == false) return reply(anu.result.message)
          reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
        } else if (type.toLowerCase() == 'aov') {
          if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
          let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
          if (anu.status == false) return reply(anu.result.message)
          reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
        } else if (type.toLowerCase() == 'cod') {
          if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
          let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
          if (anu.status == false) return reply(anu.result.message)
          reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
        } else if (type.toLowerCase() == 'pb') {
          if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
          let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
          if (anu.status == false) return reply(anu.result.message)
          reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
        } else if (type.toLowerCase() == 'ig') {
          if (!id) return reply(`No Query username, Example : ${prefix + command} ig cak_haho`)
          let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
          if (anu.status == false) return reply(anu.result.message)
          aka.sendMedia(m.chat, anu.caption.profile_hd, '', `⌕ Full Name : ${anu.caption.full_name}\n⌕ User Name : ${anu.caption.user_name}\n⌕ ID ${anu.caption.user_id}\n⌕ Followers : ${anu.caption.followers}\n⌕ Following : ${anu.caption.following}\n⌕ Bussines : ${anu.caption.bussines}\n⌕ Profesional : ${anu.caption.profesional}\n⌕ Verified : ${anu.caption.verified}\n⌕ Private : ${anu.caption.private}\n⌕ Bio : ${anu.caption.biography}\n⌕ Bio Url : ${anu.caption.bio_url}`, m)
        } else if (type.toLowerCase() == 'npm') {
          if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
          let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
          if (anu.status == false) return reply(anu.result.message)
          reply(`⌕ Name : ${anu.name}\n⌕ Version : ${Object.keys(anu.versions)}\n⌕ Created : ${tanggal(anu.time.created)}\n⌕ Modified : ${tanggal(anu.time.modified)}\n⌕ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⌕ Description : ${anu.description}\n⌕ Homepage : ${anu.homepage}\n⌕ Keywords : ${anu.keywords}\n⌕ Author : ${anu.author.name}\n⌕ License : ${anu.license}\n⌕ Readme : ${anu.readme}`)
        } else {
          reply(`Example : ${prefix + command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      //────────────────────[ DOWNLOADER ]────────────────────

      case prefix + 'unduh':
        if (!q) return reply(`Penggunaan :\n*${prefix}unduh* mp4/jpg/mp3 link`)
        if (!args[1]) return reply("Linknya mana kak?")
        reply(mess.wait)
        if (args[0].toLowerCase() === 'mp4') {
          try {
            aka.sendMessage(from, { video: { url: args[1] }, caption: "Succes" }, { quoted: m })
          } catch {
            reply("Linknya Error")
          }
        } else if (args[0].toLowerCase() === 'jpg') {
          try {
            aka.sendMessage(from, { image: { url: args[1] }, caption: "Succes", contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          } catch {
            reply("Linknya Error")
          }
        } else if (args[0].toLowerCase() === 'mp3') {
          try {
            aka.sendMessage(m.chat, { audio: { url: args[1] }, mimetype: 'audio/mpeg', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          } catch {
            reply("Linknya Error")
          }
        } else {
          reply(`Penggunaan :\n*${prefix}unduh* mp4/jpg/mp3 link`)
        }
        break
      case prefix + 'tt': case prefix + 'ttnowm': case prefix + 'ttdl': case prefix + 'tiktok': case prefix + 'tiktokaudio': case prefix + 'tiktokvideo': case prefix + 'ttmp4': case prefix + 'ttmp3': case prefix + 'tiktoknowm': {
        if (!text) return reply('Masukkan Query Link!')
        if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`The link you provided is invalid`)
        if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_, Dan Bermain .tebak Untuk Mendapatkan Uang")
        !isPremium && kurangLimit(m.sender, 1)
        reply(replyLimit)
        ikyy.downloader.tiktok(args[0]).then(function(datik) {
          console.log(datik);
          const musim_duren_as = datik.result.video.nowm.video_url
          teks = `Author : ${datik.author_name}/${datik.author}\nDescription : ${datik.desc}`
          let buttons = [
            { buttonId: `${prefix}unduh mp3 ${musim_duren_as}`, buttonText: { displayText: 'Untuk Menjadikan Audio' }, type: 1 }
          ]
          let buttonMessage = {
            video: { url: musim_duren_as },
            caption: teks,
            footer: aka.user.name,
            buttons: buttons,
            headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
          }
          aka.sendMessage(m.chat, buttonMessage, { quoted: m })
        }).catch(function(error) {
          console.error(error);
          reply(`_[ ! ] Error Query Yang Anda Masukan Tidak Ada\nVideo Telah Dihapus Atau DI Private Oleh Pemilik`)
          Laporerr(error)
        });
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'ig': case prefix + 'igdl': case prefix + 'instagram': {
        if (!text) return reply('Masukkan Query Link!')
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('Link yang kamu berikan tidak.valid')
        if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_, Dan Bermain .tebak Untuk Mendapatkan Uang")
        !isPremium && kurangLimit(m.sender, 1)
        reply(replyLimit)
        let urlnya = text
        const options = {
          method: 'GET',
          url: 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index',
          params: { url: args[0] },
          headers: {
            'X-RapidAPI-Key': global.rapidkey,
            'X-RapidAPI-Host': 'instagram-story-downloader-media-downloader.p.rapidapi.com'
          }
        };

        axios.request(options).then(function(response) {
          console.log(response.data);
          let linck = response.data.media
          let linck1 = response.data.Type
          let desksz = response.data.title

          if (linck1.includes("Carousel")) {
            var sections = [];
            var urut = 1
            for (let i of linck) {
              const list = {
                title: 'Instagram Search',
                rows: [{
                  title: `⭔ No : ${urut++}`,
                  rowId: `${prefix}igunduh ${i}`,
                },
                ]
              }
              sections.push(list)
            }
            aka.sendMessage(from, { text: `Berikut Ig Search`, footer: global.namebot, title: "[ IG Search 🔎 ]", buttonText: "Click and see search results➡️", sections }, { quoted: m }
            )
          } else
            if (linck.includes("webp")) {
              aka.sendMessage(from, { image: { url: linck }, caption: `Caption : ${desksz}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
            } else
              if (linck.includes("mp4")) {
                aka.sendMessage(from, { video: { url: linck }, caption: `Caption : ${desksz}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
              } else
                if (linck.includes("jpg")) {
                  aka.sendMessage(from, { image: { url: linck }, caption: `Caption : ${desksz}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
                }
        }).catch(function(error) {
          console.error(error);
          Laporerr(error)
          reply(`_[ ! ] Error Query Yang Anda Masukan Tidak Ada\nVideo Telah Dihapus Atau DI Private Oleh Pemilik`)
        });
      }

        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'igunduh':
        if (args[0].includes("webp")) {
              aka.sendMessage(from, { image: { url: args[0] }, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
            } else
              if (args[0].includes("mp4")) {
                aka.sendMessage(from, { video: { url: args[0] }, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
              } else
                if (args[0].includes("jpg")) {
                  aka.sendMessage(from, { image: { url: args[0] }, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
                }
        break
      case prefix + 'mediafire': {
        if (!text) return reply(`Masukkan Query Link!`)
        const { mediafireDl } = require('./lib/mediafire.js')
        if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_, Dan Bermain .tebak Untuk Mendapatkan Uang")
        !isPremium && kurangLimit(m.sender, 1)
        reply(replyLimit)
        const baby1 = await mediafireDl(text)
        console.log(baby1)
        if (baby1[0].size.split('MB')[0] >= 100) return reply('*File Over Limit* ' + util.format(baby1))
        const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
        reply(`${result4}`)
        aka.sendMessage(m.chat, { document: { url: baby1[0].link }, fileName: baby1[0].nama, mimetype: baby1[0].mime, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m }).catch((err) => reply(mess.error))
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'fbdl': case prefix + 'fb': case prefix + 'facebook': {
        if (!text) return reply(mess.linkm)
        if (!args[0].includes('facebook.com') && !isUrl(args[0])) return reply(`The link you provided is invalid`)
        if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_, Dan Bermain .tebak Untuk Mendapatkan Uang")
        !isPremium && kurangLimit(m.sender, 1)
        reply(replyLimit)
        var options = {
          method: 'POST',
          url: 'https://facebook17.p.rapidapi.com/api/facebook/links',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': global.rapidkey,
            'X-RapidAPI-Host': 'facebook17.p.rapidapi.com'
          },
          data: { "url": args[0] }
        };

        axios.request(options).then(function(response) {
          console.log(response.data);
          let hacho = response.data.urls[0].url
          let aerrors = response.data.message
          let desksz = `Success`
          if (hacho.includes("mp4")) {
            aka.sendMessage(from, { video: { url: hacho }, caption: desksz }, { quoted: m })
          } else
            if (hacho.includes("jpg")) {
              aka.sendMessage(from, { image: { url: hacho }, caption: desksz, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
            } else
              if (aerrors.includes('The given data was invalid.')) {
                teks = `Linknya Rusak Atau Private`
                aka.sendMessage(from, { text: teks }, { quoted: m })
              }
        }).catch(function(error) {
          console.error(error);
          Laporerr(error)
          reply(`_[ ! ] Error Query Yang Anda Masukan Tidak Ada\nVideo Telah Dihapus Atau DI Private Oleh Pemilik`)
        });
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'joox': case prefix + 'jooxdl': {
        if (!text) return reply('No Query Title')
        if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_, Dan Bermain .tebak Untuk Mendapatkan Uang")
        !isPremium && kurangLimit(m.sender, 1)
        reply(replyLimit)
        let anu = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${global.lolhuman}&query=${text}`)
        let msg = await aka.sendImage(m.chat, anu.result.image, `⌕ Title : ${anu.result.info.song}\n⌕ Album : ${anu.result.info.album}\n⌕ Singer : ${anu.result.info.song}\n⌕ Publish : ${anu.result.info.date}\n⌕ Lirik :\n${anu.result.audio[0].link}`, m)
        aka.sendMessage(m.chat, { audio: { url: anu.result.audio[0].link }, mimetype: 'audio/mpeg', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: msg })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'umma': case prefix + 'ummadl': {
        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
        let { umma } = require('./lib) scraper')
        let anu = await umma(isUrl(text)[0])
        if (anu.type == 'video') {
          let buttons = [
            { buttonId: `${prefix}ytmp3 ${anu.media[0]} 128kbps`, buttonText: { displayText: '♫ Audio' }, type: 1 },
            { buttonId: `${prefix}ytmp4 ${anu.media[0]} 360p`, buttonText: { displayText: '► Video' }, type: 1 }
          ]
          let buttonMessage = {
            image: { url: anu.author.profilePic },
            caption: `
⌕ Title : ${anu.title}
⌕ Author : ${anu.author.name}
⌕ Like : ${anu.like}
⌕ Caption : ${anu.caption}
⌕ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
            footer: aka.user.name,
            buttons,
            headerType: 4, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } }
          }
          aka.sendMessage(m.chat, buttonMessage, { quoted: m })
        } else if (anu.type == 'image') {
          anu.media.map(async (url) => {
            aka.sendMessage(m.chat, { image: { url }, caption: `⌕ Title : ${anu.title}\n⌕ Author : ${anu.author.name}\n⌕ Like : ${anu.like}\n⌕ Caption : ${anu.caption}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
          })
        }
      }
        break

      //────────────────────[ ISLAMIC FEATURE ]────────────────────

      case prefix + 'ringtone': {
        if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
        let anu = await ringtone(text)
        let result = anu[Math.floor(Math.random() * anu.length)]
        aka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        break
      case prefix + 'iqra': {
        oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
        if (!text) throw oh
        yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
        aka.sendMessage(m.chat, { document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m }).catch((err) => reply(oh))
      }
        break
      case prefix + 'juzamma': {
        if (args[0] === 'pdf') {
          reply(mess.wait)
          aka.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf' }, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        } else if (args[0] === 'docx') {
          reply(mess.wait)
          aka.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx' }, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        } else if (args[0] === 'pptx') {
          reply(mess.wait)
          aka.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        } else if (args[0] === 'xlsx') {
          reply(mess.wait)
          aka.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx' }, mimetype: 'application/vnd.openxmlformats-officedocument.sprereplyheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        } else {
          reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
        }
      }
        break
      case prefix + 'hadis': case prefix + 'hadist': {
        if (!args[0]) return reply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
        if (!args[1]) return reply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
        try {
          let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
          let { number, arab, id } = res.find(v => v.number == args[1])
          reply(`No. ${number}

${arab}

${id}`)
        } catch (e) {
          reply(`Hadis tidak ditemukan !`)
        }
      }
        break
      case prefix + 'alquran': {
        if (!args[0]) return reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
        if (!args[1]) return reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
        let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
        let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
        reply(txt)
        aka.sendMessage(m.chat, { audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        break
      case prefix + 'tafsirsurah': {
        if (!args[0]) return reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
        if (!args[1]) return reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
        let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
        let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
        reply(txt)
      }
        break

      //────────────────────[ VOICE CHANGER ]────────────────────

      case prefix + 'bass': case prefix + 'blown': case prefix + 'deep': case prefix + 'earrape': case prefix + 'fast': case prefix + 'fat': case prefix + 'nightcore': case prefix + 'reverse': case prefix + 'robot': case prefix + 'slow': case prefix + 'smooth': case prefix + 'tupai':
        try {
          let set
          if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
          if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
          if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
          if (/earrape/.test(command)) set = '-af volume=12'
          if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
          if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
          if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
          if (/reverse/.test(command)) set = '-filter_complex "areverse"'
          if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
          if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
          if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
          if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
          if (/audio/.test(mime)) {
            reply(mess.wait)
            let media = await aka.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(err)
              let buff = fs.readFileSync(ran)
              aka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
              fs.unlinkSync(ran)
            })
          } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
        } catch (e) {
          reply(e)
        }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      //────────────────────[ DATABASE ]────────────────────

      case prefix + 'setcmd': {
        if (!m.quoted) return reply(`Reply Pesan!`)
        if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
        if (!text) return reply(`Untuk Command Apa?`)
        let hash = m.quoted.fileSha256.toString('base64')
        if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply(`You have no permission to change this sticker command`)
        global.db.sticker[hash] = {
          text,
          mentionedJid: m.mentionedJid,
          creator: m.sender,
          at: + new Date,
          locked: false,
        }
        reply(`Done!`)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'delcmd': {
        let hash = m.quoted.fileSha256.toString('base64')
        if (!hash) return reply(`Tidak ada hash`)
        if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply(`You have no permission to delete this sticker command`)
        delete global.db.sticker[hash]
        reply(`Done!`)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'listcmd': {
        let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
        aka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], []) })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'lockcmd': {
        if (!isCreator) return reply(mess.owner)
        if (!m.quoted) return reply(`Reply Pesan!`)
        if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
        let hash = m.quoted.fileSha256.toString('base64')
        if (!(hash in global.db.sticker)) return reply(`Hash not found in database`)
        global.db.sticker[hash].locked = !/^un/i.test(command)
        reply('Done!')
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'addmsg': {
        if (!m.quoted) return reply(`Reply Message Yang Ingin Disave Di Database`)
        if (!text) return reply(`Example : ${prefix + command} nama file`)
        let msgs = global.db.database
        if (text.toLowerCase() in msgs) return reply(`${text} telah terdaftar di list pesan`)
        msgs[text.toLowerCase()] = quoted.fakeObj
        reply(`Berhasil menambahkan pesan di list pesan sebagai ${text}

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'getmsg': {
        if (!text) return reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
        let msgs = global.db.database
        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar di list pesan`)
        aka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'listmsg': {
        let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
        let teks = '「 LIST DATABASE 」\n\n'
        for (let i of seplit) {
          teks += `⌕ *Name :* ${i.nama}\n⌕ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
        }
        reply(teks)
      }
        break
      case prefix + 'delmsg': case prefix + 'deletemsg': {
        let msgs = global.db.database
        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
        delete msgs[text.toLowerCase()]
        reply(`Berhasil menghapus '${text}' dari list pesan`)
      }
        break
      //────────────────────[ OWNER MENU ]────────────────────

      case prefix + 'public': {
        if (!isCreator) return reply(mess.owner)
        aka.public = true
        reply('Sukse Change To Public Usage')
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'self': {
        if (!isCreator) return reply(mess.owner)
        aka.public = false
        reply('Sukses Change To Self Usage')
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      //────────────────────[ INFO BOT ]────────────────────

      case prefix + 'ping': case prefix + 'botstatus': case prefix + 'statusbot': {
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
        }, {
          speed: 0,
          total: 0,
          times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
          }
        })
        let timestamp = speed()
        let latensi = speed() - timestamp
        neww = performance.now()
        oldd = performance.now()
        respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
        reply(respon)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'speedtest': {
        reply('Testing Speed...')
        let o
        try {
          o = await exec('python speed.py')
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) return reply(stdout)
          if (stderr.trim()) return reply(stderr)
        }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'owner': case prefix + 'creator': {
        aka.sendContact(m.chat, global.owner, m)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      //────────────────────[ JUAL BELINYA OM ]────────────────────

      case prefix + 'beli': case prefix + 'buy': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        if (!args[0]) return reply(`Mau Beli Apa?\n\n1. potion, 1 Potion = 10000 Uang\n2. umpan, 1 umpan = 2500 Uang\n3. limit, 1 Limit = 25000 Uang\n\nExample: ${command} limit 2`)
        let anu = args[1]
        if (args[0] === 'potion') {
          let noh = 10000 * anu
          if (!args[1]) return reply(`Example : ${command} potion 2\n 1 Potion = 10000 Money`)
          if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
          !isPremium && kurangMonay(m.sender, noh)
          var apalu = anu * 1
          addPotion(m.sender, apalu)
          setTimeout(() => {
            reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Potion Kamu* : ${getPotion(m.sender)}`)
          }, 2000)
        } else
          if (args[0] === 'umpan') {
            let noh = 2500 * anu
            if (!args[1]) return reply(`Example : ${command} umpan 2\n 1 umpan = 2500 Money`)
            if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
            !isPremium && kurangMonay(m.sender, noh)
            var apalu = anu * 1
            addUmpan(m.sender, apalu)
            setTimeout(() => {
              reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*umpan kamu* : ${getUmpan(m.sender)}`)
            }, 2000)
          } else
            if (args[0] === 'limit') {
              let noh = 25000 * anu
              if (!args[1]) return reply(`Example : ${command} limit 2\n 1 Limit = 25000 Money`)
              if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
              !isPremium && kurangMonay(m.sender, noh)
              var apalu = anu * 1
              !isPremium && addLimit(m.sender, apalu)
              setTimeout(() => {
                reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
              }, 2000)
            } else { reply(`Format Salah!\nContoh ${command}jual ikan 1`) }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'sell': case prefix + 'jual': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        if (!args[0]) return reply(`Mau Jual Apa??\n1. ikan, 1 ikan = 1500 Uang\n2. ayam, 1 ayam = 2500 Uang\n3. kelinci, 1 kelinci = 3000 Uang\n4. domba, 1 domba = 5000 Uang\n5. sapi, 1 sapi = 10000 Uang\n6. gajah, 1 gajah = 15000 Uang\n7. besi, 1 besi = 15000 Uang\n8. emas, 1 emas = 50000 Uang\n9. emerald, 1 Emerald = 100000 Uang\nExample : ${command} ikan 2`)
        let anu = args[1]
        if (args[0] === 'ikan') {
          if (isIkan < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
          if (!args[1]) return reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 Money`)
          kurangIkan(m.sender, anu)
          let monaynya = 1500 * anu
          !isPremium && addMonay(m.sender, monaynya)
          setTimeout(() => {
            reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Ikan Kamu* : ${getIkan(m.sender)}`)
          }, 2000)
        } else
          if (args[0] === 'ayam') {
            if (isAyam < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
            if (!args[1]) return reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 Money`)
            kurangAyam(m.sender, anu)
            let monaynya = 2500 * anu
            !isPremium && addMonay(m.sender, monaynya)
            setTimeout(() => {
              reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Ayam Kamu* : ${getAyam(m.sender)}`)
            }, 2000)
          } else
            if (args[0] === 'kelinci') {
              if (isKelinci < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
              if (!args[1]) return reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 Money`)
              kurangKelinci(m.sender, anu)
              let monaynya = 3000 * anu
              !isPremium && addMonay(m.sender, monaynya)
              setTimeout(() => {
                reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa kelinci Kamu* : ${getKelinci(m.sender)}`)
              }, 2000)
            } else
              if (args[0] === 'domba') {
                if (isDomba < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 money`)
                kurangDomba(m.sender, anu)
                let monaynya = 5000 * anu
                !isPremium && addMonay(m.sender, monaynya)
                setTimeout(() => {
                  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa domba Kamu* : ${getDomba(m.sender)}`)
                }, 2000)
              } else
                if (args[0] === 'sapi') {
                  if (isSapi < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                  if (!args[1]) return reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 Money`)
                  kurangSapi(m.sender, anu)
                  let monaynya = 10000 * anu
                  !isPremium && addMonay(m.sender, monaynya)
                  setTimeout(() => {
                    reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Sapi Kamu* : ${getSapi(m.sender)}`)
                  }, 2000)
                } else
                  if (args[0] === 'gajah') {
                    if (isGajah < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                    if (!args[1]) return reply(`Example : ${prefix + command} gajag 2\n 1 gajah = 15000 Money`)
                    kurangGajah(m.sender, anu)
                    let monaynya = 15000 * anu
                    !isPremium && addMonay(m.sender, monaynya)
                    setTimeout(() => {
                      reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Gajah Kamu* : ${getGajah(m.sender)}`)
                    }, 2000)
                  } else
                    if (args[0] === 'besi') {
                      if (isBesi < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                      if (!args[1]) return reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 Money`)
                      kurangBesi(m.sender, anu)
                      let monaynya = 16000 * anu
                      !isPremium && addMonay(m.sender, monaynya)
                      setTimeout(() => {
                        reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Besi Kamu* : ${getBesi(m.sender)}`)
                      }, 2000)
                    } else
                      if (args[0] === 'emas') {
                        if (isEmas < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                        if (!args[1]) return reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 Money`)
                        kurangEmas(m.sender, anu)
                        let monaynya = 50000 * anu
                        !isPremium && addMonay(m.sender, monaynya)
                        setTimeout(() => {
                          reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Emas Kamu* : ${getEmas(m.sender)}`)
                        }, 2000)
                      } else
                        if (args[0] === 'emerald') {
                          if (isEmerald < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                          if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
                          kurangEmerald(m.sender, anu)
                          let monaynya = 100000 * anu
                          !isPremium && addMonay(m.sender, monaynya)
                          setTimeout(() => {
                            reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Emerald Kamu* : ${getEmerald(m.sender)}`)
                          }, 2000)
                        } else { reply(`Format Salah!\nContoh ${command}jual ikan 1`) }

      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'mycre':
        if (!isCreator) return reply('Khusus Owner')
        if (!m.quoted && !Number(args[0])) return reply('Reply pesannya/nomornya')
        var num = m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        var XeonBotInc1 = await getBuffer(global.flaming + `User's Inventory`)
        let teksehmazeh = `_[ 👩🏻‍💼INFO USER @${num.split("@")[0]}👨🏻‍💼 ]_\n\n*❤️Your Blood* : ${getDarah(num)}\n*◻️️Your besi* : ${getBesi(num)}\n*🌟Your emas* : ${getEmas(num)}\n*💎Your Emerald* : ${getEmerald(num)}\n*⏺️Your Limit* : ${getLimit(num)}\n*💰Your Money* : ${getMonay(num)}\n*🧪Your Potion* : ${getPotion(num)}\n\n_[ 🐺HUNT RESULT🐺 ]_\n*🐟ikan* : ${getIkan(num)}\n*🐔ayam* : ${getAyam(num)}\n*🐇kelinci* : ${getKelinci(num)}\n*🐑domba* : ${getDomba(num)}\n*🐄sapi* : ${getSapi(num)}\n*🐘gajaht* : ${getGajah(num)}\n\n_*${pushname}*_`
        aka.sendMessage(from, { image: XeonBotInc1, caption: teksehmazeh, mentions: [num], contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'transfer': case prefix + 'tf': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        if (!isCreator) return reply(mess.owner)
        if (!q) return reply(`Mau Tf Kemana? \nExample : ${prefix + command} uang atau limit nonya/jumlah`)
        swn = args.join(" ")
        apanya = swn.split("/")[0];
        nomor = swn.split("/")[1];
        jumlah = swn.split("/")[2];
        if (!q.includes('/')) return reply(`Wajib Menggunakan /`)
        if (nomor.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (nomor.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        var num = m.quoted ? m.quoted.sender : nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        var numss = `${nomor}@s.whatsapp.net`
        var anuu = jumlah
        if (apanya === 'uang') {
          if (isMonay < anuu) return reply(`Kau Tidak Mempunyai Uang Lagi Untuk Transksi Ini`)
          if (!nomor) return reply(`Example : ${prefix + command} uang 6281248249833/1000`)
          !isPremium && kurangMonay(m.sender, anuu)
          let monaynya = 1 * anuu
          addMonay(num, monaynya)
          setTimeout(() => {
            reply(`Transfer Uang sebanyak ${anuu} berhasil\n\nSisa Uang Kamu : ${getMonay(m.sender)}\nSisa Uang Tujuan : ${getMonay(num)}`)
          }, 2000)
        } else
          if (apanya === 'limit') {
            if (isLimit < anuu) return reply(`Kau Tidak Mempunyai Limit Lagi Untuk Transksi Ini`)
            if (!nomor) return reply(`Example : ${prefix + command} limit 6281248249833/1000`)
            !isPremium && kurangLimit(m.sender, anuu)
            let monaynya = 1 * anuu
            addLimit(num, monaynya)
            setTimeout(() => {
              reply(`Transfer Limit sebanyak ${jumlah} berhasil\n\nSisa Limit Kamu : ${getLimit(m.sender)}\nSisa Limit Tujuan : ${getLimit(num)}`)
            }, 2000)
          }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'limit': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        var XeonBotInc1 = await getBuffer(global.flaming + `User's Limit`)
        teks = `Limit kamu ${getLimit(m.sender)} Dan Uang Kamu ${getMonay(m.sender)}`
        aka.sendMessage(from, { image: XeonBotInc1, caption: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'inventori': case prefix + 'inventory': case prefix + 'my': case prefix + 'profile': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        var XeonBotInc1 = await getBuffer(global.flaming + `User's Inventory`)
        let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n*❤️Your Blood* : ${getDarah(m.sender)}\n*◻️️Your besi* : ${getBesi(m.sender)}\n*🌟Your emas* : ${getEmas(m.sender)}\n*💎Your Emerald* : ${getEmerald(m.sender)}\n*⏺️Your Limit* : ${getLimit(m.sender)}\n*💰Your Money* : ${getMonay(m.sender)}\n*🧪Your Potion* : ${getPotion(m.sender)}\n\n_[ 🐺HUNT RESULT🐺 ]_\n*🐟ikan* : ${getIkan(m.sender)}\n*🐔ayam* : ${getAyam(m.sender)}\n*🐇kelinci* : ${getKelinci(m.sender)}\n*🐑domba* : ${getDomba(m.sender)}\n*🐄sapi* : ${getSapi(m.sender)}\n*🐘gajaht* : ${getGajah(m.sender)}\n\n_*${pushname}*_`
        aka.sendMessage(from, { image: XeonBotInc1, caption: teksehmazeh, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'heal': {
        if (!isCekDarah < 1) return reply('Kamu hanya bisa heal ketika darah kamu 0')
        if (isCekDarah > 100) return reply('Darah kamu sudah penuh')
        if (isPotion < 1) return reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_')
        addDarah(m.sender, 100)
        kurangPotion(m.sender, 1)
        reply('Berhasil, darah kamu sudah full')
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'mining': case prefix + 'mine': {
        if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`)
        let besi = [1, 1, 3, 0, 2, 1, 1, 1, 3, 1, 4, 1, 1]
        let emas = [0, 1, 1, 2, 0, 0, 1, 0, 1, 0, 1, 2]
        let emerald = [1, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 1]
        var darahmu = Math.ceil(Math.random() * 10)
        var besinya = besi[Math.floor(Math.random() * besi.length)]
        var emasnya = emas[Math.floor(Math.random() * emas.length)]
        var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
        setTimeout(() => {
          aka.sendMessage(from, { image: { url: './storage/image/tambang.jpg' }, caption: `[ MINING RESULT ]\n*Darah Berkurang 10*\n*besi* : ${besinya}\n*emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } } } }, { quoted: m })
        }, 7000)
        setTimeout(() => {
          aka.sendMessage(from, { text: `@${m.sender.split("@")[0]} Started Mining🎣`, mentions: [m.sender] }, { quoted: m })
        }, 1500)
        kurangDarah(m.sender, darahmu)
        addBesi(m.sender, besinya)
        addEmas(m.sended, emasnya)
        addEmerald(m.sender, emeraldnya)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'berburu': {
        //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
        if (isCekDarah < 1) return reply('Darah kamu habis, cobalah heal menggunakan potion')
        let luka = ["Tertusuk duri saat berburu", "Terpeleset ke jurang saat berburu", "Tercakar hewan buas", "Tidak berhati-hati", "Terjerat akar", "Terjatuh saat berburu"]
        let location = ["Hutan rimba", "Hutan Amazon", "Hutan tropis", "Padang rumput", "Hutan afrika", "Pegunungan"]
        var darahmu = Math.ceil(Math.random() * 15)
        var ikanmu = Math.ceil(Math.random() * 10)
        var ayam = Math.ceil(Math.random() * 8)
        var kelinci = Math.ceil(Math.random() * 7)
        var dombanya = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1]
        var sapinya = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1]
        var gajahnya = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1]
        var domba = dombanya[Math.floor(Math.random() * dombanya.length)]
        var sapi = sapinya[Math.floor(Math.random() * sapinya.length)]
        var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
        var lukanya = luka[Math.floor(Math.random() * luka.length)]
        var lokasinya = location[Math.floor(Math.random() * location.length)]
        if (lokasinya === 'Hutan rimba') {
          var image = './storage/image/rimba.jpg'
        } else
          if (lokasinya === 'Hutan Amazon') {
            var image = './storage/image/amazon.jpg'
          } else
            if (lokasinya === 'Hutan tropis') {
              var image = './storage/image/tropis.jpg'
            } else
              if (lokasinya === 'Padang rumput') {
                var image = './storage/image/padang_rumput.jpg'
              } else
                if (lokasinya === 'Hutan afrika') {
                  var image = './storage/image/afrika.jpg'
                } else
                  if (lokasinya === 'Pegunungan') {
                    var image = './storage/image/pegunungan.jpg'
                  }
        setTimeout(() => {
          let teksehmazeh = `_[ HASIL BURUAN ]_\n*🐟Ikan* : ${ikanmu}\n*🐔Ayam* : ${ayam}\n*🐇Kelinci* : ${kelinci}\n*🐑Domba* : ${domba}\n*🐄Sapi* : ${sapi}\n*🐘Gajah* : ${gajah}\n\n_[ INFO ]_\n*Lokasi* : ${lokasinya}\n*Terluka* : ${lukanya}, darah ${darahmu}\n*Sisa darah* : ${getDarah(m.sender)}\n`
          aka.sendMessage(from, { image: { url: image }, caption: teksehmazeh, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        }, 5000)
        setTimeout(() => {
          aka.sendMessage(from, { text: `@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`, mentions: [m.sender] }, { quoted: m })
        }, 1000)
        addIkan(m.sender, ikanmu)
        addAyam(m.sender, ayam)
        addKelinci(m.sender, kelinci)
        addDomba(m.sender, domba)
        addSapi(m.sender, sapi)
        addGajah(m.sender, gajah)
        kurangDarah(m.sender, darahmu)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break

      //────────────────────[ MAIN MENU HOOOOOOHHH ]────────────────────
      case prefix + 'restart':
        if (!isCreator) return reply('Khusus Owner')
        await sleep(3000)
        process.exit()
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'node':
        if (!isCreator) return reply('Khusus Owner')
        if (!q) return
        var o
        try {
          o = await exec(q)
        } catch (e) {
          o = e
        } finally {
          var { stdout, stderr } = o
          if (stdout.trim()) return reply(stdout)
          if (stderr.trim()) return reply(stderr)
        }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case prefix + 'menu': case prefix + 'help': case prefix + '?': {
        var buffer = global.flaming + `Menu Command`
        //var buffer = fs.readFileSync(`./media/menu.jpg`)
        anuuu = `Hai kak ${pushname}, have a nice day:)
   
✘ *INFO - BOT*
⫹⫺ *Bot Name:* _${global.botname}_
⫹⫺ *Owner Name:* _${global.ownername}_
⫹⫺ *Runtime:* _${runtime(process.uptime())}_
⫹⫺ *Gc Bot:* _${global.gc}_
⫹⫺ *Tanggal:* _${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
⫹⫺ *Waktu:* _${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_ 
⫹⫺ *Library:* _Baileys-Md_

✘ *Group*
   ◦ ${prefix}linkgroup
   ◦ ${prefix}ephemeral [option]
   ◦ ${prefix}setppgc [image]
   ◦ ${prefix}setname [text]
   ◦ ${prefix}setdesc [text]
   ◦ ${prefix}group [option]
   ◦ ${prefix}editinfo [option]
   ◦ ${prefix}add @user
   ◦ ${prefix}kick @user
   ◦ ${prefix}hidetag [text]
   ◦ ${prefix}tagall [text]
   ◦ ${prefix}antilink [on/off]
   ◦ ${prefix}mute [on/off]
   ◦ ${prefix}promote @user
   ◦ ${prefix}demote @user
   ◦ ${prefix}vote [text]
   ◦ ${prefix}devote
   ◦ ${prefix}upvote
   ◦ ${prefix}cekvote
   ◦ ${prefix}hapusvote

✘ *Downloader*
   ◦ ${prefix}tiktoknowm [url]
   ◦ ${prefix}tiktokwm [url]
   ◦ ${prefix}tiktokmp3 [url]
   ◦ ${prefix}instagram [url]
   ◦ ${prefix}twitter [url]
   ◦ ${prefix}twittermp3 [url]
   ◦ ${prefix}facebook [url]
   ◦ ${prefix}pinterestdl [url]
   ◦ ${prefix}ytmp3 [url]
   ◦ ${prefix}ytmp4 [url]
   ◦ ${prefix}getmusic [query]
   ◦ ${prefix}getvideo [query]
   ◦ ${prefix}umma [url]
   ◦ ${prefix}joox [query]
   ◦ ${prefix}soundcloud [url]

✘ *Searching*
   ◦ ${prefix}play [query]
   ◦ ${prefix}yts [query]
   ◦ ${prefix}google [query]
   ◦ ${prefix}gimage [query]
   ◦ ${prefix}pinterest [query]
   ◦ ${prefix}wallpaper [query]
   ◦ ${prefix}wikimedia [query]
   ◦ ${prefix}ytsearch [query]
   ◦ ${prefix}ringtone [query]
   ◦ ${prefix}stalk [option] [query]

✘ *Random*
   ◦ ${prefix}coffe
   ◦ ${prefix}quotesanime
   ◦ ${prefix}motivasi
   ◦ ${prefix}dilanquote
   ◦ ${prefix}bucinquote
   ◦ ${prefix}katasenja
   ◦ ${prefix}puisi
   ◦ ${prefix}couple

✘ *Anime*
   ◦ ${prefix}waifu
   ◦ ${prefix}megumin
   ◦ ${prefix}shinobu
   ◦ ${prefix}awoo
   ◦ ${prefix}neko
   ◦ ${prefix}bully
   ◦ ${prefix}cuddle
   ◦ ${prefix}cry
   ◦ ${prefix}hug
   ◦ ${prefix}kiss
   ◦ ${prefix}lick
   ◦ ${prefix}pat
   ◦ ${prefix}bonk
   ◦ ${prefix}yeet

✘ *Fun*
   ◦ ${prefix}halah
   ◦ ${prefix}hilih
   ◦ ${prefix}huluh
   ◦ ${prefix}heleh
   ◦ ${prefix}holoh
   ◦ ${prefix}jadian
   ◦ ${prefix}jodohku
   ◦ ${prefix}delttt
   ◦ ${prefix}tictactoe
   ◦ ${prefix}family100
   ◦ ${prefix}tebak [option]
   ◦ ${prefix}math [mode]
   ◦ ${prefix}suitpvp [@tag]

✘ *Primbon*
   ◦ ${prefix}nomorhoki
   ◦ ${prefix}artimimpi
   ◦ ${prefix}artinama
   ◦ ${prefix}ramaljodoh
   ◦ ${prefix}ramaljodohbali
   ◦ ${prefix}suamiistri
   ◦ ${prefix}ramalcinta
   ◦ ${prefix}cocoknama
   ◦ ${prefix}pasangan
   ◦ ${prefix}jadiannikah
   ◦ ${prefix}sifatusaha
   ◦ ${prefix}rezeki
   ◦ ${prefix}pekerjaan
   ◦ ${prefix}nasib
   ◦ ${prefix}penyakit
   ◦ ${prefix}tarot
   ◦ ${prefix}fengshui
   ◦ ${prefix}haribaik
   ◦ ${prefix}harisangar
   ◦ ${prefix}harisial
   ◦ ${prefix}nagahari
   ◦ ${prefix}arahrezeki
   ◦ ${prefix}peruntungan
   ◦ ${prefix}weton
   ◦ ${prefix}karakter
   ◦ ${prefix}keberuntungan
   ◦ ${prefix}memancing
   ◦ ${prefix}masasubur
   ◦ ${prefix}zodiak
   ◦ ${prefix}shio

✘ *Convert*
   ◦ ${prefix}toimage
   ◦ ${prefix}sticker
   ◦ ${prefix}swm
   ◦ ${prefix}smeme
   ◦ ${prefix}emojimix
   ◦ ${prefix}partick
   ◦ ${prefix}gura
   ◦ ${prefix}ttp
   ◦ ${prefix}attp
   ◦ ${prefix}doge
   ◦ ${prefix}lovestick
   ◦ ${prefix}tovideo
   ◦ ${prefix}togif
   ◦ ${prefix}tourl
   ◦ ${prefix}tovn
   ◦ ${prefix}tomp3
   ◦ ${prefix}toaudio
   ◦ ${prefix}ebinary
   ◦ ${prefix}dbinary
   ◦ ${prefix}styletext

✘ *Main*
   ◦ ${prefix}ping
   ◦ ${prefix}owner
   ◦ ${prefix}menu / ${prefix}help / ${prefix}?
   ◦ ${prefix}delete
   ◦ ${prefix}infochat
   ◦ ${prefix}quoted
   ◦ ${prefix}listpc
   ◦ ${prefix}listgc
   ◦ ${prefix}listonline
   ◦ ${prefix}speedtest

✘ *Database*
   ◦ ${prefix}setcmd
   ◦ ${prefix}listcmd
   ◦ ${prefix}delcmd
   ◦ ${prefix}lockcmd
   ◦ ${prefix}addmsg
   ◦ ${prefix}listmsg
   ◦ ${prefix}getmsg
   ◦ ${prefix}delmsg

✘ *Islam*
   ◦ ${prefix}iqra
   ◦ ${prefix}hadist
   ◦ ${prefix}alquran
   ◦ ${prefix}juzamma
   ◦ ${prefix}tafsirsurah

✘ *Voice Changer*
   ◦ ${prefix}bass
   ◦ ${prefix}blown
   ◦ ${prefix}deep
   ◦ ${prefix}earrape
   ◦ ${prefix}fast
   ◦ ${prefix}fat
   ◦ ${prefix}nightcore
   ◦ ${prefix}reverse
   ◦ ${prefix}robot
   ◦ ${prefix}slow
   ◦ ${prefix}tupai

   ✘ *Textpro*
   ◦ ${prefix}candy
   ◦ ${prefix}christmas
   ◦ ${prefix}3dchristmas
   ◦ ${prefix}sparklechristmas
   ◦ ${prefix}deepsea
   ◦ ${prefix}scifi
   ◦ ${prefix}rainbow2
   ◦ ${prefix}waterpipe
   ◦ ${prefix}spooky 
   ◦ ${prefix}pencil
   ◦ ${prefix}circuit
   ◦ ${prefix}discovery
   ◦ ${prefix}metalic
   ◦ ${prefix}fiction
   ◦ ${prefix}demon 
   ◦ ${prefix}transformer
   ◦ ${prefix}berry
   ◦ ${prefix}thunder
   ◦ ${prefix}3dstone2 
   ◦ ${prefix}neonlight
   ◦ ${prefix}glitch
   ◦ ${prefix}harrypotter
   ◦ ${prefix}brokenglass
   ◦ ${prefix}papercut 
   ◦ ${prefix}watercolor
   ◦ ${prefix}multicolor
   ◦ ${prefix}neondevil
   ◦ ${prefix}underwater
   ◦ ${prefix}graffitibike
   ◦ ${prefix}snow
   ◦ ${prefix}cloud
   ◦ ${prefix}honey
   ◦ ${prefix}ice
   ◦ ${prefix}fruitjuice
   ◦ ${prefix}biscuit
   ◦ ${prefix}wood 
   ◦ ${prefix}chocolate
   ◦ ${prefix}strawberry
   ◦ ${prefix}matrix
   ◦ ${prefix}blood
   ◦ ${prefix}dropwater
   ◦ ${prefix}toxic 
   ◦ ${prefix}lava
   ◦ ${prefix}rock
   ◦ ${prefix}bloodglas
   ◦ ${prefix}halloween
   ◦ ${prefix}darkgold
   ◦ ${prefix}joker
   ◦ ${prefix}wicker
   ◦ ${prefix}firework
   ◦ ${prefix}skeleton
   ◦ ${prefix}blackpink
   ◦ ${prefix}sand
   ◦ ${prefix}glue
   ◦ ${prefix}1917
   ◦ ${prefix}leaves
   ◦ ${prefix}demon 
   ◦ ${prefix}textmaker 
   ◦ ${prefix}horror
   ◦ ${prefix}whitebear
   ◦ ${prefix}thunder2
   ◦ ${prefix}blackpink
   ◦ ${prefix}neon
   ◦ ${prefix}matrix2
   ◦ ${prefix}sky
   ◦ ${prefix}magma
   ◦ ${prefix}sand
   ◦ ${prefix}pencil 
   ◦ ${prefix}graffiti
   ◦ ${prefix}metallic
   ◦ ${prefix}steel
   ◦ ${prefix}underwater
   ◦ ${prefix}luxury
   ◦ ${prefix}glue2
   ◦ ${prefix}fabric
   ◦ ${prefix}neonlight
   ◦ ${prefix}lava
   ◦ ${prefix}toxic
   ◦ ${prefix}ancient 
   ◦ ${prefix}christmas2
   ◦ ${prefix}sci_fi
   ◦ ${prefix}rainbow
   ◦ ${prefix}classic
   ◦ ${prefix}halloween2
   ◦ ${prefix}watercolor2
   ◦ ${prefix}halloweenfire
   ◦ ${prefix}writing
   ◦ ${prefix}foggy
   ◦ ${prefix}marvel 
   ◦ ${prefix}skeleton2
   ◦ ${prefix}sketch
   ◦ ${prefix}wonderful
   ◦ ${prefix}cool
   ◦ ${prefix}multicolor2
   ◦ ${prefix}batman
   ◦ ${prefix}juice
   ◦ ${prefix}pornhub
   ◦ ${prefix}retro
   ◦ ${prefix}horror2
   ◦ ${prefix}8bit
   ◦ ${prefix}glitch3
   ◦ ${prefix}3dbox
   ◦ ${prefix}waterdrop
   ◦ ${prefix}lion2
   ◦ ${prefix}papercut
   ◦ ${prefix}transformer
   ◦ ${prefix}harrypot
   ◦ ${prefix}neondevil
   ◦ ${prefix}3dstone
   ◦ ${prefix}3davengers
   ◦ ${prefix}thunder
   ◦ ${prefix}window
   ◦ ${prefix}blackpinkneon
   ◦ ${prefix}graffiti
   ◦ ${prefix}grafiti
   ◦ ${prefix}pornhub2
   ◦ ${prefix}blackpink2
   ◦ ${prefix}glitch2
   ◦ ${prefix}glitch3
   ◦ ${prefix}3dspace
   ◦ ${prefix}lion
   ◦ ${prefix}3dneon
   ◦ ${prefix}neon
   ◦ ${prefix}greenneon
   ◦ ${prefix}bokeh
   ◦ ${prefix}holographic
   ◦ ${prefix}bear
   ◦ ${prefix}wolf
   ◦ ${prefix}joker
   ◦ ${prefix}dropwater2
   ◦ ${prefix}summertime
   ◦ ${prefix}neonlight2
   ◦ ${prefix}thewall
   ◦ ${prefix}natural
   ◦ ${prefix}carbon
   ◦ ${prefix}pencil
   
✘ *Owner*
   ◦ ${prefix}react [emoji]
   ◦ ${prefix}chat [option]
   ◦ ${prefix}join [link]
   ◦ ${prefix}leave
   ◦ ${prefix}block @user
   ◦ ${prefix}unblock @user
   ◦ ${prefix}bcgroup [text]
   ◦ ${prefix}bcall [text]
   ◦ ${prefix}setppbot [image]
   ◦ ${prefix}setexif
`
        var button = [{ buttonId: `${prefix}dashboard`, buttonText: { displayText: `Dashboard` }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: `Owner` }, type: 1 }]
        aka.sendMessage(m.chat, { caption: `${anuuu}`, location: { jpegThumbnail: await reSize(buffer, 200, 200) }, buttons: button, footer: botname, mentions: [m.sender] }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      //────────────────────[ BATAS TEMAN ]────────────────────
      default:
        if (budy.startsWith('=>')) {
          if (!isCreator) return reply(mess.owner)
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return reply(bang)
          }
          try {
            reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
          } catch (e) {
            reply(String(e))
          }
        }

        if (budy.startsWith('>')) {
          if (!isCreator) return reply(mess.owner)
          try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
          } catch (err) {
            await reply(String(err))
          }
        }

        if (budy.startsWith('$')) {
          if (!isCreator) return reply(mess.owner)
          exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(err)
            if (stdout) return reply(stdout)
          })
        }

        if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
          this.anonymous = this.anonymous ? this.anonymous : {}
          let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
          if (room) {
            if (/^.*(next|leave|start)/.test(m.text)) return
            if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
            let other = [room.a, room.b].find(user => user !== m.sender)
            m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
              contextInfo: {
                ...m.msg.contextInfo,
                forwardingScore: 0,
                isForwarded: true,
                participant: other
              }
            } : {})
          }
          return !0
        }

        //Anti-Tag
        if (budy.includes(`${global.ownertag}`)) {
          if (antitags === false) return
          if (!m.isGroup) return
          if (m.key.fromMe) return
          sendNye = fs.readFileSync('./media/yourtag.webp')
          aka.sendReadReceipt(m.chat, m.sender, [m.key.id])
          aka.sendMessage(from, { sticker: sendNye, contextInfo: { forwardingScore: 800, isForwarded: true } }, { quoted: m })
        }

        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith('broadcast')) return
          if (m.isBaileys) return
          let msgs = global.db.database
          if (!(budy.toLowerCase() in msgs)) return
          aka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
        }
    }


  } catch (err) {
    m.reply(util.format(err))
  }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
