//var result = document.getElementById("resultPara");


function JS_Function(num1, num2) {

    // JS Functions
    // A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
    // Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

    alert(`Sum of ${num1} + ${num2} is ${SumOfTwoNumbers(num1, num2)}.`); // Functions can be used the same way as you use variables.

    function SumOfTwoNumbers(a, b) {
        return a + b;                       // When JavaScript reaches a return statement, the function will stop executing.
    }
}

function JS_Object() {

    // JS Object
    // A JavaScript objects can contain many values.
    // The values are written as name:value pairs (name and value separated by a colon).
    // Objects can have Methods and Properties.
    // If you access a method without the () parentheses, it will return the method's function definition

    // Create an object:
    const person = {
        firstName: "Pradip",                                // Propertie - firstName
        lastName: "Jathar",
        age: "24",
        fullName: function () {                             // Method - fullName
            return this.firstName + " " + this.lastName;
        }
    };

    // You can access object properties in two ways: 1. objectName.propertyName, 2. objectName["propertyName"]
    alert(`Person details :\n First Name: ${person.firstName}\n Last Name: ${person["lastName"]}\n Age: ${person.age}\n Full Name: ${person.fullName()}`);

}

function JS_Event() {

    // Events:
    // HTML events are "things" that happen to HTML elements.
    // Here are some examples of HTML events:
    //  -An HTML web page has finished loading.
    //  -An HTML input field was changed.
    //  -An HTML button was clicked.
    // Event Syntax : <element event="some JavaScript">
    // Events: onchange, onclick, onmouseover, onmouseout,	onkeydown, onload etc.
        
    function displayDate() {
        return Date();
    }

    alert(`Todays Date : ${displayDate()}`);

}

function JS_String_Methods1() {

    // JavaScript String Methods : 

    let text = "This are JavaScript String Methods.";

    let msg = `Original String: ${text}\n\n`

        + `Length of String: ${text.length}.\n\n`                       // The length property returns the length of a string.

        + `Methods for Extracting a part of a string: \n`               // There are 3 methods for extracting a part of a string: 1.slice(start, end) 2.substring(start, end) 3.substr(start, length)
            + `1. slice(start, end):\n`
                + `text.slice(9, 19): ${text.slice(9, 19)}\n`           // Slice out a portion of a string from position 7 to position 19
                + `text.slice(9): ${text.slice(9)}\n`                   // If you omit the second parameter, the method will slice out the rest of the string:
                + `text.slice(-12): ${text.slice(-15)}\n`               // If a parameter is negative, the position is counted from the end of the string
                + `text.slice(-12, -6): ${text.slice(-15, -8)}\n`       // This slices out a portion of a string from position -12 to position -6
            + `2.substring(start, end):\n`                              // substring() is similar to slice but The difference is that start and end values less than 0 are treated as 0 in substring().
        + `text.substring(5, 19): ${text.substring(5, 19)}\n`           // Slice out a portion of a string from position 7 to position 19
            + `3.substr(start, length):\n`                              // substr() is similar to slice() but The difference is that the second parameter specifies the length of the extracted part.
                + `text.substr(5, 19): ${text.substr(5, 19)}\n\n`       // Extract a portion of a string from position 5 to lenght 19        

        + `Replacing String Content: \n`
            + `text.replace("JavaScript", "JS"): ${text.replace("JavaScript", "JS")}\n`     // The replace() method replaces a specified value with another value in a string. By default, The replace() method replaces only the first match and is case sensitive.
            + `text.replace(/javascript/i, "JS"): ${text.replace(/javascript/i, "JS")}\n`   // To replace case insensitive, use a regular expression with an /i flag.
            + `text.replace(/ /g, "_"): ${text.replace(/ /g, "_")}\n`                       // To replace all matches, use a regular expression with a /g flag (global match).
            + `text.replaceAll(" ", "_"): ${text.replaceAll(" ", "_")}\n\n`                 // In 2021, JavaScript introduced the string method replaceAll(),It replaces all occurrences.

        + `Converting to Upper and Lower Case: \n`
            + `text.toUpperCase(): ${text.toUpperCase()}\n`             // A string is converted to upper case.
            + `text.toLowerCase(): ${text.toLowerCase()}\n\n`           // A string is converted to lower case.
     ;

    alert(msg);

}

