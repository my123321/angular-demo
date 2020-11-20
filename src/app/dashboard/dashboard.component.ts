/*
 * @Author: your name
 * @Date: 2020-11-20 18:15:07
 * @LastEditTime: 2020-11-20 18:25:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\dashboard\dashboard.component.ts
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from '@app/hero'
import { HeroService } from '@app/hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(1, 5)
        console.log(this.heroes)
      })

      
  }

}
