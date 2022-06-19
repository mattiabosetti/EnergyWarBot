import discord, {Client, Intents} from 'discord.js'
import 'dotenv/config'

const client = new discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on("ready", () => {
    let handler = require("./command-handler")
    console.log("Il bot è ONLINE")

    if(handler.default) handler = handler.default

    handler(client)
})

client.login(process.env.TOKEN)