function JS_String_Methods2() {

    let text = "This are JavaScript String Methods.";

    let msg = `Original String: ${text}\n\n`

        + `String Concatenation: \n`
            + `Using plus (+) operator: ${text + " String Concatenation using + operator."}\n`
            + `Using concat(): ${text.concat(" ", "String Concatenation using concat().")}\n\n`    // concat() joins two or more strings

        + `String Trim: \n`
            + `Using trim(): ${"     This is trim.     ".trim()}\n`             // The trim() method removes whitespace from both sides of a string.
            + `Using trimStart(): ${"     This is trim.     ".trimStart()}\n`   // Removes whitespace only from the start of a string.
            + `Using trimEnd(): ${"     This is trim.     ".trimEnd()}\n\n`     // Removes whitespace only from the end of a string.

        + `String Trim: \n`
            + `Using padEnd(): ${"PJ".padEnd(4, "x")}\n`                        // The padEnd() method pads a string from the end.
            + `Using padStart(): ${"5".padStart(4, "x")}\n\n`                   // The padStart() method pads a string from the start.

        + `Extracting String Characters: \n`
            + `Using charAt(): ${text.charAt(9)}\n`         // The charAt() method returns the character at a specified index (position) in a string.
            + `Using charAt(): ${text.charCodeAt(9)}\n`     // The charCodeAt() method returns the unicode of the character at a specified index in a string.
            + `Using charAt(): ${text[13]}\n\n`             // Property access makes strings look like arrays (but they are not). If no character is found, [ ] returns undefined. It is read only.

        + `Converting a String to an Array: \n`
        + `Using  text.split(" "): Split on spaces - ${text.split(" ")[2]}, Separator is "" - ${text.split("")[2]}\n` // A string can be converted to an array with the split() method. If the separator is "", the returned array will be an array of single characters.
        ;

    alert(msg);

}

function JS_String_Search() {

    let text = "This are JavaScript String Search";

    let msg = `Original String: ${text}\n\n`

        + `String Search Methods: \n`
        + `text.indexOf("JavaScript"): ${text.indexOf("JavaScript")}\n`      // The indexOf() method returns the index (position) the first occurrence of a string in a string.
        + `text.lastIndexOf("r"): ${text.lastIndexOf("r")}\n`                // The lastIndexOf() method returns the index of the last occurrence of a specified text in a string. 
        + `text.indexOf("t", 20): ${text.indexOf("t", 20)}\n`                // Both methods accept a second parameter as the starting position for the search. Both indexOf(), and lastIndexOf() return -1 if the text is not found.
        + `text.lastIndexOf("t", 20): ${text.lastIndexOf("t", 20)}\n`        // The lastIndexOf() methods searches backwards. If the second parameter is 20, the search starts at position 20, and searches to the beginning of the string.
        + `text.search("JavaScript"): ${text.search("JavaScript")}\n`        // The search() method searches a string for a string (or a regular expression) and returns the position of the match
        + `text.search(/JavaScript/): ${text.search(/JavaScript/)}\n\n`      // The search() method with a regular expression.

        // Note: The two methods, indexOf() and search() are NOT equal. These are the differences:
        // The search() method cannot take a second start position argument.
        // The indexOf() method cannot take powerful search values (regular expressions).

        + `text.match("i"): Array length = ${text.match("i").length}, ${text.match("i")}\n`         // The match() method returns an array containing the results of matching a string against a string
        + `text.match(/i/): Array length = ${text.match(/i/).length}, ${text.match(/i/)}\n`         // If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.
        + `text.match(/t/g): Array length = ${text.match(/t/g).length}, ${text.match(/t/g)}\n`      // Global search for "t".
        + `text.match(/t/gi): Array length = ${text.match(/t/gi).length}, ${text.match(/t/gi)}\n\n` // Global, case-insensitive search for "t".

        + `text.matchAll("i"): Array length = ${Array.from(text.matchAll("i")).length}, ${Array.from(text.matchAll("i"))}\n`         // The matchAll() method returns an iterator containing the results of matching a string against a string.
        + `text.matchAll(/t/g): Array length = ${Array.from(text.matchAll(/t/g)).length}, ${Array.from(text.matchAll(/t/g))}\n`      // If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
        + `text.matchAll(/t/gi): Array length = ${Array.from(text.matchAll(/t/gi)).length}, ${Array.from(text.matchAll(/t/gi))}\n\n` // If you want to search case insensitive, the insensitive flag (i) must be set.

        + `text.includes("JavaScript"): ${text.includes("JavaScript")}\n`               // The includes() method returns true if a string contains a specified value. Otherwise it returns false.
        + `text.includes("JavaScript", 20): ${text.includes("JavaScript", 20)}\n\n`     // Start at position 20. This methods not searches backwards.

        + `text.startsWith("JavaScript"): ${text.startsWith("JavaScript")}\n`           // The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false.
        + `text.startsWith("JavaScript", 9): ${text.startsWith("JavaScript", 9)}\n`     // Start at position 9. This methods not searches backwards.

        + `text.endsWith("Search"): ${text.endsWith("Search")}\n`                       // The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false.
        + `text.endsWith("JavaScript", 20): ${text.endsWith("JavaScript", 20)}\n`       // Check if the 20 first characters of a string ends with "world"

        ;

    alert(msg);
}

