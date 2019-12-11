


var button = document.querySelector('.add__btn')
var count=0;
button.addEventListener('click', function(){
        console.log(count++ + ' Enter was pressed')
    })

    
document.addEventListener('keypress', function(e){

        if(e.keycode === 13 || e.which === 13){
             console.log( count++ + ' Enter was pressed')
         }
})