# API

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Customer/MasterAdd" %}
{% api-method-summary %}
Add Customers
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to add customers.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="licno" type="string" required=false %}
License number
{% endapi-method-parameter %}

{% api-method-parameter name="companytypeid" type="integer" required=true %}
Type of Company
{% endapi-method-parameter %}

{% api-method-parameter name="name" type="string" required=true %}
Name of customer as on trade license
{% endapi-method-parameter %}

{% api-method-parameter name="customertypeid" type="integer" required=true %}
Type of Customer
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    "name": "Cake's name",
    "recipe": "Cake's recipe name",
    "cake": "Binary cake"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```javascript
{
    "message": "Ain't no cake like that."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



