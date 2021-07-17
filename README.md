# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The site can be viewed over [here](https://chitchat-frontend.netlify.app/).

## setup instructions

```
frontend
cd client
npm i 
npm start
This will run your react app at localhost:3000


backend
cd server
npm i
node index.js
for dev mode you can use
nodemon index.js
this will run your server at locahost:5000

```

## Packages used

[React Router Dom](https://www.npmjs.com/package/react-router-dom)\
[express](https://expressjs.com/)\
[socket.io](https://socket.io/get-started/chat)\
[cors](https://www.npmjs.com/package/cors)\
[Query string](https://www.npmjs.com/package/query-string)\
[React Emoji](https://www.npmjs.com/package/react-emoji)\
[Copy tp Clipboard](https://www.npmjs.com/package/react-copy-to-clipboard)\
[Peer JS](https://www.npmjs.com/package/peerjs)

## deploying frontend


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


## deploying backend 

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
