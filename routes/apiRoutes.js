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
    .populate('from')
    
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

router.post('/kudos', function(req, res){
    console.log("this is the req.body for the kudos post")
    console.log(req.body)
    const kudosNote = {
        to: req.body.to,
        title: req.body.title,
        body: req.body.body,
        from: req.body.from
    }
    console.log("This is the kudos note" )
    console.log(kudosNote)
    db.kudos.create(kudosNote)
    .then(function(usersData){
        res.json(usersData);
        console.log('Entry added to kudos database')
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
// POSTMAN TESTING ROUTES FOR DATABASE
router.get('/api/kudos', function (req, res) {
	db.kudos.find({}).then(function (response, err) {
		if (err) {
			res.json(err)
		}
		res.json(response)
	});
});
// POSTMAN TESTING ROUTES FOR DATABASE
router.get('/api/users', function (req, res) {
	db.users.find({}).then(function (response, err) {
		if (err) {
			res.json(err)
		}
		res.json(response)
	});
});

module.exports = router;