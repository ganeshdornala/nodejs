const fs=require('fs');
//files
//reading a file
let filecontent=fs.readFileSync("f1.txt");
console.log("data of file f1.txt -> "+filecontent); //data of file f1.txt -> I am f1

//writing in a file
fs.writeFileSync("f2.txt","This is file 2");
console.log("File has been overwritten");   //File has been overwritten

//append a file
fs.appendFileSync("f3.txt"," This is updated data");
console.log("File f3 has been updated");    //File f3 has been updated

//deleting a file
fs.unlinkSync("f2.txt");
console.log("file has been deleted");   //file has been deleted

//Directories

//create a directory
fs.mkdirSync("myDirectory");
console.log("myDirectory created");   //myDirectory created

//check the content inside a directory
let folderpath='C:\\Users\\ganes\\OneDrive\\Desktop\\scaler\\THE ULTIMATE NODE COURSE\\myDirectory';
let foldercontent=fs.readdirSync(folderpath);
console.log("folder content : "+foldercontent); //folder content : f1.txt,f2.txt,f3.txt

//check if a directory is present or not
let result=fs.existsSync('myDirectory');
console.log("myDirectory exists : "+result);    //myDirectory exists : true

//delete a directory
fs.mkdirSync("directory1");
fs.rmdirSync('C:\\Users\\ganes\\OneDrive\\Desktop\\scaler\\THE ULTIMATE NODE COURSE\\directory1');
console.log("directory1 has been deleted");    //directory1 has been deleted