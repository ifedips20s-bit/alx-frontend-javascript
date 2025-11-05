// ----------------------------
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

// ----------------------------
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
// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ----------------------------
// Function implementation (plain string concatenation)
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return firstName[0] + ". " + lastName;
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
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe
console.log(printTeacher({ firstName: teacher1.firstName, lastName: teacher1.lastName })); // A. Smith
console.log(printTeacher({ firstName: teacher2.firstName, lastName: teacher2.lastName })); // B. Brown
console.log(printTeacher({ firstName: director1.firstName, lastName: director1.lastName })); // J. Doe
