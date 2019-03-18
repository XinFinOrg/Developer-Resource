# SME API

## Introduction

Welcome to the SME API.

## Authentication

A JSON Web Token is used to send information that can be verified and trusted by **means** of a digital signature. It comprises a compact and URL-safe JSON object, which is cryptographically signed to verify its authenticity, and which can also be encrypted if the payload contains sensitive information.

Application may request to access routes, services, or resources on behalf of that user. To do so, it uses an access token, which is in the form of a **JWT** token. user has to provide **JWT** token in header as a authorization in every subsequent request after login.

{% api-method method="post" host="sme.tradefinex/api/" path="v1.0/auth/authenticate" %}
{% api-method-summary %}
Authentication
{% endapi-method-summary %}

{% api-method-description %}
Authenticate API in environment with token in response
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="user" type="string" required=true %}
API Key or any secret key
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDk1MzEzNTIsImV4cCI6MTU0OTYxNzc1Mn0.6cTXghU1IdDreucri4nQKK-Q2HjnHgL7CtTKmvYTRzo"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "success": false,
    "message": "403 - Invalid API secret key."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

