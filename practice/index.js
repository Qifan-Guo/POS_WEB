var http = require('http');
var fs = require('fs');
function handle_request_qifan(req,res){
    var body ="";
    console.log("incoming traffic");
    res.writeHead(200,{"Content-Type" : "application/json"});
    read_text_file((err,text)=>{
        if(err){
            console.log("shit going down in here"+err);
        }
        else{
            body = text;
            res.end(body+"\n");
        }
    });

    
}
function read_text_file(callback){
    find_file((err,filenames)=>{
        if(err){
            console.log(err);
        }else{
            fs.readFile(filenames[1],'utf8',(err,text)=>{
                if(err){
                    callback(err);
            }else{
                    callback(null,text);
                
            }
                    
               
            })
        }
    })
}

function find_file(callback){
    fs.readdir('./',(err,filenames)=>{
        if(err){
            callback(err);
            return;
        }else{
            callback(null,filenames);
        }
    });
}

var server = http.createServer(handle_request_qifan);
server.listen(8080);
console.log("Server has started, listening on port 8080 local");

