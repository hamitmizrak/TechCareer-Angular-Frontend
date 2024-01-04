
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
    const value = [1, 2, 3, 4, 5, 6, 2, -1]
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
    data.forEach((response) => {
        console.log(response * 2);
    })
    console.log("*******");

    let mapData = data.map((response) => {
        return response * 2;
    })
    console.log(mapData);
    console.log("*******");

    let filterData = data.filter(response => {
        return response % 2 === 0;
    })
    console.log(filterData);
    console.log("*******");
}
//mapFilterForeachFunction()


// 11- ES5(2009) Reduce()
const reduceFunction = () => {
    let data = array();
    //Normal Toplama
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum = sum + data[i];
    }
    //console.log("Toplam: " + sum);

    // Reduce 1 2 3 4 5 6 (Soldan toplayarak ilerleme yapıyor)
    let sum2 = data.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);
    console.log("Reduce Toplam: " + sum2);

    //console.log(data);
}
//reduceFunction()

// 12- ES5(2009)  ReduceRight()
const reduceRightFunction = () => {
    let data = array();
    // Reduce 1 2 3 4 5 6
    let sum2 = data.reduceRight((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);
    console.log("Reduce Right Toplam: " + sum2);
}
//reduceRightFunction()

//  1 2 3 4 5 6 2
// 13-14- ES5(2009)  indexOf() lastIndexOf()
const indexOfLastIndexOfFunction = () => {
    let data = array();
    let indexData = data.indexOf(2);
    console.log(indexData);

    let lastIndexData = data.lastIndexOf(2);
    console.log(lastIndexData);
}
//indexOfLastIndexOfFunction()

// 15- ES5(2009) every() : Hepsi Şartı sağlamalı
const everyFunction = () => {
    const data = array();
    // every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    let everyData = data.every((response) => {
        return response > 0;
    });
    let everyIndexData = (everyData) ? "Hepsi Sıfırdan Büyüktür" : "En az 1 tanesi Sıfırdan Küçüktür";
    console.log(everyIndexData);
}
//everyFunction()


// 16- ES5(2009)  some(): Tek bir Şartı sağlamalı
const someFunction = () => {
    const data = array();
    // every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    let everyData = data.some((response) => {
        return response > 0;
    });
    let everyIndexData = (everyData) ? "En az 1 tanesi sıfırdan büyüktür" : "Hepsi Sıfırdan Küçüktür";
    console.log(everyIndexData);
}
//someFunction()


// 17- ES5(2009) every() getter and setter
const getterFunction = () => {
    const value = {
        _username: "User data 44",

        // GET 
        get getterUsername() {
            return this._username;
        } //end get
    } //end object
    console.log(value.getterUsername);
}
//getterFunction()


const setterFunction = () => {
    const value = {
        _username: "",

        // SET 
        set setterUsername(param) {
            this._username = param;
        } //end get
    } //end object
    value.setterUsername = "Malatya";
    console.log(value._username);
}
//setterFunction()

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// ES6
// let, const 
// arrow Function 
// for of 
// The Operator (Spread Operator)
// Function Rest Parameter 
// Class 
// startsWith() endsWith()


// let, const 
const letConstVarFunction = () => {

    // Global Scope
    var varData = 44;
    console.log(varData);

    var varData = 23;
    console.log(varData);

    // Local Scope
    let letData = 11;
    console.log(letData);
    letData = 22;
    console.log(letData);

    const constData = 33;
    console.log(constData);
    // constData = 44;
    // console.log(constData);
}
//letConstVarFunction();

// arrow Function
// for of
let arrowForOf = () => {
    for (let temp of array()) {
        console.log(temp);
    }
}
//arrowForOf()

// The Operator (Spread Operator)
let spreadOpetorFunction = () => {
    let data = array();
    console.log(data);

    let data2 = [7, 8, 9];
    console.log(data2);
    console.log("**********");
    let data3 = [...data, ...data2, 44, 23];
    console.log(data3);
}
//spreadOpetorFunction()

// Function Rest Parameter
const restParameterFunction = () => {
    function showing(...data) {
        for (let temp of data) {
            console.log(temp);
        }
    }
    showing(1,2,3,4,5)
}
restParameterFunction();


// Class
// startsWith() endsWith()

///////////////////////////////////////////////////////////////
// Typescript

// Callback Function (ES6)
// Promise(ES7)
// asyc-await(ES8)

///////////////////////////////////////////////////////////////
// Zamanımız oldukca one page projesine başla
// worker ()
// Typescript
// Angular
// nodejs
// docker
// mockapi
// AJAX (jQuery)

