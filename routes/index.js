var router = require('express').Router();

router.get('/', function(req,res) {
	res.sendFile('/Users/Jeff/Fullstack/Euchre/views/index.html');
});

module.exports = router