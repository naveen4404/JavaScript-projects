let f;

const g=function(){
    const a=25;
    f=function(){
        console.log(a*2);
    }
}

const h=function(){
    const b=100;
    f=function(){
        console.log(b*2);
    };
}
g();
f();
h();
f();
g();
f();