var auth = require('mpesa-auth-token-generator');

var environment = process.argv.slice(2)[0] //Can be either 'production' or 'sandbox'
var consumerKey = process.argv.slice(2)[1] //Enter consumerKey issued by Daraja
var consumerSecret = process.argv.slice(2)[2] //Enter consumerSecret issues by daraja


auth.generate(environment,consumerKey,consumerSecret);