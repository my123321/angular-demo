/*
 * @Author: your name
 * @Date: 2020-11-20 16:21:04
 * @LastEditTime: 2020-11-20 18:24:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\service\hero.service.ts
 */
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '@app/hero';
import { HEROES } from '@app/mock_heroes';

import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes');
    return of(HEROES)
  }
}
