const title='Best of luck';
const author='mario';
const  linkes=30;


// concatenation way
    // let  result='the blog chaind '+title+ ' by '+author+' has '+linkes+' likes ';
   

// template string way
    let result =`The blog called ${title} by ${author} has ${linkes}  like`;

        console.log(result);
