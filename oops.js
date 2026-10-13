
// Inheritance   // ploymorphism

// single inheritance

class Animal {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    sound() {
        return "Animal Sound"
    }
}

    class dog extends Animal {
        constructor(name,age,colour)
        {
            // Super key Word
            super(name,age);
            this.colour = colour;

        }
        sound() {
            return "Dog Barking"
        }

    }

// Multilevel inheritance


class parent {
    work(){
        console.log("parent class")
    }
}

class child extends parent {
    work() {
        console.log("Child coudn't have works")
    }
}

class grandchild extends child {
    work() {
        console.log("Grandchild Assemble Here")
    }
}


// Hirarchical inheritance

class parent {
    work(){
        console.log("parent class")
    }
}

class child extends parent {
    work() {
        console.log("Child coudn't have works")
    }
}

class grandchild extends parent {
    work() {
        console.log("Grandchild Assemble Here")
    }
}

// Multiple inheritance

class grandparent {
    work() {
        console.log("grandparent Assemble Here")
    }
}

class Parent {
    work(){
        console.log("parent class")
    }
}


class child {
    work() {
        console.log("child Assemble Here")
    }
}

Object.assign(
    child.prototype,
    grandparent.prototype,
    Parent.prototype
)


// Hybrid inheritance

class grandparent {
    work() {
        console.log("Im a Grandparent")
    }
}
class parent extends grandparent {
    // Method overriding
    work(){
        console.log("parent class")
    }
}

class child extends grandparent {
    // Method overriding
    work() {
        console.log("Child coudn't have works")
    }
}

class grandchild extends parent {
    // Method overriding
    work() {
        console.log("Grandchild Assemble Here")
    }
}