function JS_Numbers() {

    myNumber = 40;

    let msg = `Adding Numbers and Strings :\n`                                              // JavaScript uses the + operator for both addition and concatenation.Numbers are added.Strings are concatenated.
        + `x = "10" + "20" : x = ${"10" + "20"} \n`                                         // If you add two strings, the result will be a string concatenation.
        + `x = 10 + "20" : x = ${10 + "20"} \n`                                             //If you add a number and a string, the result will be a string concatenation.
        + `x = "10" + 20 : x = ${"10" + 20} \n`                                             // If you add a string and a number, the result will be a string concatenation.
        + `x = "The result is : " + 10 + 20: z = ${"The result is : " + 10 + 20} \n`        // A common mistake is to expect this result to be 30.
        + `x = 10 + 20 + "30" : x = ${10 + 20 + "30"} \n`                                   // The JavaScript interpreter works from left to right. First 10 + 20 is added because x and y are both numbers. Then 30 + "30" is concatenated because z is a string.
        + `x = "120" / "10" : x = ${"120" / "10"} \n`                                       // JavaScript will try to convert strings to numbers in all numeric operations.
        + `x = "120" * "10" : x = ${"120" * "10"} \n`                                    
        + `x = "120" - "10" : x = ${"120" - "10"} \n`                                    
        + `x = "120" + "10" : x = ${"120" + "10"} \n\n`                                    

        + `Not a Number: \n"`                                                               // NaN is a JavaScript reserved word indicating that a number is not a legal number.
        + `x = 100 / "Apple" : x = ${100 / "Apple"}, isNaN(100 / "Apple") = ${isNaN(100 / "Apple")} \n`
        + `x = 120 / "10" : x = ${120 / "10"},  isNaN(120 / "10") = ${isNaN(120 / "10")} \n`
        + `x = NaN + 5 : x = ${NaN + 5} \n\n`

        + `Infinity: \n"`
        + `x = 2 / 0 : x = ${2 / 0} \n`
        + `typeof Infinity : ${typeof Infinity} \n\n`

        ;

    alert(msg);
}

function JS_Other_Numbers() {

    myNumber = 40;

    let msg = `Other Type of Numbers: \n`               // By default, JavaScript displays numbers as base 10 decimals. 
        + `myNumber = 40 \n`                            // But you can use the toString() method to output numbers from base 2 to base 36.
        + `Hexatrigesimal (base 36) myNumber.toString(36): ${myNumber.toString(36)}\n`
        + `Duotrigesimal (base 32) myNumber.toString(32) : ${myNumber.toString(32)}\n`
        + `Hexadecimal (base 16) myNumber.toString(16)   : ${myNumber.toString(16)}\n`
        + `Duodecimal (base 12) myNumber.toString(12)    : ${myNumber.toString(12)}\n`
        + `Decimal (base 10) myNumber.toString(10)       : ${myNumber.toString(10)}\n`
        + `Octal (base 8) myNumber.toString(8)           : ${myNumber.toString(8)}\n`
        + `Binary (base 2) myNumber.toString(2);         : ${myNumber.toString(2)}\n\n`

        + `Hexadecimal 0xFF : 0xFF = ${0xFF}\n\n`       // JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x

        + `Numbers as Objects:\n`
        + `typeof 123 : ${typeof 123}\n`                            // Normally JavaScript numbers are primitive values created from literals.
        + `typeof new Number(123) : ${typeof new Number(123)}\n`    // But numbers can also be defined as objects with the keyword new. The new keyword complicates the code and slows down execution speed. Do not create Number objects.
        + `123 === 123 : ${123 === 123}\n`
        + `123 == new Number(123) : ${123 == new Number(123)}\n`    // == compare only value.
        + `123 === new Number(123) : ${123 === new Number(123)}\n`  // === compare value as well as type.
        + `new Number(123) == new Number(123) : ${new Number(123) == new Number(123)}\n`    // Comparing two JavaScript objects always returns false.
        + `new Number(123) === new Number(123) : ${new Number(123) === new Number(123)}\n`  // Comparing two JavaScript objects always returns false.

        ;

    alert(msg);
}

