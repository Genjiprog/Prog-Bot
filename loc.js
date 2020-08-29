const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'loc',
    description: "sends loc",
    execute(message, args){
        const locembed = new Discord.MessageEmbed()
        .setTitle('Location')
        .addField('RA 18° 18m 48" | Dek -13° 49′ 0″')
        .setColor(0x28B463)
        message.channel.send(locembed)
    }
}