// Single Comment JS
/*Multiple Comment */
// console.log('console.log');
// console.info('console.info');
// console.warn('console.warn');
// console.error('console.error');

// pop-up
// alert('pop-up');
// document.writeln('document.writeln');

/////////////////////////////////////////////////
// Variable (Global State)
// var $_degiskenAdi44="Js öğreniyorum";
// console.log($_degiskenAdi44);
// var $_degiskenAdi44="Js öğreniyorum";
// console.log($_degiskenAdi44);

// // Hoisting
// deneme="Kalem";
// var deneme;
// console.log(deneme);

// // 2015 (ES6)
// // LET
// let data1="let data";
// console.log(data1);
// data1="let data44";
// console.log(data1);

// // CONST 
// const data2="Js öğreniyorum";
// console.log(data2);
// data2="Js öğreniyorum";
// console.log(data2);

/////////////////////////////////////////////////
// Operator Functions
// Aritmetik Operatörler
// + - * / %
// &&=VE ||=VEYA !=değil
// > >= < <= 
// kullanıcıdan aldığım 2 tane sayıyı toplama yapan bir uygulama
// let number1,number2,sum=0;
//  number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
//  number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
//  sum=number1+number2;
//  console.log("Toplama: "+sum);
//  console.log(typeof prompt("Lütfen 1.sayıyı giriniz"));
//  console.log(typeof Number(prompt("Lütfen 2.sayıyı giriniz")));
//  console.log(typeof parseInt(prompt("Lütfen 2.sayıyı giriniz")));

/////////////////////////////////////////////////
// NaN
// console.log(4 / 4);
// console.log(4 / "4");
// console.log(4 / "abc");

// // Infinity 
// console.log(0 / 5);
// console.log(5 / 0);

// New  : Doğmak
// Null : Vefat 
// Zero : 0 
// isNaN :
// console.log(isNaN(4 / 4));
// console.log(!isNaN(4 / 4));

// // Undefined 
// let data3;
// console.log(data3);
// // undefined : değer hiç verilmemiş 
// // null      : değer verilmiş ancak biz bilerek bu değeri,değersiz vermek için

// // Escape Character 
// console.log("Data \"söz\"");
// console.log("Data 'söz'");
// console.log("Data \n\r\t\"söz\"");
/////////////////////////////////////////////////

// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 5));
// console.log(2 ** 5);
// console.log(Math.abs(-10));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.round(9.4));
// console.log(Math.round(9.5));
// console.log(Math.min(100, 500, -9));
// console.log(Math.max(100, 500, -9));
// console.log(Math.sin(1));
// console.log(Math.cos(1));


//// MATH ÖDEVİ
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))

// Örnek: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9 (Math.abs)
// 2-yukarı yuvarlama yapsın  6.0 (Math.ceil)
// 3-karesini alsın 36.00 (Math.pow(sayı,2))
// 4-çıkan sayının karekökü alsın (Math.sqrt(sayı))
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 

/////////////////////////////////////////////////
// Sayısal İşlemler
// let number=44;
// number=44.4252;
// console.log(number);
// console.log("Number: "+ Number(number));
// console.log("parseInt: "+parseInt(number));
// console.log("parseFloat: "+parseFloat(number));
// // NaN 
// // isNaN
// console.log(typeof number);

// let bilimsel1=1400000;
// console.log(bilimsel1);

// let bilimsel2=14E+5;
// console.log(bilimsel2);

// let bilimsel3=14E-5;
// console.log(bilimsel3);

// // binary(2)
// let binary=0b01010;
// console.log(binary);

// // octal(8)
// let octal=0o7523;
// console.log(octal);

// // hexadecimal(16) 0123456789abcdef
// let hexadecimal=0xff09;
// console.log(hexadecimal);

// const number2=56.123456789;
// console.log(number2);
// console.log(typeof number2);
// console.log(number2.toFixed(3));
// console.log(number2.toPrecision(3));

/////////////////////////////////////////////////
// Metinsel işlemler

// let number1=455
// let number2=455.41;
// let str="455.41";
// let bol=true;

// let vocabulary="js ÖĞReniyorum js ";
// console.log(vocabulary);
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.toUpperCase());

