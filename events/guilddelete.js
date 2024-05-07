
const {ButtonBuilder, ButtonStyle, MessageActionRow, MessageButton, EmbedBuilder } = require('discord.js');
const { logger} = require('../Tools/logging.js');
const config = require('../config.json');
const {logchannel} = config;

module.exports = (client) => {
    client.on('guildDelete', guild => {
        // Get the log channel (replace 'log-channel-id' with your log channel's ID)
        const logChannel = client.channels.cache.get(logchannel);
    
        // Create an embed message
        const embed = new EmbedBuilder()
            .setTitle(`Left a server: ${guild.name}`)
            .setColor('ff0000')
            .setDescription(`This server has ${guild.memberCount} members.`)
            .setThumbnail(guild.iconURL())
            .setTimestamp();
    
        // Send the embed to the log channel
        logChannel.send({ embeds: [embed] });
        logger.info(`Left ${guild.name} (${guild.id})!`);
    });
}
