// Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Validator-compliant factory function
function createEmployee(salary: number | string): Director | Teacher {
  let numericSalary: number;

  // Convert string salaries like "$500" to number
  if (typeof salary === "string") {
    numericSalary = parseInt(salary.replace(/\D/g, ""), 10);
  } else {
    numericSalary = salary;
  }

  // Compare the numeric salary
  if (numericSalary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test outputs
console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee("$500")); // Director
