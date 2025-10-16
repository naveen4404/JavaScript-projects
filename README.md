Javascript is a hight level object oriented and multi paradigm programming language.
multiparadigm- flexible and versatile , can use all types of programming styles
oop-mostly based on objects
ES6 - ECMAScript
===============================================================================================================================================
Datatypes:
    number,
    boolean,
    string,
    null (nothing , empty , value unknown),
    undefined (empty , value not assigned ),
    bigint,

variable - "named storage of data" 
value - any data or unit of information

============================================================================================================================================
 3 ways of writing variable :

    (i) let : mutable , but  cannot be redeclared 
        
    (ii) const : immutable , must be initialized at the time of declaration
         
         const birtYear; X
         const birtYear=2004; 
    
    (iii) var 

============================================================================================================================================
Operators :

    Mathematical or arithmatic : +,-,*,/,**,%
    assignment : = , += ,-+ ,/+ ,.....
    logical : > , < ,== ,!=, <= , >=,===,!== (null is only equals to undefined vice versa)
    increment :++
    decrement :--
    conditional operator : (condition) ? (expIfTrue) : expIfFalse  [EXPRESSION]
    null coalescing operator : (left) ?? (right)  --> returns right if left is nullish(null or undefined) else returns left
    bitwise : rarely used

Operators precedence :
     when there are more than one operator in expression , operator precedence tells order of the evaluation

     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

=============================================================================================================================================

Type conversion : Explicitly converting one type to another 

                Number('')
                String(1)

Type Coercion : Implicitly Js coverts one type into another

                Ex : 'Number'+10 // Number 10
                     '1'+'2'    //12
                     '1'+2      //12
                     '2'-'1'    //1 
            
numbers : 

        const height='100px';
        const num=Number.parseInt(height);  // to make this work string must be start with number
        console.log(num);   //100


        const width='2.5rem';
        const floatNum=Number.parseFloat(width);
        console.log(floatNum);   // 2.5

        console.log(Number.parseInt(width)); //2


        to check if something is number or not : Number.isFinite(20) ;//returns boolean


Math and Rounding :

        Math.sqrt(25); //5

        Math.max(2,3,4,2,5,6,'7',4); //7  //it does type Coercion

        Math.min(2,3,4,5,6); // 2

        Math.PI //3.1415......

        Math.random();  //gives number between 0 and 1


Rounding :

        Math.trunc() ; simply removes decimal parent

        Math.round() ; rounds to the nearest integer

        Math.ceil() ; rounds up

        Math.floor() ; rounded down


    rounding decimal :

             (2.7).toFixed(3) ;  //2.700



BigInt :
        In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991),
         or less than -(253-1) for negatives.

        BigInt value is created by appending n to the number

        const bigInt = 1234567890123456789012345678901234567890n;

        to convert numbers to BigInt : BigInt(3444)

        BigInt to Number --> Number(3444n)

        we can not add a BigInt and Number , Explicitly must to type conversion

        but comparision can be done

        with division only integer part is returned

        (11n/3n)-->3n

         

============================================================================================================================================

Truthy and Falsy values :

        Falsy values : values that return false upon converting them into boolean(0,'',null,undefined,NaN)
        Truthy values: values that return true (all values except falsy values)

============================================================================================================================================
        
Taking decisions :  (CONTROL STATEMENTS)

        if(condition){
            //statements
        }else if(condition){
            //statements
        }else{
            //statements
        }

Switch statement :

        switch(value) {
            case 1 : //statements
                    break;
            case 2 : //statements
                    break;
            case 3 : //statements
                    break;
            default ://statements
        }
strict mode :
        'use strict'
        allows developer to write more secure code
        shows errors those are skipped by Javascript

Functions :
            block of code that does a specific task
            can be reused any no of times in the code
            returns a value that can be used further

            Types :

            Function declaration:

                    function functionName(parameters){
                        //body
                        return value;
                    }
            Function Expression:

                    const variable= function(parameters){
                        // body

                        return value;
                    }

            *function of type declaration can be called above its declaration where as we can not do that with 
            function expression and arrow funcn.

            Arrow functions :

                    another type of function expression

                    const variable= (parameters)=>{
                        //body
                        return value;
                    }

            **arrow function does not support arguments keyword , where as remaining types does.
             [except arrow type we can pass any no.of args irrespective of no.of parameters]
