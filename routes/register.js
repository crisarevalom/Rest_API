var express = require('express');
var router = express.Router();
const registerController = require ("./../controllers/RegisterControllers");

router.get("/",registerController.getRegister);
router.get("/:id",registerController.getOneRegister);
router.post("/",registerController.insert);
router.post("/",registerController.update);
router.post("/",registerController.deleteR);


module.exports = router;
