# Service Request Management Testing

## Test Case 1 – Submit Service Request

### Action
Submit a new IT service request with all required information.

### Expected Result
The service request should be created successfully.

---

## Test Case 2 – Software Installation

### Action
Select "Software Installation" as the service type.

### Expected Result
The Business Justification field should become mandatory.

---

## Test Case 3 – Approval Required

### Action
Submit a service request that requires manager approval.

### Expected Result
The manager should receive an approval request.

---

## Test Case 4 – Request Approval

### Action
Manager approves the service request.

### Expected Result
A fulfillment task should be created and assigned to the appropriate IT support group.

---

## Test Case 5 – Request Rejection

### Action
Manager rejects the service request.

### Expected Result
The request status should change to Rejected and the requester should be notified.

---

## Test Case 6 – Request Fulfillment

### Action
IT Support completes the requested service.

### Expected Result
The fulfillment task should be completed and the service request should move to Completed.

---

## Test Case 7 – Access Control

### Action
Try to modify a service request using an unauthorized user.

### Expected Result
The unauthorized user should not be able to modify restricted information.

---

## Test Case 8 – Active Request Count

### Action
Use the ServiceRequestUtils Script Include to retrieve active requests for a user.

### Expected Result
The correct number of active requests should be returned.

## Testing Outcome

The test cases validate service request creation, dynamic form behavior, approval, fulfillment, security, and server-side functionality.
