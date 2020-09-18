const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'ping',
    description: "sends ping!",
    execute(message, args){
        const msg = message.channel.send('Pinging...');

        const pingembed = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`Latency is ${Math.floor(msg.createdTimeStamp - message.createdTimeStamp)} ms \nApi Latency is ${Math.round(client.ws.ping)} ms`);
        message.channel.send(pingembed);
    }
}
