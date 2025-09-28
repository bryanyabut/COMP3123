const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;

// Create an instance of an Express application
const app = express();

// Middleware to serve static files from the "public" directory
// app.use(express.static("public"));
app.use('/static', express.static("public"));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

//http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello World from Express");
})

//http://localhost:3000/index.html
// app.get("/index.html", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })

//http://localhost:3000/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

//http://localhost:3000/about
app.get("/about", (req, res) => {
    // res.send("<h1>About Page</h1>")
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.send("<h1>About Page</h1>")
     res.status(200).send("<h1>About Page</h1>")
})

//http://localhost:3000/college
app.get("/college", (req, res) => {
    const college = {
        method: "GET",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }

    // res.send(college);
    res.json(college);
})

//http://localhost:3000/college
app.post("/college", (req, res) => {
    const college = {
        method: "POST",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }

    // res.send(college);
    res.json(college);
})

//http://localhost:3000/college
app.put("/college", (req, res) => {
    const college = {
        method: "PUT",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }

    // res.send(college);
    res.json(college);
})

//http://localhost:3000/college
app.delete("/college", (req, res) => {
    const college = {
        method: "DELETE",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }

    // res.send(college);
    res.json(college);
})

//Query Parameters
//http://localhost:3000/student?name=John&age=25
//req.query
app.get("/student", (req, res) => {
    if(req.query == {} || !req.query.name || !req.query.age) {
        return res.status(400).json({ error: "Missing query parameters" });
    }
    console.log(req.query);
    // const { name, age } = req.query;
    const name = req.query.name;
    const age = req.query.age;

    res.json({
        student_name: name,
        student_age: age
    })
})

//Path Parameters
//http://localhost:3000/student/John/25/Toronto
//req.params
app.get("/student/:name/:age/:city", (req, res) => {
    console.log(req.params);
    if(!req.params.name || !req.params.age || !req.params.city) {
        return res.status(400).json({ error: "Missing path parameters" });
    }
    // const { name, age, city } = req.params;
    const name = req.params.name;
    const age = req.params.age;
    const city = req.params.city;
    res.json({
        student_name: name,
        student_age: age,
        student_city: city
    })
})

//Body Parameters as JSON
//req.body
//http://localhost:3000/student
//POST
//Content-Type: application/json
//Body
/*
    {
        "name": "John",
        "age": 25
    }
*/
app.post("/student", (req, res) => {
    const student = req.body;
    console.log(student);
    
    const { name, age } = student;
    
    if(!student.name || !student.age) {
        return res.status(400).json({ error: "Missing body parameters" });
    }

    res.json({
        student_name: student.name,
        student_age: student.age
    })
})

app.listen(SERVER_PORT, () => {
    // console.loog("Server stareted");
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});