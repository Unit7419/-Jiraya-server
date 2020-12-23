import { Get, JsonController } from 'routing-controllers'
import { getGallery } from '../model/model'

@JsonController()
export class GalleryController {
  constructor() {}

  @Get('/gallery/photos')
  gallery_photos() {
    return getGallery()
  }
}
