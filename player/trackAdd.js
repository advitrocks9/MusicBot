//Discord.js import
const Discord = require('discord.js');

module.exports = (client, message, queue, track) => {
    const Embed = new Discord.MessageEmbed()
        .setColor("#c7a983")
        .setDescription(`${client.emotes.music} - ${track.title} has been added to the queue !`)
    message.channel.send(Embed);
};