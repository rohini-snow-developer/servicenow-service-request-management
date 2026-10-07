# servicenow-service-request-management
ServiceNow Service Request Management System using Service Catalog, Flow Designer, Client Scripts, Business Rules and GlideRecord.
# Service Request Management System – ServiceNow

## Project Overview

The Service Request Management System is a ServiceNow-based solution designed to manage employee service requests from submission to fulfillment.

The system allows employees to request IT services such as software installation, system access, password reset, hardware requests, and other IT services.

## Objectives

* Provide a centralized service request system
* Automate request fulfillment
* Reduce manual IT support activities
* Track request status
* Assign requests to appropriate teams
* Improve service delivery

## Technologies Used

* ServiceNow
* Service Catalog
* Flow Designer
* Catalog Client Scripts
* Catalog UI Policies
* Business Rules
* Script Includes
* GlideRecord
* UI Policies
* ACL
* Notifications
* JavaScript

## Main Features

### 1. Service Request

Employees can submit service requests such as:

* Software Installation
* System Access
* Password Reset
* Hardware Request
* Email Access
* Application Access
* Other IT Services

### 2. Request Information

The request form can collect:

* Requested For
* Requested By
* Service Type
* Short Description
* Description
* Priority
* Required Date
* Business Justification
* Approval Required

## Request Lifecycle

```text
Requested
    ↓
Pending Approval
    ↓
Approved
    ↓
Fulfillment
    ↓
Completed
```

Alternative states:

```text
Rejected
Cancelled
```

## Service Catalog

### Catalog Item

**Name:** IT Service Request

The catalog item allows employees to submit requests for different IT services.

### Variables

* Requested For
* Service Type
* Short Description
* Description
* Required Date
* Business Justification

## Flow Designer

Flow Designer can automate request approval and fulfillment.

### Flow

```text
Service Request Submitted
          ↓
Check Request Type
          ↓
Approval Required?
       /       \
     Yes        No
      ↓          ↓
Manager       Create
Approval      Fulfillment Task
      ↓
Approved?
   /     \
 Yes      No
  ↓        ↓
Create    Rejected
Task      Request
  ↓
Assign to Support Team
  ↓
Fulfill Request
  ↓
Notify Requester
  ↓
Completed
```

## Client Script

Catalog Client Scripts can be used to control the request form dynamically.

Example use cases:

* Make fields mandatory
* Validate user input
* Show or hide fields
* Set default values

## Example Client Script

```javascript
function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading) {
        return;
    }

    if (newValue == 'software') {
        g_form.setMandatory('business_justification', true);
    }
}
```

## Business Rule

Business Rules can be used for server-side processing.

Example use cases:

* Validate request data
* Update request status
* Create related records
* Apply server-side business logic

## Example Business Rule

```javascript
(function executeRule(current, previous /*null when async*/) {

    if (current.priority == 1) {
        current.approval = 'requested';
    }

})(current, previous);
```

## Script Include

Script Includes provide reusable server-side functionality.

Example:

```javascript
var ServiceRequestUtils = Class.create();

ServiceRequestUtils.prototype = {

    initialize: function() {
    },

    getRequestCount: function(userId) {

        var request = new GlideRecord('sc_request');

        request.addQuery('requested_for', userId);
        request.query();

        return request.getRowCount();
    },

    type: 'ServiceRequestUtils'
};
```

## GlideRecord

GlideRecord can be used to retrieve service request records.

Example:

```javascript
var request = new GlideRecord('sc_request');

request.addQuery('active', true);
request.query();

while (request.next()) {
    gs.info(request.number);
}
```

## UI Policies

UI Policies can dynamically control fields on the service request form.

Example:

When a user selects **Software Installation**, the Business Justification field can be made mandatory.

## ACL

Access Control Lists can restrict service request data.

### Example Roles

* Employee
* Service Desk
* IT Support
* Request Manager

### Access Rules

Employees can view their own requests.

Service Desk users can manage service requests.

IT Support users can process assigned fulfillment tasks.

Request Managers can approve requests.

## Notifications

Notifications can be configured for:

* Request submitted
* Approval required
* Request approved
* Request rejected
* Task assigned
* Request completed

## Testing Scenarios

### Test Case 1 – Submit Request

Submit a new IT service request.

**Expected Result:**
The request should be created successfully.

### Test Case 2 – Approval

Submit a request that requires approval.

**Expected Result:**
The manager should receive an approval request.

### Test Case 3 – Request Approval

Manager approves the request.

**Expected Result:**
A fulfillment task should be created.

### Test Case 4 – Request Rejection

Manager rejects the request.

**Expected Result:**
The request should move to Rejected.

### Test Case 5 – Fulfillment

IT Support completes the requested service.

**Expected Result:**
The service request should move to Completed.

## ServiceNow Concepts Demonstrated

* Service Catalog
* Catalog Client Scripts
* Catalog UI Policies
* Flow Designer
* Business Rules
* Script Includes
* GlideRecord
* ACL
* Notifications
* ITSM
* Service Request Management
* JavaScript

## Project Outcome

This project demonstrates how ServiceNow can automate IT service requests from submission and approval to fulfillment and completion.

## Author

**Rohini Barkhade**

ServiceNow Developer | ServiceNow Administrator | ITSM

