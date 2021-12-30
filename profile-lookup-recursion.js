// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function findContact(n, name, prop) {
    if (n >= contacts.length) {
      return 'No such contact'
    } else {
      if (contacts[n].firstName === name) {
        if (contacts[n].hasOwnProperty(prop)) {
          return contacts[n][prop]
        }
        return 'No such property'
      }
  
      return findContact(n + 1, name, prop)
    }
  }
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
    return findContact(0, name, prop)
  
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Bob", "number"))