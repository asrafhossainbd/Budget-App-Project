// Implementing the Module Pattern

// var budgetController = (function(){
//     //Private Area
//     var x = 23;

//     var add = function(a){
//         return x + a;
//     }
//     //Public Area
//     return{
//         publicTest : function(b){
//             return add(b);
//         }
//     }
// })();
// var c = budgetController.publicTest(50);
// console.log(c);
// var UIController = (function(){
    
//     //Some Code

// })();

// var controller = (function(budgetCtrl, UICtrl){

//     //budgetController.publicTest(10);
//     var z = budgetCtrl.publicTest(10);
//     return{
//         anotherPublic: function(){
//             console.log(z);
//         }
//     }
// })(budgetController, UIController);


// controller.anotherPublic();



//Setting up the First Event Listeners
//************************************/

//Budget Controller
var budgetController = (function(){
    
    //Some Code

})();


//UI Controller
var UIController = (function(){
    
    //Some Code

})();



//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    //For DRY Code
    var ctrlAddItem = function(){
        
        //1. Get the field input data

        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI

        console.log('It works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)
    
    document.addEventListener('keypress', function(event){
        if(event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
    })
})(budgetController, UIController);



