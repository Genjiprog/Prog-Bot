const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "[";

var version = ' 1.0';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Prog Bot is online!');
    client.user.setActivity('Beyond Infinity', {type: 'LISTENING'}).catch(console.error);
    
});
client.login(process.env.token);

client.on('message', message=>  {



// rpg hunt

    if(message.content === 'rpg hunt'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG HUNT** is ready!');
                }, 60000); 
 } else if (message.content === 'Rpg hunt'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG HUNT** is ready!');
                }, 60000); }
// rpg adventure
    if(message.content === 'rpg adventure'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG ADVENTURE** is ready!');
                }, 360000);
} else if (message.content === 'Rpg adventure'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG ADVENTURE** is ready!');
                }, 360000);
}
// rpg adv 
    if(message.content === 'rpg adv'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG ADVENTURE** is ready!');
                }, 360000);
} else if (message.content === 'Rpg adv'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG ADVENTURE** is ready!');
                }, 360000);
}
// rpg training
    if(message.content === 'rpg training'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG TRAINING** is ready!');
            }, 900000);
} else if(message.content === 'Rpg training'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG TRAINING** is ready!');
            }, 900000);
}
// rpg tr
    if(message.content === 'rpg tr'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG TRAINING** is ready!');
            }, 900000);
} else if (message.content === 'Rpg tr'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG TRAINING** is ready!');
            }, 900000);
}
// rpg chop | fish etc
    if(message.content === 'rpg chop'|'rpg ladder'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**** is ready!');
            }, 5000);
}
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//ping [1]| ping.js | +
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
    }

//help command [1]| +
    if(command === 'help'){
        const helpembed = new Discord.MessageEmbed()
        .setThumbnail('https://f4.bcbits.com/img/a1723011251_10.jpg')
        .setTitle('Prog Bot Commands')
        .addField('Stats Commands', "``profile, guild``")
        .addField('Event Commands', "``event, updates``")
        .addField('Bot Commands', "``ping, poll, clear``")
        .addField('Bot Profile', "``invite, socials, donate, patreon``")
        .setDescription('More stuff coming soon!')
        .setColor(0x28B463)
        .setFooter('Verified | 30/07/2020')
        message.channel.send(helpembed);
}
//stats commands (3)| stats.js | +
    if(command === 'profile'){
        client.commands.get('profile').execute(message, args)
    }
    if(command === 'guild'){
        client.commands.get('guild').execute(message, args)
    }
//Event command
if(command === 'event'){
    const eventembed = new Discord.MessageEmbed()
    .setTitle("Wait... What's This?")
    .setDescription("There is no active event right now")
    .setURL('https://youtu.be/dQw4w9WgXcQ')
    .setColor(0x28B463)
    .setFooter('Verified | 30/07/2020')
    message.channel.send(eventembed);
    }
    if(command === "updates"){
        message.channel.send('There are currently no songs from Genji#3053. Either he has not finished the project or uploaded it.')
    }
//commands

    if(command === "clear"){
    if(message.member.roles.cache.has('701025360128507945')){
        if(!args[1]) return message.reply('Error | please specify how many messages you want to delete ```including this message```')
        message.channel.bulkDelete(args[1]);
    
    } else {
    message.channel.send('No, lemao');
}}
//support the bot command (3)| supportbot.js
    if(command === 'socials'){
        const socialsembed = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/avatars/537961171089620994/259a07be397a53ad40d659815b92474a.webp')
        .setTitle("Genji's Socials")
        .addField("Discord", 'https://discord.gg/xwhEqu5')
        .addField("Youtube", 'https://www.youtube.com/channel/UCa9Aff8iXVxfwza09oyczwQ')
        .addField("Instagram", 'https://www.instagram.com/genjiprog https://www.instagram.com/juanazrielmusic')
        .addField("Feel like supporting this bot? Anything helps", 'https://www.paypal.me/genjiprog')
        .setColor(0x28B463)
        .setFooter('Verified | 30/07/2020')
        message.channel.send(socialsembed);
    }
    if(command === 'donate'){
        const donateembed = new Discord.MessageEmbed()
        .setThumbnail('https://f4.bcbits.com/img/a1723011251_10.jpg')
        .setTitle('Donate')
        .setDescription('Want to support this bot? Anything helps')
        .addField('Donate', 'https://www.paypal.me/genjiprog')
        .addField('Become a patron (Coming soon!)', 'https://www.patreon.com/JuanAzriel')
        .setColor(0x28B463)
        .setFooter('Verified | 30/07/2020')
        message.channel.send(donateembed);
}
    if(command === 'patreon'){
        const patreonembed = new Discord.MessageEmbed()
        .setThumbnail('https://f4.bcbits.com/img/a1723011251_10.jpg')
        .setTitle('Donate')
        .setDescription('Want to support this bot? Anything helps')
        .addField('Donate', 'https://www.paypal.me/genjiprog')
        .addField('Become a patron (Coming soon!)', 'https://www.patreon.com/JuanAzriel')
        .setColor(0x28B463)
        .setFooter('Verified | 30/07/2020')
        message.channel.send(patreonembed);
}

switch(args[0]){
    
    case "clear":
        if(message.member.roles.cache.has('701025360128507945')){
            if(!args[1]) return message.reply('Error | please specify how many messages you want to delete ```including this message```')
            message.channel.bulkDelete(args[1]);
        
        } else {
        message.channel.send('No, lemao');
    }


//dont change below
    }          
})

