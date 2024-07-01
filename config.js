const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝒕𝒉𝒊𝒔 𝒃𝒐𝒕 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝑾𝒂𝒕𝒔𝒐𝒏 𝒙𝒅''" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263 78 962 2747";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_43_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDQxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgODgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieUdDelFlRm9QQmp5U1RucnF2UFdUT0V3NlJYazhvQTVaazl3aDUrNTR6WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1IxUmZvRVNRLUNDNk5hODgzUXROZ1wiLFxuICBcInBob25lSWRcIjogXCIwNzkzODkzOC01YmY3LTRhYmMtODU5Ny03MWQ4ZDlkYTM0NTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTQ5LFxuICAgICAgNjMsXG4gICAgICAzNSxcbiAgICAgIDQsXG4gICAgICAxOTcsXG4gICAgICA2MCxcbiAgICAgIDQ1LFxuICAgICAgMjEzLFxuICAgICAgNTcsXG4gICAgICA4NixcbiAgICAgIDIxLFxuICAgICAgMTQ4LFxuICAgICAgNDEsXG4gICAgICAxMjIsXG4gICAgICA2NyxcbiAgICAgIDIzMixcbiAgICAgIDIyMyxcbiAgICAgIDcsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAxNzksXG4gICAgICAxMSxcbiAgICAgIDEsXG4gICAgICAxNDAsXG4gICAgICAyMTYsXG4gICAgICAwLFxuICAgICAgMjMzLFxuICAgICAgODksXG4gICAgICA1MixcbiAgICAgIDIyLFxuICAgICAgMjQxLFxuICAgICAgMzAsXG4gICAgICAyMDEsXG4gICAgICA4NCxcbiAgICAgIDI0NCxcbiAgICAgIDE3MixcbiAgICAgIDI2LFxuICAgICAgMTQ4LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTTU4yUTc2R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg5NjIyNzQ3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNDU4MjYzMDIwNzY4NzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tYZStiSUJFTDMwaWJRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUEVVUE5YQkk5bnFCV3ozcDhuSlg0TVBGYVlBKzVQZ2V1WHRaTVc2YkhCYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlRm4yTWxaUTdKSy9FckI5QTlHVjdzakRxMi83OTQ4VUlQN3hXTEg3eDRFc3ZKWU5YNFRyeEtYUDFhLzZKampBY3FBYktDbDYzZ1VzcFNPMzZtQ2dCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvS202THVteldWU2hRZDRncGY0elhkS1FDUDRtbENla3lRUGsxRElVdnpoV2VTUFhraHlaV0ExNEJWU1BFVlBSeG96K09FaTJLc3JSZkRNVU5hYVVBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODk2MjI3NDc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4MjcwMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLMmxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsybC5qc29uIjogIntcImtleURhdGFcIjpcIjhzc2lUdlZQeGxQVFFqZ0tIUHdpOWoyODJNUlZSc0hFc0dCamFTVmxEVzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzc1Mjg3NTg3LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5NzY2NTc2NDI0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "watsonxd based on knight-md", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙒𝞓𝙏𝙎𝞗𝞜-𝞦𝘿",
  ownername:process.env.OWNER_NAME|| "its watsonxd",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
