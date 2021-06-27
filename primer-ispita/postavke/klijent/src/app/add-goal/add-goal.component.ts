import { Goal } from './../models/goal.model';
import { GoalService } from './../service/goal.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ICGoalFormValue {
  naziv: string;
  opis: string;
  vaznost: number
}

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})


export class AddGoalComponent implements OnInit {

  constructor(public goalService : GoalService) {
    this.initializeCreateGoalForm();
  }

  createGoalForm : FormGroup

  ngOnInit(): void {
  }


  createGoal() {
    console.log("SUBMITOVAO SAM");
    // Postoji i polje invalid koje ce biti true ako formular ne prolazi validaciju
    if (this.createGoalForm.invalid) {
      window.alert("The form is not valid!");
      return;
    }

    const data = this.createGoalForm.value as ICGoalFormValue;

    this.createGoalOnServer(data);

  }

  // Metod koji treba da kontaktira server i posalje podatke
  createGoalOnServer(data) {
    console.log("HOCU DA POSTAVIM PITANJE!");
    this.goalService.postGoal(data).subscribe(e => {
      console.log(e);
    });
  }


  initializeCreateGoalForm() : void {
    this.createGoalForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      opis: new FormControl("", [Validators.required, Validators.minLength(2)]),
      vaznost: new FormControl(0, [Validators.required,Validators.min(0),Validators.max(5)])
    });
  }

  klik() {
    window.alert("Uspesno ste uneli zadatak!");
  }
}
