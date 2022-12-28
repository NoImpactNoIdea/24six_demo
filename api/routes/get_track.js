const express = require('express');
const router = express.Router();
require('dotenv').config();

///POST REQUEST WITH EXPECTED PARAMS: id FOR GOVEN TRACK
router.get('/:id', (req,res) => {

  ///PARSE THE ID
  ///SEARCH AND RETURN THE APPROPRIATE TRACK 
  ///ONCE OPERATION COMPLETES, RETURN EXPECTED DATA

  const id = req.params.id || null; 

  if (id == null) {
    res.status(401).json({
      status_code: '401',
      response : 'failed',
      message : 'Expected parameters ie. id'
    });
    return
  }

  res.status(200).json({
    status_code: '200',
    response : 'success',
    id: id,
  });
  return
});

module.exports = router;