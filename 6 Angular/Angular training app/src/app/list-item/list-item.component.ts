import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() userItem!: { firstName: string; lastName: string };
  @Input() showLastNameItem!: boolean;

  constructor() {}
}
