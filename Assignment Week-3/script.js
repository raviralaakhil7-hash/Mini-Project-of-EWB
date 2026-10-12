// 1. Variables and data types
const courseName = "Web Development";
let totalStudents = 0;
console.log("Course: " + courseName);

// 2. Array of objects
const students = [
  { name: "Akhil", marks: 85 },
  { name: "Ravi", marks: 62 },
  { name: "Sita", marks: 45 },
];

// 3. Input with validation (if/else, loop, continue, break)
for (let attempt = 1; attempt <= 3; attempt++) {
  const name = prompt("Enter student name:", "Kiran");
  const marks = Number(prompt("Enter marks (0-100):", "91"));

  if (name === null || name.trim() === "") {
    console.log("Name missing, try again.");
    continue;
  }
  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid marks, try again.");
    continue;
  }
  students.push({ name: name.trim(), marks: marks });
  break;
}

// 4. Grade function (switch)
function getGrade(marks) {
  let grade;
  switch (true) {
    case marks >= 90: grade = "A"; break;
    case marks >= 75: grade = "B"; break;
    case marks >= 50: grade = "C"; break;
    default: grade = "Fail";
  }
  return grade;
}

// 5. Arrow function
const average = (list) =>
  list.reduce((sum, s) => sum + s.marks, 0) / list.length;

// 6. Array methods (forEach, filter, map)
console.log("--- Student Report ---");
students.forEach((s) => {
  totalStudents++;
  console.log(s.name + ": " + s.marks + " -> Grade " + getGrade(s.marks));
});

console.log("Total students: " + totalStudents);
console.log("Average marks: " + average(students).toFixed(2));

const passed = students.filter((s) => s.marks >= 50).map((s) => s.name);
console.log("Passed: " + JSON.stringify(passed));

const topper = students.reduce((a, b) => (b.marks > a.marks ? b : a));
console.log("Topper: " + topper.name + " (" + topper.marks + ")");
