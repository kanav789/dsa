// what is var
 
// in an var variable we can redeclare and reassign the value and also you can access the variable before near the brackets in the function

function varcheck(){
    if(true){
        var a = 10
    }
    console.log(a)
    var a =20
    console.log(a)

}
varcheck()