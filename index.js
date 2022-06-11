// WELCOME
// We are going to be setting up sparkbot.
// There are instructions on the things you need to change. Please avoid modifying stuff if you don't know what you're doing.
const { Client, Intents, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]
});
const logch = "978921888719974470"; //Get a log channel ID from Discord
const token = ""; //Get a token from the Discord Developer portal and paste it in there
const version = "1.0 sparkbot instance"; // Please leave this.
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const querystring = require('querystring');




bot.once('ready', () => {
   bot.user.setActivity("Starting...")
    // Playing rotator
	// Change them to whatever you want. The rotator is by @Prollhouse2
    const activities = ['Follow @sparkfire298 on Twitter', 'i have bomb', 'Minecraft', 'Google on Google', 'Netscape Navigator', 'with a hammer', 'nothing', 'This status changes every few seconds', 'Among Us', `${bot.guilds.cache.size} servers`, 'Fall Guys', 'Twitter', 'my instagram was hacked', 'www.sparkfire298.tk', 'Thanks Nytern', 'Playing Playing', 'Free games for google search', 'The Backrooms', 'SUS?', '!help', 'Fart', 'foobar2000', 'TikTok', 'cock simulator', 'Bouncy by Sparkfire298', 'Happy Pride Month', '69', 'trans rights', 'with your mom', 'MLG Memes', 'in 2019', 'with the sun', 'spoon', 'Reet', 'Shup', 'Shark simulator', 'discord.gg', 'No more cussing guys!!!!!', '*Insert funny status*', 'help i need status lines for my bot', 'sparkbot', 'const activities = ["yourmom", "penis"]', 'coder', 'linux btw', 'Discord.js > Discord.py', `v${version}`, 'Find this cheech', 'pro gaemr !!!', 'Octane - Creo', 'pings', 'music', 'Ping! - Exyl', 'dubstep is best'];

  const updateDelay = 20; 
  let currentIndex = 0;

  setInterval(() => {
    const activity = activities[currentIndex];
    bot.user.setActivity((activity), { type: 'PLAYING' });
      

    currentIndex = currentIndex >= activities.length - 1 
      ? 0
      : currentIndex + 1;
  }, updateDelay * 1000);
    // Playing rotator 
    const channel = bot.channels.cache.get(logch);

    channel.send("sparkbot has restarted");
	console.warn('The bot is online');
    console.log(`Connecting...`);
    console.log(`${bot.guilds.cache.size} servers`);
});


bot.on("guildCreate", () => {
    console.log("Added to one guild!");
const channel = bot.channels.cache.get(logch);
channel.send(`Added to a new server! I am now in ${bot.guilds.cache.size} servers.`);
})
bot.on("ready", () => {
    bot.user.setStatus("online")
	// You can change this to:
	// "dnd" - Will give the bot a red Do Not Disturb icon
	// "idle" - A yellow moon icon
	// "invisible" - The bot will appear offline but still work
	// "online" - The default green circle
})

bot.on("guildDelete", () => {
    const channel = bot.channels.cache.get(logch);
channel.send(`Removed from a server. I am now in ${bot.guilds.cache.size} servers.`);
})

const blockedUsers = ['UserID1', 'UserID2'];

