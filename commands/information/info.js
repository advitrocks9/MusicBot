//Discord.js import
const Discord = require("discord.js")

module.exports = {
    name: 'info',
    aliases: [],
    category: 'Information',
    utilisation: '{prefix}info',

    execute(client, message) {
        const infoEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`)
        message.channel.send(infoEmbed)
    },
};