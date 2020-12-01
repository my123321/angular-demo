/*
 * @Author: your name
 * @Date: 2020-11-20 15:23:02
 * @LastEditTime: 2020-11-30 16:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\hero-detail\hero-detail.component.ts
 */
import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

import { HeroService } from '@app/service/hero.service';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero; 

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id')

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back()
  }

}
