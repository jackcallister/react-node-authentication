Authentication without pulling your hair out or having to use hacks (especially on react-router). The idea is to have two applications. One that's the actual application and one for sessions. Here's the user/http flow.

 - An initial request is made.
 - Node checks for a token.
 - If there is no token Node redirects to `sessions/new`.
 - A session template is loaded and sent to the client.
 - A React session application is loaded which contains a HTML form.
 - Validation and interactivity can be done with React!
 - The form submits an HTTP Post request to the Node application.
 - The token is present, therefore we are redirected to the index.
 - The index loads the regular application with all your SPA goodness.
 - Have a cup of tea.

This architecture decouples your authentication system from your application. They could even be seperate applications on different sub-domains.
