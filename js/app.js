'use strict';

//declaring an array
const allEmployees = [];


console.log(allEmployees);


//creating a constructor
function Employeeinfo(employeeId, fullName, departement, level, imageUrl) {
    this.employeeId = getRndId(employeeId);
    this.fullName = fullName;
    this.departement = departement;
    this.level = level;
    this.imageUrl = imageUrl;
    allEmployees.push(this)

     // console.log(this)
}

//using ternery if: 
Employeeinfo.prototype.salary = function () {
    var Salary;
    (this.level.toLowerCase() === "senior") ? Salary =  Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500 :
        (this.level.toLowerCase() === "mid-senior") ? Salary =  Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000 :
           Salary =  Math.floor(Math.random() * (1000 - 500 + 1)) + 500 
            return Salary ;

}
Employeeinfo.prototype.id = function () {
    this.id =  getRndId(1000);

}

//calculating net salary
Employeeinfo.prototype.netSalary = function (salary) {
    salary= this.salary() ;
   let netSalaryRawan = Math.floor(salary - (salary * 0.075));
    return netSalaryRawan;
}
console.log( this.netSalary);
console.log( this.salary);




Employeeinfo.prototype.cardElements = function () {

 //creating a div element which contains the card image
 const cardParent = document.createElement("div");
    cardParent.classList.add("card");

    // adding card image to emplyee
    const cardImg = document.createElement("img");
    cardImg.src = this.imageUrl;
    cardImg.alt=`${this.fullName}`;
    cardImg.classList.add("image");

 //creating a div element which contains the card info
const infoParent = document.createElement("div");
    infoParent.classList.add("info");

    // adding card info to emplyee
    const cardInfo1 = document.createElement("p");
    cardInfo1.textContent = `Name: ${this.fullName} - ID: ${this.employeeId}`;
    
    const cardInfo2 = document.createElement("p");
    cardInfo2.textContent = `Department: ${this.departement} - Level: ${this.level}`;
    
    const cardInfo3 = document.createElement("p");
   
    cardInfo3.textContent = `Salary: ${this.netSalary()}`;
    
//appending childs to parents divs
    cardParent.appendChild(cardImg);
    infoParent.appendChild(cardInfo1);
    infoParent.appendChild(cardInfo2);
    infoParent.appendChild(cardInfo3);

// appending info combined child to card parent (div)
cardParent.appendChild(infoParent);

//rendering div in body
    document.body.appendChild(cardParent);    
}




let drinkForm = document.getElementById("HR-Management");
drinkForm.addEventListener('submit', addNewEmployee);


function addNewEmployee(event) {
    event.preventDefault();
    let employeeName1 = event.target.fullName.value;
    let department1 = event.target.Department.value;
    let level1 = event.target.Level.value;
    let imageUrl1 = event.target.imgUrl.value;

    let newEmployee = new Employeeinfo(allEmployees, employeeName1, department1, level1, imageUrl1);
    newEmployee.cardElements();
}


// random number function (between min and max included)
//function getRndIntegar(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}

function getRndId(existingIds) {
    while (true) {
        // Generate a random four-digit number
        let employeeId = Math.floor(1000 + Math.random() * 9000);
        
        // Check if the generated ID is unique
        if (!existingIds.includes(employeeId)) {
            return employeeId;
        }
    }
}

    // traverse function
for (let i = 0; i < allEmployees.length; i++) {
    // console.log (i, allEmployees[i]); // before so you can check the error
    allEmployees[i].salary();
    allEmployees[i].netSalary();
    allEmployees[i].id();
    allEmployees[i].cardElements();
}



