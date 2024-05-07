
function inbuilt_methods(){

    // way to create an array
    const mark_list_2023 = [14,34,56]; // array literal 
    const mark_list_2024 = new Array(14,34,56);// constructor with 'new' operator

    console.log(mark_list_2023 instanceof Array); // false 
    console.log(mark_list_2024 instanceof Array); // true

    console.log();

    // accessing element in array
    console.log(mark_list_2024[1]); // 34

    console.log();

    // get the length of an array
    console.log(mark_list_2024.length); // 3

    console.log();

    // updating the element of an array
    mark_list_2024[1] = 79;
    console.log(mark_list_2024);
    // [ 14, 79, 56 ]

    console.log();

    // adding new element in a given array
    mark_list_2024[mark_list_2024.length] = 848593;
    console.log(mark_list_2024);
    // [ 14, 79, 56, 848593 ]

    console.log();

    // push() ; add new element at the end of an array
    let all_level_score = [34,55,95,20,15];
    all_level_score.push(100);
    console.log(all_level_score);
    // [ 34, 55, 95, 20, 15, 100 ]

    console.log();

    // pop() ; remove the last element of an array
    let res = all_level_score.pop();
    console.log(res); // 100

    console.log();

    // unshift() ; add a new element at the begining of an array
    let res2 = all_level_score.unshift(79);
    console.log(res2); // 6
    console.log(all_level_score); // [ 79, 34, 55, 95, 20, 15 ]

    console.log();

    // shift() ; remove the first element of an array
    let res3 = all_level_score.shift();
    console.log(res3); // 79
    console.log(all_level_score); // [ 34, 55, 95, 20, 15 ]

    console.log();

    // reverse() ; reverse an array
    let res4 = all_level_score.reverse();
    console.log(res4); // [ 15, 20, 95, 55, 34 ]
    console.log(all_level_score); // [ 15, 20, 95, 55, 34 ]

    console.log();

    // includes() ; element to search for,return a boolean value
    let res5 = all_level_score.includes(79);
    console.log(res5); // false

    console.log();

    // indexOf() ; returns the index of the first occurrence of a value in 
    // an array, else -1 if it is not present
    let res6 = all_level_score.indexOf(95);
    console.log(res6); // 2

    console.log();

    let super_heros = [
        "spiderMan","aqua","hulk","ironMan","captenAmerica","blackPanther",
        "doctorStranger", "ghostRider","batGirl","catWomen","antMan",
        "superGirl","thor","wolverin","watchMen","xMen","guardianOfTheGlaxy",
        "dareDevil","sandMan","lucifer","vampire"
    ];

    // slice(start,end) ; extract some element of an array & 
    // doesn't change original array
    let res7 = super_heros.slice(2,4);
    console.log(res7);
    // [ 'hulk', 'ironMan' ]

    console.log();

    // splice(start,length) ; extract some element of an array & 
    // does change the original array
    // let res8 = super_heros.splice(2,4);
    // console.log(res8); // [ 'hulk', 'ironMan', 'captenAmerica', 'blackPanther' ]

    console.log();

    // toString() ; convert element of an array into string 
    let res8 = super_heros.slice(1,5);
    console.log(res8); // [ 'aqua', 'hulk', 'ironMan', 'captenAmerica']
    let to_string = res8.toString();
    console.log(to_string); // aqua,hulk,ironMan,captenAmerica

    // access the 'aqua' & convert the first character to upperCase
    let first_item = to_string.slice(0,4).charAt(0).toUpperCase()+to_string.slice(1,4);
    console.log(first_item); // Aqua

    console.log();

}

// entry point of program 
function main(){
    inbuilt_methods();
}
main();