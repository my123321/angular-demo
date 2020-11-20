/*
 * @Author: your name
 * @Date: 2020-11-20 11:25:51
 * @LastEditTime: 2020-11-20 17:59:56
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

  constructor(private heroService: HeroService, private messageService: MessageService) { }


  ngOnInit(): void {
    this.getHeroes()
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
