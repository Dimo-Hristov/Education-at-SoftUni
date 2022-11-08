function comments(input) {
    let usersList = {};
    let articleList = {};
    // make aricle list and use the value for counter.
    // make usersList. key is the username, value is object with tittle, comment and articleName.
    for (const row of input) {
        if (row.includes('user ')) {
            let userName = row.split('user ')[1];
            usersList[userName] = [];
        } else if (row.includes('article ')) {
            let article = row.split('article ')[1];
            articleList[article] = 0;
        } else {
            let innerarray = row.split(' posts on ');
            let userName = innerarray.shift()
            innerarray = innerarray.join('').split(': ')
            let articleName = innerarray.shift()
            let [commentTitle, comment] = innerarray[0].split(', ')
            if (usersList[userName] && articleList[articleName] > -1) {
                articleList[articleName]++
                let obj = {
                    title: commentTitle,
                    comment,
                    articleName
                }
                usersList[userName].push(obj)
            }
        }
    }
    // sort the articleList by the count of comments (value is the counter)
    let articleListKvp = Object.entries(articleList);
    articleListKvp.sort(([nameA, countA], [nameB, countB]) => countB - countA)
    // sort the usernames in ascending order.
    let usersListKvp = Object.entries(usersList);
    usersListKvp.sort(([nameA], [nameB]) => nameA.localeCompare(nameB))

    // print in the required format.
    for (const [articleName, comments] of articleListKvp) {
        console.log(`Comments on ${articleName}`);
        for (const [userName, commentsArray] of usersListKvp) {
            for (const comment of commentsArray) {
                let asd
                if (comment.articleName == articleName) {
                    console.log(`--- From user ${userName}: ${comment.title} - ${comment.comment}`);
                }
            }
        }
    }
}
comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])

    // Write a function that stores information about users and their comments on a website. You have to store the users, the comments as an object with title and content, and the article that the comment is about. The user can only comment, when he is on the list of users and the article is in the list of articles. The input comes as an array of strings. The strings will be in the format: "user {username}" – add the user to the list of users

    // "article {article name}" – add the article to the article list "{username} posts on {article name}: {comment title}, {comment content}" – save the info
    
    // At the end sort the articles by a count of comments and print the users with their comments ordered by usernames in ascending.
    
    // Output
    
    // Print the result in the following format: "Comments on {article1 name} --- From user {username1}: {comment title} - {comment content} --- From user {username2}: … Comments on {article2 name} …"