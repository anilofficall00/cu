const hastebin = require('eval-overflow');

function clean(text) {
    if (typeof(text) === 'string')
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

exports.run = (client, msg, args) => {
  args = args.join(" ");
  try {
    var evaled = eval(args);
    if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
    if (evaled.length > 1500) {
      hastebin(`${evaled}`, "js").then(r => {
        msg.channel.send(`The output was over 1.5k characters, I have uploaded to hastebin at ${r}.`);
      }).catch(console.error);
    } else {
      msg.channel.send(`\`\`\`xl\n${clean(evaled)}\n\`\`\``);
    }
  } catch (err) {
    msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ev',
  description: 'Evaluates arbitrary javascript.',
  usage: 'ev [...code]'
};
