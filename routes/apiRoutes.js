const router = require('express').Router();
const db = require('../models');


router.get('/users', function (req, res){
    db.users.find({})
    .then(userList =>{
        // console.log(data);
        JSON.stringify(userList, null, 2)
        console.log(userList);
        for(i =0; i< userList.length; i++){
            console.log(userList[i].first_name);
            
        }
    })
    .catch(function(err){
        res.json(err);
    });
});

router.get('/kudos', function(req, res){
    db.kudos.find({})
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

router.post('/kudos', function(req, res){
    const userId = req.body.userId;
    const kudosNote = {
        title: req.body.title,
        body: req.body.body
    }
    kudos.create(kudosNote)
    .then(function(kudosData){
        return users.findOneAndUpdate({_id:userId}, { $push: { kudos: kudosData._id}}, {new: true});
    })
    .then(function(usersData){
        res.json(usersData);
    })
    .catch(function (err){
        res.json(err);
    });
});

router.post('/users', function(req, res){
    db.users.create(req.body)
    .then(function(data){
        res.json(data);
    })
    .catch(function (err){
        res.json(err);
    });
});

module.exports = router;