const eventBus = require('./eventBus');


eventBus.subscribe('user-add', (username) => {
    console.log(`new user added: ${username}`);
});

eventBus.subscribe('user-add', () => {
    console.log('new user added 2');
});

eventBus.subscribe('user-remove', () => {
    console.log('User is removed');
});

eventBus.publish('user-add', 'Pesho');
eventBus.publish('user-remove');