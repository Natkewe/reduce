  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// will reduce the array of numbers to one number, totalling 10



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];
// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);
// this would make 16 as its adding up all of the years experience together



// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
let key = curr.profession;
if (!acc[key]) {
  acc[key] = curr.yrsExperience;

} else {
  acc[key] += curr.yrsExperience;
}
return acc;
}, {});
console.log(experienceByProfession);


// example on challenge


const biggest = students.reduce((acc, cur) => {
  acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
  return acc;
  }, {name: '', max: 0});
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
  if(max < english) {
      acc = {name:n, max: english};
  }
  return acc;
  }, {name: '', max: 0});
  
console.log(biggest);
*/


