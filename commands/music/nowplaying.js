//Discord.js import
const Discord = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        const novcEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - You're not in a voice channel !`)
        if (!message.member.voice.channel) return message.channel.send(novcEmbed);

        const nosamevcEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - You are not in the same voice channel as me !`)
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(nosamevcEmbed);

        const nomusicEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - No music is currently playing !`)
        if (!client.player.getQueue(message)) return message.channel.send(nomusicEmbed);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        const npEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setAuthor(track.title)
            .setDescription(client.player.createProgressBar(message, { timecodes: true }))
            .setFooter("Made by advitrocks9")
            .setThumbnail(track.thumbnail)
            .setTimestamp()
            .addFields(
                { name: 'Requested by', value: track.requestedBy.username, inline: true },
                { name: 'Duration', value: track.duration, inline: true },
                { name: 'Volume', value: client.player.getQueue(message).volume, inline: true }
            )
        message.channel.send(npEmbed)
    },
};