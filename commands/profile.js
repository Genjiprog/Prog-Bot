const Discord = require("discord.js");
const client = new Discord.Client();

var version = ' 1.3.1';

module.exports = {
    name: 'profile',
    description: "sends profile",
    execute(message, args){
        const profileembed = new Discord.MessageEmbed()
        .setTitle('Prog | Information')
        .addField('Player Name', message.author.tag)
        .addField('Account Creation', message.author.createdAt)
        .addField('Current Server', message.guild.name)
        .addField('Version', version)
        .setColor(0x28B463)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter('Verified | 30/07/2020')
        message.channel.send(profileembed).catch(console.error);
    }
}