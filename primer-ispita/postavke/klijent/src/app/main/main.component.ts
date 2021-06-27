import { Goal } from './../models/goal.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GoalService } from '../service/goal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public zadaci;
  constructor(private http : HttpClient, private goalService : GoalService) { }
  public imena = [];

  ngOnInit(): void {


    const sub = this.goalService.getGoals().subscribe(e => {
      this.zadaci = e;
      console.log(e);
      for(let i = 0; i < this.zadaci.length; i++) {
        this.imena[i] = this.zadaci[i]['naziv'];
      }
    });

  }

}
