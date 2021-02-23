//Discord.js import
const Discord = require('discord.js');

module.exports = (client, message, track) => {
    const Embed = new Discord.MessageEmbed()
        .setColor("#c7a983")
        .setDescription(`${client.emotes.music} - Now playing ${track.title}`)
    message.channel.send(Embed);
};