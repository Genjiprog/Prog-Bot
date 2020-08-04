module.exports = {
    name: 'ping',
    description: "sends ping!",
    execute(message, args){
        setTimeout(function(){ 
            message.reply('pong! 5s delay');
        }, 5000);
    }
}