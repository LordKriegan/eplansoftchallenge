const express = require("express");
const router = express.Router();

router.post("/upload", (req, res) => {
    const file = req.files.file;

    file
        .mv("./uploads/" + file.name.split(" ").join("_"))
        .then((response) => {
            res.status(200).json({
                msg: "File successfully uploaded!"
            })
        }).catch((err) => {
            console.log("something went wrong", err);
            res.status(500).json({
                msg: "something went wrong",
                error: err
            })
        });
});

module.exports = router;