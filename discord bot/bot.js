

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

client.on('messageCreate', Hej)

function Hej(msg) {
    console.log(msg.author.username)
    console.log(msg.content)

    const bottestingchannel = process.env.CHANNEL_ID

    const replies = [
    'Jeg elsker også dig💘',
    'Jeg elsker dig endnu mere',
    'Awww hvor er du sød',
    'Skal vi giftes?'
    ]

    if (msg.channel.id === bottestingchannel && msg.content === "Jeg elsker dig") {
        const index = Math.floor(Math.random() * replies.length)
        const reply = replies[index]
        msg.channel.send(reply)
    }
}