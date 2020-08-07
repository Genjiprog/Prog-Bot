module.exports = {
    name: 'invite',
    desc: 'sends invite link',
    execute(message, args){
        const inviteembed = new Discord.MessageEmbed()
        .setName("Invite")
        .setThumbnail('https://cdn.discordapp.com/avatars/537961171089620994/259a07be397a53ad40d659815b92474a.webp')
        .setTitle("Invite Bot", "https://discordapp.com/oauth2/authorize?client_id=738271385230639216&scope=bot&permissions=8")
        .setColor(0x28B463)
        .setFooter('Verified | 30/07/2020')
        message.channel.send(inviteembed);
    }
}