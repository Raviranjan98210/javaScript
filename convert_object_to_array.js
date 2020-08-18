const person = {
  name: "Ravi Ranjan Kumar",
  age: 22,
  profile: "Web-Developer",
};
const personArray = Object.entries(person);
personArray.forEach(([key, value]) => {
  console.log(`${key}:${value}`);
});
console.log(personArray);
