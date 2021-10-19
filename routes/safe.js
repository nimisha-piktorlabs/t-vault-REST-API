const express = require("express");
const router = express.Router();
const Safe = require("../models/Safe");
// get all post
router.get("/", async (req, res) => {
  try {
    const allSafeData = await Safe.find();
    res.json(allSafeData);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit post
router.post("/", async (req, res) => {
  //   console.log(req.body);
  const postSafe = new Safe({
    safename: req.body.safename,
    owner: req.body.owner,
    selectType: req.body.selectType,
    description: req.body.description,
    secrets:null
  });
  //promise
  try {
    const savedSafe = await postSafe.save();
    res.json(savedSafe);
  } catch (err) {
    res.json({ message: err });
  }
  //   post
  //     .save()

  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       res.json({ message: err });
  //     });
});
// router.get("/specific", (req, res) => {
//   res.send("we are on specific ");
// });
//specific post
router.get("/:safeId", async (req, res) => {
  //   console.log(req.params.postId);
  try {
    const singleSafe = await Safe.findById(req.params.safeId);
    res.json(singleSafe);
  } catch (err) {
    res.json({ message: err });
  }
});
//delete a post
router.delete("/:safeId", async (req, res) => {
  try {
    const removedSafe = await Safe.remove({ _id: req.params.safeId });
    res.json(removedSafe);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post
router.patch("/:safeId", async (req, res) => {
  try {
    const updatedSafe = await Safe.updateOne(
      { _id: req.params.safeId },
      { $set: { safename: req.body.safename,
                owner: req.body.owner, 
                description: req.body.description } }
    );
    res.json(updatedSafe);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/secret/:safeId", async (req, res) => {
  try {
    const updatedSafe = await Safe.updateOne(
      { _id: req.params.safeId },
      { $push: { secrets: req.body.secret } }
    );
    res.json(updatedSafe);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
