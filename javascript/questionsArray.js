
// wap to sum of all the elements in the given array
function sum_all_elements_in_array(){
    let marks = [3,4,10,11];
    let sum = 0;
    for(let i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    console.log(`Sum is : ${sum}`);
    // Sum is : 28
}

// wap to find the maximum value out of all the elements in the array
function find_maximum_value_in_array(){
    let points = [3,7,18,9,11];
    let max = points[0];
    for(let i = 1; i < points.length; i++){
        if(points[i] > max){
            max = points[i];
        }
    }
    console.log(`The maximum element is : ${max}`);
    // The maximum element is : 18
}

// Linear search ; wap if a given element is present in the array or not. If it is
// not present then return -1 else return the index.
function search_for_element_in_array(){
    let user_last_game_score = [3,9,18,11,7];
    // find the the `11` score in the array
    const target_score = 11;
    for(let i = 0; i < user_last_game_score.length; i++){
        if(user_last_game_score[i] === target_score){
            return i;
        }
    }
    return -1;

}

// entery point of program
function main(){
    sum_all_elements_in_array();
    find_maximum_value_in_array();
    let what_index = search_for_element_in_array();
    console.log(`Index is : ${what_index}`);
    // Index is : 3
}
main();