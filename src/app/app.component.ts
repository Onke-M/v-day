import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'v-day';
  showYesPhoto = false;
  showNoPhoto = false;
  showQuestionPhoto = false;
  showYesButton = false;
  showNoButton = false;
  question: string = '';
  noCount: number = 0;
  yesButtonSize = this.noCount * 20 + 16;
  renderer2!: Renderer2;
  elementRef!: ElementRef;

  ngOnInit(): void {
    console.log('app component initialized');
    this.showQuestionPhoto = true;
    this.showNoButton = true;
    this.showYesButton = true;
    this.question = 'Will you be my Valentine?';
  }

  getNoButtonText(){
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a cherry on top",
      "BRO PLEASEEEE",
      "But :*(",
      "I am going to die",
      "You have killed me",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
    ];

    return phrases[Math.min(this.noCount, phrases.length - 1)];
  };

  handleYes() {
    this.showYesPhoto = true;
    this.showQuestionPhoto = false;
    this.showNoPhoto = false;
    this.showYesButton = false;
    this.showNoButton = false;
    this.question = 'WOOOOOOOOOOOOOOOOOOOOO!!!!!!'

    let end = Date.now() + (15 * 1000);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];
    
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
   }

  handleNo() {
    this.noCount++;
    if(this.noCount <= 5){
    this.yesButtonSize = this.noCount * 20 + 16;
    }
    this.showNoPhoto = true;
    this.showQuestionPhoto = false;
  }
}
