const Discord = require('discord.js');
const auth = require ('./auth.json');

const client = new Discord.Client();

client.on('ready', () => {
	console.log('Connected.');
});

client.on('message', message => {

	if (message.content.substring(0, 4) === '/ttt') {

		var originalMessage = Array.from(message.content.substring(5));
		var editedMessage = '<@' + message.author.id + '> said:\n';

		message.delete();

		originalMessage.forEach(textToTrains);

		function textToTrains(character, index) {
			switch (character) {
				case 'A':
					editedMessage += '<:a_train:646405111010164737>';
					break;
				case 'a':
					editedMessage += '<:a_train:646405111010164737>';
					break;
				case 'B':
					editedMessage += '<:b_train:646405111014227989>';
					break;
				case 'b':
					editedMessage += '<:b_train:646405111014227989>';
					break;
				case 'C':
					editedMessage += '<:c_train:646405111794630657>';
					break;
				case 'c':
					editedMessage += '<:c_train:646405111794630657>';
					break;
				case 'D':
					editedMessage += '<:d_train:646405112193089536>';
					break;
				case 'd':
					editedMessage += '<:d_train:646405112193089536>';
					break;
				case 'E':
					editedMessage += '<:e_train:646405112742281237>';
					break;
				case 'e':
					editedMessage += '<:e_train:646405112742281237>';
					break;
				case 'F':
					editedMessage += '<:f_train:646405113103253509>';
					break;
				case 'f':
					editedMessage += '<:f_train:646405113103253509>';
					break;
				case 'G':
					editedMessage += '<:g_train:646405114273333287>';
					break;
				case 'g':
					editedMessage += '<:g_train:646405114273333287>';
					break;
				case 'H':
					editedMessage += '<:h_train:692629901387497532>';
					break;
				case 'h':
					editedMessage += '<:h_train:692629901387497532>';
					break;
				case 'J':
					editedMessage += '<:j_train:646405115900854274>';
					break;
				case 'j':
					editedMessage += '<:j_train:646405115900854274>';
					break;
				case 'L':
					editedMessage += '<:l_train:646405115938603029>';
					break;
				case 'l':
					editedMessage += '<:l_train:646405115938603029>';
					break;
				case 'M':
					editedMessage += '<:m_train:646405116580331551>';
					break;
				case 'm':
					editedMessage += '<:m_train:646405116580331551>';
					break;
				case 'N':
					editedMessage += '<:n_train:646405116194193409>';
					break;
				case 'n':
					editedMessage += '<:n_train:646405116194193409>';
					break;
				case 'Q':
					editedMessage += '<:q_train:646405116605235201>';
					break;
				case 'q':
					editedMessage += '<:q_train:646405116605235201>';
					break;
				case 'R':
					editedMessage += '<:r_train:646405116953362442>';
					break;
				case 'r':
					editedMessage += '<:r_train:646405116953362442>';
					break;
				case 'S':
					editedMessage += '<:s_train:646405117423255553>';
					break;
				case 's':
					editedMessage += '<:s_train:646405117423255553>';
					break;
				case 'T':
					editedMessage += '<:t_train:646405117578313747>';
					break;
				case 't':
					editedMessage += '<:t_train:646405117578313747>';
					break;
				case 'W':
					editedMessage += '<:w_train:646405117859332136>';
					break;
				case 'w':
					editedMessage += '<:w_train:646405117859332136>';
					break;
				case 'Z':
					editedMessage += '<:z_train:646405117486170124>';
					break;
				case 'z':
					editedMessage += '<:z_train:646405117486170124>';
					break;
				case '1':
					editedMessage += '<:1_train:646405105670684673>';
					break;
				case '2':
					editedMessage += '<:2_train:646405106501419018>';
					break;
				case '3':
					editedMessage += '<:3_train:646405108011368448>';
					break;
				case '4':
					editedMessage += '<:4_train:646405107805847563>';
					break;
				case '5':
					editedMessage += '<:5_train:646405108921532466>';
					break;
				case '6':
					editedMessage += '<:6_train:646405109680439327>';
					break;
				case '7':
					editedMessage += '<:7_train:646405109613330443>';
					break;
				default:
					editedMessage += character;
					break;
			}
		}

		message.channel.send(editedMessage + '\n');
	}
});

client.login(auth.token);