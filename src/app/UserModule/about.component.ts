import { Component, OnInit } from '@angular/core';
import { UserModuleService } from './user-module.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})

export class AboutComponent  {
  constructor(userService:UserModuleService) {
     
    }


}
