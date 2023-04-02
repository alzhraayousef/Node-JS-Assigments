var http = require('http')
var fs = require('fs')
//var qs = require('querystring');
const { parse } = require('querystring');

 


http.createServer( function(request, responce){
   
    if(request.url==='/')
    {
        responce.writeHead(200, {'content-type': "text/html"})
        var html = fs.readFileSync('homepage.html')
        responce.write(html);
        responce.end();
    }
   
    else if(request.url==='/api/sign-up' && request.method==="POST") 
    {
            let body = '';
            request.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
            
            readable= fs.readFileSync('./test.txt','utf-8')
            readable= JSON.parse(readable);
            body=JSON.parse(body);
            flagEmailExist=false;
            
            for (const iterator of readable) {
                if(iterator.email==body.email)
                {
                    flagEmailExist=true;
                }
            }
            if(flagEmailExist)
            {
                responce.writeHead(404)
                responce.write('email already exist')
                responce.end();
            }
            else
            {
                readable.push(body);
                 console.log(readable)
                 fs.writeFileSync('./test.txt', JSON.stringify(readable));//readable2.toString()
                 responce.end();
            }
        });
    }
    

    else if(request.url==='/api/login' && request.method==="POST")
    {
        let body = '';
        let userName;
            request.on('data', chunk => {
            body += chunk.toString(); 
            
            readable= fs.readFileSync('./test.txt','utf-8')
            readable= JSON.parse(readable);
            body=JSON.parse(body);
            flagWrongEmaill=false,flagWrongPass=false;

            for (const iterator of readable) {
                if(iterator.email==body.email)
                {
                    if(iterator.password==body.password)
                      {
                        userName=iterator.username;
                        flagWrongEmaill=false ;
                        flagWrongPass=false;
                      }
                      else
                      {
                        flagWrongPass=true;
                        flagWrongEmaill=false ;
                      }
                    break;
                }
                else
                {
                    flagWrongEmaill=true
                }
                
            }

            if(flagWrongEmaill)
            {
                responce.writeHead(404)
                responce.write('you entered wrong email')
                responce.end();
            }
            else if(flagWrongPass)
                {
                    responce.writeHead(404)
                    responce.write('you entered wrong password')
                    responce.end();
                    
                }
            else
                {
                    responce.writeHead(200, {'content-type': "text/html"})
                    var html = fs.readFileSync('profilepage.html','utf-8')
                    html = html.replace('{name}', userName)
                    responce.write(html);
                    responce.end();
                }
            
        });

    }
    

    else
    {
        responce.writeHead(404)
        responce.write('error page not found!')
        responce.end();
    }
    
}).listen(4500);













// Login .. other way 
/*
data = checkData(request);
        setTimeout(function(){
            console.log('array',data);
            data = Object.assign({}, ...data)},
            2000);
            
        setTimeout(function(){
            
         //   if(data[0].testData.email==data[1].validData.email && data[0].testData.password==data[1].validData.password)
         if(data.testData.email==data.validData.email && data.testData.password==data.validData.password)
  
         {
                    responce.writeHead(200, {'content-type': "text/html"})
                    var html = fs.readFileSync('profilepage.html','utf-8')
                    html = html.replace('{name}', data.validData.username)//data[1].validData.username
                    responce.write(html);
                   // console.log('user found')
                    responce.end();
                }

                else if(data[0].testData.password!=data[1].validData.password)
                {
                    // responce.writeHead(200, {'content-type': "text/html"})
                    // var html = fs.readFileSync('errorpage.html','utf-8')
                    // html = html.replace('{errorMSG}', "you entered wrong password ")
                    // responce.write(html);
                    responce.writeHead(404)
                    responce.write('you entered wrong password')
                    responce.end();
                }
                else 
                {
                    responce.writeHead(404)
                    responce.write('you entered wrong email')
                    responce.end();
                }
        
        },3000) 
        

        
function checkData(request)
{
    var testData,validData;
    var array=[];
    let body = '';
    let body2 = '';

    request.on('data',  function(chunk) {
    body += chunk.toString(); 
    // in case postman
        console.log(JSON.parse(body));
        testData = JSON.parse(body);
        array.push({'testData':testData})
    // in case form in html page
        // console.log(body);
        // testData = parse(body);
        // array.push({'testData':testData})

    });

        body2= fs.readFileSync('./test.txt','utf-8')
        console.log(JSON.parse(body2))
        validData = JSON.parse(body2);
        array.push({'validData':validData})
    // var readable = fs.createReadStream('./test.txt')
    // readable.on('data', function(chunk){
    //     body2 += chunk.toString(); 
    //     console.log(JSON.parse(body2))
    //     validData = JSON.parse(body2);
    //     array.push({'validData':validData})
    // })
   return array;
   
}
*/