// console.log(vocabulary.substring(5));
// console.log(vocabulary.substring(5,8)); // 5<=X<=8-1

// console.log(vocabulary.charAt(0)); 
// console.log(vocabulary.indexOf("js")); 
// console.log(vocabulary.lastIndexOf("js")); 
// console.log(vocabulary.includes("js")); 

// console.log(vocabulary.replace("js","javascript"));
// console.log(vocabulary.concat("-sona"));
// console.log(vocabulary+"-sona");

// console.log(vocabulary.startsWith("js"));
// console.log(vocabulary.endsWith("js"));

// ÖDEV // kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

///////////////////////////////////////////////////////////////
// Function
// // 1 parametresizRetursuz
// function parametresizRetursuz(){
//     console.log("parametresiz Retursuz");
// }
// parametresizRetursuz();

// // 2 parametreliRetursuz
// function parametreliRetursuz(number){
//     console.log("parametreli Retursuz "+(Math.sqrt(number)));
// }
// parametreliRetursuz(25);

// // 3 parametresizReturlu
// function parametresizReturlu(){
//     return Math.pow(2,5);
// }
// let data3=parametresizReturlu();
// console.log(data3);

// // 4 parametreliReturlu
// function parametreliReturlu(alt,ust){
//     return Math.pow(alt,ust);
// }
// let data4=parametreliReturlu(2,5);
// console.log(data4);

///////////////////////////////////////////////////////////////
// Immedia Function
// (function () {
//     console.log("Immedia Function Anonymous")
// })();

// (() => {
//     console.log("Immedia Function Arrow")
// })();

// // Function
// function normFuction() {
//     console.log("normFuction");
// }
// normFuction()

// // Anonymous Function
// let anonymousfunction = function () {
//     console.log("anonymous function");
// }
// anonymousfunction()


// // Arrows Function
// let arrowfunction = (data) => {
//     console.log("arrow function " + data);
// }
// arrowfunction("asd")

// ///////////////////////////////////////////////////////////////
// // Conditional 
// let conditional = (data) => {
//     let number = 5;
//     if (number > 0) {
//         console.log("pozitiftir");
//     } else
//         console.log("negatif");
// }
// conditional();

// let ternary = (data) => {
//     let number = 5;
//     const result = (number > 0) ? "pozitiftir" : "negatif";
//     console.log(result);
// }
// ternary()

// // Conditional 
// let conditional2 = (data) => {
//     let number = parseInt(Number("4"));
//     if (number == 0) {
//         console.log("0");
//     } else if (number == 1) {
//         console.log("1");
//     } else if (number == 2) {
//         console.log("2");
//     } else if (number == 3) {
//         console.log("3");
//     } else if (number === 4) {
//         console.log("4");
//     } else if (number == 5) {
//         console.log("5");
//     } else {
//         console.log("1<=X<=5 dışında");
//     }
// }
// conditional2();

// let conditional3 = (data) => {
//     let number = parseInt(Number("4"));
//     switch (number) {
//         case 0:
//             console.log("0");
//             break;
//         case 1:
//             console.log("1");
//             break;
//         case 3:
//             console.log("3");
//             break;
//         case 2:
//             console.log("2");
//             break;
//         case 4:
//             console.log("4");
//             break;
//         case 5:
//             console.log("5");
//             break;
//         default:
//             console.log("1<=X<=5 dışında");
//             break;
//     }
// }
// conditional3();

// ///////////////////////////////////////////////////////////////
// // Loop
// let forLoop = () => {
//     for (let i = 1; i <=5; i++) {
//         window.document.writeln("i: "+i+"<br/>");
//     }
//     // for(;;){}
// }
// forLoop();
// window.document.writeln("*************** <br/>");

// let whileLoop = () => {
//     let i = 1;
//     while ( i <=5) {
//         window.document.writeln("i: "+i+"<br/>");
//         i=i+1;
//     }
//     // while(true){}
// }
// whileLoop();

