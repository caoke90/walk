var fs=require("fs")

function walk(path){
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item){
        if(fs.statSync(path + '/' + item).isDirectory()){
            walk(path + '/' + item);
        }else{
            if(item=item.replace(/.*/i,module.exports.func)){
                module.exports.arr.push(path + '/' + item);
            }
        }
    });
}

module.exports=function(path,fun){
    module.exports.arr=[]
    module.exports.func=fun||module.exports.func
    if(path[path.length-1]=="/"){
        path=path.substr(0,path.length-1)
        console.log(path)
    }
    walk(path)
    return  module.exports.arr
}
module.exports.func=function(item){
    return item
}