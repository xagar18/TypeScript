const user = {
  name: "sagar",
  age: 25,
  email: "sagar@gmail.com",
  isActive: true,
};

//object with specific type
function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "sagar", isPaid: true });

//object with specific type and default value
function createCourse(): { name: string; price: false } {
  return { name: "typescript", price: false };
}

export {};
