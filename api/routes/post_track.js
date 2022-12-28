const express = require('express');
const router = express.Router();
require('dotenv').config(); 
const dummyID = require("crypto"); ///JUST FOR THE API DEMO

///POST REQUEST WITH EXPECTED PARAMS: TITLE ARTIST ALBUM
router.post('/', (req,res) => {

  ///NULL CHECK AGAINST PARAMETERS
  ///CREATE TRACK DUMMY ID
  ///RETURN IT WITH THE REQUEST

const title = req.body.title || null;
const artist = req.body.artist || null;
const album = req.body.album || null;

///null check
if (title == null || artist == null || album == null) {

    res.status(401).json({
      status_code: '401',
      response : 'failed',
      message : 'Expected parameters ie. title | artist | album',
    });
  return
}

  const track_id = dummyID.randomBytes(16).toString("hex"); ///SINCE WERE USING DUMMY DATA

  ///SAFE AREA - dummy data, success response for param success
  res.status(200).json({
    status_code: '200',
    response : 'ok',
    message : 'success',
    track_id: `${track_id}`

  });
});

module.exports = router;