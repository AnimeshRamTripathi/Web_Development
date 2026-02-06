let Lmenu =document.querySelector("#lunch-menu");
let Bmenu =document.querySelector("#breakfast-menu");
let Dmenu =document.querySelector("#dinner-menu");

function show1(){
    Bmenu.style.display = "block";
    Lmenu.style.display ="none";
    Dmenu.style.display = "none";
}

function show2(){
    Bmenu.style.display = "none";
    Lmenu.style.display ="block";
    Dmenu.style.display = "none";
}

function show3(){
    Bmenu.style.display = "none";
    Lmenu.style.display ="none";
    Dmenu.style.display = "block";
}
// function popup(){
//    promt("Booking done");
// }


// let name1=document.querySelector("#entername");
// let email=document.querySelector("#enteremail");
// let datetime=document.querySelector("#datetime");
// let req=document.querySelector("#req");


// let btn_click=document.querySelector(".click");
// // console.log("input");
// btn_click.addEventListener(" click " , function(){
//    if(name1.value == "" || email.value == "" ||datetime.value == "" ||req.value == "")
//    console.log("yes");
//    console.log("no");
// });

// gsap.to("nav",{
//     backgroundColor :"black",
//     duration: 0.5 ,
//     height:"110px",
//     scrollTrigger:{
//         trigger:"nav",
//         scroller:"body",
//         // markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:1
//     }
// });

gsap.from(".card ,.services>p , .services>h1",{
    y:70,
 stagger:0.4,
 opacity :0,
 duration:1,
 scrollTrigger:{
    trigger:".services",
    scroller:"body",
    // markers:true,
    start:"top 90%",
    end:"bottom 60%",
    scrub:1
 },
});
gsap.from(".main img",{
    y:70,
 stagger:0.4,
 opacity :0.5,
 duration:1,
 scrollTrigger:{
    trigger:".main img",
    scroller:"body",
    // markers:true,
    start:"top 90%",
    end:"bottom 90%",
    scrub:1
 },
});
gsap.from(".main p, .main h1",{
    y:70,
 stagger:0.4,
 opacity :0,
 duration:1,
 scrollTrigger:{
    trigger:".main",
    scroller:"body",
    // markers:true,
    start:"top 90%",
    end:"bottom 90%",
    scrub:1
 },
});
gsap.from(".food h1 , .food p ,.food i,.food h3,.food hr",{
    y:70,
 stagger:0.4,
 opacity :0,
 duration:2,
 scrollTrigger:{
    trigger:".food",
    scroller:"body",
    // markers:true,
    start:"top 90%",
    end:"bottom 60%",
    scrub:3
 },
});

gsap.from(".reservation , .table-size",{
    y:70,
 stagger:0.4,
 opacity :0,
 duration:1,
 scrollTrigger:{
    trigger:".res",
    scroller:"body",
    // markers:true,
    start:"top 90%",
    end:"bottom 60%",
    scrub:2
 },
});

gsap.from(".team>h1 ,.team>p ",{
    y:70,
 stagger:0.2,
 duration:0.5,
 scrollTrigger:{
    trigger:".team",
    scroller:"body",
    // markers:true,
    start:"top 90%",
    end:"top 40%",
    scrub:1
 },
});

gsap.from(".bottom p , .bottom input",{
    y:70,
 stagger:0.4,
 opacity:0,
 duration:1,
 scrollTrigger:{
    trigger:".bottom",
    scroller:"body",
   //  markers:true,
    start:"top 80%",
    end:"top 70%",
    scrub:2
 },
});

gsap.from(".center>p ,.center>h1",{
   y:70,
stagger:0.4,
opacity:0,
duration:0.5,
scrollTrigger:{
   trigger:".center",
   scroller:"body",
   // markers:true,
   start:"top 50%",
   end:"top 60%",
   scrub:2
},
});
gsap.from(".center-bottom>p ,.center-bottom>h5",{
   y:70,
stagger:0.4,
opacity:0,
duration:0.5,
scrollTrigger:{
   trigger:".center",
   scroller:"body",
   // markers:true,
   start:"top 50%",
   end:"top 60%",
   scrub:2
},
});
gsap.from(".google-map",{
   y:70,
stagger:0.4,
opacity :0,
duration:1,
scrollTrigger:{
   trigger:".reservation",
   scroller:"body",
   // markers:true,
   start:"top 90%",
   end:"bottom 60%",
   scrub:2
},
});

// function displayPopup() {
//    document.getElementById('popup').style.display = 'block';
//    document.getElementById('overlay').style.display = 'block';
// }

// // Function to close the pop-up
// function closePopup() {
//    document.getElementById('popup').style.display = 'none';
//    document.getElementById('overlay').style.display = 'none';
// }

// // Event listener for the button click
// document.getElementById('popupBtn').addEventListener('click', displayPopup);
// document.getElementById('myForm').addEventListener('submit', function(event) {
//    event.preventDefault(); // Prevent form submission

   // Collect form data
   // const formData = new FormData(this);
   // const formDataObject = {};
   // formData.forEach((value, key) => {
   //     formDataObject[key] = value;
   // });

   // Send form data to server
//    fetch('/submit-form', {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(formDataObject)
//    })
//    .then(response => {
//        if (!response.ok) {
//            throw new Error('Network response was not ok');
//        }
//        return response.json();
//    })
//    .then(data => {
//        alert(data.message);
//        document.getElementById('myForm').reset();
//    })
//    .catch(error => {
//        console.error('There was a problem with the fetch operation:', error);
//    });
// });