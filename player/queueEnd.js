//Discord.js import
const Discord = require('discord.js');

module.exports = (client, message, queue) => {
    const Embed = new Discord.MessageEmbed()
        .setColor("#c7a983")
        .setDescription(`${client.emotes.error} - The queue has ended !`)
    message.channel.send(Embed);
};