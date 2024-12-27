import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagebanner',
  templateUrl: './pagebanner.component.html',
  styleUrls: ['./pagebanner.component.css']
})
export class PagebannerComponent {
  @Input() pagetitle: string = '';

}
