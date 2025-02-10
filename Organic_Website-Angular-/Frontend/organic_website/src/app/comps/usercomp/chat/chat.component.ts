import { Component } from '@angular/core';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userMessage: string = '';
  messages: { text: string, isUser: boolean }[] = [];

  constructor(private apiService: GenericApiService) { }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    this.messages.push({ text: this.userMessage, isUser: true });

    this.apiService.post('chatbot/send', { message: this.userMessage }).subscribe(
      (response: { reply: string }) => {
        this.messages.push({ text: response.reply, isUser: false });
        this.userMessage = '';
      },
      error => {
        console.error('Error sending message:', error);
        
      }
    );
  }
}