bot.on('message', message => {
    	if (blockedUsers.includes(message.author.id)) return;
		if (message.content === '!help') {
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
	    .setTitle('sparkbot help menu')
        .setDescription('*A bot made for jokes or utility.*\n\n**Commands:**\nhelp, scott, funny, invite, whatsnew, uptime, test, faulthistory, about, credits, embed, luckyroll, whoami, console, suggest\nUsage: !scott OR !suggest (Suggestion)\n\nThis bot is an open source instance of **sparkbot**, by **sparkfire298** (or 25sp)\n[GitHub Source](https://github.com/25sp/sparkbot)')
        .setFooter(`Run !help-noembed to remove the embed\nv${version}`);
        
  message.reply({ embeds: [embed] });
	}
    if (message.content === '!help-noembed') {
        message.reply("Help menu\n\n*Commands:*\nscott\nfunny\ninvite\nhelp\nwhatsnew\ngithub\nuptime\ntest\nfaulthistory\nabout\ncredits\n\nThis bot was made by **sparkfire298**")
    }
    if (message.content === '!scott') {
		message.reply('Hey all, Scott here.');
	}
    if (message.content === '!funny') {
		message.reply('HAHAHAHAHAHAHAHAHAHAHAHHAHAHA HAHAAHAHAHAAHHAHAAHAHAHAHAHAH HAHAHAHHAHAHAHAHAHAHAHAHHAHA HAHAHAHJHAHAHAHHAHAHAHAHAHAHAHAHHA');
        message.react('🤣');
	}
    if (message.content === '!invite') {
		message.reply('https://discord.com/api/oauth2/authorize?client_id=975699960869838869&permissions=8&scope=bot');
	}
    if (message.content === '!whatsnew') {
		message.reply(`What's new? ${version}\n\n- New **console** command! This outputs an example of what you would get using a type of terminal. Note: This doesn't do anything other then return a bit of text`);
        message.channel.send(`Thanks for using sparkbot!`);
	}
    if (message.content === '<@975699960869838869>') { //Set botid to your bot account's ID
		message.reply(`<@${message.author.id}>, my prefix is **!**`);
	}
    if (message.content === "!uptime") {
        let days = Math.floor(bot.uptime / 86400000);
let hours = Math.floor(bot.uptime / 3600000) % 24;
let minutes = Math.floor(bot.uptime / 60000) % 60;
let seconds = Math.floor(bot.uptime / 1000) % 60;
        const embed = new Discord.MessageEmbed()
        .setColor('7289da')
	    .setTitle('uptime')
        .setDescription(`${days} day(s), ${hours} hours ${minutes} minutes and ${seconds} seconds`)
        .setFooter('gamer');
        
  message.reply({ embeds: [embed] });    }
    if (message.content === "!test") {
        message.reply(`Hello ${message.author.username}!`)
        const embed = new Discord.MessageEmbed()
        .setDescription("also embeds should be working");
  message.reply({ embeds: [embed] });
    }
    if (message.content === "!faulthistory") {
        message.reply("```Fault History\n\nThe list is empty!```")
    }
    if (message.content === "!about") {
        message.reply("I am a small bot based on jokes or utility. Made by **sparkfire298#5264**, you can also run your own copy! **https://github.com/25sp/sparkbot**")
    }
    if (message.content === "!credits") {
        message.reply("**Credits**\n\n- This bot was mainly made by sparkfire298 from scratch\n\n- The rotating status by Prollhouse2 @ GitHub\n- The intent system (for the bot to literally work) An Idiots Guide https://anidiots.guide\n** **\n** **")
    }
    if (message.content === "!github") {
        message.reply("https://github.com/25sp/sparkbot")
    }
    if (message.content === "!ping") {
        message.reply(`${bot.ws.ping} ms`)
    }
    if (message.content === "!whoami") {
        message.reply(`${message.guild.name}/${message.author.username}`)
    }
    if (message.content === "!embed") {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	    .setTitle('Title')
        .setDescription('Description\n[Link](https://www.sparkfire298.tk)')
        .setFooter('IS THIS WORKING??!?!?!?!?/');
        
  message.channel.send({ embeds: [embed] });
    }
    if (message.content === "!troubleshoot") {
        message.reply("Coming soon")
    }
    if (message.content === "sparkbot, are you feeling alright?") {
        message.channel.send("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    }
    if (message.content === "!amigay") {
            result = Math.floor(Math.random()*2)

    if(result == "0"){
        message.reply("yes")
    }
         else if(result == "1"){
        message.reply("no")
    }

    }
    if (message.content === "!stats" || message.content === "!botstats") {
                let days = Math.floor(bot.uptime / 86400000);
let hours = Math.floor(bot.uptime / 3600000) % 24;
let minutes = Math.floor(bot.uptime / 60000) % 60;
let seconds = Math.floor(bot.uptime / 1000) % 60;
                const stats = new Discord.MessageEmbed()
        .setColor('#5865f2')
	    .setTitle('sparkbot statistics')
        .setDescription(`Servers: ${bot.guilds.cache.size}\nPing: ${bot.ws.ping}\nBuild: ${version}\nOwner: sparkfire298\nUptime: ${days}d, ${hours}h, ${minutes}m, ${seconds}s\nCPU: Intel(R) Core(R) i5-10500TE @ 2.30 GHz\nNode: v16.13.1 on win32 x64`)
        .setFooter(`ok`);
        
  message.reply({ embeds: [stats] });
    }
     if (message.content === "!luckyroll") {
          result = Math.floor(Math.random()*5)

    if(result == "0"){
        message.reply("YOU WIN!")
    }
         else if(result == "1"){
        message.reply("you lose, better luck next time")
    }
         else if(result == "2"){
        message.reply("you lose, better luck next time")
    }
         else if(result == "3"){
        message.reply("you lose, better luck next time")
    }
         else if(result == "4"){
        message.reply("you lose, better luck next time")
    }
         else if(result == "5"){
        message.reply("you lose, better luck next time")
    }
     }
    
    if (message.content === "!console") {
        message.reply("Which console do you want to simulate?\nAvailable options:\nTelnet\nPython\nCommand Prompt\nNode.js\n\nCorrect usage: !console Python, **use correct capitalization and spaces**\n\n:warning: THESE ARE JUST TEXT OUTPUTS, AND DO NOT DO ANYTHING TO THE BOT, THE BOT HOST, OR ANYTHING.")
    }
    if (message.content === "!console Telnet") {
        message.reply("```Welcome to Microsoft Telnet Client\nEscape Character is 'CTRL+]'\nMicrosoft Telnet> _```")
    }
    if (message.content === "!console Python") {
        message.reply('```Python 3.6.5 (v3.6.5:f59c0932b4, Mar 28 2018, 16:07:46) [MSC v.1900 32 bit (Intel)] on win32\nType "help", "copyright", "credits" or "license" for more information.\n>>>```')
    }
    if (message.content === "!console Command Prompt") {
        message.reply("```Microsoft Windows [Version 10.0.19044.1706]\n(c) Microsoft Corporation. All rights reserved.\n\nC:\Users\sparkbot>```")
    }
    if (message.content === "!console Node.js") {
        message.reply("```Welcome to Node.js v16.13.1.\nType \".help\" for more information.\n>```")
    }
    
    if (message.content.startsWith("!suggest")) {
         message.reply(`Thank you ${message.author.username}!\n\nNote: Abusing this command will get you bot banned`)
        const log = bot.channels.cache.get("985074332634067075");
        log.send(`${message.author.tag} (${message.author.id}) suggested:\n\n\`${message.content}\`\nin ${message.guild.name} (${message.guild.id})`);
        console.log(`${message.author.tag} (${message.author.id} suggested: ${message.content}`)
  } 
    
   


});

bot.login(token); 
