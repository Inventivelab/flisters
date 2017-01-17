var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('MONGODB_URL_API');
// Get Todos
router.get('/listings', function(req, res, next){
    db.listings.find(function(err, listings){
        if(err){
           res.send(err); 
        } else {
           res.json(listings);
        }
    });
});

// Get Single Todo
router.get('/listing/:id', function(req, res, next){
    db.listings.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, listing){
        if(err){
           res.send(err); 
        } else {
           res.json(listing);
        }
    });
});

// Save Todo
router.post('/listing', function(req, res, next){
    var listing
     = req.body;
    if(!listing.text || !(listing.isCompleted + '')){
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.save(listing, function(err, result){
            if(err){
                res.send(err); 
            } else {
                res.json(result);
            }
        });
    }
});

// Update Todo
router.put('/listing/:id', function(req, res, next){
    var listing = req.body;
    var updObj = {};
    
    if(listing.isCompleted){
        updObj.isCompleted = listing.isCompleted;
    }
    
    if(listing.text){
        updObj.text = listing.text;
    }
    
    if(!updObj){
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.listings.update({
            _id: mongojs.ObjectId(req.params.id)
        },updObj, {}, function(err, result){
            if(err){
                res.send(err); 
            } else {
                res.json(result);
            }
        });
    }
});

// Delete Todo
router.delete('/listing/:id', function(req, res, next){
    db.listings.remove({
        _id: mongojs.ObjectId(req.params.id)
    },'', function(err, result){
        if(err){
            res.send(err); 
        } else {
            res.json(result);
        }
    });
});

module.exports = router;