=============================================================================================================================================
Arrays :
        a container to store mutple values

        const arr=[1,2,3,4,5]
        const arr=new Array(1,2,3,4,5)

        Basic methods:

            1)arr.push(value) - adds a passed value at the end.
            2)arr.unshift(value) - adds a passed value at the beginning.
            3)arr.pop() - removes last element and returns it.
            4)arr.shift() - removes element at the beginning and returns it.
            5)arr.indexOf(element) - return the index of the element , if array doesn't contain that element it returns -1.
            6)arr.includes(element) - tells whether the passed element is present or not (return true or false).
=============================================================================================================================================
Objects : stores related data as property - value pairs and can also contain functios specific to that object .


const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    
    calcBMI : function(){
        this.bmi= this.mass /(this.height*this.height);
        return this.bmi;
    }
};
const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.bmi= this.mass /(this.height*this.height);
        return this.bmi;
    }
};

if(mark.calcBMI() < john.calcBMI()){
    console.log(`John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`);
}
else{
    console.log(`Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`);
}

can also access property values with [] :

        mark['fullName'] - property name must be written as string even it is function (mark['calcBMI'()])
                            can pass any valid expression in the brackets
        
        But when using dot operator , we must use actual property name (mark.height , mark.calcBMI()) 

        this is nothing but that object .

        when properties need to be accessed dynamically brackets[] are used .
==================================================================================================================================================

Loops :     (CONTROL STATEMENTS)
       for loop :

                for(let i=0;i<value;i++){

                }

        while loop:

                while(condition){
                                            //we use it when no of executions are not known
                }
        break : terminates the loop execution .

        continue : skip that perticular execution when some condition met .
==============================================================================================================================================

DOM : Document Object Model - It is a structured representation of html elements , using that we can manipulate html elements
                              and CSS styles 

                              It in the form of tree.

                              DOM is created when the html page is loaded in the browser.


To select an element we use -> document.querySelector(.class/tageName).textContent="some text";

                               const varriable = document.querySelector(.class/tageName).value;
        
                               document.querySelector(.class/tageName).style.propertName(camelcase)='value';

                               document.querySelector(.class/tageName).addEventListener('click',function(){
                                //statements
                               });
==================================================================================================================================================
*** If we select class that is common to more than one element , only the first element is selected

    to select all the element of that class , we need to use "document.querySelectorAll('.class-name');" 

    thus all the elements are formed as a list , so that we can access them


Element.classList --> is used to work with all the classes of that element [WORKING WITH THE CLASSES]

                      add() -- adds class passed , remove() -- removes the class passed 
                      
                      contains() -- checks whether the passed class is present or not

Another way of selecting an element is through its id [document.getElementById('id-name')]


.insertAdjacentHtml(position,text) : adds new element 

                <!-- beforebegin -->
                <p>
                <!-- afterbegin -->
                foo
                <!-- beforeend -->
                </p>
                <!-- afterend -->
===================================================================================================================================================

How the javascript works:

JAVASCRIPT : it is a high level prototype based, object oriented , multi paradigm ,interpreted or JUST IN TIME COMPILED, dynamic, garbage collected
             programming language with first class functions and single threaded , non-blocking concurrency model .


code is executed in CALL STACK , for each block of execution there will be an execution context.


SCOPE :

    scoping : how the program variables are organized and accessed .

    scope : space or the environment where the variables are declared .

    scope of a variable : the region of our code where certain variables can be accessed

Three types of scope :

    Global scope : variable or declared outside of functions and blocks .
                   they can be accessed through out the program.

    Function scope : variables are declared inside the function only and also they can be access in that function only.

    Block scope : variable are declared in blocks (conditional , loop statements) and they can be accessed inside that block only.
                  It is only applicable to variables declared using let or const.
    
    **variables declared with var can be accessed outside of the block where it is declared , but it follows functional scope .

    **If inner scope and outer scope has variable with same name , inner scope variable is accessed when it is used .

    The accessing is done based on the scope chain.

