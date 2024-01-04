
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
const person = () => {
    const value = {
        "name": "Hamit",
        "surname": "Mızrak",
        "number": 44,
        'isLogin': true,
    }
    return value;
}

// 1- ES5(2009) "use strict";
// 2- ES5(2009) String Access
const stringAccessFunction = () => {
    let data = str();
    console.log(data);
    console.log(data.charAt(0));
    console.log(data[0]);
}
//stringAccessFunction()
//console.log("OK");

//3- ES5(2009) multiline
const multilineFunction = () => {
    let value = "1.satır\n2.satır\n3.satır";
    console.log(value);

    let value2 =
        `
  1.satır
  2.satır
  3.satır
  `;
    console.log(value2);

}
//multilineFunction()

//4- ES5(2009) Date.now();
const dateNowFunction = () => {
    // 1000 ms= 1sn
    let currentTimeMillis = Date.now();
    console.log(currentTimeMillis);
}
//dateNowFunction()

//5- ES5(2009) trim();
const trimFunction = () => {
    let data = str();
    console.log(data);
    console.log(data.length);
    console.log(data.trim());
    console.log(data.trim().length);
}
//trimFunction()

// 6-7- ES5(2009) JSON.stringfy() JSON.parse()
const JsonFunction = () => {
    let data = person();
    let stringData = JSON.stringify(data);
    console.log(stringData);
    let stringParse = JSON.parse(stringData);
    console.log(stringParse);
}
//JsonFunction()

// 8-9-10- ES5(2009) ForEach() Map() Filter()
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// forEach: Void dönderir
// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// map    : Dizi Dönderir
const mapFilterForeachFunction = () => {
    let data = array();
    console.log(data);
    data.forEach((response)=>{
        console.log(response*2);
    })
    console.log("*******");

   let mapData= data.map((response)=>{
        return response*2;
    })
    console.log(mapData);
    console.log("*******");

    let filterData= data.filter(response=>{
        return response%2===0;
    })
    console.log(filterData);
    console.log("*******");
}
mapFilterForeachFunction()


// 11- ES5(2009) Reduce()
const reduceFunction = () => {

}
reduceFunction()

// 12- ES5(2009)  ReduceRight()
const reduceRightFunction = () => {

}
reduceRightFunction()

// 13-14- ES5(2009)  indexOf() lastIndexOf()
const indexOfLastIndexOfFunction = () => {

}
indexOfLastIndexOfFunction()

// 15- ES5(2009) every()
const everyFunction = () => {

}
everyFunction()


// 16- ES5(2009) every() some()
const someFunction = () => {

}
someFunction()


// 17- ES5(2009) every() getter and setter
const getterAndSetterFunction = () => {

}
getterAndSetterFunction()


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

