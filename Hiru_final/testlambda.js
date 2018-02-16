let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {
	sns.publish({
		Message: 'Test sample',
		MessageAttributes: {
			'AWS.SNS.SMS.SMSType': {
				DataType: 'String',
				StringValue: 'Promotional'
			},
			'AWS.SNS.SMS.SenderID': {
				DataType: 'String',
				StringValue: 'test'
			},
		},
		PhoneNumber: '+94715397214'
	}).promise()
		.then(data => {
			console.log(data);// your code goes here
		})
		.catch(err => {
			console.log(err);// error handling goes here
		});


	callback(null, 'Successfully executed');
}