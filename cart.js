///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


const summedPrice = cart.reduce((prevVal,currVal) => {
    return prevVal + currVal.price
}, 0)
; //note to self, did not run without currVal assigned to initial value of 0?
    
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {

    let finalPrice = (cartTotal * (1 + tax))
    finalPrice -= couponValue;
    return finalPrice;
}





//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
   rewards member - to apply discounts - boolean because it is simple to confirm or deny if someone is enrolled.
   phone number - to confirm orders/contact customer - number to store, uniform format for everyone with a telephone.
   email - to promote restaurant - string because it typically will involve more than just numbers. Could make an array?
   address - to deliver orders - string, same as before. Guaranteed mix of numbers and letters.
   card number - to charge orders - numbers only, uniform format for cardholders
   zip code - to confirm card - numbers only, format standard.


   
    Now, create a customer object following your own
    guidelines.
*/

const customerJoe = {
    rewards: true, //joe is a huuuuge fan of this restaurant. Every week.
    phoneNum: 3373151334,
    emailAddress: 'averageJoseph@att.net',
    address: '123 Pretty Boring Ln',
    cardNum: 3983749873987498, 
    zipCode: 70506
};
