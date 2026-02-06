use("CruDB")

console.log(db)
db.createCollection("courses")

db.courses.insertMany([
    
        {
          "name": "harry web dev free course",
          "price": 0,
          "projects": 32
        },
        {
          "name": "full stack mastery",
          "price": 0,
          "projects": 28
        },
        {
          "name": "javascript pro bootcamp",
          "price": 0,
          "projects": 35
        },
        {
          "name": "python for beginners",
          "price": 0,
          "projects": 30
        },
        {
          "name": "ultimate react guide",
          "price": 0,
          "projects": 25
        },
        {
          "name": "node.js backend dev",
          "price": 0,
          "projects": 20
        },
        {
          "name": "css animations masterclass",
          "price": 0,
          "projects": 18
        },
        {
          "name": "html & css crash course",
          "price": 0,
          "projects": 15
        },
        {
          "name": "data structures in js",
          "price": 0,
          "projects": 22
        },
        {
          "name": "modern web design",
          "price": 0,
          "projects": 27
        }
      
      
])
let a=db.courses.find({price:0})
console.log(a.count())

//UPDATE
db.courses.updateOne({price:0},{$set:{price:100}})
db.courses.updateMany({price:0},{$set:{price:100}})

console.log(db.courses.find({price:{$gt:99}}))
