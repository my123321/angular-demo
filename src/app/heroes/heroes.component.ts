/*
 * @Author: your name
 * @Date: 2020-11-20 11:25:51
 * @LastEditTime: 2020-11-30 16:07:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\heroes\heroes.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/hero';
import { HeroService } from '@app/service/hero.service';
import { MessageService } from '@app/service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // heroes = HEROES;
  
  constructor(
    private heroService: HeroService, 

  ) { }


  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
