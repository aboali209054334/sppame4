const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("596447609732988958")
setInterval(function() {
channel.send(`aaa2223fscx`);
}, 30)
})

client.login(process.env.BOT_TOKEN);