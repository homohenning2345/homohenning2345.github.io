
const replies = [
    'Jeg elsker også dig💘',
    'Jeg elsker dig endnu mere',
    'Awww hvor er du sød',
    'Skal vi giftes?'
]
export default function (msg, args) {
    const index = Math.floor(Math.random() * replies.length)
    const reply = replies[index]
    msg.channel.send(reply)
}