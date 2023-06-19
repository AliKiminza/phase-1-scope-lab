// Write your solution in this file!
var customerName;
customerName='bob';
const leastFavouriteCustomer = 'Jacob';

function fixTheScope(){
    return customerName;
}
console.log (fixTheScope())

function upperCaseCustomerName(){
   const customerName=customerName.toUpperCase();
    return customerName;
}
//console.log (upperCaseCustomerName())

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}
console.log (setBestCustomer(bestCustomer))

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
console.log (overwriteBestCustomer())

function changeLeastFavoriteCustomer(){
    leastFavouriteCustomer = 'Ali';
    return leastFavouriteCustomer;
}