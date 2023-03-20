

module.exports = function(name,birthyear){

    if(birthyear>=2023)
    {
        console.log("2023 or more as year not accepted");
        return;
    }
    else
    {
        var currentDate = new Date();
        var age = currentDate.getFullYear()-birthyear;
        return "Hello "+name+" , your Age now is: "+age ;
    }
}