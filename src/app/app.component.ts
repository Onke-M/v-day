import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'v-day';
  showYes = false;
  showNo = false;
  showQuestion = false;
  question: string = '';

  ngOnInit(): void {
    console.log('app component initialized');
    this.showQuestion = true;
    this.question = 'Will you be my Valentine?';
  }

  showYesButton() {
    this.showYes = true;
    this.showNo = false;
    this.showQuestion = false;
    this.question = 'WOOOOOOOOOO'
  }

  showNoButton() {
    this.showYes = false;
    this.showNo = true;
    this.showQuestion = false;
    this.question = 'So you hate me fr?'
  }
}
