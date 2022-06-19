import { Message} from "discord.js";
import { MessageEmbed } from "discord.js";


export default {
    callback: (message: Message, ...args: string[]) => {

        let embed = new MessageEmbed()
            .setColor("BLURPLE")
            .setAuthor(message.author.username)
            .setTitle("Tutti i comandi del bot")
            .setDescription("Prefisso **-**")
            .addFields([
                {
                    name: "Ping",
                    value: "Controlla se il bot è online"
                },
                {
                    name: "wariniziata [clanAvversario]",
                    value: "Dichiara l'inizio di una war"
                },
                {
                    name: "warfinita [vinto/perso] [stelleNostre] [stelleAvversario]",
                    value: "Finisce una war"
                }
            ])

        message.channel.send({embeds: [embed]})
        

    }
}