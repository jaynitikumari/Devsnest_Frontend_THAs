// question 1

// for(let items in student){
//   console.log (items);
// }

//keys,values,freezegetOwnPropertyName



function display(student) {
    let arr = Object.keys(student);
    return arr.join(",");
  }
  
  console.log(display({ name: "David Rayy", sclass: "VI", rollno: 12 }));


//   ----------------------------------------------------------------------------------//

  // question 2.
//   Write a JavaScript program to delete the rollno property from the following object. 
//  Also print the object before or after deleting the property. 
//  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

  
  function del(student) {
    console.log(student);
    delete student.rollno;
    return student;
  }
  
  console.log(del({ name: "David Rayy", sclass: "VI", rollno: 12 }));

//   ...............................................................................//
  
  // question 3
//   Write a JavaScript program to get the length of a JavaScript object.  
//   Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
  
  function len(student) {
    let size = Object.keys(student).length;
    return size;
  }
  
  console.log(len({ name: "David Rayy", sclass: "VI", rollno: 12 }));

//   -------------------------------------------------------------------------------//

  // question 4
//   Write a JavaScript program to display the reading status 
// (i.e. display book name, author name and reading status) of the following books.
//  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
//  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

  
  var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  
  function displayStatus() {
    library.forEach((value) => {
      if (value.readingStatus === true) {
        console.log("You have read " + value.title);
      } else {
        console.log("You haven't read " + value.title);
      }
    });
  }
  displayStatus();
  
  /**
   * Expected output:
   * You have read The Road Ahead
   * You have read Walter Issacson
   * You haven't read Mockingjay: The Final Book of The Hunger Games
   */
  
//   ----------------------------------------------------------------------------//


  // question 5
//   Write a JavaScript program to get the volume of a Cylinder
//  with four decimal places using object classes. Volume of a cylinder : V = πr2h 
//  where r is the radius and h is the height of the cylinder. 
//  Try To Attempt : Difficult Level Increased 


  class Cylinder {
    constructor(height, radius) {
      this.height = height;
      this.radius = radius;
    }
    // Getter
    get volume() {
      return this.calcVol();
    }
    // Method
    calcVol() {
      return this.height * this.radius * 2 * 3.1415;
    }
  }
  
  const cylinder = new Cylinder(10, 4);
  
  console.log(cylinder.volume.toFixed(4));


//   ------------------------------------------------------------------------------//

  // question 6
//   Write a JavaScript program to sort an array of JavaScript objects.  
//   Sample Object : 
//   var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
//   { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, {
//    title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
  
  
  var library2 = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  
  library2.sort(function (a, b) {
    return b.libraryID - a.libraryID;
  });
  
  console.log(library2);
  
  
// Expected Output: 
// [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, 
// [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" },
// [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]