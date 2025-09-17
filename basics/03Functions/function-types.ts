type User = {
  id: string;
  name: string;
};
const modifyUser = (user: User[], id: string, makeChange: (user:User)=> User) => {
  return user.map((u) => {
    if (u.id === id) {
      // console.log(u);
      return makeChange(u);

    }
    return u;
  });
};
const user: User[] = [
  { id: "1", name: "sagar" },
  { id: "2", name: "xagar" },
];

const run = modifyUser(user, "1", (us)=>{

  // Doubt
  return {...us, name:"s"}
})

console.log(run);


export{};
