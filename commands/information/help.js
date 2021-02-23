//Discord.js import
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Information',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const Information = message.client.commands.filter(x => x.category == 'Information').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            const helpEmbed = new Discord.MessageEmbed()
            .setAuthor('Bot commands')
            .setColor(`#c7a983`)
            .addFields(
                { name: 'Information', value: Information },
                { name: 'Music', value: music }
            )
            .setFooter("Made by advitrocks9")
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/avatars/762945662958043136/4f6d1c9a81a14c53e7c98a49ca488d79.webp")
            message.channel.send(helpEmbed)
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);
            
            const helpcmdEmbed = new Discord.MessageEmbed()
            .setAuthor('Bot commands')
            .setDescription("Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.")
            .setColor(`#c7a983`)
            .addFields(
                { name: 'Name', value: command.name, inline: true },
                { name: 'Category', value: command.category, inline: true },
                { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
            )
            .setFooter("Made by advitrocks9")
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/avatars/762945662958043136/4f6d1c9a81a14c53e7c98a49ca488d79.webp")
            message.channel.send(helpcmdEmbed)

            
        };
    },
};