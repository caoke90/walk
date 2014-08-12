var walk=require("walk")
var arr=walk("./test/",function(item){
    if(item.indexOf("index.js")>-1){
    }
    return item
})
console.log(arr)