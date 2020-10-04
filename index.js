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
  if (cmdTxt === "팀") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'
    const embed = new Discord.MessageEmbed({
      title: "팀 나누기",
      description: "(오버워치, 12명 필요)",
      fields: [{
        name: '참가자 (12인)',
        value: 'none'
      }]
    })
    message.channel.send(embed)
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 13,
            dispose: true,
          });

        collector.on('collect', r => {
          let embedLikeField= Object.assign({}, embed.fields[0]);
          embedLikeField.value = mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")
          const newEmbed= new Discord.MessageEmbed({
            title: embed.title,
            description: embed.description,
            fields: [embedLikeField]
          })
          r.message.edit(newEmbed)
        })

        collector.on('remove', r => {
          let embedLikeField= Object.assign({}, embed.fields[0]);
            embedLikeField.value = mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")
            const newEmbed= new Discord.MessageEmbed({
              title: embed.title,
              description: embed.description,
              fields: [embedLikeField]
            })
            r.message.edit(newEmbed)
        })

        collector.on('end', r => {
          var arr = mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`)
          arr = shuffle(arr);
          var half_length = Math.ceil(arr.length / 2);
          var leftSide = arr.splice(0, half_length);
          const embed1 = new Discord.MessageEmbed({
            title: embed.title,
            description: "참가자가 꽉 찼습니다.",
            fields: [{
              name: '1팀',
              value: arr.join("\n"),
              inline: "true"
            },
          {
            name: '2팀',
            value: leftSide.join("\n"),
            inline: "true"
          }
        ]
      })
      message.channel.send(embed1)
        })




      })
  }

})

bot.login(token);