var fs = require('fs');
var child_process = require('child_process');
var exec = child_process.exec;
//var cmd = require('node-cmd');


// delete dir com.athom.hello

var path = "./com.athom.hello"

var deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};


console.log("dir", process.cwd());


deleteFolderRecursive(path);

//exec("athom login");


// look in properties of node.js command window what is executed if you use the node cli



    var cmd = 'cmd';
   
    var value = ['/k', 'C:\Program Files\nodejs\nodevars.bat'];
    var opt = {};
    
var child = child_process.spawn(cmd, value, opt);


child.stdin.setEncoding('utf-8');
child.stdout.pipe(process.stdout);

child.stdin.write("athom login \n");
hild.stdin.write("youremail@hotmail.com\n");
child.stdin.write("yourhomeypassword\n");
setTimeout(function () {
    
   var i = 0;
    child.stdin.write("athom project --create\n");
    
    
   
        child.stdout.on('data', function (data) {
      
        i = i + 1;
        if (i < 7) {
            child.stdin.write("\n");           
        }
        if (i == 7) {
            child.stdin.write("athom project --run\n");


        }
        if (i == 8) {
            child.stdin.write(String.fromCharCode(65)+"\n");


        }
        
        
        
        

      

        console.log('data' + data);
        });
    
    //child.stderr.on('data', function (data) {
    //    console.log("IM HERE - Error");
    //    console.log('test: ' + data);
    //    process.exit(1); // <<<< this works as expected and exit the process asap
    //});
    
    //child.on('close', function (code) {
    //    console.log("IM HERE");
    //    console.log("close");
    //});
}, 5000);























//cmd.get(
//    'cd C:\Users\Jilles\Documents\Visual Studio 2015\Projects\nl.jilles.firstest\nl.jilles.firstest',
//        function (data) {
//        console.log('data is ', data);
//    }
//);






//fs.existsSync("") || fs.mkdirSync("directory");



//fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));
