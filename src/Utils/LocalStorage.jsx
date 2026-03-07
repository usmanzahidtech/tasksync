const employees = [
    {
        "id": 1,
        "firstname": "Zeeshan",
        "email": "zeeshan.dev@example.com",
        "password": "1234",
        "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "UI Fix", "taskDescription": "Fix the navigation bar responsiveness.", "taskDate": "2024-10-25", "category": "Design" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Deployment", "taskDescription": "Deploy the latest build to the staging server.", "taskDate": "2024-10-20", "category": "DevOps" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "API Integration", "taskDescription": "Integrate the payment gateway API.", "taskDate": "2024-10-22", "category": "Development" }
        ]
    },
    {
        "id": 2,
        "firstname": "Usman",
        "email": "usman.zahid@example.com",
        "password": "1234",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Database Backup", "taskDescription": "Take a manual backup of the production database.", "taskDate": "2024-10-26", "category": "Database" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Code Review", "taskDescription": "Review the pull requests from the junior devs.", "taskDate": "2024-10-26", "category": "Development" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Client Meeting", "taskDescription": "Discuss the project milestones with the client.", "taskDate": "2024-10-24", "category": "Management" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Bug Squashing", "taskDescription": "Fix the login session timeout issue.", "taskDate": "2024-10-23", "category": "Development" }
        ]
    },
    {
        "id": 3,
        "firstname": "Ali",
        "email": "ali.khan@example.com",
        "password": "1234",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Unit Testing", "taskDescription": "Write unit tests for the authentication module.", "taskDate": "2024-10-27", "category": "Testing" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Documentation", "taskDescription": "Update the README file with installation steps.", "taskDate": "2024-10-21", "category": "Documentation" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Optimization", "taskDescription": "Optimize the main image assets for better load time.", "taskDate": "2024-10-26", "category": "Design" }
        ]
    },
    {
        "id": 4,
        "firstname": "Sara",
        "email": "sara.ahmed@example.com",
        "password": "1234",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Market Research", "taskDescription": "Research competitors for the new SaaS feature.", "taskDate": "2024-10-28", "category": "Research" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Content Strategy", "taskDescription": "Draft the social media posts for the product launch.", "taskDate": "2024-10-24", "category": "Marketing" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Newsletter", "taskDescription": "Design the monthly newsletter template.", "taskDate": "2024-10-27", "category": "Design" }
        ]
    },
    {
        "id": 5,
        "firstname": "Hamza",
        "email": "hamza.shaikh@example.com",
        "password": "1234",
        "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Server Maintenance", "taskDescription": "Monitor server logs for any unusual activity.", "taskDate": "2024-10-29", "category": "IT" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Security Audit", "taskDescription": "Perform a basic security check on the user login API.", "taskDate": "2024-10-25", "category": "Development" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Legacy Code Fix", "taskDescription": "Try to fix the 5-year-old bug in the legacy module.", "taskDate": "2024-10-22", "category": "Development" }
        ]
    }
];

const admin = [{
    "id": 100,
    "email": "admin@company.com",
    "password": "1234"
}];

export const SetLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};


export const GetLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };

};


