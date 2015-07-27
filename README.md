Authentication without pulling your hair out or having to use hacks (especially on react-router). The idea is to have two applications. One that's the actual application and one for sessions. Here's the user/http flow.

 - An initial request is made and Node checks for a token.
 - If there is no token Node redirects to the `sessions/new` route.
 - A `session.ejs` template is loaded along with a `<Session />` app.
 - Validation and interactivity can be done with React!
 - The `<Session />` form submits an HTTP Post to Node.
 - Valid user details return a token which is saved as a cookie.
 - Node redirects to the index which loads an `application.ejs` template and <Application /> app.
 - Have a cup of tea.

This architecture decouples your authentication system from your application. They could even be seperate applications on different sub-domains.
