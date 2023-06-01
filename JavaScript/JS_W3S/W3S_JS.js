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
        + ` Create a BigInt - 999999999999999999n: ${999999999999999999n}\n`                    // To Create a BigInt Append n to the end
        + ` Create a BigInt - BigInt("999999999999999999"): ${BigInt("999999999999999999")}\n`  // To Create a BigInt Call BigInt()
        + ` Typeof BigInt - typeof BigInt("999999999999999999"): ${typeof BigInt("999999999999999999")}\n\n`  // The JavaScript typeof a BigInt is "bigint"
        
        ;

    alert(msg);
}