function JS_BigInt() {

    // JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
    // JavaScript integers are only accurate up to 15 digits:
    // Note:
    // 1) A BigInt can not have decimals.
    // 2) Operators that can be used on a JavaScript Number can also be used on a BigInt.
    // 3) Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).
    // 4) Total number of supported data types in JavaScript is 8. 1. String, 2. Number, 3. Bigint, 4. Boolean, 5. Undefined, 6. Null, 7. Symbol, 8. Object
    // 5) Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).
    // 6) BigInt can also be written in hexadecimal, octal, or binary notation.

    let msg = ` Integer Accuracy: \n`
        + `15 digits Number - 999999999999999: ${999999999999999}\n`
        + `16 digits Number - 9999999999999999: ${9999999999999999}\n`                          // Large integer greater than 15 digits cannot be exactly represented and will be rounded.
        + `Create a BigInt - 999999999999999999n: ${999999999999999999n}\n`                    // To Create a BigInt Append n to the end
        + `Create a BigInt - BigInt("999999999999999999"): ${BigInt("999999999999999999")}\n`  // To Create a BigInt Call BigInt()
        + `Typeof BigInt - typeof BigInt("999999999999999999"): ${typeof BigInt("999999999999999999")}\n\n`  // The JavaScript typeof a BigInt is "bigint"
        
        + `Precision Curiosity: \n`  
        + `9007199254740992 === 9007199254740993: ${9007199254740992 === 9007199254740993} --> Rounding can compromise program security.\n`  // Rounding can compromise program security
        + `Maximum Safe Integer - Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}\n`                    // To get max safe integer.
        + `Minimum Safe Integer - Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}\n`                    // To get min safe integer.
        + `Number.isInteger(10): ${Number.isInteger(10)}\n`                                                 // The Number.isInteger() method returns true if the argument is an integer.
        + `Number.isInteger(10.5): ${Number.isInteger(10.5)}\n`                                                 
        + `Number.isSafeInteger(10): ${Number.isSafeInteger(10)}\n`                                         // A safe integer is an integer that can be exactly represented as a double precision number.        
        + `Number.isSafeInteger(12345678901234567890): ${Number.isSafeInteger(12345678901234567890)}\n`     // The Number.isSafeInteger() method returns true if the argument is a safe integer.                          
        
        ;

    alert(msg);
}

function JS_Number_Methods() {

    // 
    let msg = `(123).toString(): ${(123).toString()}\n`         // The toString() method returns a number as a string.
        + `9.656.toExponential(4): ${9.656.toExponential(4)}\n` // toExponential() returns a string, with a number rounded and written using exponential notation. 
                                                                // A parameter defines the number of characters behind the decimal point. 
                                                                // The parameter is optional. If you don't specify it, JavaScript will not round the number.
        + `9.656.toFixed(5): ${9.656.toFixed(5)}\n`             // toFixed() returns a string, with the number written with a specified number of decimals.             
        + `9.656.toPrecision(1): ${9.656.toPrecision(1)}\n`     // toPrecision() method returns a string, with a number written with a specified length. 
        + `(9.656).valueOf(): ${(9.656).valueOf()}\n\n`         // valueOf() returns a number as a number. There is no reason to use it in your code.
                                                                // The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.          
        + `Number() Method:\n`
        + `Number(true): ${Number(true)}\n`         // The Number() method can be used to convert JavaScript variables to numbers.
        + `Number(false): ${Number(false)}\n`
        + `Number(" 10  "): ${Number(" 10  ")}\n`
        + `Number("10.33"): ${Number("10.33")}\n`
        + `Number("10,33"): ${Number("10,33")}\n`
        + `Number("10 33"): ${Number("10 33")}\n`
        + `Number("PJ"): ${Number("PJ")}\n`
        + `Number(new Date("1970-01-01")): ${Number(new Date("1970-01-01"))}\n`     // Date() method returns the number of milliseconds since 1.1.1970.
        + `Number(new Date("1970-01-02")): ${Number(new Date("1970-01-02"))}\n`     // The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000.
        + `Number(new Date("2023-06-01")): ${Number(new Date("2023-06-01"))}\n`

        ;

    alert(msg);
}

function JS_Number_Methods2() {
   
    let msg = `parseInt() Method:\n`                            // parseInt() parses a string and returns a whole number. 
        + `parseInt("10"): ${parseInt("10")}\n`
        + `parseInt("-10.33"): ${parseInt("-10.33")}\n`
        + `parseInt("10.33"): ${parseInt("10.33")}\n`
        + `parseInt("10 20 30"): ${parseInt("10 20 30")}\n`     // Spaces are allowed.
        + `parseInt("10 years"): ${parseInt("10 years")}\n`     // Only the first number is returned.
        + `parseInt("years 10"): ${parseInt("years 10")}\n\n`

        + `parseFloat() Method:\n`                              // parseFloat() parses a string and returns a number.
        + `parseFloat("10"): ${parseFloat("10")}\n`
        + `parseFloat("-10.33"): ${parseFloat("-10.33")}\n`     // Number return float as well.
        + `parseFloat("10.33"): ${parseFloat("10.33")}\n`
        + `parseFloat("10 20 30"): ${parseFloat("10 20 30")}\n` // Spaces are allowed.
        + `parseFloat("10 years"): ${parseFloat("10 years")}\n` // Only the first number is returned.
        + `parseFloat("years 10"): ${parseFloat("years 10")}\n\n`
        ;

        alert(msg);

        // Number Object Methods:
        // Number.isInteger()	    Returns true if the argument is an integer
        // Number.isSafeInteger()	Returns true if the argument is a safe integer
        // Number.parseFloat()	    Converts a string to a number
        // Number.parseInt()	    Converts a string to a whole number
         
}

function JS_Number_Properties() {

    let msg = `Number.EPSILON: ${Number.EPSILON}\n`                     // Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.
        + `Number.MAX_VALUE: ${Number.MAX_VALUE}\n`                     // Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
        + `Number.MIN_VALUE: ${Number.MIN_VALUE}\n`                     // Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.
        + `Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}\n`       // Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
        + `Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}\n`       // Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.
        + `Number.POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}\n`   
        + `1/0: ${1/0}\n`                                               // POSITIVE_INFINITY is returned on overflow.        
        + `Number.NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}\n`    
        + `-1/0: ${-1/0}\n`                                             // NEGATIVE_INFINITY is returned on overflow.
        + `Number.NaN: ${Number.NaN}\n` 
        + `100/"Apple": ${100/"Apple"}\n`                               // NaN is a JavaScript reserved word for a number that is not a legal number.
        ;

    alert(msg);
}

function JS_Arrays() {

     // An array is a special variable, which can hold more than one value.

    /*     
        Creating an Array:
        1) const cars = ["Saab", "Volvo", "BMW"];            --> Using an array literal.
        2) const cars = [];                                  --> You can also create an array, and then provide the elements.
           cars[0]= "Saab";
           cars[1]= "Volvo";
           cars[2]= "BMW";
        3) const cars = new Array("Saab", "Volvo", "BMW");  --> Using new keyword.
        4) const person = ["John", "Doe", 46];
        5) myArray[0] = Date.now; myArray[1] = myFunction; myArray[2] = myCars;
        

        let car = cars[0];                      --> You access an array element by referring to the index number.
        cars[0] = "Opel";                       --> Changing the value of the first element in cars.
        Array.forEach()                         --> Looping Array Elements
        cars.push("Safari")                     --> Adding Array Elements
        cars[cars.length] = "Nexson"            --> New element can also be added to an array using the length property

        Associative Arrays:
        - Many programming languages support arrays with named indexes.
        - Arrays with named indexes are called associative arrays.
        - JavaScript does not support arrays with named indexes. like this person["firstName"] = "John"        */
         
        const cars = ["Saab", "Volvo", "BMW"];

    let msg = `Arrays:\n`                     
        + `My Array: ${cars}\n`                                 // Full array can be accessed by referring to the array name.
        + `Convert Array to String: ${cars.toString()}\n`       // The JavaScript method toString() converts an array to a string of (comma separated) array values.                    
        + `Access Array Element: ${cars[0]}\n`                  // Accessing the First Array Element - You access an array element by referring to the index number.                    
        + `Access Array Element: ${cars[cars.length-1]}\n`      // Accessing the Last Array Element.
        + `Length of Array: ${cars[cars.length]}\n`             // Length of Array.
        + `Length of Array: ${cars[cars.length]}\n`             // Length of Array.
        ;

    alert(msg);
}

function JS_Array_Methods() {

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
  

    let msg = `Array Methods:\n`    
        + `My Array: ${fruits}\n`                  
        + `fruits.length: ${fruits.length}\n`                           
        + `fruits.toString(): ${fruits.toString()}\n`                           
        + `fruits.pop(): ${fruits.pop()}\n`                         // The pop() method removes the last element from an array and returns the value that was "popped out".                         
        + `fruits.length: ${fruits.length}\n`    
        + `fruits.push("Kiwi"): ${fruits.push("Kiwi")}\n`           // The push() method adds a new element to an array (at the end) and returns the new array length.
        + `fruits.shift(): ${fruits.shift()}\n`                     // The shift() method removes the first array element and "shifts" all other elements to a left index. This returns the value that was "shifted out".
        + `fruits.length: ${fruits.length}\n`   
        + `fruits.unshift("Lemon"): ${fruits.unshift("Lemon")}\n`   // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements. This returns the new array length.
        + `delete fruits[0]: ${delete fruits[0]}\n\n`               // Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array. Use pop() or shift() instead.
        
        + `Merging (Concatenating) Arrays:\n`   
        + `Array myGirls: ${myGirls}\n`   
        + `Array myBoys: ${myBoys}\n`   
        + `2 array Concat - myGirls.concat(myBoys): ${myGirls.concat(myBoys)}\n`                        // The concat() method creates a new array by merging (concatenating) existing arrays.
        + `3 array Concat - myGirls.concat(myBoys, fruits): ${myGirls.concat(myBoys, fruits)}\n`        // The concat() method can take any number of array arguments. 
        + `Strings as arguments - myGirls.concat(myBoys, "PJ"): ${myGirls.concat(myBoys,  "PJ")}\n\n`   // The concat() method can also take strings as arguments. 
     
        ;

    alert(msg);
}

function JS_Array_Methods2() {
    
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const myArr = [[1,2],[3,4],[5,6]];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const myGirls = ["Rani", "Rina", "Riya", "Rita", "ragini"];
  

    let msg = `Merging (Concatenating) Arrays:\n`                                           // Flattening an array is the process of reducing the dimensionality of an array.
        + `myArr = [[1,2],[3,4],[5,6]]\n`                                                   
        + `myArr.flat(): ${myArr.flat()}\n\n`                                               // The flat() method creates a new array with sub-array elements concatenated to a specified depth.
         
        + `Splicing and Slicing Arrays:\n`                                                  // The splice() method adds new items to an array and slices out a piece of an array.
        + `My Array: ${fruits}\n`
        + `fruits.splice(2, 1, "Lemon", "Kiwi"):${fruits.splice(2, 1, "Lemon", "Kiwi")}\n`  // The first parameter (2) defines the position where new elements should be added (spliced in).
        + `Array after splice: ${fruits}\n\n`                                               // The second parameter (1) defines how many elements should be removed.
                                                                                            // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.  
        + `Using splice() to Remove Elements:\n`         
        + `Array myBoys: ${myBoys}\n`
        + `myBoys.splice(0, 1): ${myBoys.splice(0, 1)}\n`                                   // You can use splice() to remove elements without leaving "holes" in the array and it returns the value that was "spliced out".
        + `Array myGirls: ${myGirls}\n`
        + `myGirls.slice(1, 3): ${myGirls.splice(1, 3)}\n`                                  // Slices out a part of an array starting from array element 1 to 3.
        + `Array myGirls: ${myGirls}\n`

        ;

    alert(msg);
}

function JS_Dates(){

    const d = new Date();

    let msg = `Creating Date Objects:\n`       
    + `new Date(): ${new Date()}\n`      // JavaScript counts months from 0 to 11. Specifying a month higher than 11, will not result in an error but add the overflow to the next year, same for day as well.
    + `new Date(year,month,day,hours,minutes,seconds) -> new Date(2023,5,1,3,30,45): ${new Date(2023,5,1,3,30,45)}\n`                
    + `new Date(milliseconds) -> new Date(2023): ${new Date(2023)}\n`           // You cannot omit month. If you supply only one parameter it will be treated as milliseconds.              
    + `new Date(milliseconds) -> new Date(-2023): ${new Date(-2023)}\n`         // January 01 1970 minus 2023000 milliseconds. 
    + `Previous Century -> new Date(99, 11, 24): ${new Date(99, 11, 24)}\n\n`   // One and two digit years will be interpreted as 19xx.
    
    + `Displaying Dates:\n`                                 
    + `d.toString(): ${d.toString()}\n`                     // toString() method is automatically converting date to string.
    + `d.toDateString(): ${d.toDateString()}\n`             // toDateString() method converts a date to a more readable format.
    + `d.toUTCString(): ${d.toUTCString()}\n`               // toUTCString() method converts a date to a string using the UTC standard.
    + `d.toISOString(): ${d.toISOString()}\n`               // toISOString() method converts a date to a string using the ISO standard.

    ;

    alert(msg);
}

function JS_Date_Formats(){

    const d = new Date();

    let msg = `Date Formats:\n`       
    + `new Date("2015-03-25"): ${new Date("2015-03-25")}\n`                         // The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format.
    + `new Date("2015-03"): ${new Date("2015-03")}\n`                               // ISO dates can be written without specifying the day (YYYY-MM).
    + `new Date("2015"): ${new Date("2015")}\n`                                     // ISO dates can be written without month and day (YYYY).
    + `new Date("2015-03-25T12:00:00Z"): ${new Date("2015-03-25T12:00:00Z")}\n`     // ISO Dates (Date-Time) - Date and time is separated with a capital T. UTC time is defined with a capital letter Z.
    + `new Date("03/25/2015"): ${new Date("03/25/2015")}\n`                         // Short dates are written with an "MM/DD/YYYY" syntax like this
    + `new Date("Mar 25 2015"): ${new Date("Mar 25 2015")}\n`                       // Long dates are most often written with a "MMM DD YYYY" syntax like this
    + `new Date("25 January 2015"): ${new Date("25 January 2015")}\n`               // And, month can be written in full (January), or abbreviated (Jan)
    + `new Date("JANUARY, 25, 2015"): ${new Date("JANUARY, 25, 2015")}\n`           // Commas are ignored. Names are case insensitive.
    + `new Date("March 21, 2012"): ${new Date("March 21, 2012")}\n\n`     
   
    
    + `Displaying Dates:\n`                                 
    + `Use the Date.parse() method to convert date to milliseconds.\n`                                 
    + `Date.parse("2015-03-25"): ${Date.parse("2015-03-25")}\n`
    + `Date.parse("2015-03-25T12:00:00Z"): ${Date.parse("2015-03-25T12:00:00Z")}\n`
    + `Date.parse("03/25/2015"): ${Date.parse("03/25/2015")}\n`                    
    + `Date.parse("Mar 25 2015"): ${Date.parse("Mar 25 2015")}\n`                  
    + `Date.parse("25 January 2015"): ${Date.parse("25 January 2015")}\n`          
    + `Date.parse("JANUARY, 25, 2015"): ${Date.parse("JANUARY, 25, 2015")}\n`  
    ;

    alert(msg);
}

