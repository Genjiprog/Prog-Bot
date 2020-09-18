const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');

const got = require('got');

const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;

//const mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/Reports');

//const db = require("quick.db");
//const config = require("../botconfig.json");

const prefix = "[";

var version = ' 1.3.1';

//Cooldowns
const pollcd = new Set();
const huntcd = new Set();
const advcd = new Set();

//clan
const clan = new Set();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log(`Prog Bot is online on ${client.guilds.cache.size} servers!`);
    client.user.setActivity('Beyond Infinity', {type: 'LISTENING'}).catch(console.error);
    
});

//If Bot back online, 
client.login(process.env.token);

//client.login('');

client.on('message', async message => {

    if(message.content === '[meme'){
        const memeembed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
                memeembed.setTitle(`${memeTitle}`)
                memeembed.setURL(`${memeUrl}`)
                memeembed.setImage(memeImage)
                memeembed.setColor(0x28B463)
                memeembed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
                message.channel.send(memeembed);
            })
        }
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//---------------------------------------------------------help command [1]| +
    if(command === 'help'){
        client.commands.get('help').execute(message, args)
}
//---------------------------------------------------------stats commands (2) | +
    if(command === 'profile'){
        client.commands.get('profile').execute(message, args)
    }
    if(command === 'guild'){
        client.commands.get('guild').execute(message, args)
    }
//---------------------------------------------------------Event command [2] | +
    if(command === 'event'){
    const eventembed = new Discord.MessageEmbed()
    .setTitle("Wait... What's This?")
    .setDescription("There is no active event right now")
    .setURL('https://www.youtube.com/channel/UCa9Aff8iXVxfwza09oyczwQ?view_as=subscriber')
    .setColor(0x28B463)
    .setFooter('Verified | 30/07/2020')
    message.channel.send(eventembed);
    }
    if(command === "updates"){
        message.channel.send('There are currently no updates from Genji#3053. Either he has not finished the update or uploaded it.')
    }
//---------------------------------------------------------ERPG Reminder
    if(message.content.toLowerCase() === "rpg hunt"){
        if(huntcd.has(message.author.id)){
            message.channel.send("You are in cooldown!");
        } else{
            message.react('🚩');
            huntcd.add(message.author.id);
            setTimeout(() => {
            huntcd.delete(message.author.id);
            message.reply("**RPG HUNT** is ready!")
        }, 60000)}}
    //if(command === "reset hunt"){
        //message.channel.send("Reminder for ``rpg hunt`` has been reset!");
        //huntcd.delete(message.author.id)
//} 

//---------------------------------------------------------commands (3) | + 
{   
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
    }
    if(command === 'poll'){
        
        var pollid = '749266708841365584';

        const pollembed = new Discord.MessageEmbed()
    .setTitle("Prog Server | Poll")
    .setDescription("``[poll`` to start a poll")
    .setFooter(`Requested by ${message.author.tag}`)
    .setColor(0x28B463);
    
    if(!args[0]){
        message.channel.send(pollembed);
    }
    else{
    let msgArgs = args.slice(0).join(" ");

    if(pollcd.has(message.author.id)){
    const pollcdembed = new Discord.MessageEmbed()
        .setTitle("Prog Server | Poll")
        .setDescription("You are in cooldown!")
        .setColor(0x28B463)
        message.channel.send(pollcdembed);
    }
    else{message.channel.send("successfully created a poll in <#749266708841365584> | Message will be deleted in 5s");
        client.channels.cache.get(pollid).send("📝 " + "**" + msgArgs + "**").then(messageReaction => {
            messageReaction.react("✅");
            messageReaction.react("❌");
            message.delete({timeout: 5000});
            pollcd.add(message.author.id)
            setTimeout(() => {
                pollcd.delete(message.author.id);
            }, 60000)
    })};
};
    }
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args)
    }
    if(command === 'play'){
        let track = await client.player.play(message.member.voice.channel, args[0], message.member.user.tag);
        message.channel.send(`Currently playing ${track.name}! - Requested by ${track.requestedBy}`);
    }
    if(command === 'stop'){
        let track = await client.player.stop(message.guild.id);
        message.channel.send('Stopped');
    }

}    
//---------------------------------------------------------bot profile (5) | +
{
    if(command === 'loc'){
        client.commands.get('loc').execute(message, args)
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
}
//---------------------------------------------------------dont change below       
})
