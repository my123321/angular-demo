/*
 * @Author: your name
 * @Date: 2020-11-20 17:32:01
 * @LastEditTime: 2020-11-20 17:45:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\messages\messages.component.ts
 */
import { Component, OnInit } from '@angular/core';

import { MessageService } from '@app/service/message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { 
    
  }

  ngOnInit(): void {
  }

}
