# Service Request ACL Security

## Access Control Requirements

Access Control Lists (ACLs) are used to control access to service request records and ensure that users can perform only authorized actions.

## Roles

### Employee

- Create service requests
- View their own requests
- Cannot approve requests
- Cannot modify restricted fields

### Service Desk

- Create requests
- View requests
- Update requests
- Manage service request information

### IT Support

- View assigned fulfillment tasks
- Update assigned tasks
- Complete service requests

### Request Manager

- Review requests
- Approve or reject requests
- Monitor request status

## ACL Examples

| Resource | Role | Access |
|---|---|---|
| Service Request | Employee | Create |
| Own Request | Employee | Read |
| Service Request | Service Desk | Read/Write |
| Fulfillment Task | IT Support | Read/Write |
| Approval | Request Manager | Read/Write |

## Security Rules

1. Employees can access only their own requests.
2. Employees cannot change approval status.
3. IT Support can update assigned fulfillment tasks.
4. Managers can approve or reject requests.
5. Unauthorized users cannot modify service request records.

## Security Objective

ACLs protect service request data and ensure that access is controlled according to user roles.
