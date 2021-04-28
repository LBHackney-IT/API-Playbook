---
id: naming_conventions
title: Naming Conventions
---

### Name of the data source to represent the data

* Use ‘-’ to separate words
* Use all lowercase
  * E.G. 'mosaic-resident-information-api'
* Use of Views ?

### Actual API output - translate the inner column names

For each individual Platform API:

| Data | Field Naming Convention |
| ---- | ----------------------- |
| First Name(s) | firstName |
| Middle Name (if any is available in the underlying datasource) | middleName |
| Last Name (surname) | lastName |
| Date of Birth (if any) | dateOfBirth |
| National Insurance Number (if any) | nationalInsuranceNumber |
| NHS Number (if any) | nhsNumber |
| Phone Numbers, Phone Type (if any), Date Last Modified (if any) | **In one object**: phoneNumber, phoneType, dateLastModified |
| Email, Email Type (if any), Date Last Modified (if any) | **In one object**: emailAddress, emailType, dateLastModified |
| UPRN (if any) | uprn |
| Address | **In one object**: addressLine1, addressLine2, addressLine3, postCode, addressType <br/><br/>**When address is saved in one column**: fullAddress, postCode|