import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { DisplayMessage } from '../model/display-message';
import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';
import { MatTableDataSource } from '@angular/material/table';
import { ArrayType } from '@angular/compiler';


const mockMessages: Message[] = [
  {toUserId: '001', message: 'Hey', position: 0, timeStamp: ''},
  {toUserId: '001', message: 'How are you?', position: 1, timeStamp: ''},
  {toUserId: '002', message: 'Great!', position: 2, timeStamp: ''},
  {toUserId: '002', message: 'Bye', position: 3, timeStamp: ''},
  {toUserId: '001', message: 'Boo', position: 4, timeStamp: ''}
];

const mockLoggedInUser = '001';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  dataSource: MatTableDataSource<DisplayMessage>;
  displayedColumns: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumns = ['incoming', 'outgoing'];
    this.dataSource = new MatTableDataSource(this.mapMessageToDisplayMessage(mockLoggedInUser, mockMessages));
    console.log(this.dataSource);
  }

  mapMessageToDisplayMessage(userId: string, messages: Message[]): DisplayMessage[] {
    const displayMessages: DisplayMessage[] = new Array();
    for (const message of messages) {
      const displayMessage: DisplayMessage = new DisplayMessage();
      if (message.toUserId === userId) {
        displayMessage.incomingMessage = message.message;
        displayMessage.outgoingMessage = '';
        displayMessages.push(displayMessage);
      }
      else {
        displayMessage.outgoingMessage = message.message;
        displayMessage.incomingMessage = '';
        displayMessages.push(displayMessage);
      }
    }
    console.log(displayMessages);
    return displayMessages;
  }
}
