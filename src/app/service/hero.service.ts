/*
 * @Author: your name
 * @Date: 2020-11-20 16:21:04
 * @LastEditTime: 2020-11-30 17:10:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\service\hero.service.ts
 */
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '@app/hero';
import { HEROES } from '@app/mock_heroes';

import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  private heroesUrl = 'api/heroes'

  getHeroes(): Observable<Hero[]> {
    
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroes id=${id}`)
    return of(HEROES.find(hero => hero.id === id))
  }
}
