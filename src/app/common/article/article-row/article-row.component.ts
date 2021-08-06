import {Component, Input, OnInit} from '@angular/core';
import {Badge} from '../../models/badge.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-article-row',
    templateUrl: './article-row.component.html',
    styleUrls: ['./article-row.component.scss']
})
export class ArticleRowComponent implements OnInit {
    @Input() articleId: number;
    @Input() articleTitle: string;
    @Input() articleAuthor: string;
    @Input() articlePublishedDate: string;
    @Input() badges: Badge[];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    navigateToArticleDisplay(id: number) {
        if (this.router.url === '/the/architect/article/list') {
            this.router.navigate(['/the/architect/article'], {queryParams: {articleId: id}});
        } else {
            this.router.navigate(['/article'], {queryParams: {articleId: id}});
        }
    }
}
