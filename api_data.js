define({ "api": [
  {
    "type": "POST",
    "url": "/departments/",
    "title": "Crate Department",
    "name": "CreateDepartment",
    "group": "Department",
    "description": "<p>Create a new Department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Department's Name</p>"
          },
          {
            "group": "Parameter",
            "type": "OBJECT_ID",
            "optional": false,
            "field": "head_of_depatremt",
            "description": "<p>an Id of one employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n \"name\":\"HR\",\n \"head_of_department\": \"5a5df08e1dfefc035116f940\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"_id\": \"5a684dd103d755217c83ff87\",\n    \"last_modified\": \"2018-01-24T09:11:45.103Z\",\n    \"date_created\": \"2018-01-24T09:11:45.103Z\",\n    \"name\": \"HR\",\n    \"head_of_department\": {\n        \"_id\": \"5a5df08e1dfefc035116f940\",\n        \"last_modified\": \"2018-01-16T12:31:10.255Z\",\n        \"date_created\": \"2018-01-16T12:31:10.255Z\",\n        \"email\": \"test@email.com\",\n        \"user\": \"5a5df08d1dfefc035116f93f\",\n        \"employee_id\": \"ATR_4805\",\n        \"first_name\": \"Mamo\",\n        \"last_name\": \"Dude\",\n        \"phone_number\": 912476374,\n        \"salary\": 7500,\n        \"starting_date\": \"2018-01-16T08:34:41.512Z\",\n        \"picture\": \"\",\n        \"sex\": \"M\"\n    },\n    \"shift_ending_time\": \"5pm\",\n    \"shift_starting_time\": \"8am\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/department.js",
    "groupTitle": "Department"
  },
  {
    "type": "GET",
    "url": "/departments/",
    "title": "Get Departments",
    "name": "GetDepartments",
    "group": "Department",
    "description": "<p>Get all Departments.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number of the doc. This can be changed by adding ?page={number} to the url</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_docs",
            "description": "<p>the total number of employee in the system</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_pages",
            "description": "<p>the total amount of pages in the response. This can vary depending of the 'pre_page' value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>the total amount of employees in the response. This can be changed by adding ?per_page={number} to the url</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "docs",
            "description": "<p>requested employees</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 Success \n{\n    \"page\": 1,\n    \"total_docs\": 2,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a684d9c97974114b49cc72e\",\n            \"last_modified\": \"2018-01-24T09:10:52.782Z\",\n            \"date_created\": \"2018-01-24T09:10:52.782Z\",\n            \"name\": \"HR\",\n            \"head_of_department\": {\n                \"_id\": \"5a5df08e1dfefc035116f940\",\n                \"last_modified\": \"2018-01-16T12:31:10.255Z\",\n                \"date_created\": \"2018-01-16T12:31:10.255Z\",\n                \"email\": \"test@email.com\",\n                \"user\": \"5a5df08d1dfefc035116f93f\",\n                \"employee_id\": \"ATR_4805\",\n                \"first_name\": \"Mamo\",\n                \"last_name\": \"Dude\",\n                \"phone_number\": 912476374,\n                \"salary\": 7500,\n                \"starting_date\": \"2018-01-16T08:34:41.512Z\",\n                \"picture\": \"\",\n                \"sex\": \"M\"\n            },\n            \"__v\": 0,\n            \"shift_ending_time\": \"5pm\",\n            \"shift_starting_time\": \"8am\"\n        },\n        {\n            \"_id\": \"5a684dd103d755217c83ff87\",\n            \"last_modified\": \"2018-01-24T09:11:45.103Z\",\n            \"date_created\": \"2018-01-24T09:11:45.103Z\",\n            \"name\": \"HR\",\n            \"head_of_department\": {\n                \"_id\": \"5a5df08e1dfefc035116f940\",\n                \"last_modified\": \"2018-01-16T12:31:10.255Z\",\n                \"date_created\": \"2018-01-16T12:31:10.255Z\",\n                \"email\": \"test@email.com\",\n                \"user\": \"5a5df08d1dfefc035116f93f\",\n                \"employee_id\": \"ATR_4805\",\n                \"first_name\": \"Mamo\",\n                \"last_name\": \"Dude\",\n                \"phone_number\": 912476374,\n                \"salary\": 7500,\n                \"starting_date\": \"2018-01-16T08:34:41.512Z\",\n                \"picture\": \"\",\n                \"sex\": \"M\"\n            },\n            \"__v\": 0,\n            \"shift_ending_time\": \"5pm\",\n            \"shift_starting_time\": \"8am\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/department.js",
    "groupTitle": "Department"
  },
  {
    "type": "DELETE",
    "url": "/departments/:id",
    "title": "Delete a Department",
    "name": "RemoveDepartment",
    "group": "Department",
    "description": "<p>Remove a specific Employee</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/department.js",
    "groupTitle": "Department"
  },
  {
    "type": "PUT",
    "url": "/departments/:id",
    "title": "Update a department",
    "name": "UpdateDepartment",
    "group": "Department",
    "description": "<p>Update a specific Department</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Department's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shift_starting_time",
            "description": "<p>the starting time for the department</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shift_ending_time",
            "description": "<p>the end time for the department</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "head_of_department",
            "description": "<p>department's head</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n name:                       \"Finace\",\n shift_starting_time:        \"2pm\",\n shift_ending_time:          \"5pm\",\n head_of_department:         \"5a5df08e1dfefc035116f940\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/department.js",
    "groupTitle": "Department"
  },
  {
    "type": "PUT",
    "url": "/employees/:id/changePassword",
    "title": "Change Employee's Password",
    "name": "ChangePassword",
    "group": "Employee",
    "description": "<p>Change a specific employees password</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"password\": \"New_Password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "POST",
    "url": "/employees/",
    "title": "Crate Employee",
    "name": "CreateEmployee",
    "group": "Employee",
    "description": "<p>Create a new Employee</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n    \"email\": \"test@email.com\",\n    \"employee_id\": \"ATR_4805\",\n    \"first_name\": \"Mamo\",\n    \"last_name\": \"Dude\",\n    \"phone_number\": 912476374,\n    \"salary\": 7500,\n    \"starting_date\": \"2018-01-16T08:34:41.512Z\",\n    \"picture\": \"\",\n    \"status\": 1,\n    \"gender\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"_id\": \"5a7051aa192e5a1af241855e\",\n    \"last_modified\": \"2018-01-30T11:06:18.898Z\",\n    \"date_created\": \"2018-01-30T11:06:18.898Z\",\n    \"email\": \"test@email.com\",\n    \"employee_id\": \"ATR_4805\",\n    \"first_name\": \"Mamo\",\n    \"last_name\": \"Dude\",\n    \"phone_number\": 912476374,\n    \"salary\": 7500,\n    \"starting_date\": \"2018-01-16T08:34:41.512Z\",\n    \"picture\": \"\",\n    \"status\": 1,\n    \"gender\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "GET",
    "url": "/employees/:id",
    "title": "Get an Employee",
    "name": "GetEmployee",
    "group": "Employee",
    "description": "<p>Get a specific Employee</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "GET",
    "url": "/employees/",
    "title": "Get Employees",
    "name": "GetEmployees",
    "group": "Employee",
    "description": "<p>Get all Employees.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number of the doc. This can be changed by adding ?page={number} to the url</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_docs",
            "description": "<p>the total number of employee in the system</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_pages",
            "description": "<p>the total amount of pages in the response. This can vary depending of the 'pre_page' value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>the total amount of employees in the response. This can be changed by adding ?per_page={number} to the url</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "docs",
            "description": "<p>requested employees</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 Success \n {\n    \"page\": 1,\n    \"total_docs\": 1,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a5df08e1dfefc035116f940\",\n            \"last_modified\": \"2018-01-16T12:31:10.255Z\",\n            \"date_created\": \"2018-01-16T12:31:10.255Z\",\n            \"email\": \"test@email.com\",\n            \"user\": {\n                \"_id\": \"5a5df08d1dfefc035116f93f\",\n                \"last_modified\": \"2018-01-16T12:31:10.099Z\",\n                \"date_created\": \"2018-01-16T12:31:10.099Z\",\n                \"username\": \"mamo@email.com\"\n            },\n            \"__v\": 0,\n            \"employee_id\": \"ATR_4805\",\n            \"first_name\": \"Mamo\",\n            \"last_name\": \"Dude\",\n            \"phone_number\": 912476374,\n            \"salary\": 7500,\n            \"starting_date\": \"2018-01-16T08:34:41.512Z\",\n            \"birt_date\": \"2018-01-16T08:34:41.512Z\",\n            \"picture\": \"\",\n            \"sex\": \"M\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "DELETE",
    "url": "/employees/:id",
    "title": "Delete an Employee",
    "name": "RemoveEmployee",
    "group": "Employee",
    "description": "<p>Remove a specific Employee</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "GET",
    "url": "/employees/search/:str",
    "title": "Search an Employee",
    "name": "SearchEmployee",
    "group": "Employee",
    "description": "<p>Get a specific Employee by passing a specific string in &quot;str&quot;, then all employees whos ID, First name or Last name starting with the str will be returned</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "PUT",
    "url": "/employees/:id",
    "title": "Update an Employee",
    "name": "UpdateEmployee",
    "group": "Employee",
    "description": "<p>Update a specfic Employee</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "employee_id",
            "description": "<p>Employee's Employee ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone_number",
            "description": "<p>Employee's Phone Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Employee's Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Employee's First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "salary",
            "description": "<p>Employee's  Salary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>Employee's Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "starting_date",
            "description": "<p>Employee's Starting Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "birth_date",
            "description": "<p>Employee's Birth Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\n  \"employee_id\":    \"ATR_4805\",\n  \"first_name\":     \"Mamo\",\n  \"last_name\":      \"Dude\",\n  \n  \"phone_number\":   \"0912476374\",\n  \"email\":          \"test@email.com\", \n  \"salary\":         \"7500\",\n  \"starting_date\":  \"2018-01-16T08:34:41.512Z\",\n  \"birth_date\":      \"2018-01-16T08:34:41.512Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "PUT",
    "url": "/employees/:id/pic",
    "title": "Upload Employee's Picture",
    "name": "UploadPicture",
    "group": "Employee",
    "description": "<p>Change a specific employees password</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "picture",
            "description": "<p>New Picture to be uploaded</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "POST",
    "url": "/users/login",
    "title": "User Login",
    "name": "LoginUser",
    "group": "User",
    "description": "<p>Creates a new User and corresponding User Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"email\": \"mamit@mamo.com\",\n\t\"password\": \"password\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokne",
            "description": "<p>User token</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"token\": \"d6uAPieIO8O0qWrnDq6gSwS0HEyEILiab558mkOqxXfHweWr1XcxwvFME/r/WwVZwkDfrjj86Z6v\",\n    \"user\": {\n        \"_id\": \"5a4793b59e51352a30ed967c\",\n        \"last_modified\": \"2017-12-30T13:25:09.736Z\",\n        \"date_created\": \"2017-12-30T13:25:09.736Z\",\n        \"email\": \"mamit@mamo.com\",\n        \"user\": \"5a4793b59e51352a30ed967b\",\n        \"first_name\": \"Mamit\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/users/signup",
    "title": "User Signup",
    "name": "SignupUser",
    "group": "User",
    "description": "<p>Creates a new User and corresponding User Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"email\": \"mamit@mamo.com\",\n\t\"password\": \"password\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last Login Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n \"_id\": \"5a01de75e020c76235032029\",\n\t\"username\": \"john@gebeya.com\",\n \"last_login\": \"2017-11-21T16:53:23.820Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
