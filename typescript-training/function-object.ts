//function functionName(parameters): returnType {
// function body
//}
function sayHello():void{
    console.log("Hello World");
}
 sayHello();
function login(): void {
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.amazon.com ");
    console.log("Enter username as Bharath and password as Bharath123. ");
    console.log("Click on the Login button. ");
}

//calling function
login();
function greet(name: string): void {
console.log("Hello " + name);
}
greet("Ram");

function add(a:number , b:number): number{
    return a+b;
}
add(10,20);
console.log(add(10,20));

function greet(name: string): string {
return `Hello, ${name}`;
}

greet("Bharath");
console.log(greet("Bharath"));

//Function : Block of code or collection of statements written together to complete a specific task 

//There are multiple ways we can implement the functions in TypeScript. 

//1. Function without parameters and without return type 
//The function is created without any parameters, and also it is not going to give us any output value. 
function login(): void {
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.amazon.com ");
    console.log("Enter username as Bharath and password as Bharath123. ");
    console.log("Click on the Login button. ");
}

//calling function
login();

//2. Function with parameters and without return type 
//The function is created with some input parameters as there is a change in the data, but it is not going to return any value. 
function loginWith(username: string, password: string): void {
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.amazon.com ");
    console.log(`Enter username as ${username} and password as ${password}. `);
    console.log("Click on the Login button. ");
}

//Calling function 
loginWith("Bharath", "Bharath123");

//3. Function with parameters and with return type 
//The function is created with input parameters, and also it is going to return some output value at the end of the execution. 
function getAccountBalance(username: string, password: string): number {
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.icici.com ");
    console.log(`Enter username as ${username} and password as ${password}. `);
    console.log("Click on the Login button. ");
    console.log("Click on the account section. ");
    const accountBalance: number = 10000;
    return accountBalance;
}

//Calling function
console.log(getAccountBalance("Bharath", "Bharath123"));

//4. Function without parameters and with return type 
//The function is created without any input parameters, but it is going to return some output value. 
function getCurrentYear(): number {
    let date = new Date();
    return date.getFullYear();
}

//calling function
console.log(getCurrentYear());

//5. Function with optional parameters. 
//Function is created with a couple of parameters, but it is not mandatory to enter all the parameters while calling the function.
function printEmpDetails(empId: number, empName: string, empSalary?: number): void {  //? refers optional paramater
    console.log("Employee name is " + empName);
    console.log("Employee id is " + empId);
    if (empSalary) {
        console.log("Employee salary is " + empSalary);
    }
}

//calling function
printEmpDetails(1234, "Bharath",200000);

//6. Function with default parameters 
// Function is created with a couple of parameters, and by default we are also going to provide the value if the user is not going to enter anything. 
function empInformation(empId: number, empName: string, visaStatus: boolean = false): void {  
    console.log("Employee name is " + empName);
    console.log("Employee id is " + empId);
    console.log("Employee visa status is " + visaStatus);
}

//calling function
empInformation(1234, "Bharath", true);

//7. Function with Rest Parameters 
//Function with multiple parameters like an array 
function sumOfNumbers(...numbers : number []){
    let sum:number = 0;
    for(let num of numbers){
        sum+=num;
    }
    return sum;
}

console.log(sumOfNumbers(1,2,3,4));

//Objects : Object is a non-primitive data type that can help us to store multiple properties in the form of a key-value pair. 

//1. Storing the data inside the object 
console.log("1. Storing the data inside the object");
interface empInfo {
    "empName": string,
    "empId": number,
    "visaStatus": boolean,
    "salary"?: number,
    "address": {
        "street": string,
        "city": string,
        "state": string,
        "country"?:string
    }
}

let empData: empInfo  = {
    "empName": "Bharath",
    "empId": 1234,
    "visaStatus": true,
    "address": {
        "street": "123 Main St",
        "city": "Hyderabad",
        "state": "Telangana"
    }
}

let name : string = "Priya";

//storing multiple employees data inside the array of objects
let empDataArray: empInfo[] = [
    {"empName": "Bharath", "empId": 1234, "visaStatus": true, "address": {"street": "123 Main St", "city": "Hyderabad", "state": "Telangana"}},
    {"empName": "Ravi", "empId": 5678, "visaStatus": false, "address": {"street": "456 Elm St", "city": "Bangalore", "state": "Karnataka"}},
    {"empName": "Sita", "empId": 9101, "visaStatus": true, "address": {"street": "789 Oak St", "city": "Chennai", "state": "Tamil Nadu"}}
] ;

empDataArray[1]!.empName = "Ravi Varma";

//2.Access the data from the object. 
console.log("2.Access the data from the object.")
console.log(empData.empName);
console.log(empData["empName"]);

//3.Adding additional properties to the existing object 
console.log("3.Adding additional properties to the existing object");
empData.salary = 200000;
empData.address.country = "India";

//4.Update the existing property within the existing object. 
console.log("4.Update the existing property within the existing object.");
empData.empName = "Bharath Reddy";
console.log(empData);

//5. Deleting the existing property from the existing object.
console.log("5. Deleting the existing property from the existing object.");
delete empData.salary;
console.log(empData);

//6. Check if a property exists inside the object 
console.log("6. Check if a property exists inside the object");
console.log("visaStatus" in empData);
console.log("salary" in empData);

//7. Get all the keys from an object. 
console.log("7. Get all the keys from an object.");
console.log(Object.keys(empData.address));

//8. Get all the values from an object. 
console.log("8. Get all the values from an object.");
console.log(Object.values(empData));

//9. Get all the entries from an object. 
console.log("9. Get all the entries from an object.");
console.log(Object.entries(empData.address));

//10. Iterate through the object using for...in loop.
console.log("10. Iterate through the object using for...in loop.");
for (let key in empData) {
    let keyValue  = key;
    console.log(keyValue);
    console.log(`${key}: ${empData[key as keyof empInfo]}`);
}

//11. Verify the data type of the property within the object. 
console.log("11. Verify the data type of the property within the object.");
console.log(typeof empData.empName);
console.log(typeof empData.empId);
console.log(typeof empData.visaStatus);
console.log(typeof empData.salary);
console.log(typeof empData.address);

//12. Merge two objects
console.log("12. Merge two objects");
interface companyInfo{
    companyName: string,
    companyId: number,
    companyAddress: string
}

let companyData: companyInfo = {
    companyName: "Tech Solutions",
    companyId: 5678,
    companyAddress: "456 Elm St, Bangalore, Karnataka"
}

let mergedData = {...empData, ...companyData};
console.log(mergedData);


// const empData: Map<string, number[]> = new Map();
// empData.set("Alice Johnson", [75000, 5, 4.2]);
// empData.set("Bob Smith", [68000, 3, 3.8]);
// empData.set("Carol Davis", [82000, 7, 4.5]);
// empData.set("David Brown", [90000, 10, 2.0]);
// empData.set("Eva Green", [60000, 2, 3.5]);

let myMap: Map<string, Object> = new Map<string, Object>();

interface EmployeeData {
    salary: number,
    experience: number,
    rating: number
}

myMap.set("Alice Johnson", {empname: "Alice Johnson", salary: 75000, experience: 5, rating: 4.2});
myMap.set("Bob Smith", {empname: "Bob Smith", salary: 68000, experience: 3, rating: 3.8});


console.log(myMap);
console.log(myMap.get("Bob Smith"));
console.log(myMap.get("Bob Smith")["salary"]);