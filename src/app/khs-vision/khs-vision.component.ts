import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khs-vision',
  templateUrl: './khs-vision.component.html',
  styleUrls: ['../../assets/css/form.css']
})
export class KhsVisionComponent implements OnInit {
  test
  companyVision: string;
  name3: string;
  name4: string;
  email3: string;
  email4: string;
  constructor() {
    this.companyVision = 'Good Good!!';
    this.name3 = ' ';
    this.email3 = ' ';
  }
  addArticle1(vision1: HTMLInputElement, name1: HTMLInputElement, email1: string): boolean {
    alert(`Adding article title: ${name1.value} and link: ${email1}`);
    this.companyVision = vision1.value;
    this.name3 = name1.value;
    this.email3 = email1;
    return false;
 }
  addArticle2(vision2: HTMLInputElement, sample1: HTMLInputElement, sample2: string): boolean {
    alert(`Adding article title: ${sample1.value} and link: ${sample2}`);
    this.companyVision = vision2.value;
    this.name4 = sample1.value;
    this.email4 = sample2;
    return false;
 }
  ngOnInit() {
  }

}
