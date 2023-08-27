// Callback & foreach

const myfun=(callBk)=>{
    let value=50;
    callBk(value);

};
// myfun (function(value){
//     console.log(value);
// });

// myfun(value=>{
// console.log(value);
// });


let people=['abhi','ram','shyam','mohan'];
// people.forEach((people, index)=>{
//     console.log(people, index);
// });


// get a referencr to the 'ul'
     const ul=document.querySelector('.people');

let html=``;
people.forEach(function(people){
    html+=`<li  style="color:purple">${people}</li>`;
});
console.log(html);
ul.innerHtml=html;

