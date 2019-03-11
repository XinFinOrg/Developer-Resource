# API

{% api-method method="post" host="5.133.176.54:82/api" path="/v1.0/Customer/MasterAdd" %}
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
{% api-method-parameter name="emailid" type="string" required=true %}
Email ID of Customer
{% endapi-method-parameter %}

{% api-method-parameter name="designationid" type="string" required=true %}
Designation
{% endapi-method-parameter %}

{% api-method-parameter name="mobileno" type="number" required=true %}
Mobile Number
{% endapi-method-parameter %}

{% api-method-parameter name="lastname" type="string" required=true %}
Last Name
{% endapi-method-parameter %}

{% api-method-parameter name="firstname" type="string" required=true %}
First Name
{% endapi-method-parameter %}

{% api-method-parameter name="noofemp" type="number" required=false %}
Number of employees
{% endapi-method-parameter %}

{% api-method-parameter name="annturnover" type="number" required=false %}
Turn over of Company
{% endapi-method-parameter %}

{% api-method-parameter name="currencyid" type="string" required=false %}
Currency of Country
{% endapi-method-parameter %}

{% api-method-parameter name="website" type="string" required=false %}
Website Name
{% endapi-method-parameter %}

{% api-method-parameter name="inccountryid" type="string" required=true %}
Country ID
{% endapi-method-parameter %}

{% api-method-parameter name="telno" type="number" required=true %}
Contact Number
{% endapi-method-parameter %}

{% api-method-parameter name="busactivity" type="string" required=false %}
Business Activities
{% endapi-method-parameter %}

{% api-method-parameter name="incdate" type="string" required=true %}
Incorporation Date 
{% endapi-method-parameter %}

{% api-method-parameter name="licauth" type="string" required=true %}
License Authority name
{% endapi-method-parameter %}

{% api-method-parameter name="licexpdate" type="string" required=true %}
Expiration date of license
{% endapi-method-parameter %}

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
Successful Response.
{% endapi-method-response-example-description %}

```javascript
{
    "success": true,
    "message": "successful",
    "Id": 37
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Any Parameter is missing it's value or improper value is added.
{% endapi-method-response-example-description %}

```javascript
{
    "success": false,
    "message": "400 - Bad Request."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="5.133.176.54:82/api" path="/v1.0/Customer/DetailsAdd" %}
{% api-method-summary %}
Other Details of Customer
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows us to add more details of Customer.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="tempcustomerid" type="number" required=true %}
Customer ID
{% endapi-method-parameter %}

{% api-method-parameter name="name" type="string" required=true %}
Customer's Name
{% endapi-method-parameter %}

{% api-method-parameter name="countryid" type="number" required=true %}
Country Code
{% endapi-method-parameter %}

{% api-method-parameter name="website" type="string" required=false %}
Website
{% endapi-method-parameter %}

{% api-method-parameter name="industryid" type="number" required=false %}
Type of Industry
{% endapi-method-parameter %}

{% api-method-parameter name="project" type="string" required=false %}
Projects
{% endapi-method-parameter %}

{% api-method-parameter name="currencyid" type="number" required=false %}
Type of Currency
{% endapi-method-parameter %}

{% api-method-parameter name="annsales" type="number" required=false %}
Annual Sales Volume
{% endapi-method-parameter %}

{% api-method-parameter name="commterms" type="string" required=true %}
Commercial Terms
{% endapi-method-parameter %}

{% api-method-parameter name="firstname" type="string" required=true %}
Name of Customer
{% endapi-method-parameter %}

{% api-method-parameter name="lastname" type="string" required=true %}
Last Name of Customer
{% endapi-method-parameter %}

{% api-method-parameter name="designationid" type="string" required=true %}
Designation of Customer
{% endapi-method-parameter %}

{% api-method-parameter name="otherdesignation" type="string" required=false %}
Other designation
{% endapi-method-parameter %}

{% api-method-parameter name="mobileno" type="number" required=true %}
Contact Details
{% endapi-method-parameter %}

{% api-method-parameter name="emailid" type="string" required=true %}
Email ID of Customer
{% endapi-method-parameter %}

{% api-method-parameter name="otherindustry" type="string" required=false %}
Other Industry details
{% endapi-method-parameter %}

{% api-method-parameter name="othercommterms" type="string" required=false %}
Other Commercial terms
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response. 
{% endapi-method-response-example-description %}

