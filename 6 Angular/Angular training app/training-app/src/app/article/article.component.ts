import { Component } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDesc!: string;
  descToShow!: string;
  articleDescLen!: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  iamgeIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  toggleImage(): void {
    this.iamgeIsShown = !this.iamgeIsShown;
    this.imageButtonTitle =
      this.imageButtonTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  readMore(): void {
    this.articleDescLen == this.symbols;
    if (this.articleDescLen == this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
