// function error here but javascript will not show error
function addTwo(num) {
  num.toUpperCase(); // Error: there is error but we cant see here
  return num + 2;
}
addTwo(5);

//function string type argument
function addTwoo(num: string) {
  num.toUpperCase(); //allowed
  return num + 2;
}
addTwoo("ha");

//function number type argument
function addTwooo(num: number) {
  return num + 2;
}
addTwooo(5);

//function with all types of arguments
function signUpUsers(name: string, email: string, isPaid: boolean) {}
signUpUsers("sagar", "s@s.com", true);

//arrow function with default value
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("sagar", "s@s.com");

// function with specific return type
function addThree(num: number): number {
  return num + 3;
  //return "hello"; // Error: Type 'string' is not assignable to type 'number'.
}

//arrow function with specific return type
let addFour = (num: number): number => {
  return num + 4;
  //return "hello"; // Error: Type 'string' is not assignable to type 'number'.
};

// map function with specific return type
const heros = ["superman", "batman", "wonderwoman"];
heros.map((hero): string => {
  return `${hero} is a hero`;
  //return 5; // Error: but will not show error
});

// function with void return type
function consoleError(error: string):void {
  throw new Error(error);
}

// never return type
function handleError(error: string): never { //never return type
  throw new Error(error);
}





