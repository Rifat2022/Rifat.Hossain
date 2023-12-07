import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  ngOnInit() {
    const btn = $('#menu-btn');
    const menu = $('#menu')
    // const btn = document.getElementById('menu-btn')
    // const menu = document.getElementById('menu')
    // btn.addEventListener('click', navToggle)
    btn.on('click', (event: any)=> {
      btn[0].classList.toggle('open')
      menu[0].classList.toggle('flex')
      menu[0].classList.toggle('hidden')
    })
  }

  ngOnDestroy(): void { }
}
