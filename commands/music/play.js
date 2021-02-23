//Discord.js import
const Discord = require('discord.js');

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        const novcEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - You are not in a voice channel !`)
        if (!message.member.voice.channel) return message.channel.send(novcEmbed);

        const nosamevcEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - You are not in the same voice channel as me !`)
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(nosamevcEmbed);

        const nosongEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - Please indicate the title of a song !`)
        if (!args[0]) return message.channel.send(nosongEmbed);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};