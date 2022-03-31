

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

require('dotenv').config()

const TOKEN = process.env.TOKEN

console.log(TOKEN)

client.login(TOKEN);

client.on('ready', readydiscord)
function readydiscord(){
console.log('🐉Logged in🐉')
}

client.on('messageCreate', Hej)

function Hej(msg){
    console.log(msg)
}