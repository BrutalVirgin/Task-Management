# Task Manager

## USER API

#### Sign up

#### `POST https://taskmanagementtest.herokuapp.com/users`

Add a new user. Body should contain fields:

```
{
  "username": "user",
  "email": "user@test.com",
  "password": "123456"
}
```

#### Email confirmation

#### `PUT https://taskmanagementtest.herokuapp.com/users/emailconfirm/:id`

Email confirmation, where the field `:id` must contain the user ID

#### Signin

#### `POST https://taskmanagementtest.herokuapp.com/users/signin`

Body should contain fields:

```
{
  "email": "user@test.com",
  "password": "123456"
}
```

#### Signout

#### `POST https://taskmanagementtest.herokuapp.com/users/signout`

Header should contain Bearer token in Authorization field

## TASK API

#### Add task

#### `POST https://taskmanagementtest.herokuapp.com/tasks`

Header should contain Bearer token in Authorization field. Body should contain fields:

```
{
  "data": {
    "title": "test",
    "description": "it just test",
    "isDone": false,
    "priority": "12",
    "dueDate": "12-06-2023"
  }
}
```

#### Edit task

#### `PUT https://taskmanagementtest.herokuapp.com/tasks/:id`

Edit task, where the field `:id` must contain the task ID. Header should contain Bearer token in Authorization field. Body should contain fields:

```
{
  "data": {
    "title": "Test1",
    "description": "Test Test Teest",
    "priority": "13",
    "dueDate": "05/07/2023"
    }
}
```

#### Mark task as done

#### `PUT https://taskmanagementtest.herokuapp.com/tasks/markdone/:id`

Mark task as done , where the field `:id` must contain the task ID. Header should contain Bearer token in Authorization field.

#### Mark task as undone

#### `PUT https://taskmanagementtest.herokuapp.com/tasks/markundone/:id`

Mark task as done , where the field `:id` must contain the task ID. Header should contain Bearer token in Authorization field.

#### Mark task as undone

#### `DELETE https://taskmanagementtest.herokuapp.com/tasks/deletetask/:id`

Mark task as done , where the field `:id` must contain the task ID. Header should contain Bearer token in Authorization field.
