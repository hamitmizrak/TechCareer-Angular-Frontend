
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// ES5
"use strict";

// "use strict";
// String Access 
// multiline
// Date.now();
// trim();
// JSON.stringfy()
// JSON.parse()
// ForEach()
// Map()
// Filter
// Reduce()
// ReduceRight()
// indexOf()
// lastIndexOf()
// every()
// some()
// getter and setter

// VOCABULARY
let str = () => {
    const value = "ecmascript öğreniyorum ";
    return value;
}

// ARRAY
let array = () => {
    const value = [1, 2, 3, 4, 5, 6]
    return value;
}

// OBJECT
let person = () => {
    const value = {
        name: "Hamit",
        surname: "Mızrak",
        number: 44,
        isLogin: true,
    }
    return value;
}


// 1- ES5(2009) "use strict";
// 2- ES5(2009) String Access
let stringAccessFunction = () => {
    let data = str();
    console.log(data);
    console.log(data.charAt(0));
    console.log(data[0]);
}
//stringAccessFunction()
//console.log("OK");

//3- ES5(2009) multiline
let multilineFunction = () => {
  let value="1.satır\n2.satır\n3.satır";
  console.log(value);

  let value2=
  `
  1.satır
  2.satır
  3.satır
  `; 
  console.log(value2);
  
}
//multilineFunction()


//4- ES5(2009) Date.now();
let dateNowFunction = () => {
    // 1000 ms= 1sn
    let currentTimeMillis=Date.now();
    console.log(currentTimeMillis);
}
//dateNowFunction()


//4- ES5(2009) trim();
let trimFunction = () => {
    let data=str();
    console.log(data);
    console.log(data.length);
    console.log(data.trim());
    console.log(data.trim().length);
}
trimFunction()

// JSON.stringfy()
// JSON.parse()



// ForEach()
// Map()
// Filter
// Reduce()
// ReduceRight()
// indexOf()
// lastIndexOf()
// every()
// some()
// getter and setter



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// ES6

///////////////////////////////////////////////////////////////
// Callback Function (ES6)
// Promise(ES7)
// asyc-await(ES8)

///////////////////////////////////////////////////////////////
// Typescript

///////////////////////////////////////////////////////////////
// Zamanımız oldukca one page projesine başla
// worker ()
// Typescript
// Angular
// nodejs
// docker
// mockapi
// AJAX (jQuery)

