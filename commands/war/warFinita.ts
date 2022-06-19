import { Message} from "discord.js";
import { MessageEmbed } from "discord.js";


export default {
    callback: (message: Message, ...args: string[]) => {

        if(!args[0] || !args[1] || !args[2] || !args[3]) {
            message.reply("Inserisci il nome del clan avversiaro e scrivi se abbiamo vinto o se abbiamo perso e le stelle\nEsempio: **-warFinita vinto stelleNostre stelleAvversario**")
            return
        }

        let colore = ""

        if(args[1] == "perso"){
            const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("War persa contro: **" + args[0] + "**")
            .addField("Energywar", args[2] + " stelle ottenute")
            .addField(args[0], args[2] + " stelle ottenute")
            .setThumbnail("https://images-ext-2.discordapp.net/external/YQPGEBDJhzBQQtT_AEVgBo7-w5R8r06XctQ1B7aHpOo/%3Fsize%3D256/https/cdn.discordapp.com/icons/987707081090023434/13dda491f431490a529b1edea95681b9.jpg")


            message.channel.send({ embeds: [embed]})
        } else if (args[1] == "vinto"){
            const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("War vinta: " + args[0])
            .addField("Energywar", args[2] + " stelle ottenute")
            .addField(args[0], args[2] + " stelle ottenute")
            .setThumbnail("https://images-ext-2.discordapp.net/external/YQPGEBDJhzBQQtT_AEVgBo7-w5R8r06XctQ1B7aHpOo/%3Fsize%3D256/https/cdn.discordapp.com/icons/987707081090023434/13dda491f431490a529b1edea95681b9.jpg")

            message.channel.send({ embeds: [embed]})
        } else {
            message.reply('Scrivi correttamente se abbiamo vinto o perso')
            return
        }

        

    }
}