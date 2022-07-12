let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohan","age":37,"company":"Flipkart"},
    {"person":"Rohan","age":38,"company":"Amazon"},
    {"person":"Soham","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]
for(let data of object) {
    console.log(`
    "person": ${data.person}
    "age": ${data.age}
    "company": ${data.company}
    `)
}