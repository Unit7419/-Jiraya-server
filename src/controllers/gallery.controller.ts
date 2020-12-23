import { Post, JsonController } from 'routing-controllers'

@JsonController()
export class GalleryController {
  constructor() {}

  @Post('/gallery/photos')
  gallery_photos() {
    return []
  }
}
