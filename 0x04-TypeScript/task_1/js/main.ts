// Teacher interface
interface Teacher {
  readonly firstName: string;         // only set at initialization
  readonly lastName: string;          // only set at initialization
  fullTimeEmployee: boolean;          // always defined
  yearsOfExperience?: number;         // optional
  location: string;                   // always defined
  [key: string]: any;                 // allow additional properties
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;           // required attribute
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
  contract: false,   // extra attribute
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
// Function interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// ----------------------------
// Testing output
console.log("Teachers:");
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

console.log("Director:");
console.log(director1);

console.log("Printing Teachers:");
console.log(printTeacher("John", "Doe"));  // J. Doe
console.log(printTeacher(teacher1.firstName, teacher1.lastName));  // A. Smith
console.log(printTeacher(teacher2.firstName, teacher2.lastName));  // B. Brown
console.log(printTeacher(director1.firstName, director1.lastName)); // J. Doe
