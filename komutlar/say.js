//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA
const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['ROL ID'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('781466094903885864')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız !`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta \<a:hayir:782879758760280074> \n \`u!ban @Etiket Sebep\` `))


  let tag = "❃ Roey";
  const booster = message.guild.roles.cache.get("781799844766810113").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`**Toplam Üye  ・ ${toplam}
  Aktif Üye ・ ${online}
  Taglı Üye ・ ${ttag}
  Booster Üye ・${booster}
  Sesteki Üye ・${ses}**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}

//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA