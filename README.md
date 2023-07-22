# Nagwa Task

### Links

- Live Preview On [https://nagwa-task-frontend.onrender.com/](https://nagwa-task-frontend.onrender.com/)
- API docs [https://nagwa-task.onrender.com/docs/](https://nagwa-task.onrender.com/docs/)

### How to run the project

1. Clone this repo

##### Backend

2. cd ./server
3. Run `npm install`
4. Create .env file and add the following variables

```
PORT=3001
NODE_ENV=development
FRONTEND_BASE_URL=http://localhost:3000
```

5. Run `npm run dev`

##### Frontend

6. cd ./client
7. Run `npm install`
8. Create .env file and add the following variables

```
REACT_APP_API_URL=http://localhost:3001/api/v1
```

9. Run `npm start`
10. Open [http://localhost:3000](http://localhost:3000) on browser
11. API docs Open [http://localhost:3001/docs/](http://localhost:3001/docs/) on browser


### Tech Stack

- Backend
	- Node.js
	- Express.js
	- Typescript
	- Swagger

- Frontend
	- React.js
	- Typescript
	- Tailwindcss
	- React Query
	- Axios
