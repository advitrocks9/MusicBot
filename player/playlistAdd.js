//Discord.js import
const Discord = require('discord.js');

module.exports = (client, message, queue, playlist) => {
    const Embed = new Discord.MessageEmbed()
        .setColor("#c7a983")
        .setDescription(`${client.emotes.music} - ${playlist.title} has been added to the queue !`)
    message.channel.send(Embed);
};