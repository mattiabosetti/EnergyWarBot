import { Message} from "discord.js";
import { MessageEmbed } from "discord.js";


export default {
    callback: (message: Message, ...args: string[]) => {

        if (!args[0]) {
            message.reply("Inserisci il nome del clan avversario\nEsempio: **-warIniziata ClanAvversario**")
            return
        }

        const embed = new MessageEmbed()
            .setTitle("War iniziata da: " + message.author.username)
            .setDescription("War contro il clan: " + args[0])
            .setColor("AQUA")
            .setThumbnail("https://images-ext-2.discordapp.net/external/YQPGEBDJhzBQQtT_AEVgBo7-w5R8r06XctQ1B7aHpOo/%3Fsize%3D256/https/cdn.discordapp.com/icons/987707081090023434/13dda491f431490a529b1edea95681b9.jpg")



        message.channel.send({ embeds: [embed]})


    }
}