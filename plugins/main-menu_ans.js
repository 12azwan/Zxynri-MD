const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
Hallo user zifa👋, Saya adalah zifabotz WhatsApp Multi Device yang di buat oleh Rozi.
Zifabotz ini bisa membantu kamu atau mempermudah kamu membuat sesuatu atau pun mendownload sesuatu seperti:
*Vidio tiktok , Vidio yt , membuat stiker DLL.*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '[❗] Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: '🔮GroupBot🔮',
               url: gc
             }

           },
                {
               urlButton: {
               displayText: '🐻Istagram creator🐻',
               url: web
             }

           },
               {
             quickReplyButton: {
               displayText: 'Owner Bot',
               id: '.owner',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Source Code',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'COMMAND',
               id: '.zifa',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(menu|help|\?)$/i
handler.help = ['menu']
module.exports = handler
