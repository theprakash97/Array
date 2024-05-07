const prompt = require("prompt-sync");
const sc = prompt();

/*

    // Introduction to Array 
    * An array is a data structure which stores a collections of items of 
      same type.
    * It stores homogeneous items (it means all the items of same type) and 
      items are stored in contiguous memory.
    * Array are index based, which means, the first item is 0 index, 
      the second item is 1, and so on.

    // Syntax of array
    variable_keyword variable_name = [];

    // Array Literal 
    let phones = ["Blackberry","Iphone 13","Samsung","OPPO"];

    // Memory allocation of an array
    numbers (int,float) : 8 bytes (64-bits)
    string : 2 bytes (16-bits unsigned integer value) per character
    boolean : 1 bit

    for example ;
    let phones_list = ["apple","blackberry"]; // 30 bytes memory space occupy
    let models_number = [34,98,11,7]; // 56 bytes memory space occupy

    // Types of array
    There are 2 types of array : 
    1) 1D Array
    2) 2D Array

    // Accessing elements of an array
    * Array are index based.
    * The elements of an array can be accessed by refering the index number
      in the square_bracket [].
    * The first element of an array accessed by  -> array_name[0]
      The second element of an array accessed by -> array_name[1]
      The last element of an array accessed by   -> array_name[arr.length - 1]

    // Operation on array
    // Basic problems on array

*/

function array(){

    // declare array :---
    let phones = []; 

    console.log(phones);  // []
    console.log(phones instanceof Array); // true

    // array literal initialize :---
    phones[0] = "Blackberry";
    phones[1] = "Iphone 13";
    phones[2] = "Samsung";
    console.log(phones); // [ 'Blackberry', 'Iphone 13', 'Samsung' ]

    // accessing elements of an array :---

    // get the first element of phones
    console.log(phones[0]); // Blackberry

    // get the last element of phones
    console.log(phones[phones.length - 1]); // Samsung

    // operation on array :---

    let supper_heros = ["spider_man","thor","iron_man","aqua_man","hulk"];

    // length 
    console.log(supper_heros.length); // 5 

    // traversing through an array
    for(let i = 0; i < supper_heros.length; i++){
        console.log(supper_heros[i]);
    }

    // take input and store inside an array 

    // let chars = []; // hello
    // for(let i = 0; i < 5; i++){
    //     let character = sc("enter a character : ");
    //     chars.push(character);
    // }
    // let textual = chars.toString();
    // console.log(textual.replace(/,/g,""));

    /*

    enter a character : h
    enter a character : e
    enter a character : l
    enter a character : l
    enter a character : o
    hello

    */
}

function main(){
    array();
}
main();