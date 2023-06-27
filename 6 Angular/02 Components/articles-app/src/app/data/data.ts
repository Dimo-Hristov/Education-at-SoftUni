import { Article } from '../article.model';
import { data } from './seed';
export class ArticleData {
  getData(): Article[] {
    let articles: Article[] = [];

    for (let i = 0; i < Article.length; i++) {
      articles[i] = new Article(
        data[i].title,
        data[i].description,
        data[i].author,
        data[i].imageUrl
      );
    }
    return articles;
  }
}
