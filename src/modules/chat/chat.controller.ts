import { Controller, Query, Sse } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Sse('stream')
  //   stream(@Query('message') message: string): Observable<MessageEvent> {
  stream(@Query('message') message: string) {
    return this.chatService.streamLLMResponse(message);
  }
}
