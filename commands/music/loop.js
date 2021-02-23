//Discord.js import
const Discord = require('discord.js')

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

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
            .setDescription(`${client.emotes.error} - No music currently playing !`)
        if (!client.player.getQueue(message)) return message.channel.send(nomusicEmbed);

        const loopdisableEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.success} - Loop mode **disabled** !`)
        const loopenableEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.success} - Loop mode **enabled** !`)
        client.player.setLoopMode(message, true);

        if (!client.player.getQueue(message)) return message.channel.send(nomusicEmbed);
        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(loopdisableEmbed);
            } else {
                return message.channel.send(loopenableEmbed);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(loopdisableEmbed);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(loopenableEmbed);
            };
        };
    },
};