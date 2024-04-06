// Problem 3

// Online Shopping Discount: Build an online shopping website that discounts
// orders. Customers are eligible for the discount if they purchase at least two
// items (numItems >= 2) and the total order value exceeds 5000
// (totalOrderValue > 5000)

var numItems =2
var totalOrderValue = 4500

if(numItems>2 && totalOrderValue>=5000){
   console.log("you are eligible for the discount") 
}
else{
    console.log("you are not eligible for the discount")
}
