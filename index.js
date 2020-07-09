const Client = require('./structures/Client');
const client = new Client();

const options = {
  mainGuildID: '730765533552574464',
  inviteChannelID: '730877797828001802',
  logsChannelID: '730877797828001802',
  mainGuildName: '𝑻𝒉𝒆 𝑯𝒂𝒏𝒈𝒐𝒖𝒕',
  testingGuildID: '730877797828001802',
}

client.run(options);
client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log('[Discord Bot] Ready!')
})