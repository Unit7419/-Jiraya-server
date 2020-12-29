const GalleryController = require('../controller/gallery')

module.exports = router => {
  router.get('/gallery/photos', GalleryController.get_photos)
  router.post('/gallery/upload', GalleryController.upload_photos)
}
