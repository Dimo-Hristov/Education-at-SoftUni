const eventBus = require('./eventBus');


eventBus.subscribe('user-add', () => {
    console.log('new user added');
});

eventBus.subscribe('user-add', () => {
    console.log('new user added 2');
});

eventBus.subscribe('user-remove', () => {
    console.log('User is removed');
});

eventBus.publish('user-remove');