***SCOPE CHAIN DOES NOT CAHNGE BASED ON THE ORDER OF EXECUTION OF THE CALL STACK.
==================================================================================================================================================

HOISTING :  making some variables can be used or accessed before their declarations

            - function declarations supports hoisting .
            -var variable supports but the result we get when accessing is 'undefined'
            -let and const does not support hoisting , we get 'before initialization' error , in this case they are put in temporal dead jone (TDZ)
             until their declaration.
                                                                                                                               
            -function expressions and arrow functions does not support hoisting.

this keyword - it points the owner in which it is present

                if we use this in object , 'this' is the object

                if we use it to point function , the result will be undefined

                if we use it to point arrow function , the result will be result of global this (window)


Memory management : 

                All the values in js undergoes memory life cycle

                alloction ---> using ----> releasing

                two memories:

                        Call Stack                      Heap
                             ^                            ^
                             |                            |
                        all the primitives              all the objects
                    and Reference to objects

                Ex:
                    const ram={                   const ram={
                        name:'ram',  ----------->          name:'ram',
                        age:20                             age:20,
                    }                                      surName='kumar'}
                                                                ^
                                                                |
                    const ram2=ram;------------------------------

                    ram2.surName='kumar';

                    to make copy : const ram2={...ram}  //level one copy i.e., only primitives are copied , the nested objects will be referenced.

                    to make deep copy we use , const ram2=structuredClone(ram);




        Garbage collection :

                        - values in call Stack are removed , when its parent function completes its execution
                        - global values does not get cleared
                        - the objects in tha heap will be removed when they are dead ,i.e., when they does not have any reference in the call stack.
                        - follows the algorithm called MARK AND SWEEP .

===================================================================================================================================================

Destructuring : breaking a data structure into variables with values .

Array destructuring :

                    const details=['ramu','kumar','20',['krish','hari']];

                    let [firstName,lastName] = details;

                    let[name, ,age]=datails;

                    let[name, , ,[friend1,friend2]]=datails;  //nested

Object destructuring :

                    const datails={
                        firstName:'ramu',
                        lastName:'kumar',
                        age:20,
                        parents={
                            father:'rao',
                            mother:'rani'
                        }
                    }


                    let {firstName,lastName}=details;

                    to have different variable name other than property names -- let {firstName:me , lastName:surName}=details;

                    let {firstName,parents:{father,mother}}=datails; //nested 

                    destructuring can be done in the parameter of a function.

                    It is very useful when working with the apis.

spread operator - unpacks the arrays 

                arr=[1,2,3,4];
                console.log(...arr)   // 1 2 3 4

                it is also used for creating arrays from existing arrays  and also for shallow copying.

                it canbe used with objects(shallow copy) or any iterable.

rest operator : it packs the individual elements.

                me=['ram','kumar',30,'rao','rani'];

                [firstName,lastName, ,...parents]=me;


                It can be used with objects also.

short circuting : Logical operators can be used with any datatype and returns any datatype.

                || operator : the evaluation of the expression stops when ever a truthy value comes and returns that truthy value.

                ex: 5 || 6       // 5
                    ''||'h'      //'h'
                    'hello' || 'hi'    //'hello'

                    if all the values are falsy , the last value is returned.

                && operator : the evaluation of the expression stops when ever a falsy value completes and returns that falsy value.

                ex : null && truth          //null

                    'k' && 5 && truth && '' && 1        //''

                    if all the values are truthy , the last value is returned.
===================================================================================================================================================
for of loop :
                const days=['mon','tue','wed','thurs','fri','sat'];

                for(const day of days){
                    console.log(day);
                }

                to get index we can use entries method,

                for(const day of days.entries()){
                    console.log(day); // [0,'mon']-----
                }

===================================================================================================================================================
optional chaining (?.) :

            it is used to check whether the elements in the array or properties in the object are present or not.

            if they are not present , immediately undefined is returned.

===================================================================================================================================================
Looping over objects :

            over property names :

                for(const key of Object.keys(obj)){
                    console.log(key)
                }

            over values :

                for(const val of Object.values(obj)){
                    console.log(val);
                }

            over keys and valuse :

                for(const [key,value] of Object.entries(obj)){
                    console.log(key,value);
                }

