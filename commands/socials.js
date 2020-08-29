const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'socials',
    desc: 'sends socials',
    execute(message, args){
        const socialsembed = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/avatars/537961171089620994/259a07be397a53ad40d659815b92474a.webp')
        .setTitle("Genji's Socials")
        .addField("Discord", 'https://discord.gg/xwhEqu5')
        .addField("Youtube", 'https://www.youtube.com/channel/UCa9Aff8iXVxfwza09oyczwQ')
        .addField("Instagram", 'https://www.instagram.com/genjiprog https://www.instagram.com/juanazrielmusic')
        .addField("Feel like supporting this bot? Anything helps", 'https://www.paypal.me/genjiprog')
        .setColor(0x28B463)
        .setFooter('Verified | 30/07/2020')
        message.channel.send(socialsembed).catch(console.error);
    }
}