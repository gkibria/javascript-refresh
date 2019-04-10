const patients = [
    {id: 2, name: 'Taher Ullah', age: 29, sex: 'Male', marital: 'Single'},
    {id: 93, name: 'Mr. Smith', age: 57, sex: 'Male', marital: 'Married'},
    {id: 10, name: 'Azahi Khatun', age: 92, sex: 'Female', marital: 'Married'},
    {id: 20, name: 'Ambala', age: 78, sex: 'Female', marital: 'Married'},
    {id: 23, name: 'Abdul Jabbar', age: 64, sex: 'Male', marital: 'Married'},
    {id: 27, name: 'Shukkur Ali', age: 24, sex: 'Male', marital: 'Single'},
    {id: 24, name: 'Moyna Begum', age: 21, sex: 'Female', marital: 'Single'}
]

// filter all female patients
let females = patients.filter(pt => pt.sex == 'Female')
// console.log(females)

// filter females who are 60 or older
let females60 = patients.filter(pt => (pt.sex == 'Female' & pt.age >= 60))
// console.log(females60)

// sort patients by age descending
let ptsorted = patients.sort((a,b) => a.age - b.age)
// console.log(ptsorted)

// get all patients name
let names = patients.map(pt => pt.name)
// console.log(names)

// get all patients name age sex
let pat = patients.map(pt => `${pt.name}, ${pt.age} Y, ${pt.sex}`)
// console.log(pat)

// get all patients combined age
let total_age = patients.reduce((total, pt) => total + pt.age, 0)
// console.log(total_age)

// get oldest patient
let oldest = patients.sort((a,b) => b.age - a.age)[0]
console.log(oldest)