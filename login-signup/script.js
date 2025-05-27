const login=document.querySelector('.log-in');
const signUp=document.querySelector('.sign-up');
const mark=document.querySelector('.active-check');
const done=document.querySelector('.done');


login.addEventListener('click',function(){
    mark.style.justifyContent='end';
    done.textContent='Login';

})

signUp.addEventListener('click',function(){
    mark.style.justifyContent='start';
    done.textContent='Sign Up';
})

const reset =function(){
    document.querySelector('.email').value="";
    document.querySelector('.password').value="";
}

done.addEventListener('click',function(){
    const user=document.querySelector('.email').value;
    const pass=document.querySelector('.password').value;
    if(user.length===0 || pass.length===0 || pass.length<4){
        alert('enter valid credentials!!');
        reset();
        return;

    }
    if(done.textContent==="Sign Up"){
        if(user in localStorage){
            alert("user already exists!!");
        }
        else{
            console.log(user,pass);
            localStorage.setItem(user,pass);
            alert('signed up successfully!!');
        }
        reset();
    }
    else{
        if(user in localStorage){
            if(pass=== localStorage.getItem(user)){
                alert('login successfull...');
            }
            else{
                alert('wrong password!!')
                document.querySelector('.password').value="";
            }
        }
        else{
            alert('user not existis!!');
            reset();
        }
    }
    
});