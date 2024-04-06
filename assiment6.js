// Problem 7:

// Login Authentication: program for a website login system. Users should be
// authenticated if they enter the correct username and password. If the user
// enters the wrong password (enteredPassword !== correctPassword),
// display an error message. Use the logical NOT operator to perform this
// check.

var user_name = "ankitttt.rajput0"
var passward = "Ankit@12"


if(user_name=="ankitttt.rajput04" && passward=="Ankit@12"){
    console.log("Login success")
}
else if(user_name =="ankitttt.rajput04" || passward =="Ankit@12"){
    if(user_name !== "ankitttt.rajput04"){
        console.log("Incorrect user name")
    }
    else{
        console.log("Incorrect passward")
    }
}
else{
    console.log("Error")
}