=================================================================================================================================================
set : unordered collection of unique elements.

    const set1 = new Set ([1,2,3,4,5,1,2]) 
    const set2 = new Set ([4 ,5 , 6,7,8,5])

    methods :
                set1.add(10);
                set1.delete(3);
                set1.has(1);
                set1.intersection(set2);
                set1.union(set2);
                set1.difference(set2);
                set1.symmetricDifference(set2);
                set1.isDisjointFrom(set2);
                set1.isSubsetOf(set2);
                set1.isSuperSetOf(set2);

                to get size : set.size;
==================================================================================================================================================
map : unordered collection of keys and values , similar like objects but the difference is " in maps the keys can be of any datatype where as
      in objects the keys(properties) must be strings" .

    const map=new Map();

    to add element: map.set(key,value);
    to delete     : map.delete(key);
    to check whether the key is present or not : map.has(key);
    to get value of key : map.get(key);


    Another way of creating map :

    const map=new Map([['name','ram'],['age',20],[1,'hyderabad'],[2,'bengalore']]);

==================================================================================================================================================
string : sequence of characters , immutable

        ex : str=I love javascript programming;

        accessing : str[0]    // I 

        methods :

        str.slice(startIdx , endIdx)  // A new string containing the extracted section of the string.

        str.indexOf('l')    // 2         The index of the first occurrence of searchString found, or -1 if not found.

        str.lastIndexOf(i)  // 26         The index of the last occurrence of searchString found, or -1 if not found.

        str.replace('I' , 'We')           return a new string with replacing first argument with second , it does this only for first occurance

        str.replacAll()  // replaces all

        str.toUppercase()  // lowercase to toUppercase

        str.toLowerCase()  // upper to lower

        str.split(' ')   // ['I','love','javascript','programming']  

        str.trim()  // removes leading and ending spaces or any new line characters

        str.padStart(30 , *)  // pads at start with * , to make sure the length of the str is 30

        str.padEnd(30,*)    // similar but does at last

        str.startsWith('I')  // returns true or false by checking whether the string starts with the passed string 

        str.endswith('T')   // similar but checks at last

===================================================================================================================================================
closure : A closure is the closed - over variable environment of the execution context in which a function was created, even after that 
            execution context is gone.

        A closure gives a function access to all the variables of its parent function , even after the parent function has returned.

        The function keeps reference to its outer scope , which preserves the scope chain throughout time.

        A closure make sure that the function does not loose connection to the variables that exist at the functions birth place. 

        A closure is like a backpack that a function carries around where ever it goes . 
        This packpack has all the variables that were present in the environment where the function was created.

=======================================================================================================================================================================
ARRAYS :

        let arr=['a','b','c','d','e'];
        //SLICE

        console.log(arr.slice(2)); // ["c", "d", "e"]

        let newArr=arr.slice(); // ["a", "b", "c", "d", "e"]
        console.log(newArr);   

        console.log(arr.slice(-2)); //["d", "e"]

        console.log(arr.slice(0,-3));  //["a", "b"]

        //SPICE

        // mutates the array

        //console.log(arr.splice(2)); //["c", "d", "e"]
        //console.log(arr)      // ["a", "b"]
        // console.log(arr.splice(1,2));// ["b", "c"]
        // console.log(arr)        //["a", "d", "e"]

        const arr2 =['j','i','h','g','f'];

        //REVERSE
        //muytates the array
        console.log(arr2.reverse()); // ["f", "g", "h", "i", "j"]
        console.log(arr2)             // ["f", "g", "h", "i", "j"]

        //concat

        const letters=arr.concat(arr2);

        console.log(letters); // ["a", "b", "c", "d", "e", "f", "g", ...]

        // AT METHOD 

        const arr3=[23,24,25];
        console.log(arr3.at(0));

        console.log(arr3[-1]);  //undefined
        console.log(arr3.at(-1))//  25

=======================================================================================================================================================================
let transactions=[2000,-3500,400,10000,-2300,25000];

//FOR EACH 

transactions.forEach(function(transaction){
      transaction >0 ? console.log(`deposited ${transaction}`) : console.log(`withdrawn ${Math.abs(transaction)}`)
});

