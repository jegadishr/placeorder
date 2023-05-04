import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'placeorder';

  @ViewChild('myDiv') myDiv: ElementRef;

  
  OrderPlace (sEvent :any) {
    let button = sEvent.currentTarget.className;

    console.log('has class foo', ) //false

    if(!this.myDiv.nativeElement.classList.contains('animate')) {
      this.myDiv.nativeElement.classList.add('animate');
        setTimeout(() => {
          this.myDiv.nativeElement.classList.remove('animate');
        }, 10000);
    }
  }
}
