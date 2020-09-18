const Discord = require("discord.js");
const client = new Discord.Client();
const mongoose = require ('mongoose');
const Guild = require ('../models/guild')

module.exports = {
    name: 'prefix',
    category: 'admin',
    description:  'sets the prefix',

}