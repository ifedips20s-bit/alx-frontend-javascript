// ----------------------------
// Director Interface
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher Interface
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ----------------------------
// Director class implementing DirectorInterface
export class Director implements DirectorInterface {
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
export class Teacher implements TeacherInterface {
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

// ----------------------------
// Factory function to create employee
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else if (typeof salary === "string" && parseInt(salary.replace(/\D/g, ""), 10) < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// ----------------------------
// Type predicate to check if employee is Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ----------------------------
// Execute work based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// ----------------------------
// String literal type for subjects
export type Subjects = "Math" | "History";

// ----------------------------
// teachClass function with explicit Subjects type
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

// ----------------------------
// Example usage for local testing
if (import.meta.url === undefined || typeof window !== "undefined") {
  const emp1 = createEmployee(200);
  const emp2 = createEmployee(1000);

  console.log(executeWork(emp1)); // Getting to work
  console.log(executeWork(emp2)); // Getting to director tasks

  console.log(teachClass("Math"));    // Teaching Math
  console.log(teachClass("History")); // Teaching History
}
