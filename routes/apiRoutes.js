const router = require('express').Router();
const db = require('../models');

router.get('/', function(req, res){
window.location.replace('/kudos')
})


router.get('/users', function (req, res){
    db.users.find({})
    .then(userList =>{
        // console.log(data);
        res.json(userList)
        // JSON.stringify(userList, null, 2)
        // console.log(userList);
        // for(i =0; i< userList.length; i++){
        //     console.log(userList[i].first_name);
            
        // }
    })
    .catch(function(err){
        res.json(err);
    });
});

router.get('/kudos', function(req, res){
    db.kudos.find({})
    .populate('to')
    // add populate from
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

router.post('/kudos', function(req, res){
    console.log(req.body)
    const userId = req.body.userId;
    const kudosNote = {
        // to: req.body.to,
        title: req.body.title,
        body: req.body.body
    }
    db.kudos.create(kudosNote)
    // .then(function(kudosData){
    //     return users.findOneAndUpdate({_id:userId}, { $push: { kudos: kudosData._id}}, {new: true});
    // })
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

router.get('/api/kudos', function (req, res) {
	db.kudos.find({}).then(function (response, err) {
		if (err) {
			res.json(err)
		}
		res.json(response)
	});
});

router.get('/api/users', function (req, res) {
	db.users.find({}).then(function (response, err) {
		if (err) {
			res.json(err)
		}
		res.json(response)
	});
});

module.exports = router;