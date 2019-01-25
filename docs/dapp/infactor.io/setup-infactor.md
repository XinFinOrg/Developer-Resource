---
title: Setup infactor.io DAPP
---

# Setup

**Note:** You’ll need to have **Node 6.x.x** version on your local development machine. You can use `nvm` to easily switch Node versions between different projects.

## 1. Clone the Repository

To clone the repository,   
 a. `git clone <URL of repository>`  
 b. download the repository and extract it.

After cloning the repository, you need to add a file on the repository.

* File location: `<root of infactor repository>/Config/config.js`  
* File content should be copied from `defaultConfig.js` and paste in `config.js`

## 2. Install dependencies

```text
 a. Install Node modules

     npm install

 b. Install Angular Modules

      bower install
```

## 3. Deploy Contract

To connect with XinFin Blockchain, follow [these instructions](https://github.com/XinFinOrg/Developer-Resource/tree/292cf026ee8057660f28bf3756370e83f1e5280b/Docs/DAPP/infactor.io/Setup/XDC01-Docker-Node-Setup.md)

```text
 a. Compile Contract

      truffle compile

 b. Deploy Contract

      truffle migrate
```

## start server

```text
  npm start
```

_Note:_ Open the browser with following url: [http://localhost:6001/login](http://localhost:6001/login)

