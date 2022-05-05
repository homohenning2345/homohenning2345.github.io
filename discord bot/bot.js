import {createRequire} from "module";
const require = createRequire(import.meta.url);
//const fetch = require("node-fetch")

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

require('dotenv').config()

const TOKEN = process.env.TOKEN

console.log(TOKEN)

client.login(TOKEN);

client.on('ready', readydiscord)
function readydiscord() {
    console.log(`Logged in as ${client.user.tag}!`);
}


import commandHandler from './commands.js'
client.on('messageCreate', commandHandler)

