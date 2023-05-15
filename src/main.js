const { Client, IntentsBitField, EmbedBuilder} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


client.on('ready', (c) => {
  console.log(`Logged in as ${c.user.tag}!`);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'server-info') {
        const serverInfo = new EmbedBuilder()
         .setColor(0x0099FF)
         .setTitle('Welcome to Hermini Fan Club')
         .setDescription('Aside from the rules, you should probably read this for additional information but it depends because this is not compulsory')
         .addFields({
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},{
            name: 'Socials/Invites',
            value: "All the links that are asscociated with Hermini",
         },{
            name: 'Discord',
            value: "https://discord.com/invite/wFWJTKxuw6",
            inline: true,
         },{
            name: 'YouTube',
            value: "https://youtube.com/@hermini1031",
            inline: true,
         },{
            name: 'Roblox',
            value: "https://web.roblox.com/groups/32373551/Hermini1031#!/about",
            inline: true,
         },{
            name: "Don't forget",
            value: "Please feel free to use the following links and send it to literally whoever you like - anything helps to grow Hermini's audience",
         },{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		 },{
            name: "People who run this little circus",
            value: "Basically users who manage the server",
         },{
            name: "@Herman",
            value: "literally hermini himself",
            inline: true,
         },{
            name: "@Neovalex",
            value: "one of the 'ultimate discord mods'",
            inline: true,
         },{
            name: "@TheJonnyGameTube",
            value: "another one of the 'ultimate discord mods'",
            inline: true,
         },{
            name: "@Zaxes",
            value: "and another one of the 'ultimate discord mods'",
            inline: true,
         },{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		 },{
            name: "Channels",
            value: "A basic summary of what each channel is about in this server",
         },{
            name: "#rules",
            value: "This is where you can read the rules",
         },{
            name: "#announcements",
            value: "This is where news about the server gets published",
         },{
            name: "#video-announcements",
            value: "This is where news about the server gets published",
         },{
            name: "#we-talk-here",
            value: "A social channel where people say random stuff",
         },{
            name: "#memes",
            value: "A channel where we post memes",
         },{
            name: "Disclaimer",
            value: "If something urgent needs to be announced, @everyone will be used instead of the default announcement ping role",
         },{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		 },{
            name: "A final message",
            value: "Please don't forget to invite others to this server as it helps us grow our member count and thank you for reading this",
         }
         
         );
         

        interaction.reply({ embeds: [serverInfo], ephemeral: true });
    }
});

client.on('interactionCreate', (interaction) => {
   if (!interaction.isChatInputCommand()) return;

   if (interaction.commandName === 'roles-info') {
       const rolesInfo = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Roles')
        .setDescription('This is a detailed list on all the obtainable and non obtainable roles in this server')
        .addFields({
        name: '\u200b',
        value: '\u200b',
        inline: false,
     },{
        name: 'Non-obtainable roles',
        value: 'These are roles members are unable to obtain unless otherwise by Hermini',
     },{
      name: '@hermini himself',
      value: 'the man, the myth, the legend',
      inline: true
     },{
      name: '@ultimate discord mod',
      value: 'these people help build the server',
      inline: true
     },{
      name: '@Bots',
      value: 'these automated users also help build the server',
      inline: true
     },{
      name: '@tin_sing co owner',
      value: 'the co-owner of my favourite chinese takeaway',
      inline: true
     },{
      name: '@scp-096',
      value: 'i didnt make this role',
      inline: true
     },{
      name: '@google translate user',
      value: 'i didnt make this role either',
      inline: true
     },{
      name: '@Elite Genshit impact player',
      value: 'or this one',
      inline: true
     },{
      name: '@MARK',
      value: 'or this one',
      inline: true
     },{
      name: '@Clone Troopers',
      value: 'and this one',
      inline: true
     },{
      name: '\u200b',
      value: '\u200b',
      inline: false,
   },{
      name: 'Obtainable roles',
      value: 'These are roles that you are able to get',
   },{
      name: '@members',
      value: 'verified users in the server',
      inline: true
   },{
      name: '@YouTube Ping',
      value: "a reaction role that allows you to receive notifications on hermini's youtube videos",
      inline: true
   },{
      name: '@Announcement Ping',
      value: "a reaction role that allows you to receive notifications on this server's announcements",
      inline: true
   },{
      name: '@unverified',
      value: "if you cannot see this, the unverified role is the generic role that everyone receives upon joining this server",
      inline: true
   },{
      name: '\u200b',
      value: '\u200b',
      inline: false,
   },{
      name: 'Final note',
      value: 'Please react to the message in #roles to receieve your reaction roles!',
   }

        );
        

       interaction.reply({ embeds: [rolesInfo], ephemeral: true });
   }
});
    

// Log in to the bot using your bot token
client.login('MTEwNzMzMjM3NDYzNjgwNjI1Nw.GuUqiy.hyvrNOJQogbI1xavISjwOjB87TRSgLZSC1eEWY');


