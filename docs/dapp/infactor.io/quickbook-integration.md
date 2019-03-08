---
title: Quickbook Integration
---

**prerequisite**

 - Complete the set up of infactor.io on your local machine.

**1. Create an Intuit Developer account**

[Sign up](https://developer.intuit.com/v2/ui#/signup) for a new Intuit Developer account

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-signup.png"/>
</p>

**2. Create an app**

a. Select My apps and then Create an app

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-create-app.png"/>
</p>

b. Select the Keys tab to locate your Client ID and Client Secret

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-generate-keys.png"/>
</p>

c. Add the redirect Url

Note : redirect url be exactly, http://localhost:3000/quickbook/connect

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-redirect-url.png"/>
</p>

**3. Add app configurations**

- Copy content from example.env file to a new file .env in a project root directory

- Add the configuration details according to your project details as in step 2

**4. Add invoices to your app on quikbook**

**5. Start infactor application on your localhost**

- start application 

		npm start

- create a supplier user and go to dashboard

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-dash-empty.png"/>
</p>

**6. Sync Invoices with quickbook**

a. Click on connect quickbook to sync quickbook invoices. It will open a new popup window to give authorisation. Add your quickbook login details.

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-login.png"/>
</p>

b. Authorise infactor to access your company data(invoices) by clicking on connect button. close the popup window on response.

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-loginauth.png"/>
</p>

**7. refresh the dashboard, all new invoices will appear on dashboard.**

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-dash-connect.png"/>
</p>

**8. Click on any invoice see the complete details**

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-invoicedetails.png"/>
</p>
