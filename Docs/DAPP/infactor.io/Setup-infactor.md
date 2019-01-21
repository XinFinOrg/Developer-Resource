---
title: Setup infactor.io DAPP
---

## Installation

**Note:** You’ll need to have **Node 6.x.x** version on your local development machine. You can use `nvm` to easily switch Node versions between different projects.

### 1. Clone the Repository 
To clone the repository, <br>
  a. `git clone <URL of repository>`<br>
  b. download the repository and extract it.
  
After cloning the repository, you need to add a file on the repository. 
* File location: `<root of infactor repository>/Config/config.js` <br>
* File content should be copied from `defaultConfig.js` and paste in `config.js`

### 2. Install dependencies

     a. Install Node modules
     
         npm install
       
     b. Install Angular Modules
     
          bower install
      
### 3. Deploy Contract

To connect with XinFin Blockchain, follow [these instructions](./Setup/XDC01-Docker-Node-Setup.md)

     a. Compile Contract
        
          truffle compile
        
     b. Deploy Contract
        
          truffle migrate

### start server
      npm start
     
*Note:* Open the browser with following url: http://localhost:6001/login
