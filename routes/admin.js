const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router.get("/signin", adminController.viewSignin);
router.post("/signin", adminController.actionSignin);
router.use(auth);
router.get("/logout", adminController.actionLogout);
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
// endpoint Feature Item
router.post("/item/add/feature", upload, adminController.addFeatureItem);
router.post("/item/add/feature", upload, adminController.addFeatureItem);
router.put("/item/update/feature", upload, adminController.updateItemFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteItemFeature);
// endpoint Activity Item
router.post("/item/add/activity", upload, adminController.addActivityItem);
router.put("/item/update/activity", upload, adminController.updateItemActivity);
router.delete("/item/:itemId/activity/:id", adminController.deleteItemActivity);
// enpoint Booking
router.get("/booking", adminController.viewBooking);
router.get("/booking/:id", adminController.viewDetailBooking);
router.put("/booking/:id/confirm", adminController.actionConfirmation);
router.put("/booking/:id/reject", adminController.actionRejection);

module.exports = router;
