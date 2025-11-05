// Teacher interface
interface Teacher {
  readonly firstName: string;         // only set at initialization
  readonly lastName: string;          // only set at initialization
  fullTimeEmployee: boolean;          // always defined
  yearsOfExperience?: number;         // optional
  location: string;                   // always defined
  [key: string]: any;                 // allow additional properties
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

console.log("Teachers:");
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;           // required attribute
}

// Example of a Director
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("Director:");
console.log(director1);
