const fetch = require("node-fetch")

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

async function Hej(msg) {
    console.log(msg.author.username)
    console.log(msg.content)

    const bottestingchannel = process.env.CHANNEL_ID

    const replies = [
        'Jeg elsker også dig💘',
        'Jeg elsker dig endnu mere',
        'Awww hvor er du sød',
        'Skal vi giftes?'
    ]

    if (msg.channel.id === bottestingchannel) {

        let tokens = msg.content.split(' ')

        if (tokens[0] === "Jeg elsker dig") {

            const index = Math.floor(Math.random() * replies.length)

            const reply = replies[index]
            msg.channel.send(reply)
        }
        else if (tokens[0] === "!gif") {

            let searchTerm = 'cat'
            if (tokens.length > 1) {
                searchTerm = tokens.slice(1).join(' ')
            }
            const url = `https://g.tenor.com/v1/search?q=${searchTerm}&key=${process.env.TENORKEY}=&limit=8`
            const result = await fetch(url)
            const json = await result.json()

            if(json.results.length < 1) {
                msg.channel.send('Error: not found')
                return
            }
                
            const index = Math.floor(Math.random() * json.results.length)
            msg.channel.send(json.results[index].url)
        }
    }
}