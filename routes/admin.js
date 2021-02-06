const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");

/* GET Dashboard Admin Page. */
router.get("/dashboard", adminController.viewDashboard);
// endpoint Category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.updateCategory);
router.delete("/category/:id", adminController.deleteCategory);
// enpoint Bank
router.get("/bank", adminController.viewBank);
router.post("/bank", upload, adminController.addBank);
router.put("/bank", upload, adminController.updateBank);
router.delete("/bank/:id", adminController.deleteBank);
// enpoint Item
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showUpdateItem);
router.put("/item/:id", uploadMultiple, adminController.updateItem);
router.delete("/item/:id/delete", adminController.deleteItem);
// endpoint Detail Item
router.get("/item/detail_item/:itemId", adminController.viewDetailItem);
router.post("/item/add/feature", upload, adminController.addDetailItem);
router.put("/item/update/feature", upload, adminController.updateItemFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteItemFeature);
// enpoint Booking
router.get("/booking", adminController.viewBooking);

module.exports = router;
