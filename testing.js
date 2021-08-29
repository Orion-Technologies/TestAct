
function greet(name) {
    if(name === 'Elizabeth') {
       return "Hello, " + name; 
    } else if (name === null) {
        return "Hello there!";
    } else if (typeof name === 'object') {
        return "Hello, " + name;
        } else if (name === name.toUpperCase()) {
        return "HELLO " + name + "!";
     }
}
     