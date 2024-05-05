const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('breadno')
		.setDescription('🍞-no'),
	async execute(interaction) {
		await interaction.reply('Breadno:\nn.: a complete and utter fuckwit.\nWebsite: [linky](https://brendo.org)');
	},
};