//we can not break forEach

=====================================================================================================================================================================
map function : creates new array by transforming the old one.

            const nums=[2,3,4,5,6];
            const nums2=nums.map(x=>x*2);
            console.log(nums2)


filter : filters the array elements using the call back function , creates new array.

            const nums=[-1,2,3,-4,1,1];
            const positives=nums.filter(x=>x>-1);
            console.log(positives);

reduce : it reduces the value into single value.

            const nums=[2,3,4,5,6];
            const sum=nums.reduce(function(acc,cur){
            return acc+cur;
            },0);
            console.log(sum);

            // acc : accumulator
            // cur : current element
            0 is the initial value of the accumulator.

find :
        // find method

        const movements= [200, -200, 340, -300, -20, 50, 400, -460];

        // retrives an element from the array based on some condition

        // return first element which satisfies the condition

        const firstWithdrawl=movements.find(mov => mov<0);
        console.log(firstWithdrawl);

findIndex() :

            it is used to fine the index of an element based on passed callback function.

            const index=accounts.findIndex(
                    acc=> acc.userName===currentUser.userName
                );

similarly there are findLast() , findLastIndex() --> does the same thing but from last

some :

        returns true or false , if any of the element in the array satisfies passed condition

        const movements= [200, -200, 340, -300, -20, 50, 400, -460]

        const doescontainNeg=movements.some(elem => elem<0); //true

every :
        if every element passes the condition in call back function , then it returns true else false

flat : converts mulyi dimentional array into the one dimentional array.


    const arr=[[1,2],3,4,5,[6,7,8]];
    console.log(arr.flat()); // [1,2,3,4,5,6,7,8];

    the above one flats at one level only , if we want to flat the array that is having multiple nesting we need to specify the depth.
    By default the depth is 1.

    const arr=[[1,[2,3,4]],5,6,[7,8]];
    console.log(arr.flat(2)); // [1,2,3,4,5,6,7,8]

flatMap() : this method combines the operations of both map and flat.

            **using this method we can flat the array by only 1 level.

=========================================================================================================================================================================
sorting : in JavaScript , the sorting is done based upon the element's string value.

        to sort the number arrays , we need to pass a comparator call back

    sort():
            sort method changes the original array .

            const arr=[1,6,7,4,6];
            arr.sort((a,b)=> a-b); // asce 
            console.log(arr);   //[1,4,6,6,7]

            arr.sort((a,b)=> b-a);  // desc

===========================================================================================================================================================================
more ways of creating and filling arrays :

        const arr=new Array(1,2,3,4,5,6);

        const arr2=new Array(7); // creates an empty array of length 7

        fill() :

                arr2.fill(1);   //[1,1,1,1,1,1,1]

                arr2.fill(2,2,5);  //[1,1,2,2,2,1,1]

        Array.from():

                the first parameter is the object specifying the length , the next parameter is any call back function

                const arr3= Array.from({length:7} , ()=> 1) ;  //[1,1,1,1,1,1,1]

                const randomDice = Array.from({ length: 100 }, function () {
                                    return Math.trunc(Math.random() * 6) + 1;
                                    });

                                    console.log(randomDice);
=============================================================================================================================================================================
non- destructive array methods :

        toReversed()
        toSorted()
        toSpliced()

        const arr = [1, 2, 3, 4, 5];
        const arr2 = arr.with(1, 100);
        console.log( arr2); //[1,100,3,4,5]

to mutate original array :

        * .push()
        * .unshift()
        * .pop()
        * .shift()
        * .splice()
        * .reverse()
        * .sort()
        * .fill()

a new array base on origina :

        * .map()
        * .filter()
        * .slice()
        * .with()
        * .flat()
        * .flatMap()
        * .toReversed()
        * .toSorted()
        * .toSpliced()
        * .concat()

an array index :

        * .indexOf()

        based on condition :

        * .findIndex()
        * .findLastIndex()

an array element ;

        based on condition :

        * .find()
        * .findLast()

       if we know the index already 

        * .at()

to know if array includes :

        * .includes()

        based on test conditions :

        * .some()

        * .every()