// window.document.writeln("*************** <br/>");
// let doWhileLoop = () => {
//     let i = 1;
//     do{
//        window.document.writeln("i: "+i+"<br/>");
//         i=i+1; 
//     }
//     while ( i <=5) ;
//     //while(true){}
// }
// doWhileLoop();

///////////////////////////////////////////////////////////////
// Exception Handling
const exception = () => {
    try {
        alertx("Alert");
    } catch (err) {
        console.error(err);
        // throw
        // throw new Error("zorunlu istisna yaptım");
    } finally {
        console.log("Ekranda göster Mutlaka");
    }
    console.log("son satır");
}
//exception();


///////////////////////////////////////////////////////////////
// debug
// debugger
let debug = () => {
    //debugger
    for (let i = 1; i <= 5; i++) {
        //window.document.writeln("i: "+i+"<br/>");
        console.log("i: " + i + "<br/>");
    }
    //debugger
}
// debug();

///////////////////////////////////////////////////////////////
// setTimeout(): sadece 1 kere çalışır ve sonra durur.
let setTimeoutFunction = () => {
    setTimeout(() => {
        console.log("setTimeoutFunction 5 saneiye sonra çalıştı");
    }, 5000);
}
//setTimeoutFunction();

// setInterval():  ssürekli çalışır
let setIntervalFunction = () => {
    setInterval(() => {
        console.log("setInterval 2 saneiye sonra çalışsın ve devam etsin");
    }, 1000);
}
//setIntervalFunction();

// setTimeout ve setInterval function beraber kullanmak
let setTimeoutAndIntervalFunction = () => {

    //Function
    const clockData = () => {
        console.log("1.saniye");
    }

    // setInterval function: Sürekli çalışsın
    let intervalID = setInterval(clockData, 1000);

    // 1 dakika sonra dursun.
    // setTimeout(): sadece 1 kere çalışır ve sonra durur.
    // 60*60*24*365
    const time = parseInt(60);
    setTimeout(() => {
        clearInterval(intervalID);
        console.log(time + " zaman sonra durdu.");
    }, 1 * 1000 * time);
}
//setTimeoutAndIntervalFunction();

///////////////////////////////////////////////////////////////
// Senkron(single thread: process) - Asenkron nedir((multiple thread: process)) ?
// Javascript tabiatı gereği Senkron mu ? Asenkron mu ?
///////////////////////////////////////////////////////////////
// call back function
const callBackFunction = () => {
    // 1.Function
    let birinci = (data) => {
        return Math.sqrt(data)
    }

    // 2.Function
    let ikinci = (xyz) => {
        //let userData=  parseInt(prompt("Lütfen bir sayı giriniz"));
        let userData = 25
        const result = xyz(userData);
        console.log(result);
    }
    ikinci(birinci);
}
//callBackFunction()

// promise
const promiseFunction = () => {
    const isLogin = true;
    const isCreated = 201;
    let pro = new Promise((resolve, reject) => {
        if (isLogin && isCreated == 201)
            resolve("olumlu sonuç");
        else
            reject("olumsuz sonuç");
    }).then(() => { // new Promise eğer sonuç geldiyse then çalışsın
        console.log("Then");
    }).catch(() => { // new Promise eğer sonuç olumsuzsa catch çalışsın
        console.error("catch");
    });
    console.log(pro);
}
//promiseFunction()

///////////////////////////////////////////////////////////////
// Diziler
let arrayFunction = () => {
    let array = [4, 1, 5, 2, 9, 7, 3, 6];
    console.log(array);
    console.log("Eleman sayısı: " + array.length);
    console.log(array[0]);
    console.log(array[7]);
    console.log(array[7 - 1]);
    array[8] = 44;
    console.log(array);
    console.log(array[array.length - 1]);
}
//arrayFunction();

let arrayFunction2 = () => {
    let array = [4, 1, 5, 2, 9, 7, 3, 6];
    // Ödev: 1-9 arasında  rastgele 8 tane sayı  üreten algoritma
    return array;
}

