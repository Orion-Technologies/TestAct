
function greet(name) {
    if(name === 'Elizabeth') {
       return "Hello, " + name; 
    } else if (name === null) {
        return "Hello there!";
    } else if (name === name.toUpperCase()) {
        return "HELLO " + name.toUpperCase() + "!";
     }

     let array = ["Hello, "];
     for(let i = 1; i < name.length; i++) {
        array += name[i] + ",";  
        return array;
     }

}