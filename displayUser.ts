type User = {
  name: string;
  age?: number;
  isActive?: boolean;
};

function displayUserInfo(user: User): boolean | undefined {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
  return user.isActive;
}

displayUserInfo({ name: "Bob" });
