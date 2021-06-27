import { GoalService } from './../service/goal.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @Input() naziv;
  @Input() vaznost;
  @Input() id;
  public opis = null;
  public klik = -1;
  constructor(public goalService : GoalService) { }

  ngOnInit(): void {
    console.log("Komponenta " + this.naziv + " , vaznosti: " + this.vaznost, ", id: " + this.id );
    let color;
    if(this.vaznost == 3) {
      color = "red"
    } else if(this.vaznost == 2) {
      color = "orange"
    } else {
      color = "yellow"
    }
  }

  operacija() {
    this.klik = -1* this.klik;
    const sub = this.goalService.getGoalsId(this.id).subscribe(e => {
      this.opis = e[0]['opis'];
    });
  }

}