A new string :

        * .join()

to transform to value :

        * .reduce()

to just loop array :

        * .foreach()

=============================================================================================================================================================================

DATE:

        //Create a date

        // by using Date constructor

        const now = new Date();
        console.log(now);   //Tue Jun 03 2025 14:30:02 GMT+0530 (India Standard Time)

        //Date methods
        console.log(now.getFullYear());
        console.log(now.getMonth());
        console.log(now.getDate());
        console.log(now.getHours());
        console.log(now.getMinutes());
        console.log(now.toISOString());  //2025-06-03T09:00:02.761Z

operations on dates :

        we can subtract two dates 
        the dissence returns the time stamp in milli seconds.

        const now = new Date();
        const past=new Date(2025,5,23);

        const daysbetween = Math.round((now -past)/(1000*60*60*24));
=============================================================================================================================================================================
TIMERS :

        settTimeOut timer : runs only occurance

        const timer=setTimeout(() => console.log('here is your pizza'), 3000);
        console.log('waiting..');

        // this mechanism calls asyncronous js mechanism

        // the call back function runs only once 

        to break the timer :

            if(condition){
                cleartimeOut(timer);
            }

        
        setInterval :  executes the call back function repetedly after certain time setInterval

        setInter(function(){
            const now=new Date();
            console.log(now);
        } , 1000);   


==========================================================================================================================================================================

ADVANCED DOM :

      how the dom actually works :

                * interface b/w browser and js

                In dom api has different nodes , they are element,text,comment , document

                each type of node has its own properties and properties inherited from the parent node

    
    createElement() -> can create a html element

    remove() --> removes the element


    Scrolling :

                section.scrollIntoView({behaviour:'smooth'});

    Types of events and event handlers :
                 an event is basically a signal

                that is generated by a certain dumb node

                and a signal means that something has happened,

                for example, a click somewhere or the mouse moving,

                click
                keydown                        
                mouseenter

                addEventListener()--> allow us to add mutltiple listeners to same event

                removeEvenListener() 

              Bubbling and capturing (propagation):

                capturing  : event first start at main parent element and reaches the target

                Bubbling  : after the execution , it again propagates to the main parent element


                e.stopPropagation() ;

    DOM traversing :

            const h1 = document.querySelector('h1');

            //going down : selecting child elements

            console.log(h1.querySelectorAll('.highlight'));
            console.log(h1.childNodes); // returns node list
            console.log(h1.children); //HTML collection
            h1.firstElementChild.style.color = 'white'; //lly lastElementChild

            //going up  : parents

            console.log(h1.parentNode);
            console.log(h1.parentElement);

            h1.closest('.header'); //selects near header , specially used in event delegation

            //side wise : siblings

            console.log(h1.previousElementSibling);
            console.log(h1.nextElementSibling);
            console.log(h1.parentElement.children); // all the siblings