function JS_Get_Date_Methods(){

    const d = new Date();

    let msg = `Date Get Methods:\n`       
    + `d.getFullYear(): ${d.getFullYear()}\n`                   // Get year as a four digit number (yyyy)            
    + `d.getMonth(): ${d.getMonth()}\n`                         // Get month as a number (0-11)            
    + `d.getDate(): ${d.getDate()}\n`                           // Get day as a number (1-31)           
    + `d.getDay(): ${d.getDay()}\n`                             // Get weekday as a number (0-6)
    + `d.getHours(): ${d.getHours()}\n`                         // Get hour (0-23)
    + `d.getMinutes(): ${d.getMinutes()}\n`                     // Get minute (0-59)
    + `d.getSeconds(): ${d.getSeconds()}\n`                     // Get second (0-59)
    + `d.getMilliseconds(): ${d.getMilliseconds()}\n`           // Get millisecond (0-999)
    + `d.getTime(): ${d.getTime()}\n\n`                         // Get time (milliseconds since January 1, 1970)

    + `Date.now(): ${Date.now()}\n`                             // Date.now() returns the number of milliseconds since January 1, 1970.
    + `d.getTimezoneOffset(): ${d.getTimezoneOffset()}\n\n`     // The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time.

    + `UTC Date Get Methods:\n`                                     
    + `d.getUTCFullYear(): ${d.getUTCFullYear()}\n`             // Get UTC year as a four digit number (yyyy)            
    + `d.getUTCMonth(): ${d.getUTCMonth()}\n`                   // Get UTC month as a number (0-11)            
    + `d.getUTCDate(): ${d.getUTCDate()}\n`                     // Get UTC day as a number (1-31)           
    + `d.getUTCDay(): ${d.getUTCDay()}\n`                       // Get UTC weekday as a number (0-6)
    + `d.getUTCHours(): ${d.getUTCHours()}\n`                   // Get UTC hour (0-23)
    + `d.getUTCMinutes(): ${d.getUTCMinutes()}\n`               // Get UTC minute (0-59)
    + `d.getUTCSeconds(): ${d.getUTCSeconds()}\n`               // Get UTC second (0-59)
    + `d.getUTCMilliseconds(): ${d.getUTCMilliseconds()}\n`     // Get UTC millisecond (0-999)
    + `d.getUTCTime(): ${d.getTime()}\n\n`                      // Get UTC time (milliseconds since January 1, 1970)
    
    ;

    alert(msg);
}

function JS_Set_Date_Methods(){

    const d = new Date();
   
    // Set the date, year, hour, milliseconds, minutes, month, seconds, and time
    const msg = `Setting values:\n`
    +`d.setDate(15);\n`                                 // Set the day as 15
    +`d.setFullYear(2024);\n`                           // Set the year as 2024
    +`d.setHours(12);\n`                                // Set the hour as 12
    +`d.setMilliseconds(500);\n`                        // Set the milliseconds as 500
    +`d.setMinutes(30);\n`                              // Set the minutes as 30
    +`d.setMonth(6);\n`                                 // Set the month as July (6)
    +`d.setSeconds(45);\n`                              // Set the seconds as 45
    +`d.setTime(1655487212345);\n\n`                    // Set the time to a specific value

    // Get the updated values
   
    + `Updated values:\n` 
    + `d.getFullYear(): ${d.getFullYear()}\n`           // Get year as a four-digit number (yyyy)
    + `d.getMonth(): ${d.getMonth()}\n`                 // Get month as a number (0-11)
    + `d.getDate(): ${d.getDate()}\n`                   // Get day as a number (1-31)
    + `d.getDay(): ${d.getDay()}\n`                     // Get weekday as a number (0-6)
    + `d.getHours(): ${d.getHours()}\n`                 // Get hour (0-23)
    + `d.getMinutes(): ${d.getMinutes()}\n`             // Get minute (0-59)
    + `d.getSeconds(): ${d.getSeconds()}\n`             // Get second (0-59)
    + `d.getMilliseconds(): ${d.getMilliseconds()}\n`   // Get millisecond (0-999)
    + `d.getTime(): ${d.getTime()}\n\n`;                // Get time (milliseconds since January 1, 1970)

    ;

    alert(msg);
}

