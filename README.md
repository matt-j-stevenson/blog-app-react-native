# Blog App - React Native

[React Native Docs](https://facebook.github.io/react-native/docs/getting-started)

### Run:

```javascript
    npm install npm@latest -g

    npm start

    *outdated*

    download ngrok
    ngrok http 8080
```

#### Creating a blog posting application in react native via expo. Here, I utilise lots of advanced features of react/rn and ES2015 - with the use of a governing Context and Provider I successfully pass information to differing nested child elements and components within the app without the use of state. I also utilise a Reducer and write my own code to essentially act as simplified yet functional Redux via Context. In the Context of the app I have written functions which correctly operate the app to allows CRUD features.

#### Update: The app is now fully connected to JSON Server, here, the functions written inside the Reducer make async calls (and await) responses from the server via axios, the server is temporarily hosted via ngrok (tunnels) which is specifically used for testing/development purposes (as it refreshes every 8 hours), so attempting to load the app will require an update to 'jsonServer.js' with the new URL, (via axios). The entire application is essentially wrapped in the Provider created within the templated 'createDataContext' to allow other components to pass data and props to children.

