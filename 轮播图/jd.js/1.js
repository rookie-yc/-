// var num = read_line()
// len = parseInt(num)
var arrs = [['a','b'],['c','f']]
// for(let i = 0 ; i< len ;i++){
//     arrs[i] = read_line()
// }
var ZZ = []
for(let j = 0;j<arrs.length;j++){
    for(let m = 0; m<arrs[0].length;m++){
        if(ZZ.indexOf(arrs[j][m])=== -1){
            ZZ.push(arrs[j][m])
        }
    }
}
// ZZ.sort()
// if(ZZ.length < arrs[0].length){
//     ZZ.push(arrs[0][0])
// }
if(ZZ.length > arrs[0].length){
    var rep = ZZ.length- arrs[0].length
    ZZ.splice(0,rep+1,"?")
}

// print(ZZ.join(''))
console.log(ZZ.join(''));