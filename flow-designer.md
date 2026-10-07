# Service Request Flow Designer

## Flow Name

Service Request Approval and Fulfillment Automation

## Trigger

The flow is triggered when a new service request is submitted.

## Flow Steps

1. Service request is submitted.
2. Check the requested service type.
3. Check whether approval is required.
4. If approval is required, send approval to the manager.
5. Check the approval result.
6. If approved, create a fulfillment task.
7. Assign the task to the appropriate IT support group.
8. IT team processes the request.
9. Notify the requester about the completion.
10. Update the request status to Completed.

## Flow Logic

Service Request Submitted
          |
          v
Check Service Type
          |
          v
Approval Required?
       /       \
     Yes        No
      |          |
      v          v
Manager       Create
Approval      Fulfillment Task
      |
      v
Approved?
   /     \
 Yes      No
  |        |
  v        v
Create    Rejected
Task      Request
  |
  v
Assign IT Team
  |
  v
Fulfill Request
  |
  v
Notify Requester
  |
  v
Completed

## Automation Benefits

- Automatic approval routing
- Automatic task creation
- Automatic assignment
- Faster request fulfillment
- Reduced manual work
- Better request tracking
- Improved user communication
