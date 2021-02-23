//Discord.js import
const Discord = require('discord.js');

module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

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
        
        const allreadyplayEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - The music is already playing !`)
        if (!client.player.getQueue(message).paused) return message.channel.send(allreadyplayEmbed);

        client.player.resume(message);

        const playEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed !`)
        message.channel.send(playEmbed);
    },
};