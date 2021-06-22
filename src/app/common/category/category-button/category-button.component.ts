import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent implements OnInit {
  @Input() buttonTitle: string;
  @Input() buttonTag: string;

  constructor() { }

  ngOnInit(): void {
  }
}
