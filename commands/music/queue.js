//Discord.js import
const Discord = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '{prefix}queue',

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
        const queue = client.player.getQueue(message);

    const track = client.player.nowPlaying(message);

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        const onequeueEmbed = new Discord.MessageEmbed()
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
        if(queue.tracks.length === 1) return message.channel.send(onequeueEmbed)

        const queueEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
                return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
            }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : ` **${queue.tracks.length}** songs in the playlist`}`))
            
            message.channel.send(queueEmbed)
        },
    };