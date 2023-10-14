1. Init project and structure
2. Setup developer enviroment
3. Install express and nodemon
   - configure static middleware
   - configure bodyParser
   - configure routes
4. Add images and css in public directory
5. Add html files in views directory
6. Install express-handlebars
   - configure view engine
   - add main layout
   - fix public style hyperlinks
7. Convert all html to handlebars views
   - Group views by meaning
8. Create controller folder and add home controller
9. Add database
   - install mongoose
   - connrect to db
10. Prepare user funcionality
    - user controller
    - add controller to routes
    - fix navigations in navbar (login, register, logout)
    - render login page
    - render register pager
11. Add User model
    - add method for register
    - simple validation in Schema
    - register user in db
    - validate password missmatch
    - unique email validation
12. Hash password

- install bcrypt
- has password

13. Login

- find user by email
- validate password with hash

14. generate jsonwebtoken

- install jsonwebtoken
- promisify it
- generate secret
- generate token in service login

15. return token in cookie

- install cookie-praser
- configure cookie-praser
- set cookie with the token

16. Implement login aurth
17. Auth middleware

- create middleware directory
- add auth middleware and import it in express config below cookieParser
- decode the token
- handle invalid token
- provide aurthrization

18. Dynamic navigation

- conditional options in nav
- add data to res.locals for templates

19. Error handling

- add 404 page
- redirect missing route to 404
- add global error handler (optional)
- add error message util

20. Show error notirfrination

- render errors in main layout
- pass errorsto render in login and register pages
