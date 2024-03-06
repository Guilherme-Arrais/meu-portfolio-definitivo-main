import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-windows-skills',
  templateUrl: './windows-skills.component.html',
  styleUrls: ['./windows-skills.component.css']
})
export class WindowsSkillsComponent {
  @Input()
  imageSmallCard:string=''
  @Input()
  titleSmallCard:string=''
  constructor(){

  }
}
