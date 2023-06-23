import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article;
  @Input() artocleeDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  iamgeIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';
}
