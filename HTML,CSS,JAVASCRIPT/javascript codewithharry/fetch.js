async function getdata() {
//    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(x);
//     let data= x.json()
//     console.log(data);

   r= await fetch("https://jsonplaceholder.typicode.com/posts", { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        title: "foo", 
        body: "bar", 
        userId: 1 
    }), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
console.log(r);
let data= r.json();
console.log(data)
    
}
getdata();


  