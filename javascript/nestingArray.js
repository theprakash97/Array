
function nesting_array(){

    const fruits = ["apple","pear","orange"];
    const barries = ["strawberry","blueberry","rasberry"];

    // nesting case 1
    let all_fruits = [fruits,barries]
    console.log(all_fruits);

    console.log();

    // nesting case 2
    fruits.push(barries);
    console.log(fruits);
    /*
    output
    ----------------
    [
        'apple',
        'pear',
        'orange',
        [ 'strawberry', 'blueberry', 'rasberry' ]
    ]
    */

    console.log();

    // nesting case 3
    let foodies = barries.concat("chicken_briyani","mushroom");
    console.log(foodies);

    /*
    output
    --------
    [
        'strawberry',
        'blueberry',
        'rasberry',
        'chicken_briyani',
        'mushroom'
    ]

    */

    console.log();

    // spread operator 
    let laptops = ["macbook","del","hp"];
    let phones = ["samsung","nokia","lg","balckberry","iphone"];

    let all_gadgets = [...laptops,...phones];
    console.log(all_gadgets);
    /*
        output
        ---------
        [
            'macbook',    'del',
            'hp',         'samsung',
            'nokia',      'lg',
            'balckberry', 'iphone'
        ]
    */

    console.log();

    // flatten array
    const arr = [1,2,[3,4],7,11];
    console.log(arr); // [ 1, 2, [ 3, 4 ], 7, 11 ]

    console.log();

    // with flat()
    let result = arr.flat();
    console.log(result); // [ 1, 2, 3, 4, 7, 11 ]

    console.log();

    // static method on array object

    // Array.isArray()
    console.log(Array.isArray(arr)); // true

    // Array.from()
    console.log(Array.from("hello")); // [ 'h', 'e', 'l', 'l', 'o' ]

    // Array.of()
    const a = '1';
    const b = 'p';
    const c = '@';
    console.log(Array.of(a,b,c)); // [ '1', 'p', '@' ]


}

// entry point of program 
function main(){
    nesting_array();
}
main();