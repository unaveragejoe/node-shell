var fs = require('fs');
module.exports = {
    pwd:function(array) {
            process.stdout.write(process.env.PWD);
    }, 
    date:function(array) {
         var todayDate = new Date();
         process.stdout.write(todayDate.toString()); 
    },
    ls: function(array){
        fs.readdir('.', function(err, files){
            if(err) throw err;
            files.forEach(function(file){
                process.stdout.write(file.toString() + "\n");
            })
        })
    },
    echo: function(array){                      //array = inputArray.slice=[arg1,arg2]
        process.stdout.write(array.join(" "));
    },
    cat: function(file){
        file.forEach(function(el) {
            fs.readFile('./'+el,function(err,data){
            process.stdout.write(data.toString());
        });
        });
        
    },
    head: function(file){
        file.forEach(function(el) {
            fs.readFile('./'+el,function(err,data){
            process.stdout.write(data.toString());
        });
        });
        
    }

};

