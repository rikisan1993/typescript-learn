// define basic interface
export interface People {
    name: string;
    // an optional property
    hobby?:string;

    // property with predefined value;
    gender?:'male'| 'female' | 'undefined';
}


// a class that implements the basic interface
export class Employee implements People {
    manager: Manager;
    title: string;

    // note that typescript transpiler will show error if this property doesn't exist
    name:string;
}

// a class that extends the previous class
export class Manager extends Employee {
    team: Employee[];
}

var manager = new Manager();
var employee = new Employee();

manager.name = 'Mr.Foo';
manager.title = 'Boss';

// this will throw error
// manager.hobby = 'bossing around';

employee.name = 'Mr.Bar';
employee.title = 'NotBoss';

console.log(`${manager.name} is the ${manager.title}, while ${employee.name} is ${employee.title}`);


