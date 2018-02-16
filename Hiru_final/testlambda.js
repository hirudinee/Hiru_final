let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.subscribe({
		Protocol: 'email',
		Endpoint: 'hirudineel@gmail',
		TopicArn: 'arn:aws:sns:us-east-2:480964559519:Hiru'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});


	callback(null, 'Successfully executed');
}