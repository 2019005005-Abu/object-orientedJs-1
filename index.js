//Onject Oriented Programming
/**
 * 1.Abstraction
 * 2.Encapsulation
 * 3.Inherintance
 * 4.Polymorphism
 * 5.This key word
 * 6.New KeyWord
 * 7.Prototype
 * 8.Function Constructor
 * 9.Class Constructor(Es6)
 * 10.Object.created()
 * 11.Public Method and Properties
 * 12.Private Method and Properties
 * 13.getter
 * 14.setter
 * 15.A small Project on Object Oriented Programming
 */ 


/**
 * Alternative Methods to oop include
 * 1.Functional programming
 * 2.Structured or modular Programming
 * 3.Imperative Programming
 * 4.Declarative Programming
 */

/**
 * How Object Oriented structured in Programming
 * 1.Class
 * 2.Objects
 * 3.Properties
 * 4.Methods
 */

//class Structure and Example
// class Men{
//  menName;
//  age;
//  location;
//  gretting(){
    
//  }
 
// }
//class is a blue print

//instance

// var cl=new Men("Rifat",24,"Dhaka");
// const sakib=new Men("Sakib",25,"Chitagong");
// const karib=new Men("Karib",26,"Dhaka");
// console.log(c1);

//Abstraction


// class Car{
//   Carname;
//   CarMode1;
//   speed(){

//   }
//   engineWeight(){

//   }
//   lightPowerSupplt(){

//   }
//   lightOn(){

//   }
//   lightoff(){

//   }
//   currentSupply(){

//   }
// }


//Encapsulation
//Keep properties and method private,that will not work outside of the class

// Car{
//     cardName;
//     cardMode;//suppose this is privte properties
//     Speed(){
//         this.lightON();
//         this.lightOFF();
//     }
//     lighton(){
//         //suppose this is private method
//         console.log(this.CarModel);
//     }
//     lightOFF(){
//         //suppose this is private method
//         console.log(this.CarModel);

//     }
// }
// let ferrari=new Car("ferrari","EK-333");
// console.log(ferrari.cardName);
// console.log(ferrari.CarModel);


//Inheritance
//child class will take matching properties and values from parent class

//Parent Class
// class Car{
//     carName;
//     CarModel;
//     speed(){

//     }
//     lightON(){

//     }
//     lightOFF(){

//     }
// }
// //
// class Car2 extends Car{
    
// }



//Polymorphism
//Parent Class

// class CarNorma1{
//   driver;
//   speed(speed){

//   }
// }

// class CarwithFather{
//    driver;
//    spped(speed){

//    }
// }

//child Class

// class CarWithYoungBoy{
//     driver;
//     speed(speed,youngBoy){

//     }
// }


//How do  we make object in object Oriented Programming
/**
 *1.Function Constructor
  2.Classes
  3.Object.create()
 */

  //function constructor
    const computer=function () {
      console.log(this);
    }
     const pc=computer();
     //new keyword make instance
     const pc1=new computer()

     //There are 4 rules o f function constructor
     /**
      * 1.create an empty object {}
      * 2.function is called this={}
      * 3.{} object linked to  the prototype
      * 4.{} will  return automatically
      */

     const obj={};
      obj.name="Abu Al Shahriar Rifat";
      obj.SystemId=20190005005;
      obj.University="University Of Sharda";
      console.log(obj);

      const myComputer=function (name,model) {
         this.name=name;
         this.model=model;
         this.aboutDeatils=function(){
            console.log(`My Computer Name is ${this.name} and brand name is ${this.model}`)
         }
        }
        
      const hp=new myComputer('hp','gh35353');
      const dell=new myComputer("dell","G53434");
      console.log(hp);
      console.log(hp.aboutDeatils());
  //classes

  //Object.create()