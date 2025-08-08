import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ChatService {
  //   streamLLMResponse(message: string): Observable<MessageEvent> {
  streamLLMResponse(message: string) {
    return new Observable((subscriber) => {
      subscriber.next({ data: `Você disse: ${message}` });
      subscriber.complete();
    });
  }
}
