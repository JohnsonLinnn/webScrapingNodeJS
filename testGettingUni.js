// include node fs module
var fs = require('fs');
 
var json = require('./x_dev/data/data-2020-10-07T19_53_37/data.json'); 
let schools=[];
schools =json.data;
let cut =schools.splice(0,1)
for(let i =0;i<schools.length;i++){
    schools[i]= schools[i].replace(/\t/g,",");
    schools[i]= schools[i].replace(/\n/g,",");
    schools[i]="\n"+schools[i]
}
console.log(schools[0])
// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', schools, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 
/*
for(const school in schools){
    let cool =school
    console.log(cool)
    console.log(typeof cool)
}
*/
