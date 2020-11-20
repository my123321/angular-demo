/*
 * @Author: your name
 * @Date: 2020-11-20 17:20:06
 * @LastEditTime: 2020-11-20 17:53:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\service\message.service.ts
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = []

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
