# NodeJS-MPESA-Bearer-Token-Generator
A NodeJS Package that generates bearer token for mpesa api auth header requests for both sandbox and production environments
This Nodejs package generates bearer auth token for both production and sandbox environments allowing users who need to make use of the mpesa api to quickly generator their bearer token without too much  hassle setting up manually. 

All you need to do is:

	1.	Git clone the project
	2.	npm i to install packages
	3.	run npm start with Environment as first argument, CONSUMER KEY as second argument and Consumer Secret as final argument. 
  
  PLEASE FOLLOW THE ORDER AS STATED ABOVE OR ELSE YOU WILL GET ERROR. USE FORMAT BELOW


$ npm start [environment] [consumer key] [consumer secret]

[environment] = either ‘production’ or ‘sandbox’

[consumer key]  = consumer key issued in Daraja

[consumer secret] = consumer secret issued in Daraja


***do not run command above with brackets. replace with EITHER sandbox or production then consumer key then consumer secret with no brackets****


Developed By theCodingGuy for everyone! Feel free to clone and modify as you wish! 

rony@thecodingguy.co.ke
0705009784
