
// Task 1

class students {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        }
         student() {
                return `Hello Iam ${this.name} And ${this.age} years old`
    }
    get info() {
        return `Hello i'm ${this.name} and my qaulificaion is bachelor's degree. my age is ${this.age}`
    }

    static compare(age) {
        if(age >= 18)
        {
            return "You are Major"
        }
    }
}



// Object
const student1 = new students ("Akash",19);
const Student2 = new students ("Ranjith",19);

// Method
console.log(student1.student());
console.log(Student2.student());

// Getter 
console.log(student1.info);
console.log(Student2.info);

// Static 
console.log(students.compare(19));


// Car Management System Using Classes Conecpts

class cars {
    constructor(name,brand,price,model)
    {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.model = model;
    }


    details() {
        
        let name = this.name;
        let brand = this.brand;
        let price = this.price;
        let model = this.model;
        

        return `
        Car name is : ${name}
        Car Brand is: ${brand}
        Car Price is: ${price}
        Car Model is: ${model}`
    }

    get Discount() {
        let discountAmount = this.price * 10 / 100 ;
        let final = this.price - discountAmount;
        console.log("Discount Offer :" + final);
    }
    static compare(price) {
        let Difference = car1.price - car2.price;
        
        console.log("Difference Btn Two Cars :" + Difference );

    }


}


const car1 = new cars("B M W","BMW",15000000,"M4");
const car2 = new cars("B M W","BMW",20000000,"M5");

console.log("car1 Details :");
console.log(car1.details());
console.log("car2 Details :");
console.log(car2.details());

console.log("Discount Offer Price :");

console.log("car1 :");
console.log(car1.Discount);

console.log("car2 :");
console.log(car2.Discount);



console.log("Price Diifrents :");
console.log(cars.compare(car1.price,car2.price));

// Task 2

class Bank {

    // Encapsulation
    #ACCNO;
    #IFSCNO;
    #MOBNO;

    constructor(name,Age,ACCNO,IFSCNO,MOBNO,Amount)
    {
        this.name = name;
        this.Age = Age ;

        // Private Properties

        this.#ACCNO = ACCNO;
        this.#IFSCNO = IFSCNO;
        this.#MOBNO = MOBNO;  
        this.Amount = Amount;
     }

    //  Private Method
     #check() {
        if(this.Age <= 18)
        {
            // Throw New Error Method
            throw new Error("you Are Not Eligible Access Bank Acoount")
        }
        if(this.#ACCNO < 12)
        {
           throw new Error("Invalid Account Number")

        }
        else {
            console.log("Account Number Proceeded");
            
        }

        if(this.#MOBNO < 10 )
        {
            throw new Error ("Mobile Number Is Wrong")
        }
        else {
            console.log("Mobile Number Proceeded");
        }
     }

     checking(){
        return this.#check()
     }

    //  Getter

     get Details() {
        
        return ` 
           name : ${this.name}
            Age : ${this.Age}
            ACCNO : ${this.#ACCNO}
            IFSCNO : ${this.#IFSCNO}
            MOBNO : ${this.#MOBNO}
            Amount : ${this.Amount}`
     }

     
}


let Customer1 = new Bank("Akash",19,123456789102,"CANB54",6374768146,12000);

console.log(Customer1.checking());
console.log(Customer1.Details);

