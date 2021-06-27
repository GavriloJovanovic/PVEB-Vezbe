import { Goal } from './../models/goal.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GoalService {

  regionLink = "http://localhost:3000/goals/";
  constructor(private http:HttpClient) { }

  public getGoals(){
    console.log("Dobivanje pitanja")
    return this.http.get<Goal>(this.regionLink);
  }

  public getGoalsId(id : String) {
    console.log("Kliknuli smo na id: ", id)
    return this.http.get<Goal>(this.regionLink + "/" + id);
  }

  public postGoal(data) {
    console.log("POST GOAL")
    let body = {
      "name" : data['naziv'],
      "opis" : data['opis'],
      "vaznost" : data['vaznost']
    }
    console.log("BODIJEVAC: ",body);
    return this.http.post<any>(this.regionLink, body)
  }
}
