// doubt

const findUserByName = (
  searchParams: {
    name?: string;
  },
  users: {
    id: string;
    name: string;
  }[]
) => {
  const searchParamsName = searchParams.name;
  if (searchParams.name) {
    return users.filter((us) => {
      us.name.includes(searchParamsName);
    });
  }
  return users;
};
const res = findUserByName({ name: "Sagar" }, [
  {
    id: "1",
    name: "sagar",
  },
  {
    id: "2",
    name: "random",
  },
]);

export {};
