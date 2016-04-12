import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <i class="glyphicon"
            [class.glyphicon-star-empty]="isActive"
            [class.glyphicon-star]="!isActive"
            (click)="isActive = !isActive"></i>
        <i class="glyphicon"
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick()"></i>
    `
})
export class AppComponent {
    isActive = true;
    // another way
    isFavorite = false;
    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}
