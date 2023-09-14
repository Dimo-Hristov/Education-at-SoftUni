const eventBus = require('./eventBus');


eventBus.subscribe('user-add', () => {
    console.log('new user added');
});

eventBus.publish('user-add');