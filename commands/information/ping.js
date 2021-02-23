//Discord.js import
const Discord = require("discord.js")

module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Information',
    utilisation: '{prefix}ping',

    execute(client, message) {
        const pingEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`)
        message.channel.send(pingEmbed)
    },
};
