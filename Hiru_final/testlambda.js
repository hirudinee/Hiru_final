let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.subscribe({
		Protocol: 'application',
		Endpoint: 'hirudineel@gmail.com',
		TopicArn: 'arn:aws:sns:us-east-2:480964559519:Hiru'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});

	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-2:480964559519:Hiru'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});
	sns.publish({
		Message: 'sample',
		Subject: 'Test',
		MessageAttributes: {
			'1': {
				DataType: 'String',
				StringValue: '11'
			},
			'2': {
				DataType: 'String.Array',
				StringValue: '22'
			},
			'3': {
				DataType: 'Number',
				StringValue: '23'
			},
			'4': {
				DataType: 'Binary',
				BinaryValue: '10'
			},
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-2:480964559519:Hiru'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});

	sqs.sendMessage({
		MessageBody: 'w',
		QueueUrl: 'https://sqs.us-east-2.amazonaws.com/480964559519/Hiru_final',
		DelaySeconds: '0',
		MessageAttributes: {
			"test": {
				"DataType": "Number",
				"StringValue": "1"
			}
		}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});


	callback(null, 'Successfully executed');
}