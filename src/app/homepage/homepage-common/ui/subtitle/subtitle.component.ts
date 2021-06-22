import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {
  @Input() subtitleContent: string;

  constructor() { }

  ngOnInit(): void {
  }

}
