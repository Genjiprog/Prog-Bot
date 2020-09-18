module.exports = {
    name: 'clear',
    description: "clear messages",
    execute(message, args){

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No, lemao");

    let deleteamount;
    
    if(isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply("Please specify how many messages you want to clear!")}

    if(parseInt(args[0]) > 100) {
       return message.reply("You can only clear 100 messages at a time!")
    } else {
        deleteamount = parseInt(args[0]);
    }
    message.channel.bulkDelete(deleteamount + 1, true);
    message.channel.send(`Cleared ${deleteamount} Messages.`).then(m => m.delete({timeout: 5000}))
        }
        
    }

