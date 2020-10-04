const Discord = require('discord.js');
const bot = new Discord.Client();
//const token = process.env.token;
//var config = require("./config.json")
const token = process.env.token;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
});

bot.on("message", message => {
  const args = message.content.split(" ");
  if (message.author.id != bot.user.id && (message.content[0] === "/" || message.content.indexOf(bot.user.toString()) == 0)) {
    var cmdTxt = message.content.split(" ")[0].substring(1);
    var suffix = message.content.substring(cmdTxt.length + 2);
    if (message.content.indexOf(bot.user.toString()) == 0) {
      try {
        cmdTxt = message.content.split(" ")[1];
        suffix = message.content.substring(bot.user.toString().length + cmdTxt.length + 2);
      } catch (e) {
        message.channel.send("Yes?");
        return;
      }
    }
  }
    
  function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while(0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  const args = message.content.slice(prefix.length).trim().split(' ');
  if (cmdTxt === "팀 ".length) {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'
    const maxamount = args

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: maxamount,
            dispose: true,

          })


        collector.on('collect', r => {
          r.message.edit(`참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector.on('remove', r => {
          r.message.edit(`참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector.on('end', r => {
          var arr = mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`)
          arr = shuffle(arr);
          var half_length = Math.ceil(arr.length / 2);
          var leftSide = arr.splice(0, half_length);
          message.channel.send(`1팀 \n ${arr.join("\n")}`)
          message.channel.send(`2팀 \n ${leftSide.join("\n")}`)
          return
        })




      })
  }

})

bot.login(token);