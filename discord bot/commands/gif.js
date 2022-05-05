import fetch from "node-fetch"

export default async function (msg, args) {
    let searchTerm = 'cat'
    if (args.length > 0) {
        searchTerm = args.join(' ')
    }
    const url = `https://g.tenor.com/v1/search?q=${searchTerm}&key=${process.env.TENORKEY}=&limit=8`
    const result = await fetch(url)
    const json = await result.json()

    if (json.results.length < 1) {
        msg.channel.send('Error: not found')
        return
    }

    const index = Math.floor(Math.random() * json.results.length)
    msg.channel.send(json.results[index].url)
}