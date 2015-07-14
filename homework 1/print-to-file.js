#! /usr/bin/env node

var fs = require('fs');
var output_file = "startup.txt"
var output_message = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(output_file, output_message);
console.log("Script: " + __filename + "\nWrote: " + output_message +  "To: " + output_file);
