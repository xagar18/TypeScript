// Union types are used when we want to work with multiple types of data in a single variable.
let score: number | string = 10;

score = "10"; // valid
score = 10; // valid

// Union types with type aliases
type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let sagar: User | Admin = {
  name: "Sagar",
  id: 1,
};

sagar = {
  username: "adminsagar",
  id: 1,
};
