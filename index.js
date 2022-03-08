var unirest = require("unirest");

if(process.argv.slice(2)[0] === 'production' || process.argv.slice(2)[0] === 'PRODUCTION'){

    console.log('Mpesa Bearer Token Generator');
    console.log('*****************************');
    console.log('* Fetching Bearer Token For Production');
    var req = unirest("GET", "https://api.safaricom.co.ke/oauth/v1/generate");
    let data = process.argv.slice(2)[1]+':'+process.argv.slice(2)[2];
    
    let base64string = Buffer.from(data, 'utf-8').toString('base64');

        req.query({
         "grant_type": "client_credentials"
        });
        
        req.headers({
         "Authorization": `Basic ${base64string}`
        });
        
        req.end(res => {
         if (res.error) throw new Error(res.error);
            console.log("Your Bearer Auth Token Is: "+ res.body.access_token+"\n\n****************");
        });

}else{

    console.log('Mpesa Bearer Token Generator');
    console.log('*****************************');
    console.log('* Fetching Bearer Token For Production');

    var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate");
    let data = process.argv.slice(2)[1]+':'+process.argv.slice(2)[2];
    console.log(data)
    let base64string = Buffer.from(data, 'base64')

    req.query({
         "grant_type": "client_credentials"
        });
        
        req.headers({
         "Authorization": `Basic ${base64string}`
        });
        
        req.end(res => {
         if (res.error) throw new Error(res.error);
            console.log("Your Bearer Auth Token Is: "+ res.body.access_token+"\n\n****************");
        });
}