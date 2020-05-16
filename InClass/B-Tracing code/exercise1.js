function greetPeople(people) {
  const greeting = "Hello ";

  people.forEach(function (person) {
    console.log(greeting + person);
  });

  return greeting;
}

let mentors = ["Irina", "Ashleigh", "Etza"];
let result = greetPeople(mentors);

/*
  Let's trace this piece of code - what is the value of result with this input
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
