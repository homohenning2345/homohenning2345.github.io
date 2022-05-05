
import dav from './commands/dav.js'
import gif from './commands/gif.js'

const commands = { dav, gif }

export default async function (msg) {
    console.log(msg.author.username)
    console.log(msg.content)

    const bottestingchannel = process.env.CHANNEL_ID


    if (msg.channel.id === bottestingchannel) {

        let tokens = msg.content.split(' ')
        console.log(tokens)

        let command = tokens.shift()
        if (command.charAt(0) === '!') {
            // valid command
            command = command.substring(1)
            if (commands[command] != undefined) {
                commands[command](msg, tokens)
            }
        }
    }
}