const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'help',
    aliases: ['h', 'command', 'commands'],
    description: 'sends help embed!',
        execute(message, args){

const helpembed = new Discord.MessageEmbed()
        .setThumbnail('https://f4.bcbits.com/img/a1723011251_10.jpg')
        .setTitle('Prog Bot Commands')
        .addField('Stats Commands', "``profile, guild``")  
        .addField('Event Commands', "``event, updates``")
        .addField("Epic RPG Reminder (In Progress)", "``reset (command)``")
        .addField('Bot Commands', "``clan, ping, poll, clear, play (song/url), stop``")
        .addField('Bot Profile', "``invite, socials, donate, patreon``")
        .setDescription('More stuff coming soon!')
        .setColor(0x28B463)
        .setFooter('Verified | 30/07/2020')
        message.channel.send(helpembed);
    }}