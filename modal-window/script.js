const closeButton=document.querySelector('.close-btn');
const overlay=document.querySelector('.overlay')
const showButton=document.querySelectorAll('.window-btn');

const closeWindow=function(){
    overlay.classList.add('hidden');
}

for(let i=0;i<showButton.length;i++){
    showButton[i].addEventListener('click',function(){
     overlay.classList.remove('hidden');
});}


closeButton.addEventListener('click',closeWindow);

overlay.addEventListener('click',closeWindow);

document.addEventListener('keydown' , function(e){
    if(e.key === 'Escape' && !overlay.classList.contains('hidden')){
        closeWindow();
    }
});



