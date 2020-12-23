import { Get, Post, Body, JsonController } from 'routing-controllers'
import { getGallery, putGallery } from '../model/model'

@JsonController()
export class GalleryController {
  constructor() {}

  @Get('/gallery/photos')
  gallery_photos() {
    return getGallery()
  }
  @Post('/gallery/upload')
  upload_photos(@Body() body) {
    return putGallery(body)
  }
}
