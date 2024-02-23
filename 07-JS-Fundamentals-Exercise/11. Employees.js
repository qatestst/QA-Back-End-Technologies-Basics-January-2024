// This is a function named listEmployees that takes an array of strings as input and prints the name and personal number of each employee
function listEmployees(input) {
    // create an empty object to store the employees and their personal numbers
    let employees = {};
  
    // loop through the array of strings
    for (let name of input) {
      // assign the length of the name as the personal number
      employees[name] = name.length;
    }
  
    // loop through the object keys
    for (let name in employees) {
      // print the name and personal number in the required format
      console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
  }
  


listEmployees(['Alice Cooper', 'Bob Dylan','Charlie Chaplin','David Bowie'  ]);
listEmployees(['Alice Cooper', 'Bob Dylan','Charlie Chaplin','David Bowie'  ]);
listEmployees(['Emma Watson', 'Frank Sinatra','Grace Kelly','Harry Styles'  ])
listEmployees(['Isaac Newton', 'Jennifer Lopez','Keanu Reeves','Lana Del Rey'])
listEmployees(['Mark Twain', 'Nora Roberts','Oprah Winfrey','Paul McCartney'  ])
listEmployees(['Queen Elizabeth', 'Rihanna','Stephen King','Tom Hanks'  ])
listEmployees( ['Uma Thurman', 'Vin Diesel','Walt Disney','Xavier Dolan'  ])
listEmployees( ['Yoko Ono', 'Zac Efron','Albert Einstein','Beyoncé'  ])
listEmployees( ['Celine Dion', 'Dwayne Johnson','Ellen DeGeneres','Freddie Mercury'  ])
listEmployees( ['George Orwell', 'Helen Mirren','Ian McKellen','Julia Roberts'  ])
listEmployees(  ['Kurt Cobain', 'Lady Gaga','Morgan Freeman','Neil Armstrong'  ])


  