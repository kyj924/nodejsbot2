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

  if (cmdTxt === "팀 4") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector1 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 5,
            dispose: true,

          })


        collector1.on('collect', r => {
          r.message.edit(`(4인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector1.on('remove', r => {
          r.message.edit(`(4인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector1.on('end', r => {
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
  if (cmdTxt === "팀 5") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector2 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 6,
            dispose: true,

          })


        collector2.on('collect', r => {
          r.message.edit(`(5인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector2.on('remove', r => {
          r.message.edit(`(5인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector2.on('end', r => {
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
  if (cmdTxt === "팀 6") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector3 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 7,
            dispose: true,

          })


        collector3.on('collect', r => {
          r.message.edit(`(6인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector3.on('remove', r => {
          r.message.edit(`(6인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector3.on('end', r => {
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
  if (cmdTxt === "팀 7") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector4 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 8,
            dispose: true,

          })


        collector4.on('collect', r => {
          r.message.edit(`(7인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector4.on('remove', r => {
          r.message.edit(`(7인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector4.on('end', r => {
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
  if (cmdTxt === "팀 8") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector5 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 9,
            dispose: true,

          })


        collector5.on('collect', r => {
          r.message.edit(`(8인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector5.on('remove', r => {
          r.message.edit(`(8인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector5.on('end', r => {
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
  if (cmdTxt === "팀 9") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector6 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 10,
            dispose: true,

          })


        collector6.on('collect', r => {
          r.message.edit(`(9인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector6.on('remove', r => {
          r.message.edit(`(9인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector6.on('end', r => {
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
  if (cmdTxt === "팀 10") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector7 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 11,
            dispose: true,

          })


        collector7.on('collect', r => {
          r.message.edit(`(10인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector7.on('remove', r => {
          r.message.edit(`(10인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector7.on('end', r => {
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
  if (cmdTxt === "팀 11") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector8 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 12,
            dispose: true,

          })


        collector8.on('collect', r => {
          r.message.edit(`(11인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector8.on('remove', r => {
          r.message.edit(`(11인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector8.on('end', r => {
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
  if (cmdTxt === "팀 12") {
    const reactionFilter = (reaction, users) => reaction.emoji.name === '✅'

    message.channel.send('이모지를 누르면 참가합니다.')
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector9 = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 13,
            dispose: true,

          })


        collector9.on('collect', r => {
          r.message.edit(`(12인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)


        })
        collector9.on('remove', r => {
          r.message.edit(`(12인)참가자 목록: ${mReaction.users.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join(" ")}`)
          console.log(users)

        })

        collector9.on('end', r => {
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