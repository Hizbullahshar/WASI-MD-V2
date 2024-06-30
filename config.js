//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sharhizbullah36@gmail.com";
global.location = "Karachi,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923278974102@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/FioZaOezu5sJ5Kyxjl8wmB";
global.website = process.env.GURL || "https://chat.whatsapp.com/FioZaOezu5sJ5Kyxjl8wmB";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/nkhEnwc.mp4";
global.devs = "923278974102";
global.sudo = process.env.SUDO || "923278974102";
global.owner = process.env.OWNER_NUMBER || "+255674477908";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0phMlJzYkRKdnVzd0IrWGtaM3BOYVpTZXk4aGxLeExBRjFoUy9TVkswND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGNTRE9pd2p4VXgrMmo0U3lvb1h5cXlyRVhHcFNncEJYRnhCelozZjd3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQXpoL1hiQTVQb05KeVJwcXNJQWhkbUg2Y20xb1QreU1EYk5rdk5tdGxnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDc0F1NUdtRkdjOW1Dd2toYnZ1LzIrS1JRMEpTb0x1TGdKR2hkcUcyRkRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLYk4vaDJacnJid3cvb2dmUlhlZlQ2bTEwN3Q4OG1sQ0h2YlFLSkFsa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9rZEhxL3JyVkpYQXZaUDNqUElFZE5zSWRGM0pZRzJqL2cwOWpWTTVybEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlEVXl3VXBuNGhHNHkyZEtqcmtvTWtmWjNXYmhRMkxsUzFIOTg3ZGwwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDliRk9pUFNmdmNIVk5LTE1xZGZBZm9NdVY4ZHJjL3FUZW1QV3VHY0NnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhldEhuVmQxR3d0dHdvUGVjekNCMTA0azNTeW13VSswZTdJQ3V2YUVnV05BMGlBbEVGRWFxNjVwMVFrcFd2bFIxaHNXRSthU0FuR1g2SmQrM3dKT2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJWaVdVVjFndzkwNWt2RUNteG5HeFQ0WjFpSmQ1VS93akI0aGtlYit5WWlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2TWJEYW9fSFItU2lxNVhPLWwxTmlnIiwicGhvbmVJZCI6ImUzODkxODIyLTgwNTMtNDYyOC1hODFiLTQ3Yjg0MTc1ZjU5OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0a0ZCUkVmQXQwb3h4WTRGR05Hc3NQTi8wTEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHdsdFJBOGltL1BIdUF4VC9QQkFNY1BYcGtrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjROOFdEQUFYIiwibWUiOnsiaWQiOiIyNTU2NzQ0Nzc5MDg6MTlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05tTnpma0ZFTHZBZ3JRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZ1VU5PRS9icmxpNkhsUW9qcmpKcFNGcnhGYngzakQwSUpBVThyWGorU2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNlaGlEYndlVE5WTjNacWdrZWJ4ZDZ6RmJmU1k1VG13SUx1d1BTSFZ3YU9vUGpFRHlSdGU0TElLUDdpV250Z1dobGlpQ2poeWUvMXMvR2VCOEFpUkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHcmxIdWYzODhGRjI0TkpHbHA3TmJtNzVsUFRvcmIrR3RsQjZtdzFqZkFTN2RaZVQ1R2RiS3Q2QmJhTjZSZnBzdG5RaGJaMEp3aXdnaFlRT041Z0Fodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3NDQ3NzkwODoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlcmxEVGhQMjY1WXVoNVVLSTY0eWFVaGE4Ulc4ZDR3OUNDUUZQSzE0L2tuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzA1NjcyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFoaCJ9    "
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙷𝙴𝚂𝙾𝚈𝙰𝙼 𝚇𝙳",
  author: process.env.PACK_AUTHER || "ᴀʟᴀɴ ᴡᴀʟᴋᴇʀ",
  packname: process.env.PACK_NAME || "ᴍᴀᴅᴇ ʙʏ",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "ℝ𝕚𝕔𝕙𝕚𝕖 𝕨𝕒 𝕤𝕒𝕣𝕒𝕙",
  errorChat: process.env.ERROR_CHAT || "923278974102",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
