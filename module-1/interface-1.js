"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// a class that implements the basic interface
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;
// a class that extends the previous class
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Employee));
exports.Manager = Manager;
var manager = new Manager();
var employee = new Employee();
manager.name = 'Mr.Foo';
manager.title = 'Boss';
// this will throw error
// manager.hobby = 'bossing around';
employee.name = 'Mr.Bar';
employee.title = 'NotBoss';
console.log(manager.name + " is the " + manager.title + ", while " + employee.name + " is " + employee.title);
