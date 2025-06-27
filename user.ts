type User = {
  name: string;
  age: number;
  email?: string;
};

let user: User = {
  name: "Alice",
  age: 30
};

user.email = "alice@example.com";
user.age = 31;

console.log(user);
