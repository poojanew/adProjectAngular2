import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'advertiseHome',
  templateUrl: './homeForm.html',
})
export class homeComponent  { 

    constructor(private router:Router){

    }
    routePostAd(){
        this.router.navigate(['/postAd']);
    }
 }
