const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "[";

var version = ' 1.1.1';

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
 } 
// rpg adventure
    if(message.content === 'rpg adventure'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG ADVENTURE** is ready!');
                }, 360000);
} else if (message.content === 'adv'){
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
} else if(message.content === 'rpg tr'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**RPG TRAINING** is ready!');
            }, 900000);
}
// rpg chop 
    if(message.content === 'rpg chop'){
        message.react('🚩');
        setTimeout(function(){
            message.reply('**CHOP** is ready!');
            }, 300000);
}
// rpg fish
if(message.content === 'rpg fish'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**FISH** is ready!');
        }, 300000);
}
// rpg axe
if(message.content === 'rpg axe'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**AXE** is ready!');
        }, 300000);
}
// rpg net
if(message.content === 'rpg net'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**NET** is ready!');
        }, 300000);
}
// rpg pickup
if(message.content === 'rpg pickup'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**PICKUP** is ready!');
        }, 300000);
}
// rpg ladder
if(message.content === 'rpg ladder'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**LADDER** is ready!');
        }, 300000);
}
// rpg mine
if(message.content === 'rpg mine'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**MINE** is ready!');
        }, 300000);
}
// rpg bowsaw
if(message.content === 'rpg bowsaw'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**BOWSAW** is ready!');
        }, 300000);
}
// rpg boat
if(message.content === 'rpg boat'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**BOAT** is ready!');
        }, 300000);
}
// rpg pickaxe
if(message.content === 'rpg pickaxe'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**PICKAXE** is ready!');
        }, 300000);
}
// rpg tractor
if(message.content === 'rpg tractor'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**TRACTOR** is ready!');
        }, 300000);
}
// rpg chainsaw
if(message.content === 'rpg chainsaw'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**CHAINSAW** is ready!');
        }, 300000);
}
// rpg bigboat
if(message.content === 'rpg bigboat'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**BIGBOAT** is ready!');
        }, 300000);
}
// rpg drill
if(message.content === 'rpg drill'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**DRILL** is ready!');
        }, 300000);
}
// rpg dynamite
if(message.content === 'rpg dynamite'){
    message.react('🚩');
    setTimeout(function(){
        message.reply('**DYNAMITE** is ready!');
        }, 300000);
}
//Event ping Catch
if(message.content.toLowerCase().includes("IT'S RAINING COINS"))
    message.channel.send("Key Word Detected ");
else {
    for(var i = 0; i < message.embeds.length; i++) {
        if(message.embeds[i].title.includes("IT'S RAINING COINS") || message.embeds[i].title.includes("IT'S RAINING COINS")) {
            message.channel.send("<@&749082133393440788>");
            break;
    }
}}
//Event ping Fish
if(message.content.toLowerCase().includes("A MEGALODON HAS SPAWNED IN THE RIVER"))
    message.channel.send("Key Word Detected ");
else {
    for(var i = 0; i < message.embeds.length; i++) {
        if(message.embeds[i].title.includes("A MEGALODON HAS SPAWNED IN THE RIVER") || message.embeds[i].title.includes("A MEGALODON HAS SPAWNED IN THE RIVER")) {
            message.channel.send("<@&749082214851149974>");
            break;
    }
}}
//Event ping Chop
if(message.content.toLowerCase().includes("AN EPIC TREE HAS JUST GROWN"))
    message.channel.send("Key Word Detected ");
else {
    for(var i = 0; i < message.embeds.length; i++) {
        if(message.embeds[i].title.includes("AN EPIC TREE HAS JUST GROWN") || message.embeds[i].title.includes("AN EPIC TREE HAS JUST GROWN")) {
            message.channel.send("<@&749082259054788698>");
            break;
    }
}}
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
        message.channel.send('There are currently no updates from Genji#3053. Either he has not finished the update or uploaded it.')
    }
//commands

//bot profile (2) | +
    if(command === 'loc'){
        client.command.get('loc').execute(message, args)
    }
    if(command === 'socials'){
        client.commands.get('socials').execute(message, args)
    }
    if(command === 'invite'){
        client.commands.get('invite').execute(message, args)
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

  
//dont change below       
})