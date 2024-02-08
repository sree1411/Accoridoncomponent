 
 var accor = document.querySelector('.accordion')
 for(let i=0; i<accor.length; i++){
     accor[i].addEventListener('click', function(){
        this.classList.toggle('acti')
     })
 }