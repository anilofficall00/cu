const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('reconnecting', () => reqEvent('reconnecting')(client));
  client.on('disconnect', () => reqEvent('disconnect')(client));
  client.on('guildCreate', () => reqEvent('guildCreate'));
  client.on('message', reqEvent('message'));
  client.on('messageDelete', reqEvent('messageDelete'));
  client.on('messageUpdate', reqEvent('messageUpdate'));
  client.on('messageReactionAdd', reqEvent('messageReactionAdd'));
};
