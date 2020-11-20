/*
 * @Author: your name
 * @Date: 2020-11-20 15:23:02
 * @LastEditTime: 2020-11-20 15:37:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angular-demo\src\app\hero-detail\hero-detail.component.ts
 */
import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero; 

  constructor() { }

  ngOnInit(): void {
  }

}
