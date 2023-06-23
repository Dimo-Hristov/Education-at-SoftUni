import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() user!: { firstName: string; lastName: string };
  @Input() showLastName!: boolean;

  constructor() {}
}
