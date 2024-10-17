const path=require('path');

let ext=path.extname('C:\Users\ganes\OneDrive\Desktop\scaler\THE ULTIMATE NODE COURSE\f1.txt');

let basename=path.basename('C:\\Users\\ganes\\OneDrive\\Desktop\\scaler\\THE ULTIMATE NODE COURSE\\f1.txt');

console.log(ext);//.txt

console.log(basename);//f1.txt

console.log(__filename);//C:\Users\ganes\OneDrive\Desktop\scaler\THE ULTIMATE NODE COURSE\path.js

console.log(__dirname);//C:\Users\ganes\OneDrive\Desktop\scaler\THE ULTIMATE NODE COURSE