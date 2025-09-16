type Userrr = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};

function createUser(user: Userrr): Userrr {
  return { name: "sagar", age: 25, email: "", isActive: true };
}
createUser({ name: "sagar", age: 25, email: "s@s.com,", isActive: true });

type User2 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number; //optional
};

let myUser: User2 = {
  _id: "abc",
  name: "sagar",
  email: "s@s.com",
  isActive: true,
};

myUser.name = "yadav sagar";
//myUser._id = "xyz"; // Error: Cannot assign to '_id' because it is a read-only property.

// combining types with intersection
type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

let myCard: cardDetails = {
  cardNumber: 123456789,
  cardDate: "12/22",
  cvv: 123,
};

export {};
