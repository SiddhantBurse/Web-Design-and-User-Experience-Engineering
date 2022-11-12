const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
// const ObjectId = require('mongoose').Types.ObjectId;    

// const { User } = require('../models/user');
const User= mongoose.model('employees');


// Get All Employees
router.get('/user/getAll', (req, res) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
            console.log(data);
           
        } else {
            console.log(err);
        }
    });
});




// Get Single Employee (First Way)

// router.get('/api/employee/:id', (req, res) => {
//     Employee.findById(req.params.id, (err, data) => {
//         if(!err) {
//             res.send(data);
//         } else {
//            console.log(err);
//         }
//     });
// });




// Save Employee
router.post('/user/create', (req, res) => {
    console.log(req.body);

    
var user = new User();
        user.email= req.body.email;
        user.fullname= req.body.fullname;
        user.password= req.body.password;
       
    
    user.save((err, data) => {
        if(!err) {
            // res.send(data);
            let nameRegex =  /^[a-zA-Z]+$/;
            let mailRegex = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
            
            if(mailRegex.test(data.email)&& nameRegex.test(data.fullname)){
            res.status(200).json({code: 200, message: 'Employee Added Successfully', addEmployee: data})
        }else{
            if(mailRegex.test(data.email)==false){
                res.status(500).json({code: 200, message: 'Not a valid email'}) 
            }
            else if(nameRegex.test(data.fullname)==false) {
                res.status(500).json({code: 200, message: 'Not a valid Name'}) 
            }
        }

        } else {
           console.log(err);
           console.log('did not add');
        }
    });
});



// Update Employee

// router.put('/api/employee/update/:id', (req, res) => {


//     const emp = {
//         name: req.body.name,
//         position: req.body.position,
//         office: req.body.office,
//         salary: req.body.salary
//     };
//     Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
//         if(!err) {
//             res.status(200).json({code: 200, message: 'Employee Updated Successfully', updateEmployee: data})
//         } else {
//             console.log(err);
//         }
//     });
// });





// // Delete Employee
router.delete('/user/delete', (req, res) => {

    if(req.body.email){

    User.findOneAndRemove(req.body.email, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Employee deleted', deleteEmployee: data})
        } else {
            console.log(err);
        }
    });
}else{
    res.status(500).json({code: 200, message: 'Please enter the email'}) 
}
});


module.exports = router;