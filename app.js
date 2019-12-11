// Implementing the Module Pattern

var budgetController = (function(){
    //Private Area
    var x = 23;

    var add = function(a){
        return x + a;
    }
    //Public Area
    return{
        publicTest : function(b){
            console.log(add(b));
        }
    }
})();