let arrayFunction3 = () => {
    let array = arrayFunction2();
    //let cloneArray=array;
    //console.log(cloneArray);

    // For 
    for (let i = 0; i < array.length; i++) {
        //console.log(array[i]);
        document.writeln(array[i]);
    }

    // FOR ...IN
    document.writeln("<br/>*******************************<br/>");
    array.push(23);
    for (let data in array) {
        //document.writeln(data);
        document.writeln(data + "=> " + array[data] + "<br/>");
    }

    // FOR ... OF
    document.writeln("<br/>*******************************<br/>");
    array.unshift(50);
    //array.unshift(50,99);
    for (let data of array) {
        document.writeln(data);
    }


    // FOREACH
    document.writeln("<br/>*******************************<br/>");
    //  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    array.pop();
    array.forEach((value, index, array) => {
        //document.writeln(value + "=> " + index + "=> " + array + "<br/>");
        //document.writeln(`${value} => ${index} => ${array}`);
        document.writeln(`${value}`);
    });


    //// FOREACH
    document.writeln("<br/>*******************************<br/>");
    //  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    array.shift();
    array.forEach((value, index, array) => {
        //document.writeln(value + "=> " + index + "=> " + array + "<br/>");
        document.writeln(`${value} `);
    });

    //// SORT
    // document.writeln("<br/>*******************************<br/>");
    // array.sort().forEach(value => {
    //     document.writeln(`${value} `);
    // });

    //// REVERSE
    // document.writeln("<br/>*******************************<br/>");
    // array.reverse().forEach(value => {
    //     document.writeln(`${value} `);
    // });

    // document.writeln("<br/>*******************************<br/>");
    // array.sort().reverse().forEach(value => {
    //     document.writeln(`${value} `);
    // });

    // document.writeln("<br/>*******************************<br/>");
    // delete array[0]
    // array.forEach(value => {
    //     console.log(`${value} `);
    // });
}
//arrayFunction3();

// Delete
let arrayFunction4 = () => {
    let array = arrayFunction2();
    console.log(array);

    // belirtilen indisteki elemanı siler yerine undedined ekler
    delete array[0];
    console.log(array);

}
//arrayFunction4();

// Diziyi String'e çevirmek
let arrayFunction5 = () => {
    let array = arrayFunction2();
    console.log(array);

    // toString() => Diziyi String'e çevirmek için kullanıyoruz
    let arrayToString = array.toString();
    console.log(arrayToString);
    console.log(arrayToString.substring(0, 4));
    console.log("******************");

    // join() => Diziyi String'e çevirmek için kullanıyoruz
    let arrayData = array.join(" ");
    console.log(arrayData);
}
//arrayFunction5();

// slice, splice
// Diziyi String'e çevirmek
let arrayFunction6 = () => {
    let array = arrayFunction2();
    console.log(array);

    // Slice
    let sliceArray = array.slice(2);
    console.log(sliceArray);

    let sliceArray2 = array.slice(0, 2);
    console.log(sliceArray2);
}
//arrayFunction6();


// slice (Original Array'i bozmaz)
// splice (Original Array'i bozar)
// Diziyi String'e çevirmek
let arrayFunction7 = () => {
    let array = arrayFunction2();
    console.log(array);

    // Splice
    // array.splice(0,2);
    // console.log(array);

    // array.splice(2,3);
    // console.log(array);

    // 0: başlama indisi
    // 2: çıkarma 
    // array.splice(0,3);
    // console.log(array);

    // 2: Başlama indisi
    // 0: Ekleme
    // 2,3: eklenecek sayılar
    array.splice(2, 0, 2, 3);
    console.log(array);
}
//arrayFunction7();

// Filter, map
let arrayFunction8 = () => {
    let array = arrayFunction2();
    array.sort()
    console.log(array);

    //  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    // array.filter((response) => { 
    //     return response>=5;
    // }).forEach(value => {
    //     console.log(`${value} `);
    // });

    //  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    //    let mapResult= array.map((response) => {
    //         return response = response * 2;
    //     });
    //     console.log(mapResult);

    //     mapResult.forEach(value => {
    //         console.log(`${value} `);
    //     });

    // Her bir değişkendeki sadece çift olan sayıları alın (filter)
    // sonrasında bu sayılara 5 ekleyin (map)
    // sonrasında bu sayıları ekranda gösterin (forEach)
    array.filter((response) => {
        return response % 2 == 0;
    }).map((response) => {
        return response += 5;
    }).forEach(value => {
        console.log(`${value} `);
    });
}
//arrayFunction8();

