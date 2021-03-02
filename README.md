# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## setup instructions

```
frontend
cd client
npm i 
npm start
This will run your react app at localhost:3000


backend
cd server
node index.js
this will run your server at locahost:5000

```

## Packages used

[React Router Dom](https://www.npmjs.com/package/react-router-dom)\
[express](https://expressjs.com/)\
[socket.io](https://socket.io/get-started/chat)\
[cors](https://www.npmjs.com/package/cors)\
[Query string](https://www.npmjs.com/package/query-string)\
[React Emoji](https://www.npmjs.com/package/react-emoji)



## deploying frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/c0be0ad2-9d7c-4cf9-a211-fbf00bb57fdc/deploy-status)](https://app.netlify.com/sites/relaxed-joliot-16ab24/deploys)

```
npm run build
this will create an optimised build folder
Add _redirects to public folder
point to index.html
npm install netlify-cli -g
netlify deploy
select the build folder to deploy
netlify deploy --prod
```


## deplying backend 

create an app on heroku and follow the given instructions


```
cd server
git add .
git commit -m "Adding Heroku."
heroku login
heroku create
git push heroku main
now create a procfile in server as
web: node index.js

```

.
