import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-chat-doctor',
  templateUrl: './chat-doctor.component.html',
  styleUrls: ['./chat-doctor.component.scss']
})
export class ChatDoctorComponent {
  public routes = routes;
  public chat = false;

  showChat(){
    this.chat = !this.chat;
  }
}
