import { Get, Post, Body, JsonController } from 'routing-controllers'

const { read_photos, write_photos } = require('../service/images.js')

@JsonController()
export class GalleryController {
  constructor() {}

  @Get('/gallery/photos')
  gallery_photos() {
    return read_photos()
  }
  @Post('/gallery/upload')
  upload_photos(@Body() body) {
    return write_photos(body)
  }
}
