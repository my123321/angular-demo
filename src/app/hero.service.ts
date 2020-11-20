/*
 * @Author: your name
 * @Date: 2020-11-20 15:42:35
 * @LastEditTime: 2020-11-20 16:15:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\hero.service.ts
 */
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero'
import { HEROES } from './mock_heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // console.log(HEROES)
    return of(HEROES)
  }
}
