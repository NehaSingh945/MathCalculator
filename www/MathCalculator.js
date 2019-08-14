var exec = require('cordova/exec');

 module.export.add = function(arg0,success,error)
 {
  exec(success,error,'MathCalculator','add',[arg0]);
 }

 module.export.substract = function(arg0,success,error)
 {
  exec(success,error,'MathCalculator','substract',[arg0]);
 }
