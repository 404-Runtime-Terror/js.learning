// //1. Ways to print in Js

// //console.log("hello world");
// //alert("me");
// //document.write("this is write")

// //2.javascript console API

// //console.log("hello world", 4 + 6, "another log");
// //console.warn("this is warning");
// //console.error("this is error");

// //5. Javascript variables
// // variable are container to store data values

// // var number1 = 34;
// // var number2 = 56;
// // console.log(number1 +number2);

// // //4. Data types in JS
// // //number
// // var num1 = 455;
// // var num2 = 56.76;
// // //str
// // var str1 = "This is string";
// // var str2 = "This is also string";
// // //Objects
// //  var marks = {
// //     aryan : 90,
// //     kedar: 89
// //  };
// //  console.log(marks);

// //  //booleans

// //  var a = true;
// //  var b = false;
// //  console.log(a,b);

// //  //var und = undefined;
// //  var und;
// //  console.log(und);

// //  // Null
// //  var n = null;
// //  console.log(n);

// // Dom manipulation
// // let elem = document.getElementById('click');
// // console.log(elem);

//  let elemClass = document.getElementsByClassName("container")
// // console.log(elemClass);
// // // elemClass[0].style.background = 'yellow';
//  elemClass[0].classList.add("bg-primary");
//  elemClass[0].classList.add("bg");
// // // elemClass[0].classList.remove("bg");
// // console.log(elem.innerText);
// // console.log(elem.innerHTML);

// // console.log(elemClass[0].innerHTML);
// // console.log(elemClass[0].innerText);

// tag = document.getElementsByTagName('div');
// console.log(tag)
// createElement = document.createElement('p')
// createElement.innerText = 'this is para';
// tag[0].appendChild(createElement)

// //Events
// function clicked()
// {
//    console.log("button was clicked!!!")
// }
// window.onload = function()
// {
//    console.log('the doc was load')
// }
// firstcontainer.addEventListener('click',function()
// {
//    console.log('clicked')
// })
// firstcontainer.addEventListener('mouseout',function()
// {
//    console.log('mouse out')
// })
//Arrow
sum =(a,b)=>{
   return a+b;
}
// settimeout and setInterval
// logkaro = ()=>{
//    document.querySelectorAll('.container')[1].innerHTML = '<b>set</b>'
//    console.log('set')
// }
// clr=setTimeout(logkaro,5000);

//js localstorage
localStorage.setItem('name','aryan')

//json
obj = {name : 'harry',length:1,a:{this : 'this'}}
js = JSON.stringify(obj);
console.log(typeof js)
console.log(js)
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"this"}}`)
console.log(parsed);