const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'invite',
    desc: 'sends invite link',
    execute(message, args){
        const inviteembed = new Discord.MessageEmbed()
        .setTitle("Invite Bot")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=738271385230639216&scope=bot&permissions=8")
        .setColor(0x28B463)
        .setFooter('Verified | 30/07/2020')
        message.channel.send(inviteembed).catch(console.error);
    }
}