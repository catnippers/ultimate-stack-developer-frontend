import {Component, OnInit} from '@angular/core';
import {Category} from '../../common/models/category.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GraphQLService} from '../../api/graphql.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-architect-new-category',
    templateUrl: './architect-new-category.component.html',
    styleUrls: ['./architect-new-category.component.scss']
})
export class ArchitectNewCategoryComponent implements OnInit {
    category: Category;
    newCategoryForm: any;
    currentCategoryTitle: any;
    currentCategoryTag: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private graphQLService: GraphQLService) {
    }

    ngOnInit(): void {
        this.setupCategoryForm();
    }

    private setupCategoryForm() {
        this.newCategoryForm = new FormGroup({
            newCategoryTitle: new FormControl(''),
            newCategoryTag: new FormControl('')
        });
    }

    saveChangedCategory() {
        const newCategoryTitle = this.newCategoryForm.controls.newCategoryTitle.value;
        const newCategoryTag = this.newCategoryForm.controls.newCategoryTag.value;

        if (newCategoryTitle === null) {
            console.log('TITLE IS NULL! ABORT! ABORT I SAY!');
        }

        if (newCategoryTag === null) {
            console.log('TAG IS NULL! ABORT! ABORT I SAY!');
        }

        if (newCategoryTitle !== null && newCategoryTag !== null) {
            this.graphQLService
                .createNewCategory(newCategoryTitle, newCategoryTag)
                .then(() => {
                    this.router.navigate(['the/architect/category/list']);
                });
        }
    }
}