///////////////////////////////////////////////////////////////
// LocalStorage
let localStorageData = () => {

    // SET
    localStorage.setItem("username", "Hamit");
    localStorage.setItem("surname", "Mızrak");

    // GET
    let result = localStorage.getItem("username");
    console.log(result);

    // Hashing

    // Remove Item
    localStorage.removeItem("username");

    // Clear
    localStorage.clear()
}
//localStorageData();

///////////////////////////////////////////////////////////////
// Object
let objectData = () => {
    let person = {
        name: "Hamit",
        surname: "Mızrak",
        isLogin: true,
        isCreated: 2024,
        array: [4, 1, 5, 2, 9, 7, 3, 6],
        language: {
            name: "Java SE",
            age: 20,
        },
        result: function () {
            console.log(this.surname + " Function çalıştı");
            //console.log(person.surname+"Function çalıştı");
            //return surname+" "+isLogin;
        }
    }

    console.log("*********************");
    console.log(person);
    console.log("*********************");
    console.log(person.isLogin);
    console.log(typeof person.isLogin);
    console.log("*********************");
    console.log(person.name);
    console.log(person["name"]); //nested calling
    console.log(person.language.name);
    person.result();

    // object Literal
    person.number = 44;
    console.log(person.number);

    // diziyi => String'e (toString() veya join)
    console.log(person.array);
    console.log(typeof person.array);
    console.log(typeof person.language);
    let arrayToString = person.array.toString();
    console.log(arrayToString);
    let arrayToString2 = person.array.join(",");
    console.log(arrayToString2);

    // String'i => Diziye çevir (split())
    let stringToArray = arrayToString.split(",");
    console.log(stringToArray);

    // JSON toString, parse 
    let objectToString = JSON.stringify(person);
    console.log(objectToString);
    console.log(objectToString.substring(0, 3));

    const data = JSON.parse(objectToString);
    console.log(data);

    // Object Constructor 
    // {[a,b,c,d] , [{},{}]}
    // Object ProtoType
    // Object hasOwnProperty
    // Object Create

    // built-in-constructor
    String.prototype.usluSayi=function(data){
        return Math.pow(data,2);
    }
    console.log("".usluSayi(5));

}
//objectData();


// Object
let objectData2 = () => {
    let Student=function(adi,soyadi,numara){
        this.adi=adi;
        this.soyadi=soyadi;
        this.numara=numara;
        console.log(this);
    };

    Student.prototype.getAdi=function(){
        return this.adi;
    }

    let studentInstance= new Student("adi22","soyadı22",22);
    //console.log(studentInstance);
    console.log(studentInstance.soyadi);

   // let studentInstance2= Object.create(Student);
   // console.log(studentInstance2);

       // built-in-constructor
       String.prototype.usluSayi=function(data){
        return Math.pow(data,2);
    }
    console.log("".usluSayi(5));
    
}
//objectData2();


///////////////////////////////////////////////////////////////
// DOM
// Event
// addEventListener
let domFunction1=()=>{
   console.log("çalıştı"); 

   // GET
   const paragraf=document.getElementById("parag_id");
   //const paragraf=document.getElementsByClassName("parag_class")[0];
   //const paragraf=document.getElementsByName("parag_name")[0];
   //const paragraf=document.getElementsByTagName("p")[1];

   // Dom Html, Text
   //paragraf.innerHTML="<b><mark>Değiştirdim</mark></b>";
   paragraf.innerText="Değiştirdim";

   // Dom Css
   paragraf.style.color="red";
   paragraf.style.backgroundColor="black";
   paragraf.style.padding="2rem";
}

let domFunction2=()=>{
    // GET
    const paragraf=document.getElementById("parag_id");
    paragraf.addEventListener("click",()=>{
        console.log("add Event Listener Çalıştı");
        setTimeout(()=>{
            alert("add Event Listener Çalıştı");
        },2000);
    });
 }
 domFunction2();


///////////////////////////////////////////////////////////////
// ES5
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

