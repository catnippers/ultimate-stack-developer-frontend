import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-badge',
  templateUrl: './category-badge.component.html',
  styleUrls: ['./category-badge.component.scss']
})
export class CategoryBadgeComponent implements OnInit {
  @Input() badgeTag: string;
  @Input() badgeTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
