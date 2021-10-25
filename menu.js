///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/
//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: 'pizza',
    price: 13.99,
    category: 'flat food entree',
    popularity: 9,
    rating: 5,
    tags: ['fast food', 'pepperoni', 'crust', 'cheese']
}
//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/
console.log(pizza.popularity);
/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/
console.log(pizza.tags[1]);
/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/
let {price: pizzaPrice} = pizza;
console.log(pizzaPrice);
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/
let {category: cat} = pizza;
console.log(cat);
//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/
let foodArr = [
    { 
    name: 'watermelon',
    price: 11.99,
    category: 'fresh appetizer',
    popularity: 80,
    rating: 4,
    tags: ['seeds', 'fresh', 'juicy', 'messy']
    },
    {
    name: 'boudin',
    price: 12.99,
    category: 'cajun food pyramid third tier',
    popularity: 70,
    rating: 3.8,
    tags: ['meats', 'spices', 'rices', 'casing']
    },
    {
    name: 'creme brulee',
    price: 14.99,
    category: 'fancy dessert!',
    popularity: 60,
    rating: 3,
    tags: ['sugar', 'cream', 'dainty']
    },
    {
    name: 'cauliflower buffalo wings',
    price: 15.99,
    category: 'hip entree',
    popularity: 50,
    rating: 2.5,
    tags: ['vegan', 'hot sauce', 'cauliflower', 'panko']
    },
    {
    name: 'brocci casseroli',
    price: 16.99,
    category: 'potluck entree',
    popularity: 40,
    rating: 2,
    tags: ['steamy food', 'broccoli', 'cheese', 'cream']
    }
]
//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

// let creamFilter = (foodArrElem) => {
//     let taggedArr = [];
//     for( let i = 0; i < foodArrElem.length; i++)
//     if(foodArrElem[i].tags.includes('cream')){
//     taggedArr.push(foodArrElem[i])
//     }
// return taggedArr;
// }
//console.log(creamFilter(foodArr)); my initial attempt at filtering function



const filteredFood = foodArr.filter(elem => elem.tags.includes('cream'));
//console.log(filteredFood);
//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

let filterByProperty = (property, number, type) => {
    filteredArr = [];

    if(type == 'above'){
        filteredArr = foodArr.filter(elem => elem[property] > number)
    } else if (type == 'below'){
        filteredArr = foodArr.filter(elem => elem[property] < number)
    } else {
        console.log('This is unacceptable');
    }
    return filteredArr;
}
console.log(filterByProperty('rating', 3, 'below'));
/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/
