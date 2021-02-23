//Discord.js import
const Discord = require('discord.js');

module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
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

        const invalidnumEmbed = new Discord.MessageEmbed()
        .setColor("#c7a983")
        .setDescription(`${client.emotes.error} - Please enter a valid number between 1 and 100 !`)
        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(invalidnumEmbed);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(invalidnumEmbed)
        client.player.setVolume(message, parseInt(args[0]));

        const volumeEmbed = new Discord.MessageEmbed()
        .setColor("#c7a983")
        .setDescription(`${client.emotes.success} - Volume set to **${parseInt(args[0])}%** !`)
        message.channel.send(volumeEmbed);
    },
};