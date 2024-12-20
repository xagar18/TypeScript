// function error here but javascript will not show error
function addTwo(num) {
  num.toUpperCase(); // Error: there is error but we cant see here
  return num + 2;
}
addTwo(5);

//function string type argument
function addTwoo(num: string) {
  num.toUpperCase(); // Error: there is error but we cant see here
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
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("sagar", "s@s.com");