==========================================================================================================================================================================
 Object Oriented Programming :

            OOP is a type of programming paradigm based on objects and classes.

            class : It provides blue print to create an object (logical entity)

            object : it is an instance of a class , we can create any no of object using the same class
                     Each object has its properties and methods. (physical entity)

            
    OOP is designed based on the following concepts :


            abstraction : hiding the internal implementation and providing only the necessary details

            encapsulation :  basically it means to keep some properties and methods private inside the class , so that they
                             are not accessible from outside the class.

            inheritance  :  in inheritance the properties and methods of one class are inherited to another class (parent class --> child class)
                            and for the child class in addition to the parents class properties and it can have its own 

            polymorphism : sigle thing can perform mutiple operations , for example lets take an user class and admin class where admin inherits some 
                           propertis and methods from user class , so the same inherited method may have different in admin (over riding the parent class method)
                           but the methods have same name.



    OOP in javascript :

            * in javascript every object is linked with the prototype 
            * all the methods of the prototype are accessible to the object . This is calles as prototypal inheritance 

            *we can achieve the above in three ways :

                --constructor functions
                --ES6 classes
                --Object.create 

        Constructor function and new operator :

                const Person=function(firstName , birthYear){
                                    this.firstName=firstName,
                                    this.birthYear=birthYear
                                    }

                const ram=new Person('Ram',2004);
                const krish=new Person('krishna',2003);

                // New {} is created
                //this is set to {}
                //{} is linked to prototype
                // function automatically returns {}

                console.log(ram);
                console.log(krish);
                console.log(ram.firstName);
                console.log(krish.birthYear);

                Person { firstName: 'Ram', birthYear: 2004 }
                Person { firstName: 'krishna', birthYear: 2003 }
                Ram
                2003
        
                //creating methods for prototype

                Person.prototype.calcAge=function(){
                                return 2025-this.birthYear;
                                }

                Person.prototype.species='Human';
                console.log(ram.calcAge(),ram.species);
                console.log(krish.calcAge(),krish.species)

                // ro check whether the property is its own

                console.log(ram.hasOwnProperty('firstName'));


        using es6 class :

                class Person{
  
                constructor(firstName,birthYear){
                this.firstName=firstName;
                this.birthYear=birthYear;
                }

                
                get calcAge(){
                return 2025-this.birthYear;
                }
                }

                Person.prototype.species='human';
                const ram=new Person("Ram",2004);

                console.log(ram.firstName , ram.calcAge,ram.species);


        using Object.create :


                const Person ={
                        calcAge(){
                        return 2025-this.birthYear;
                        },
                        
                        init(firstName,birthYear){
                        this.firstName=firstName,
                        this.birthYear=birthYear
                        }
                
                }

                const ram=Object.create(Person);

                ram.init('Ram',2004);

                console.log(ram);

                console.log(ram.calcAge());


=======================================================================================================================================================================

inheritance:

        constructor function :

                        const Person = function (firstName, birthYear) {
                                        (this.firstName = firstName), (this.birthYear = birthYear);
                                        };

                        Person.prototype.calcAge = function () {
                        return 2025 - this.birthYear;
                        };

                        const Student = function (firstName, birthYear, course) {
                        //making inhertance of properties
                        Person.call(this, firstName, birthYear);
                        this.course = course;
                        };
                        //making the student prototype as person prototype to make prototype chaining
                        Student.prototype = Object.create(Person.prototype);
                        Student.prototype.introduce = function () {
                        console.log(`Hello ! I am ${this.firstName} . I am from ${this.course}`);
                        };

                        const ram = new Student("ram", 2004, "computer science");
                        console.log(ram);

                        console.log(ram.calcAge()); // from Person
                        ram.introduce();

                        // console.log(Person.prototype);


        ex : 
                        const Car=function(make,speed){
  
                                this.make=make;
                                this.speed=speed;
                                
                                
                                }

                        Car.prototype.accelerate=function(){
                        this.speed=this.speed+20;
                        console.log(this.speed);
                        }

                        Car.prototype.break=function(){
                        this.speed=this.speed-5;
                        console.log(this.speed);
                        }



                        const EV = function(make,speed,charge){
                        
                        Car.call(this,make,speed);
                        this.charge=charge;
                        }

                        EV.prototype=Object.create(Car.prototype);

                        EV.prototype.chargeBattery=function(chargeTo){
                        this.charge=chargeTo;
                        }
                        EV.prototype.accelerate=function(){
                        this.speed=this.speed+20;
                        this.charge=this.charge-1;
                        console.log(`${this.make} is going at ${this.speed}KMPH with a charge of ${this.charge}%`);
                        }
                        const tesla=new EV('Tesla',120,23);
                        tesla.chargeBattery(100);


                        tesla.accelerate();

                        const bmw=new Car('BMW',200);
                        bmw.accelerate();
                        bmw.accelerate();

                        console.log(tesla.__proto__)
                        // tesla.accelerate();
                        // tesla.break();


        ES6 classes: just by using "extends" keyword and "super()" to acces parent's constructor.

