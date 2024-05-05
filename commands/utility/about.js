const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('info about the bot'),
	async execute(interaction) {
		const about = new EmbedBuilder()
	.setColor('#c900ff')
	.setTitle('Bran')
	.setDescription('To-Do')
    .addFields(
		{ name: 'Filller', value: 'e' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Packages used', value: '`discord.js`: 14.14.1\n `winston`: 3.13.0', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.setTimestamp()
		await interaction.reply({ embeds: [about] });
	},
};
