const { RichEmbed } = require('discord.js');

module.exports = (oldMessage, newMessage) => {
    if(oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content){
        return false;
    }

    const client = oldMessage.client
    const modlog = oldMessage.guild.channels.find('name', 'logs');
    const Difference = new RichEmbed()
        .setColor(0x00AE86)
        .setDescription(`**Action:** Message Edit\n**Message Author:** ${oldMessage.author}\n**Old Content:** ${oldMessage.content}\n**New Content:** ${newMessage.content}`);
        if(!modlog) return console.log(`Message Edited | Message Author: ${oldMessage.author} | Old Content: ${oldMessage.content} | New Content: ${newMessage.content}`);
        client.channels.get(modlog.id).send({ embed: Difference });
}