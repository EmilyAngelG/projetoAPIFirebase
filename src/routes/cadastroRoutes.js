const express = require("express");
const router = express.Router();
const cadastroController = require("../controllers/cadastroController");

router.get("/", cadastroController.listAll);
router.get("/:id", cadastroController.getId);
router.post("/", cadastroController.create);
router.put("/:id", cadastroController.update);
router.delete("/:id", cadastroController.delete);

module.exports = router;
