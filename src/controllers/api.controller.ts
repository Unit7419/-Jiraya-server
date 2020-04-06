import { Post, Get, JsonController } from 'routing-controllers'

@JsonController()
export class APIController {
  constructor() {}

  @Post('/justwink/message_board')
  justwink_message_board() {
    return require('./../db/justwink.message.board.ts')
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
