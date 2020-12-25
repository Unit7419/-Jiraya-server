import { Get, Post, Body, JsonController, UseBefore } from 'routing-controllers'

const { read_photos, write_photos } = require('../service/images.js')
const bodyParser = require('body-parser')
@JsonController()
export class GalleryController {
  constructor() {}

  @Get('/gallery/photos')
  gallery_photos() {
    return read_photos()
  }
  @Post('/gallery/upload')
  // @UseBefore(bodyParser.urlencoded())
  upload_photos(@Body() body) {
    return write_photos(body)
  }
}
