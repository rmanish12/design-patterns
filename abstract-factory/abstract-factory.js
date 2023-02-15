function Employee(name) {
  this.name = name;

  this.say = function() {
    console.log("I am employee: ", this.name)
  }
}

function EmployeeFactory() {
  this.create = function(name) {
    return new Employee(name)
  }
}

function Vendor(name) {
  this.name = name;

  this.say = function() {
    console.log("I am vendor: ", this.name)
  }
}

function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name)
  }
}

function run() {
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create("John"))
  persons.push(employeeFactory.create("Jane"))
  persons.push(vendorFactory.create("Mary"))
  persons.push(vendorFactory.create("Jack"))

  for(let i=0; i<persons.length; i++) {
    persons[i].say()
  }
}

run()