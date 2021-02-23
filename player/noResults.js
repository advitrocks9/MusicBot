//Discord.js import
const Discord = require('discord.js');

module.exports = (client, message, query) => {
    const Embed = new Discord.MessageEmbed()
        .setColor("#c7a983")
        .setDescription(`${client.emotes.error} - No results found on YouTube for ${query} !`)
    message.channel.send(Embed);
};