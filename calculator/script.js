document.querySelector('.evaluate-btn').addEventListener('click',function(){
    const exp=document.querySelector('.expression').value;
    const res=eval(exp);
    document.querySelector('.result').textContent=res;
});
