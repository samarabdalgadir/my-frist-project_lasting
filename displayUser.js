"use strict";
function displayUserInfo(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
    return user.isActive;
}
displayUserInfo({ name: "Bob" });
