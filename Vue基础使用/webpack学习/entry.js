// var str = 'hello webpack';
var str = require('./module.js');
require('./module.css');
window.onload = function(){
    var div = document.createElement('div');
    div.innerHTML = str;
    document.body.appendChild(div);
}