---
title: Quickbook Integration
---

1. Create an Intuit Developer account

	[Sign up](https://developer.intuit.com/v2/ui#/signup) for a new Intuit Developer account

	<p>
	    <img src="../../../developer-html/assets/images/quickbook/qbk-signup.png"/>
	</p>

2. Create an app

	Select My apps and then Create an app

	<p>
	    <img src="../../../developer-html/assets/images/quickbook/qbk-create-app.png"/>
	</p>

	Select the Keys tab to locate your Client ID and Client Secret

	<p>
	    <img src="../../../developer-html/assets/images/quickbook/qbk-generate-keys.png"/>
	</p>

	Add the rediect Url
	Note : redirect url be exactly, http://localhost:3000/quickbook/connect

	<p>
	    <img src="../../../developer-html/assets/images/quickbook/qbk-redirect-url.png"/>
	</p>

3. Copy content from example.env file to a new file .env in a project root directory

4. Add the configuration details according to your project details as in step 2

5. Add invoices to your app on quikbook.

6. Start your app on your localhost, create a supplier user and go to dashboard

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-dash-empty.png"/>
</p>

7. Sync Invoices with quickbook

a. Click on connect quickbook to sync quickbook invoices. It will open a new popup window to give authorisation. Add your quickbook login details.

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-login.png"/>
</p>

b. Authorise infactor to access your company data(invoices) by clicking on connect button. close the popup window on response.

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-loginauth.png"/>
</p>

8. refresh the dashboard, all new invoices will appear on dashboard.

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-dash-connect.png"/>
</p>

9. Click on any invoice see the complete details

<p>
    <img src="../../../developer-html/assets/images/quickbook/qbk-invoicedetails.png"/>
</p>
