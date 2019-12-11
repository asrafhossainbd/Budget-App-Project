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
            return add(b);
        }
    }
})();
var c = budgetController.publicTest(50);
console.log(c);
var UIController = (function(){
    
    //Some Code

})();

var controller = (function(budgetCtrl, UICtrl){

    //budgetController.publicTest(10);
    var z = budgetCtrl.publicTest(10);
    return{
        anotherPublic: function(){
            console.log(z);
        }
    }
})(budgetController, UIController);


controller.anotherPublic();
