let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohan","age":37,"company":"Flipkart"},
    {"person":"Rohan","age":38,"company":"Amazon"},
    {"person":"Soham","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]
for (let i= 0; i<object.length; i++) {
    console.log(`
    "person":${object[i].person}
    "age":${object[i].age}
    "company":${object[i].company}
    `)
}