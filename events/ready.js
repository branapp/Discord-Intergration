const { Events } = require('discord.js');
const { status, botlogo } = require('../config.json');
const { logger, logError } = require("../Tools/logging.js");

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        logger.info(`Logged in as ${client.user.tag}!`);
        client.user.setAvatar(botlogo);
        client.user.setActivity(status);
	},
};