function JS_Math(){
    // Math Object:
    // The JavaScript Math object allows you to perform mathematical tasks on numbers.
    // Unlike other objects, the Math object has no constructor.
    // The Math object is static.
    // All methods and properties can be used without creating a Math object first.
    // The syntax for any Math property is : Math.property.
    // The syntax for any Math methods is : Math.method(number).

    const msg = `Math Properties:\n`                    
    +`Math.E: ${Math.E}\n`                // returns Euler's number
    +`Math.PI: ${Math.PI}\n`              // returns PI
    +`Math.SQRT2: ${Math.SQRT2}\n`        // returns the square root of 2
    +`Math.SQRT1_2: ${Math.SQRT1_2}\n`    // returns the square root of 1/2
    +`Math.LN2: ${Math.LN2}\n`            // returns the natural logarithm of 2
    +`Math.LN10: ${Math.LN10}\n`          // returns the natural logarithm of 10
    +`Math.LOG2E: ${Math.LOG2E}\n`        // returns base 2 logarithm of E
    +`Math.LOG10E: ${Math.LOG10E}\n\n`    // returns base 10 logarithm of E

    // Get the updated values
   
    + `Math Methods:\n` 
    +`Math.round(4.4): ${Math.round(4.4)}\n`        // Math.round(x) returns the nearest integer.
    +`Math.ceil(4.4): ${Math.ceil(4.4)}\n`          // Math.ceil(x) returns the value of x rounded up to its nearest integer.
    +`Math.floor(4.4): ${Math.floor(4.4)}\n`        // Math.floor(x) returns the value of x rounded down to its nearest integer.
    +`Math.trunc(4.2): ${Math.trunc(4.2)}\n`        // Math.trunc(x) returns the integer part of x
    +`Math.sign(-4): ${Math.sign(-4)}\n`            // Math.sign(x) returns if x is negative, null or positive
    +`Math.pow(8, 2): ${Math.pow(8, 2)}\n`          // Math.pow(x, y) returns the value of x to the power of y
    +`Math.sqrt(64): ${Math.sqrt(64)}\n`            // Math.sqrt(x) returns the square root of x
    +`Math.abs(-4.7): ${Math.abs(-4.7)}\n`          // Math.abs(x) returns the absolute (positive) value of x
    +`Math.sin(90 * Math.PI / 180): ${Math.sin(90 * Math.PI / 180)}\n`              // Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians)
    +`Math.cos(0 * Math.PI / 180): ${Math.cos(0 * Math.PI / 180)}\n`                // Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
    +`Math.min(0, 150, 30, 20, -8, -200): ${Math.min(0, 150, 30, 20, -8, -200)}\n`  // Math.min() can be used to find the lowest value in a list of arguments.
    +`Math.max(0, 150, 30, 20, -8, -200): ${Math.max(0, 150, 30, 20, -8, -200)}\n`  // Math.max() can be used to find the highest value in a list of arguments.
    +`Math.random(): ${Math.random()}\n`            // Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
    +`Math.log(3): ${Math.log(3)}\n`                // Math.log(x) returns the natural logarithm of x.
    +`Math.log2(8): ${Math.log2(8)}\n`              // Math.log2(x) returns the base 2 logarithm of x.
    +`Math.log10(1000): ${Math.log10(1000)}\n\n`    // Math.log10(x) returns the base 10 logarithm of x.

    ;

    alert(msg);
}

Math.getRndInteger = function(min, max) {
    // It might be a good idea to create a proper random function to use for all random integer purposes.
    // This JavaScript function always returns a random number between min and max (both included).
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
function JS_Random(){
    
    const msg = `Random:\n`                    
    +`Math.random(): ${Math.random()}\n`                                                // Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).
    +`Math.floor(Math.random() * 10): ${Math.floor(Math.random() * 10)}\n`              // Returns a random integer from 0 to 9.
    +`Math.floor(Math.random() * 11): ${Math.floor(Math.random() * 11)}\n`              // Returns a random integer from 0 to 10.
    +`Math.floor(Math.random() * 100): ${Math.floor(Math.random() * 100)}\n`            // Returns a random integer from 0 to 99.
    +`Math.floor(Math.random() * 101): ${Math.floor(Math.random() * 101)}\n`            // Returns a random integer from 0 to 100.
    +`Math.floor(Math.random() * 10) + 1: ${Math.floor(Math.random() * 10) + 1}\n`      // Returns a random integer from 1 to 10.
    +`Math.floor(Math.random() * 100) + 1: ${Math.floor(Math.random() * 100) + 1}\n`    // Returns a random integer from 1 to 100.
    +`Math.getRndInteger(105,115): ${Math.getRndInteger(105,115)}\n`                    // Custom Function - This JavaScript function always returns a random number between min and max (both included).

    ;

    alert(msg);
}


