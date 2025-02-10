import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

    // Sample data array
    items = [
      { id: 1, name: 'Item 1', description: 'Description for Item 1' },
      { id: 2, name: 'Item 2', description: 'Description for Item 2' },
      { id: 3, name: 'Item 3', description: 'Description for Item 3' },
      { id: 3, name: 'Item 3', description: 'Description for Item 3' },
      { id: 1, name: 'Item 1', description: 'Description for Item 1' },
      { id: 2, name: 'Item 2', description: 'Description for Item 2' },
      { id: 3, name: 'Item 3', description: 'Description for Item 3' },
      { id: 3, name: 'Item 3', description: 'Description for Item 3' },
    ];

}
