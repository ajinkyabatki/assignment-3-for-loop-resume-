let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohan","age":37,"company":"Flipkart"},
    {"person":"Rohan","age":38,"company":"Amazon"},
    {"person":"Soham","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]
for(let data in object) {
    console.log(data);
    console.log(`
    "person": $object[data].person}
    "age": $object[data].age}
    "company": $object[data].company}        
    `)
}