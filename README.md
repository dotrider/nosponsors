### nosponsors ###

<ul>MVP:
<li>login functionality/authentication</li>
<li>responsive design</li>
<li>redux</li>
<li>hosted site</li>
<li>redux</li>
<li>google sign in</li>
</ul>

ICEBOX
-- attend event button 

<br/>
*depencecies*

- axios
- react-router-dom
- redux
- react-redux
- redux-promise-middleware
- http-proxy-middleware

*routes*
- home(/)
- login --- (/loging)
- Blogs --- (/blog)
- Events --- (/events)

*file structures*
-scr/
    -App.js
    -App.css
    -index.js
    -Routes.js
    -redux/
        - store
        - reducer
    -Components/
        - Header.js
        - Home.js
        - Events.js
        - Footer.js

**Server**
<br>
- express-session
- massive
- express
- dotenv
- bcrypt

<br/>

***Endpoints***
</br>
auth:
- login => /auth/login
- register => /auth/register
- logout: => /auth/logout
- userSession: => /auth/user_session
<br/>

BlogCTRL:
- (app.get) getAllBlogs: => /api/get_blogs
- (app.get) getAllEvents: => /api/get_events
- (app.post) postBlog: => /api/post_blog
- (app.post) postEvents: => /api/post_events
- (app.delete) deleteBlog: => /api/delete_blog/:id
- (app.put) addComment: => /api/add_comment/:id
- (app.put) editEvent: => /api/edit_event/:id

