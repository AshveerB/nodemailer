const mailer = require('nodemailer');
const { Hello } = require('./hello_template');
const { Thanks } = require('./thanks_template');

const getEmailData = (to, name, template) => {
	let data = null;

	switch (template) {
		case 'hello':
			data = {
				from: 'Ashveer Bhayroo <ashveerbhayroo@gmail.com>',
				to,
				subject: `Hello ${name}`,
				html: Hello(),
			};
			break;

		case 'thanks':
			data = {
				from: 'Ashveer Bhayroo <ashveerbhayroo@gmail.com>',
				to,
				subject: `Hello ${name}`,
				html: Thanks(),
			};
			break;
		default:
			data;
	}
	return data;
};

const sendEmail = (to, name, type) => {
	const smtpTransport = mailer.createTransport({
		service: 'Gmail',
		auth: {
			user: '',
			pass: '',
		},
	});

	const mail = getEmailData(to, name, type);

	smtpTransport.sendMail(mail, function (error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log(' email sent successfully');
		}
		smtpTransport.close();
	});
};

module.exports = { sendEmail };
