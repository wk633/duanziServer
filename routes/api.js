const express = require('express');
const router = express.Router();
const jandan = require('mongoose').model('jandan');

/* GET users listing. */
router.get('/duanzi', function(req, res, next) {
    jandan
    .find({})
    .sort({"duanziId": 1})
    .skip(0)
    .limit(30)
    .exec((err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
        res.json(data);
    })

});

module.exports = router;
