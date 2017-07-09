var commands = require('./commands');    //commands=module.exports which is an object

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {      // data='function arg1 arg2'
  var inputArray = data.toString().trim().split(' '); // inputArray=[function,arg1,arg2]
  var cmdFunc = commands[inputArray[0]];               //cmdFunc=function
  if(cmdFunc && inputArray.length===1){
        cmdFunc();
    } else if(inputArray.length > 1){
        cmdFunc(inputArray.slice(1));
    }
//   for(var i=1;i<inputArray.length;i++){
    
//     //     console.log(inputArray, cmdFunc)
//         if(cmdFunc){
//         cmdFunc(i);
//     }
//     process.stdout.write('\n');
//     }

//   process.stdout.write('You typed: ' + cmdFunc);
  process.stdout.write('\nprompt > ');
});