//Discord.js import
const Discord = require('discord.js');

module.exports = (client, message, queue) => {
    const Embed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - Music stopped as i have been disconnected from the channel !`)
    message.channel.send(Embed);
};