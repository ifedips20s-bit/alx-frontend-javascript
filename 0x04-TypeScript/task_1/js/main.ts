// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Examples of Teachers
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "New York",
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Brown",
  fullTimeEmployee: false,
  location: "Paris",
  yearsOfExperience: 5,
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra attribute
};

// Example of a Director
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// ----------------------------
// Function interface (strict validator naming)
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation (exact required syntax)
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// ----------------------------
// Testing output
console.log("Teachers:");
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

console.log("Director:");
console.log(director1);

console.log("Printing Teachers:");
console.log(printTeacher("John", "Doe")); // J. Doe
console.log(printTeacher(teacher1.firstName, teacher1.lastName)); // A. Smith
console.log(printTeacher(teacher2.firstName, teacher2.lastName)); // B. Brown
console.log(printTeacher(director1.firstName, director1.lastName)); // J. Doe
