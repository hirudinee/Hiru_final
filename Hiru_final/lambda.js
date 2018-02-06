let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.sendMessage({
		MessageBody: 'This is a test message',
		QueueUrl: 'https://sqs.us-east-2.amazonaws.com/480964559519/Hiru_final',
		DelaySeconds: '0',
		MessageAttributes: {
			"sample": {
				"DataType": "String",
				"StringValue": "123"
			},
			"test": {
				"DataType": "Number",
				"StringValue": "11"
			},
			"binary": {
				"DataType": "Binary",
				"BinaryValue": "01"
			}
		}
	}, function (data) {
		console.log('data ',dat);
	}, function (error) {
		console.log('Error ',error);
	});


	callback(null, 'Successfully executed');
}