# Installing and Running ReactJS Frontend

1. Ensure that NodeJS 18 is installed (https://nodejs.org/en/download/)
2. Unzip`frontend.zip`
3. In a separate terminal:
   1. Navigate to `[path to folder]/hospital-management`
   2. Run `npm install`
   3. After the install, run `npm start`
4. In a few seconds, your react app should start, and your web browser should open with the React App, running at http://localhost:3000
5. By default, the API endpoint for the app is set to the live Heroku server. To test local end-end functionality with a local server:
   1. Navigate to `[path to folder]/hospital-management/src/api.js`
   2. Comment Line 4
   3. Uncomment Line 5