```javascript
{
    "success": true,
    "message": "successful",
    "Id": 15
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Any parameter is missing it's value or improper value is added.
{% endapi-method-response-example-description %}

```javascript
{
    "success": false,
    "message": "400 - Bad Request."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Customer/MasterListAll/0" %}
{% api-method-summary %}
Customer Details
{% endapi-method-summary %}

{% api-method-description %}
Get all the Details of the Customer
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response
{% endapi-method-response-example-description %}

```javascript
{
        "tempcustomerid": 1,
        "uniquekey": "IND00000000000000001",
        "name": "XYZ",
        "customertypeid": 1,
        "companytypeid": 4,
        "othercompanytype": "",
        "licno": "rwetre",
        "licexpdate": "2019-02-11T18:30:00.000Z",
        "licauth": "fddg",
        "inccountryid": 101,
        "incdate": "2019-02-01T18:30:00.000Z",
        "busactivity": "test",
        "telno": "+213345345",
        "website": "test.com",
        "currencyid": 2,
        "annturnover": 34535,
        "noofemp": "434",
        "firstname": "test",
        "lastname": "test",
        "mobileno": "+971435353",
        "designationid": 17,
        "otherdesignation": "",
        "emailid": "test@test.com",
        "status": "RR",
        "createdate": "2019-02-04T21:58:19.560Z",
        "createip": "::ffff:5.133.176.54"
    }
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Customer/DetailsListAll/2" %}
{% api-method-summary %}
Detail Customer list
{% endapi-method-summary %}

{% api-method-description %}
Get detailed customer list
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response
{% endapi-method-response-example-description %}

```javascript
{
        "tempcustomerdetid": 2,
        "tempcustomerid": 2,
        "uniquekey": "",
        "name": "Abc Company 123",
        "countryid": 1,
        "website": "",
        "industryid": 1,
        "otherindustry": "",
        "project": "project",
        "currencyid": 12,
        "annsales": 0,
        "commterms": "30-60 days",
        "othercommterms": "",
        "firstname": "hgfdsafhsj",
        "lastname": "30-60 days",
        "designationid": 13,
        "otherdesignation": "",
        "mobileno": "+971543654356564",
        "emailid": "xvjhzd@jdsf.in",
        "createdate": "2019-02-04T22:06:05.163Z",
        "createip": "::ffff:5.133.176.54"
    }
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Common/CompanyTypeList/0" %}
{% api-method-summary %}
Company Type List
{% endapi-method-summary %}

{% api-method-description %}
Get Company Type List
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response
{% endapi-method-response-example-description %}

```javascript
{
        "companytypeid": 4,
        "companytypename": "General Partnership",
        "isactive": true,
        "createby": 1,
        "createdate": "2018-12-19T14:19:15.190Z",
        "createip": "192.168.1.1",
        "updateby": 1,
        "updatedate": "2018-12-19T14:19:15.190Z",
        "updateip": "192.168.1.1"
    },
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Common/CountryList/0" %}
{% api-method-summary %}
Country List
{% endapi-method-summary %}

{% api-method-description %}
Get Country List
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response
{% endapi-method-response-example-description %}

```javascript
{
        "countryid": 13,
        "countrycode": "AUS",
        "countryname": "Australia",
        "isactive": true,
        "createby": 1,
        "createdate": "2018-12-19T14:24:39.050Z",
        "createip": "192.168.1.1",
        "updateby": 1,
        "updatedate": "2018-12-19T14:24:39.050Z",
        "updateip": "192.168.1.1"
    }
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Common/CurrencyList/0" %}
{% api-method-summary %}
Currency List
{% endapi-method-summary %}

{% api-method-description %}
Get Currency List
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response
{% endapi-method-response-example-description %}

```javascript
{
        "currencyid": 11,
        "currencycode": "EUR",
        "currencyname": "Euro",
        "isactive": true,
        "createby": 1,
        "createdate": "2018-12-19T14:26:26.163Z",
        "createip": "192.168.1.1",
        "updateby": 1,
        "updatedate": "2018-12-19T14:26:26.163Z",
        "updateip": "192.168.1.1"
    }
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Common/CustomerTypeList/0" %}
{% api-method-summary %}
Customer Type List
{% endapi-method-summary %}

{% api-method-description %}
Get Customer Type List
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
 JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response
{% endapi-method-response-example-description %}

```javascript
[
    {
        "customertypeid": 1,
        "code": "     ",
        "name": "Beneficiery",
        "isactive": true,
        "createby": 1,
        "createdate": "2018-12-19T14:22:59.770Z",
        "createip": "192.168.1.1",
        "updateby": 1,
        "updatedate": "2018-12-19T14:22:59.770Z",
        "updateip": "192.168.1.1"
    },
    {
        "customertypeid": 2,
        "code": "     ",
        "name": "Suppliers",
        "isactive": true,
        "createby": 1,
        "createdate": "2018-12-19T14:22:59.770Z",
        "createip": "192.168.1.1",
        "updateby": 1,
        "updatedate": "2018-12-19T14:22:59.770Z",
        "updateip": "192.168.1.1"
    }
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Common/DesignationList/0" %}
{% api-method-summary %}
Customer's Designation List
{% endapi-method-summary %}

{% api-method-description %}
Get Customer's Designation List
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response
{% endapi-method-response-example-description %}

```javascript
 {
        "designationid": 9,
        "designationname": "Administration Manager",
        "isactive": true,
        "createby": 1,
        "createdate": "2018-12-19T14:08:21.000Z",
        "createip": "192.168.1.1",
        "updateby": 1,
        "updatedate": "2018-12-19T14:08:21.000Z",
        "updateip": "192.168.1.1"
    },
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="5.133.176.54:82/api" path="/v1.0/Common/IndustryList/0" %}
{% api-method-summary %}
Industry List
{% endapi-method-summary %}

{% api-method-description %}
Get Industry List
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="authorization" type="string" required=true %}
JWT Token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful Response
{% endapi-method-response-example-description %}

```javascript
{
        "industryid": 1,
        "industryname": "Advertising and marketing / printing and publishing",
        "isactive": true,
        "createby": 1,
        "createdate": "2018-12-19T14:12:57.990Z",
        "createip": "192.168.1.1",
        "updateby": 1,
        "updatedate": "2018-12-19T14:12:57.990Z",
        "updateip": "192.168.1.1"
    }
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

