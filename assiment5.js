var temperature = 80

if(temperature >=65 && temperature <=85){
    console.log("its comforttable for us")
}
else if(temperature<65 || temperature >85){
    if(temperature<65){
        console.log("so Cold")
    }
    else{
        console.log("so Hot")
    }
}