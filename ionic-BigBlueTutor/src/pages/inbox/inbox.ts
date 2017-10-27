import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';
import { DsService } from '../../shared/ds.service';
import {Message} from '../message/message';
import {RecordListenService} from '../../shared/recordlisten.service';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class Inbox {
  messages;
  messagesRecord;

  constructor(public navCtrl: NavController, private ds: DsService, public events:Events, private rls:RecordListenService) {
    this.messagesRecord = this.ds.profileRecord.get("messages");
    this.messages = Object.keys(this.messagesRecord);
    console.log(Object.keys(this.messagesRecord['a']));
    events.subscribe('user:message', () => {
      this.messages = Object.keys(this.ds.profileRecord.get('messages'));
    });
  }

  viewMessage(message)
  {
    this.navCtrl.push(Message, {username:message});
  }

}
