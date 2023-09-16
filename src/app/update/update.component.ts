import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  sum:number=0;
  add(val1:string,val2:string)
  {
    this.sum=parseInt(val1)+parseInt(val2);
  }
}