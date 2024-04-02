'use strict';

//declaring an array
const allEmployees = [];


console.log(allEmployees);


//creating a constructor
function Employeeinfo(employeeId, fullName, departement, level, imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.departement = departement;
    this.level = level;
    this.imageUrl = imageUrl;
    allEmployees.push(this)

     // console.log(this)
}


//using ternery if: 
Employeeinfo.prototype.salary = function () {
    (this.level.toLowerCase() === "senior") ? this.salary =  getRndIntegar(1500, 2000) :
        (this.level.toLowerCase() === "mid-senior") ? this.salary =  getRndIntegar(1000, 1500) :
            this.salary =  getRndIntegar(500, 1000)

}

//calculating net salary
Employeeinfo.prototype.netSalary = function () {
    this.netSalary = Math.floor(this.salary - (this.salary * 0.075));
}



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
    cardInfo3.textContent = `Salary: ${this.netSalary}`;
    
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

//list of employees infos
const ghaziSamer = new Employeeinfo (1000, "Ghazi Samer", "Administration", "Senior", "./imges/Ghazi.png");
const lanaAli = new Employeeinfo (1001, "Lana Ali", "Finance", "Senior","./imges/Lana .png");
const tamaraAyoub = new Employeeinfo (1002, "Tamara Ayoub", "Marketing", "Senior","./imges/Tamara .png");
const safiWalid = new Employeeinfo (1003, "Safi Walid", "Administration", "Mid-Senior","./imges/Safi .png");
const omarZaid = new Employeeinfo (1004, "Omar Zaid", "Development", "Senior","./imges/Omar .png");
const ranaSaleh = new Employeeinfo (1005, "Rana Saleh", "Development", "Junior","./imges/Rana .png");
const hadiAhmad = new Employeeinfo (1006, "Hadi Ahmad", "Finance", "Mid-Senior","./imges/Hadi .png");


// random number function (between min and max included)
function getRndIntegar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    // traverse function
for (let i = 0; i < allEmployees.length; i++) {
    // console.log (i, allEmployees[i]); // before so you can check the error
    allEmployees[i].salary();
    allEmployees[i].netSalary();
    allEmployees[i].cardElements();
}