class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!')
        }

        let indexOfArticle = this.listOfArticles
            .findIndex(x => x.articleName == articleName && x.articleModel == articleModel);

        if (indexOfArticle > -1) {
            this.listOfArticles[indexOfArticle].quantity += quantity;
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }

        let currentArticle = {
            articleModel,
            articleName,
            quantity,
        }

        this.listOfArticles.push(currentArticle);
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 0;

        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        } else {
            points = 50;
        }

        let newGuest = {
            guestName,
            points,
            purchaseArticle: 0
        }

        this.guests.push(newGuest);
        return `You have successfully invited ${guestName}!`;

    }

    buyArticle(articleModel, articleName, guestName) {
        let indexOfArticle =
            this.listOfArticles.findIndex(x => x.articleModel == articleModel
                && x.articleName == articleName);

        if (indexOfArticle == -1) {
            throw new Error('This article is not found.')
        }

        if (this.listOfArticles[indexOfArticle].quantity == 0) {
            return `The ${articleName} is not available.`
        }

        let currentGuest = this.guests.find(x => x.guestName == guestName);

        if (!currentGuest) {
            return 'This guest is not invited.'
        }

        let pointsNeeded = this.possibleArticles[articleModel];

        if (pointsNeeded > currentGuest.points) {
            return 'You need to more points to purchase the article.'
        }

        currentGuest.points -= pointsNeeded;
        currentGuest.purchaseArticle++;

        this.listOfArticles[indexOfArticle].quantity--;

        return `${guestName} successfully purchased the article worth ${pointsNeeded} points.`

    }

    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let output = [];
            output.push('Articles information:');
            this.listOfArticles.forEach(x => {
                output.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`);
            })
            return output.join('\n');
        }

        if (criteria == 'guest') {
            let output = [];
            output.push('Guests information:');
            this.guests.forEach(x => {
                output.push(`${x.guestName} - ${x.purchaseArticle}`);
            });
            return output.join('\n')
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');

artGallery.addArticle('picture', 'Mona Liza', 3);

artGallery.addArticle('Item', 'Ancient vase', 2);

artGallery.addArticle('picture', 'Mona Liza', 1);

artGallery.inviteGuest('John', 'Vip');

artGallery.inviteGuest('Peter', 'Middle');

artGallery.buyArticle('picture', 'Mona Liza', 'John');

artGallery.buyArticle('item', 'Ancient vase', 'Peter');

console.log(artGallery.showGalleryInfo('article'));

console.log(artGallery.showGalleryInfo('guest'));