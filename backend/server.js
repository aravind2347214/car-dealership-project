
const express= require('express')
const uuid = require('uuid')
var mysql = require('mysql')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json());

const PORT=8000;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'car-dealer',
    port: 3306 // MySQL default port is 3306
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      console.log("Check DB connection")
      return;
    }
    console.log('Connected to MySQL database');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  });


//   ---------Reviews------------

  app.get("/get-all-reviews",(req,res)=>{
    const sql="SELECT * FROM reviews"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
  })

  app.post("/add-review",(req,res)=>{
    const review=req.body
    
    const sql= "INSERT INTO reviews VALUES (?, ?, ?)"

    connection.query(sql,[uuid.v4(),review.reviewerName,review.reviewContent],(error,results)=>{
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
         res.status(201).json(results) 
    })
  })





//   ---------Users-----------

  app.get("/get-all-users",(req,res)=>{
    const sql="SELECT * FROM users"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
  })

app.post("/add-user",(req,res)=>{
    const newuser=req.body
    
    const sql= "INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?)"
    connection.query(sql,[newuser.name,newuser.phone,newuser.gender,newuser.email,new Date(newuser.dob),newuser.password,uuid.v4()],(error,results)=>{
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
         res.status(201).json(newuser) 
    })
  })

  


// ------------Cars-------------

  app.get("/get-all-cars",(req,res)=>{
    const sql="SELECT * FROM cars"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
  })

  app.post("/add-car",(req,res)=>{
    const newcar=req.body
    console.log(newcar)
    const sql= "INSERT INTO cars VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    connection.query(sql,[newcar.name,newcar.priceRange,newcar.engine,newcar.powerOutput,newcar.milage,newcar.seatingCapacity,newcar.transmission,newcar.safetyFeatures,newcar.keyFeatures,newcar.photoURL,uuid.v4()],(error,results)=>{
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
         res.status(201).json(newcar) 
    })
  })

  


// ---------Contact Emails---------------

  app.get("/get-all-contact-emails",(req,res)=>{
    const sql="SELECT * FROM contactemails"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
  })

  app.post("/add-contact-email",(req,res)=>{
    const newemail=req.body
    const sql= "INSERT INTO contactemails VALUES (?, ?, ?, ?)"
    connection.query(sql,[newemail.name,newemail.email,newemail.query,uuid.v4()],(error,results)=>{
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
         res.status(201).json(newemail) 
    })
  })

// ------------Dealer Emails---------

  app.get("/get-all-dealer-emails",(req,res)=>{
    const sql="SELECT * FROM dealeremails"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
  })

  app.post("/add-dealer-email",(req,res)=>{
    const newemail=req.body
    console.log(newemail)
    const sql= "INSERT INTO dealeremails VALUES (?, ?, ?, ?, ?)"
    connection.query(sql,[newemail.name,newemail.email,newemail.phone,newemail.dealerName,uuid.v4()],(error,results)=>{
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
         res.status(201).json(newemail) 
    })
  })


  
 

