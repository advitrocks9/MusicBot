//Discord.js import
const Discord = require('discord.js');

module.exports = (client, error, message) => {
    switch (error) {
        
        case 'NotPlaying':
            const NotPlayingEmbed = new Discord.MessageEmbed()
                .setColor("#c7a983")
                .setDescription(`${client.emotes.error} - There is no music being played on this server !`)
            message.channel.send(NotPlayingEmbed);
            break;
        case 'NotConnected':
            const NotConnectedEmbed = new Discord.MessageEmbed()
                .setColor("#c7a983")
                .setDescription(`${client.emotes.error} - You are not in any voice channel !`)
            message.channel.send(NotConnectedEmbed);
            break;
        case 'UnableToJoin':
            const UnableToJoinEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - I do not have permissions to join the voice channel !`)
            message.channel.send(UnableToJoinEmbed);
            break;
        default:
            const ErrorEmbed = new Discord.MessageEmbed()
            .setColor("#c7a983")
            .setDescription(`${client.emotes.error} - Something went wrong contact advitrocks9#6027`)
            message.channel.send(ErrorEmbed);
};
}   
