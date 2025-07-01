const employees = [
  {
    "id": "emp1",
    "name": "John Doe",
    "password": "123",
    "tasks": [
      {
        "taskId": "task1",
        "title": "Complete Report",
        "description": "Finish the quarterly project report",
        "date": "2025-06-28",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "failed": false
      },
      {
        "taskId": "task2",
        "title": "Team Meeting",
        "description": "Attend the project status meeting",
        "date": "2025-06-29",
        "category": "Meeting",
        "active": false,
        "newTask": true,
        "failed": false
      },
      {
        "taskId": "task3",
        "title": "Code Review",
        "description": "Review code submitted by peers",
        "date": "2025-07-01",
        "category": "Development",
        "active": true,
        "newTask": false,
        "failed": true
      }
    ]
  },
  {
    "id": "emp2",
    "name": "Jane Smith",
    "password": "123",
    "tasks": [
      {
        "taskId": "task1",
        "title": "Design Mockups",
        "description": "Create UI/UX mockups for client",
        "date": "2025-06-27",
        "category": "Design",
        "active": true,
        "newTask": false,
        "failed": false
      },
      {
        "taskId": "task2",
        "title": "Bug Fixing",
        "description": "Resolve bugs reported by QA",
        "date": "2025-06-29",
        "category": "Development",
        "active": false,
        "newTask": true,
        "failed": false
      },
      {
        "taskId": "task3",
        "title": "Documentation",
        "description": "Update project documentation",
        "date": "2025-06-30",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "failed": false
      },
      {
        "taskId": "task4",
        "title": "Client Presentation",
        "description": "Present project updates to client",
        "date": "2025-07-02",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "failed": true
      }
    ]
  },
  {
    "id": "emp3",
    "name": "Michael Johnson",
    "password": "123",
    "tasks": [
      {
        "taskId": "task1",
        "title": "Database Maintenance",
        "description": "Optimize database performance",
        "date": "2025-06-28",
        "category": "Database",
        "active": true,
        "newTask": true,
        "failed": false
      },
      {
        "taskId": "task2",
        "title": "Security Check",
        "description": "Apply security patches",
        "date": "2025-07-01",
        "category": "Security",
        "active": false,
        "newTask": false,
        "failed": false
      },
      {
        "taskId": "task3",
        "title": "Deployment",
        "description": "Deploy new project release",
        "date": "2025-07-02",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "failed": true
      }
    ]
  },
  {
    "id": "emp4",
    "name": "Emily Davis",
    "password": "123",
    "tasks": [
      {
        "taskId": "task1",
        "title": "Market Research",
        "description": "Collect market data for product analysis",
        "date": "2025-06-27",
        "category": "Research",
        "active": true,
        "newTask": false,
        "failed": false
      },
      {
        "taskId": "task2",
        "title": "Email Campaign",
        "description": "Launch new email marketing campaign",
        "date": "2025-06-29",
        "category": "Marketing",
        "active": false,
        "newTask": true,
        "failed": false
      },
      {
        "taskId": "task3",
        "title": "Competitor Analysis",
        "description": "Analyze competitors' market strategies",
        "date": "2025-07-01",
        "category": "Research",
        "active": true,
        "newTask": false,
        "failed": true
      },
      {
        "taskId": "task4",
        "title": "Content Writing",
        "description": "Prepare blog content for website",
        "date": "2025-07-03",
        "category": "Content",
        "active": true,
        "newTask": false,
        "failed": false
      }
    ]
  },
  {
    "id": "emp5",
    "name": "David Brown",
    "password": "123",
    "tasks": [
      {
        "taskId": "task1",
        "title": "Product Testing",
        "description": "Test the latest product build",
        "date": "2025-06-27",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "failed": false
      },
      {
        "taskId": "task2",
        "title": "Bug Report",
        "description": "Document issues found during testing",
        "date": "2025-06-28",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "failed": false
      },
      {
        "taskId": "task3",
        "title": "Team Meeting",
        "description": "Discuss project challenges with team",
        "date": "2025-06-29",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "failed": true
      },
      {
        "taskId": "task4",
        "title": "Documentation Review",
        "description": "Review and finalize project documents",
        "date": "2025-07-01",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "failed": false
      },
      {
        "taskId": "task5",
        "title": "Client Demo",
        "description": "Present product demo to client",
        "date": "2025-07-02",
        "category": "Presentation",
        "active": true,
        "newTask": false,
        "failed": false
      }
    ]
  }
];
const admin = [
  {
    "id": "admin1",
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "admin123",
    "role": "admin"
  }
];
export  const setLocalStorage= ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage=()=>{
     const employees= JSON.parse(localStorage.getItem('employees'))
      const admin= JSON.parse(localStorage.getItem('admin'))
     return{employees , admin}
}