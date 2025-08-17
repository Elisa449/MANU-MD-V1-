const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:jutnBXaOoUilFuLplTabcTCUibMcOpHP@metro.proxy.rlwy.net:51200",  //ඔයාගෙ mongoDb url එක
};
 
