import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-doctor-profile-settings',
  templateUrl: './doctor-profile-settings.component.html',
  styleUrls: ['./doctor-profile-settings.component.scss']
})
export class DoctorProfileSettingsComponent {
  public routes = routes;
  public dltImg1  = true;
  public dltImg2  = true;
  
  public education = [0]
  public experience = [0]
  public awards = [0]
  public memberships = [0]
  public registrations = [0]


  dltImage1(){
    this.dltImg1 = !this.dltImg1
  }
  dltImage2(){
    this.dltImg2 = !this.dltImg2
  }

  addEducationFunc(){
    this.education.push(1);
  }
  dltEducationFunc(index: number){
    this.education.splice(index, 1);
  }

  addExperienceFunc(){
    this.experience.push(1);
  }
  dltExperienceFunc(index: number){
    this.experience.splice(index, 1);
  }

  addAwardsFunc(){
    this.awards.push(1);
  }
  dltAwardsFunc(index: number){
    this.awards.push(index, 1);
  }

  addMembershipsFunc(){
    this.memberships.push(1);
  }
  dltMembershipsFunc(index: number){
    this.memberships.splice(index, 1);
  }

  addRegistrationsFunc(){
    this.registrations.push(1);
  }
  dltRegistrationsFunc(index: number){
    this.registrations.splice(index, 1);
  }
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Tooth cleaning'}];
  fruits2: Fruit[] = [{name: 'Children Care'},{name: 'Dental Care'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits.push({name: value});
    }
    event.chipInput?.clear();
  }
  add2(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits2.push({name: value});
    }
    event.chipInput?.clear();
  }
  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  remove2(fruit: Fruit): void {
    const index = this.fruits2.indexOf(fruit);
    if (index >= 0) {
      this.fruits2.splice(index, 1);
    }
  }
  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(fruit);
      return;
    }
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  edit2(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(fruit);
      return;
    }
    const index = this.fruits2.indexOf(fruit);
    if (index >= 0) {
      this.fruits2[index].name = value;
    }
  }
}
