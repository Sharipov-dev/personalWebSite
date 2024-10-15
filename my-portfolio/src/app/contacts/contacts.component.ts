import { Component } from '@angular/core';
import {TextCardComponent} from '../text-card/text-card.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    TextCardComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
