import {Component, HostBinding, Input, OnInit} from '@angular/core';



export interface Section {
  name: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {
  first: Section[] = [
    {
      name: 'First item',
    },
    {
      name: 'Second Item',
    },
    {
      name: 'Third item',
    }
  ];
  second: Section[] = [
    {
      name: '2First item',
    },
    {
      name: '2Second Item',
    },
    {
      name: '2Third item',
    }
  ];

}
