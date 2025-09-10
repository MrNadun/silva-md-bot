const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Silva~tBI0RIrI#N6DIPoxfSUpOWFevzVvN5YvElF5JYCtmMP9BS29GTfw",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "✦ Silva ✦ MD ✦",
    AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT, "true"),
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    DELETE_LINKS: convertToBool(process.env.DELETE_LINKS, "false"),
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94781352903",
    OWNER_NAME: process.env.OWNER_NAME || "✦ Silva ✦ MD ✦",
    DESCRIPTION: process.env.DESCRIPTION || "*© ✦ Silva ✦ MD ✦*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG: process.env.LIVE_MSG || "> SILVA MD IS ACTIVE ⚡",
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE, "true"),
    AUTO_REACT_NEWSLETTER: convertToBool(process.env.AUTO_REACT_NEWSLETTER, "true"), // Newsletter auto-react
    ANTI_BAD: convertToBool(process.env.ANTI_BAD, "false"),
    AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN, "true"),
    AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY, "false"),
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*👀 Seen by Silva MD ✅*",
    MODE: process.env.MODE || "both", // both, public, or private
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE, "true"),
    AUTO_TYPING: convertToBool(process.env.AUTO_TYPING, "true"),
    AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING, "false"),
    
    // Anti-Delete Settings
    ANTIDELETE_GROUP: convertToBool(process.env.ANTIDELETE_GROUP, "true"),
    ANTIDELETE_PRIVATE: convertToBool(process.env.ANTIDELETE_PRIVATE, "true"),
    
    // Debug Settings
    DEBUG: convertToBool(process.env.DEBUG, "true")
};


