import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';


const mockMessages: Message[] = [
  {toUserId: '001', message: 'Hey', position: 0, timeStamp: ''},
  {toUserId: '001', message: 'How are you?', position: 1, timeStamp: ''},
  {toUserId: '002', message: 'Great!', position: 2, timeStamp: ''},
  {toUserId: '002', message: 'Bye', position: 3, timeStamp: ''},
  {toUserId: '001', message: 'Boo', position: 4, timeStamp: ''}
];

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['incoming', 'outgoing'];
    this.dataSource = [{incoming: 'hey', outgoing: ''}, {incoming: '', outgoing: 'yo'}, {incoming: 'Nufing', outgoing: ''},  {incoming: '', outgoing: 'bish'}];
  }
}
