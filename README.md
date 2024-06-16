

                            MVC ( Model-View-Controller )🎉
    ● (frontend = client):
      the index.js (starts server) and this imports middlewares file (configures json requests, handlebars,
      error handling, fileupload, JWT and static folders showing html or hbs views in the browser),
      and the main.hbs view links the views and the partials (navbar and footer) and the main.hbs links the animations 
      with files (script.js) and styles with files (style.css). There is also a script with the logic in each view.

    ● (backend = server):
      index.js (raises the server) and this imports the routes.js file (the routes) and this imports the
      controllers.js (api rest full) and this imports the queries.js (sql queries), and this imports the
      config the db.js (database connection) and this imports the .env file (environment variables).
      Controllers can optionally import data from an API or from a json file.
