console.log("HI");
function sum(a,b) {
    return a+b;
    
}
function sub(a,b) {
    return a-b;
    
}
function mul(a,b) {
    return a*b;
    
}
function div(a,b) {
    return a/b;
    
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value for a: ', (a) => {
    rl.question('Enter the value for b: ', (b) => {
    rl.question('Enter the value for c: ', (c) => {
        const num1=Number(a);
        const num2=Number(c);

        console.log(`The value of a is: ${a}`);
        console.log(`The value of b is: ${b}`);
        console.log(`The value of c is: ${c}`);

        
        // You can now perform operations with a and b
        // For example, if you want to add them (make sure to convert to number if needed):
        let d=Math.random();
if(Math.random()<0.1)
{console.log("Hi");
if(b=='+')
 {let e=sub(num1,num2);console.log(e);}
else if(b=='-')
{let e=sum(num1,num2);console.log(e);}
else if(b=='*')
{let e=div(num1,num2);console.log(e);}
else if(b=='/')
{let e=mul(num1,num2);console.log(e);}


}
else{
    if(b=='+')
    {let e=sum(num1,num2);console.log(e);}
   else if(b=='-')
   {let e=sub(num1,num2);console.log(e);}
   else if(b=='*')
   {let e=mul(num1,num2);console.log(e);}
   else if(b=='/')
   {let e=div(num1,num2);console.log(e);}

}
        
        // Close the readline interface
        rl.close();
    });
});
});

rl.on('close', () => {
    console.log('Input process complete.');
    process.exit(0);
});



