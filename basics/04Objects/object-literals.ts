const hello = (user: { first: string; last: string }) => {
  console.log(`Hello, ${user.first} ${user.last}`);
};

hello({ first: "Hello", last: "World!" });


export {};
