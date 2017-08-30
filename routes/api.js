const express = require('express');
const router = express.Router();
const jandan = require('mongoose').model('jandan');

/* GET users listing. */
router.get('/duanzi/:offset', function(req, res, next) {
    var offset = 0;
    if (req.params && req.params['offset']) {
        offset = parseInt(req.params['offset']);
    }

    jandan
    .find({})
    // .sort({"duanziId": 1})
    .skip(offset)
    .limit(20)
    .exec((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    })

});

module.exports = router;
