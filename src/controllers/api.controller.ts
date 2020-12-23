import { Post, Get, JsonController, Body } from 'routing-controllers'
import { justwinkMessageGet, justwinkMessageSet } from '../model/model'

@JsonController()
export class APIController {
  constructor() {}

  @Post('/justwink/message_board')
  justwink_message_board() {
    return justwinkMessageGet()
  }

  @Post('/justwink/comment')
  justwink_comment(@Body() data) {
    return justwinkMessageSet(data)
  }

  @Get('/secret/html')
  getSecretHtml() {
    return require('./../db/secretHtml.ts')
  }

  @Get('/test')
  test() {
    return '米奇妙妙屋'
  }

  @Get('/banner')
  banner() {
    return require('./../db/banner.json')
  }

  @Post('/recommend')
  recommend() {
    return require('./../db/recommend.json')
  }
}
