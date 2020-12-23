import { Post, JsonController } from 'routing-controllers'
import { getGallery } from '../model/model'

@JsonController()
export class GalleryController {
  constructor() {}

  @Post('/gallery/photos')
  gallery_photos() {
    return getGallery()
  }
}
