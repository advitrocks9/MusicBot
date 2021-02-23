//Discord.js import
const Discord = require('discord.js')

module.exports = {
    name: 'clear',
    aliases: ['cq','clr'],
    category: 'Music',
    utilisation: '{prefix}clear',

    execute(client, message) {
        const novcEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - You are not in a voice channel !`)
        if (!message.member.voice.channel) return message.channel.send(novcEmbed);

        const nosamevcEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - You are not in the same voice channel as me !`)
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(nosamevcEmbed);

        const nomusicEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - No music is currently playing !`)
        if (!client.player.getQueue(message)) return message.channel.send(nomusicEmbed);

        client.player.clearQueue(message);
        const clearEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.success} - The queue has been **cleared** !`)
        message.channel.send(clearEmbed);
    },
};