Encapsulation :

        //public fields
        //private fields
        //public methods
        //private methods




        class Account{
        
        bank='SBI';
        #movements=[];  //private field
        #pin;
        constructor(owner,currency,pin){
        this.owner=owner;
        this.currency=currency;
        this.#pin=pin;
        console.log("thanks for creating account");
        }
        
        deposit(val){
        this.#movements.push(val);
        }
        witdraw(val){
        this.deposit(-val);
        }
        
        #approveLoan(val){  //private method , can acces inside the class only
        return true;
        }
        
        requestLoan(val){
        if(this.approveLoan(val)){
        this.deposit(val);
        }
        }
        }

        const ram=new Account('Ram','INR',1111);

        ram.deposit(500);
        ram.witdraw(200);
        console.log(ram);

        Account {bank: 'SBI', owner: 'Ram', currency: 'INR', #movements: Array(2), #pin: 1111}



***static methods can acces only the static ones.  


asyncronous Java script :

                synchronous :

                        The code is executed line by line 

                        Each line of code always waits for the previous line to finish its execution

                        Long running code "blocks" the execution


                asyncronous:

                        asyncronous code is executed after a task taht runs in the back ground finishes

                        it is "Non Blocking"

                        Execution does not wait for the asyncronous task to finish its work

                AJAX : asyncronous javascript and xml

                        It allows us to communicate with webservers in asynchronous way. We can get data from web serveers dynamically


                API : applicaton programming interface

                       It is a piece of code used by another piece of code in order to allow applications to 
                       communicate each other.


Using Api's:

                old AJAX call using XMLHttpRequest

                creating request :  const request=new XMLHttpRequest();

                opening the request : request .open(METHOD,URL);

                sending the request : request .send();

                after loading we can get the response text request.responseText        // in json format  ---> JSON.parse(request.responseText)

                 

          ** CALL BACK HELL is when we have lot of nested call backs in order to execute asynchronous tasks in sequence.


PROMISES AND FETCH API :

                promise : an object that is used as a place holder for the futute result of an asynchronous operation.


                life cycle of a promise:

                        pending  (before the future value is available)
                           |
                           |    Async task
                           |
                        settled   (asynchronous task has finished)
                           /\
                          /  \
                         /    \
                        /      \
                  fullfilled    rejected
 (success ! value is available)  (An error happened )



                consume promise : using the promise that have built

                we can build own promises or can use already built ones like from fetch api.


                there are 3 mehods that can be applied on promises:

                then() --> handles the fullfilled promises
                catch() --> handles the rejected promises (catches errors)
                finally() --> executes irrespective of the fullfilled and rejected promises

        Throwing arrors manually :

                throw new Error(message); //constructor function

                the thrown error will propagates to catch method.

**Event Loop : 

                js has only one thread for execution.

                asynchronous calls will be executed in the web apis.

                call stack is the place in js engine where the actaul execution takes place

                until the asyncronous call completes its task , the call back attached to it will be in web api

                once the task is completes , the call back is pushed in to the call back queue

                here the eventloop come it to the picture

                the event loop checks whether the call stack is empty , if it is empty the call backs in the queue are moved it to the call stack 
                                                                                                                        (after completion of one)

                but with promises the process is different , the call backs of promises are pushed into the micro task queue

                event loop prioritize micro task queue , that is the only difference remaining all the process is same


                thus , the asynchronous js works.


consuming promises with async/await :
                
                It is a way of implementing asynchronous execution.

                async makes any function asyncronous

                await returns a promise , await makes the execution wait for promise [used only in async functions and also in modules outside async]

                chaining can be avoided using async / await

                async/await gives synchronous behaviour for the asynchronous functioning


error handling(try,catch) :

                code for execution is kept in the try block.

                if there is any error in the execution , it will be handled in the catch block

                using throw we can araise the custom errors where ever requires.



//promise combinators :

                Promise.all()    // executes promises in parallel , it will get short circuted when any promise is rejected[accepts array of prommises and returns array of responses]

                Promise.race()  // return the first settled promise [accepts array of prommises and returns one]

                Promise.allSettled()  // return all the prommise irrespective of resolvng or rejection[accepts array of prommises and returns array of responses]

                Promise.any()   // it retuns the first full filled promise [takes array of promises , return full filled response]

=======================================================================================================================================================================================

modules :

        a standalone file that does a particular task.

        modules can be exported and imported

        Named exports : using name , multiple exports as well asd imports can be done at the same  time.

        default exports :  (export default) one thing per export(preferres one export per module)

                           exports value directly with out name

                           while importing we can give any name

                           
