var express = require("express");
var router = express.Router();
var UserData = require("../Modals/User.js");

router.get("/", function (req, res) {
  res.json({
    message: "working Server",
  });
});

// get employee data  --------1
router.get("/user-data", function (req, res) {
  UserData.find()
    .then((data) => {
      res.json({
        statusCode: 200,
        user: data,
        message: "Get Employ Data Successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// post employee data  --------2
router.post("/user-data", function (req, res) {
  UserData.create(req.body)
    .then((post) => {
      res.status(200).json({
        statusCode: 200,
        users: post,
        message: "Add Employ Data Successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// update employee data --------3
router.put("/user-data/:id", function (req, res) {
  UserData.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.json({
        statusCode: 200,
        userUpdate: data,
        message: "update Employ Data Successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// upadte data find --------4
router.get("/user-data/:id", function (req, res) {
  UserData.findById(req.params.id)
    .then((data) => {
      res.json({
        statusCode: 200,
        findById: data,
        message: "find EmployData Successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// select data delete form employee data   --------5
router.delete("/user-data/:id", function (req, res) {
  UserData.findByIdAndRemove(req.params.id)
    .then((data) => {
      res.json({
        statusCode: 200,
        user: data,
        message: "Successfully deleted user data",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

module.exports = router;
