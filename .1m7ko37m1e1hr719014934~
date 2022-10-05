const fs = require("fs")
const chalk = require("chalk")
require("../../settings")


var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var prefix = /^[0-9°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
let head = `*╭───╼[ _${global.botname}_ ]╾──➲*`
let left = "*│*"
let branch = "*├*"
let bracketmenu = "*┞─╼「"
let F = "」*"
let A = "*┟*"
let B = "*┞*"
let stick = "*╿*"
let borderlist = "*╭╾───────────────╼╮*"
let borderlistend = "*╰╾───────────────╼╯*"
let opener = "*╭─────────────────╮*"
let closing = "*╰─────────────────╯*"
let headtqto = "*╭╾─「 _Thanks To✨_ 」╾───╮*"
let endbordertqto = "*╰╾───────────────╾╯*"
let end = "*╰╾────────────────╼*"
let link1 = ('_『Link』_')
let query = ('_『Query』_')
exports.tqto = () => {
return `
𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨
› Dika Ardnt
› ZackMans
› Rifza
› Deff
› All Friends`
}
exports.animeMenu = () => {
return `
${head}
${branch} ${prefix}waifu
${branch} ${prefix}awoo
${branch} ${prefix}megumin
${branch} ${prefix}neko
${branch} ${prefix}shinobu
${branch} ${prefix}bully
${branch} ${prefix}hug
${branch} ${prefix}cuddle
${branch} ${prefix}cry
${branch} ${prefix}kiss
${branch} ${prefix}lick
${branch} ${prefix}pat
${branch} ${prefix}bonk
${branch} ${prefix}yeet
${end}
*Anime Featured*`
}
exports.randomtextMenu = () => {
return `
${head}
${branch} ${prefix}cerpen <query in the list>
${branch} ${prefix}quotes
${end}
*Random Text Featured*
`
}
exports.convertMenu = () => {
return `
${head}
${branch} ${prefix}sticker
${branch} ${prefix}stickerwm 
${branch} ${prefix}tomp3 
${branch} ${prefix}tovn
${branch} ${prefix}togif 
${branch} ${prefix}tourl 
${branch} ${prefix}trinyul
${branch} ${prefix}shortlink
${branch} ${prefix}tomp4 
${branch} ${prefix}toimage 
${end}
*Convert Featured*
`
}
exports.searchMenu = () => {
return `
${head}
${branch} ${prefix}gimage 
${branch} ${prefix}ytsearch 
${branch} ${prefix}searchgc 
${branch} ${prefix}happymod 
${branch} ${prefix}servermc 
${branch} ${prefix}mcpedl 
${branch} ${prefix}google 
${branch} ${prefix}pinterest
${end}
*Search Featured*
`
}
exports.downloadMenu = () => {
return `
${head}
${branch} ${prefix}instagram 
${branch} ${prefix}tiktok
${branch} ${prefix}play 
${branch} ${prefix}ytdl
${branch} ${prefix}unduh mp4/jpeg link
${end}
*Download Featured*
`
}
exports.grupMenu = () => {
return `
${head}
${branch} ${prefix}welcome <on/off>
${branch} ${prefix}autorevoke <on/off>
${branch} ${prefix}antilink <on/off>
${branch} ${prefix}linkgroup 
${branch} ${prefix}setppgc 
${branch} ${prefix}setname 
${branch} ${prefix}setdesc 
${branch} ${prefix}ephemeral 
${branch} ${prefix}hidetag 
${branch} ${prefix}tagall 
${branch} ${prefix}promote 
${branch} ${prefix}demote
${branch} ${prefix}add 
${branch} ${prefix}kick 
${branch} ${prefix}revoke 
${branch} ${prefix}group <open/close>
${branch} ${prefix}editinfo <open/close>
${branch} ${prefix}leave
${end}
*Grup Featured*
`
}
exports.audioMenu = () => {
	return `
	${head}
	${branch} ${prefix}bass
	${branch} ${prefix}blown
	${branch} ${prefix}deep
	${branch} ${prefix}earrape
	${branch} ${prefix}fast
	${branch} ${prefix}fat
	${branch} ${prefix}nihgtcore
	${branch} ${prefix}reverse
	${branch} ${prefix}robot
	${branch} ${prefix}slow
	${branch} ${prefix}smooth
	${branch} ${prefix}tupai
	${end}
	*Audio Featured*
	`
	}
exports.toolsMenu = () => {
return `
${head}
${branch} ${prefix}timegrub
${branch} ${prefix}time
${branch} ${prefix}getidgc
${branch} ${prefix}join
${branch} ${prefix}kalkulator
${branch} ${prefix}nulis
${end}
*Tools Featured*
`
}
exports.funMenu = () => {
return `
${head}
${branch} ${prefix}halah 
${branch} ${prefix}hilih 
${branch} ${prefix}huluh 
${branch} ${prefix}heleh 
${branch} ${prefix}holoh 
${branch} ${prefix}math 
${branch} ${prefix}tictactoe 
${branch} ${prefix}delttt 
${branch} ${prefix}tebakgambar
${branch} ${prefix}kuismath
${branch} ${prefix}tebakkimia
${branch} ${prefix}asahotak
${branch} ${prefix}tebakkalimat
${branch} ${prefix}susunkata
${branch} ${prefix}caklontong
${branch} ${prefix}tekateki
${branch} ${prefix}tebakkabupaten
${branch} ${prefix}tebakanime
${branch} ${prefix}tebakbendera
${branch} ${prefix}family100 
${branch} ${prefix}suitpvp 
${end}
*Fun Featured*
`
}
exports.stickerTelegramMenu = () => {
return `
${head}
${branch} ${prefix}emoji 
${branch} ${prefix}emojimix 
${branch} ${prefix}emojimix2
${branch} ${prefix}attp 
${branch} ${prefix}ttp
${branch} ${prefix}gurastick
${branch} ${prefix}doge
${branch} ${prefix}patrick
${branch} ${prefix}bucinp
${end}
*Sticker Telegram Featured*
`
}
exports.textproMenu = () => {
return `
${head}
${branch} ${prefix}3dbox   
${branch} ${prefix}drapwater   
${branch} ${prefix}lion2   
${branch} ${prefix}papercut   
${branch} ${prefix}transformer   
${branch} ${prefix}herryp   
${branch} ${prefix}neondevil   
${branch} ${prefix}3dstone   
${branch} ${prefix}3davengers   
${branch} ${prefix}thunder   
${branch} ${prefix}window   
${branch} ${prefix}graffiti   
${branch} ${prefix}pornhub   
${branch} ${prefix}glitch   
${branch} ${prefix}blackping   
${branch} ${prefix}glitch3   
${branch} ${prefix}glitch2   
${branch} ${prefix}3dspace   
${branch} ${prefix}lion   
${branch} ${prefix}3dneon   
${branch} ${prefix}neon   
${branch} ${prefix}greenneon   
${branch} ${prefix}bokeh   
${branch} ${prefix}hollographic   
${branch} ${prefix}bear   
${branch} ${prefix}wolf   
${branch} ${prefix}joker   
${branch} ${prefix}dropwater   
${branch} ${prefix}neonlight   
${branch} ${prefix}thewall   
${branch} ${prefix}natural   
${branch} ${prefix}carbon   
${branch} ${prefix}pencil   
${branch} ${prefix}blackpink  
${branch} ${prefix}neon  
${branch} ${prefix}greenneon  
${branch} ${prefix}advanceglow  
${branch} ${prefix}futureneon  
${branch} ${prefix}sandwriting  
${branch} ${prefix}sandsummer  
${branch} ${prefix}sandengraved  
${branch} ${prefix}metaldark  
${branch} ${prefix}neonlight  
${branch} ${prefix}holographic  
${branch} ${prefix}text1917  
${branch} ${prefix}minion  
${branch} ${prefix}deluxesilver  
${branch} ${prefix}newyearcard  
${branch} ${prefix}bloodfrosted  
${branch} ${prefix}halloween  
${branch} ${prefix}jokerlogo  
${branch} ${prefix}fireworksparkle  
${branch} ${prefix}natureleaves  
${branch} ${prefix}bokeh  
${branch} ${prefix}toxic  
${branch} ${prefix}strawberry  
${branch} ${prefix}box3d  
${branch} ${prefix}roadwarning  
${branch} ${prefix}icecold  
${branch} ${prefix}luxury  
${branch} ${prefix}cloud  
${branch} ${prefix}summersand  
${branch} ${prefix}horrorblood  
${branch} ${prefix}thunder  
${end}
*Textpro Featured*
`
}
exports.infoMenu = () => {
return `
${head}
${branch} ${prefix}merdeka-news 
${branch} ${prefix}kontan-news 
${branch} ${prefix}cnbc-news 
${branch} ${prefix}tribun-news 
${branch} ${prefix}indozone-news 
${branch} ${prefix}kompas-news 
${branch} ${prefix}detik-news 
${branch} ${prefix}daily-news 
${branch} ${prefix}inews-news 
${branch} ${prefix}okezone-news 
${branch} ${prefix}sindo-news 
${branch} ${prefix}tempo-news 
${branch} ${prefix}antara-news 
${branch} ${prefix}cnn-news 
${branch} ${prefix}fajar-news 
${branch} ${prefix}gempa
${branch} ${prefix}gempanow
${end}
*Information Featured*
`
}
exports.storageMenu = () => {
return `
${head}
${branch} ${prefix}addimage
${branch} ${prefix}listimg
${branch} ${prefix}addaudio
${branch} ${prefix}listvn
${branch} ${prefix}addvideo
${branch} ${prefix}listmp4
${branch} ${prefix}setcmd 
${branch} ${prefix}listcmd 
${branch} ${prefix}delcmd 
${branch} ${prefix}lockcmd 
${branch} ${prefix}addmsg 
${branch} ${prefix}listmsg 
${branch} ${prefix}getmsg 
${branch} ${prefix}delmsg 
${end}
*Storage Featured*
`
}
exports.otherMenu = () => {
return `
${head}
${branch} ${prefix}whatmusic
${branch} ${prefix}owner 
${branch} ${prefix}catalog
${branch} ${prefix}mcserver 
${branch} ${prefix}sc 
${branch} ${prefix}ping 
${branch} ${prefix}afk
${branch} ${prefix}delete 
${branch} ${prefix}infochat 
${branch} ${prefix}report
${branch} ${prefix}donate 
${branch} ${prefix}listonline
${end}
*Other Featured*
`
}
exports.ownerMenu = () => {
return `
${head}
${branch} ${prefix}modeprefix
${branch} ${prefix}setprefix
${branch} ${prefix}self 
${branch} ${prefix}sewa <add/del>
${branch} ${prefix}listsewa 
${branch} ${prefix}public 
${branch} ${prefix}bcall 
${branch} ${prefix}bcgroup 
${branch} ${prefix}chat 
${branch} ${prefix}antitag 
${branch} ${prefix}ban <add/del>
${branch} ${prefix}cowner <add/del>
${branch}> / => / $
${end}
*Owner Featured*
`
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})