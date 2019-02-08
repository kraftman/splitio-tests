const express = require('express');
const router = express.Router();
const homeHandler = require('../../bl/home-handler.js');

const homeEndpoint = (req, res) => {
    const result = homeHandler(req.query.name)
    res.status(200).send(result)
}

router.get('/', homeEndpoint);

module.exports = router;
