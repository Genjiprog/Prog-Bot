const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'clan',
    description: 'clan command',
    execute(message, args){
        const clanembed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'s Clan`)
        .setDescription(`Command in progress!`)
        .addField(`Leader`, '1')
        .addField(`Members`, `${message.author.username}`)
        message.channel.send(clanembed);
    }
}
