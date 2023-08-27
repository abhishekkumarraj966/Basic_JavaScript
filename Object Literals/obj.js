// object literals

// let user ={
//     name:'Abhi',
//     age:'21',
//     email:'asdfghjkl@gmail.com',
//     location:'Araria',
//     bloge:['why mac & change  rule ','10 think to make with marmite']
// };
//console.log(user);
// console.log(user.name);
// user.age=25;
// console.log(user['gmail']);
// user['name']='raja';
// console.log(user['name']);

//  let key='location';
//  console.log(user[key]);
//  console.log( typeof user);

 const  blogs=[
    {title:'why mac & chees rules',likes:30},
    {title:'10 think to make with marmite',likes:50}
 ];
 console.log(blogs);
let user ={
    name:'Abhi',
    age:'21',
    email:'asdfghjkl@gmail.com',
    location:'Araria',
    bloge:['why mac & change  rule ','10 think to make with marmite'],
    login: function(){
        console.log('the user logged in');

    },
    logout: function(){
        console.log('the user logout');
    },
    logBlock:()=>{
        console.log('the log block ');

        this.bloge.forEach(blog=>{
            console.log(blog);
        })
        // console.log(this);
    }
};
user.login();
user.logout();
user.logBlock(); 
console.log(this);

