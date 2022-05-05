import fetch from "node-fetch"

export default async function(msg) {
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

        if (tokens[0] === "dav") {
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