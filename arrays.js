const data = [];
const colors = ["violet","indigo","blue","green","yellow","orange"];
colors.push("red");//add elements add the last
// for (const items of colors) {
// document.write(items+"<br>");
//     console.log(items);   
// }

// colors.pop();//remove last element
// for (const items of colors) {
//     document.write(items+"<br>");
//     console.log(items);   
// }


colors.unshift("teal");//add elements at the first 

colors.splice(2,0,"purple")

// for (const items of colors) {
//     document.write(items+"<br>");
//     console.log(items);   
// }

colors.splice(3,1,"grey"); //--> (index,delete,update)
for (const items of colors) {
    document.write(items+"<br>");
    console.log(items);   
}

//for in 
 for (const index in colors) {
   console.log("key: "+index+" value: "+colors[index]);
 }
 console.log("-----------for each-----------");

 colors.forEach( function(value,index){
      console.log("key: "+index +"value: "+value);

 })
    
 