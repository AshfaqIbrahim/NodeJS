const students = [
  { name: "Arjun", age: 20, mark: 85 },
  { name: "Meera", mark: 90 },
  { name: "Rahul", age: 19, mark: 78 },
];

const result = students.map((student) => ({
  name: student.name,
  age: student.age || null,
  mark: student.mark * 10,
}));

console.log(result);
