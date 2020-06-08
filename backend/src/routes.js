const { Router } = require('express');
const TaskController = require('./app/controllers/TaskController');
const UserController = require('./app/controllers/UserController');
const authMiddleware = require('./app/middlewares/auth');


const routes = Router();

routes.post('/user', UserController.store);
routes.post('/login', UserController.userSession);

routes.post('/task/create', authMiddleware, TaskController.store);
routes.get('/task', authMiddleware, TaskController.index);
routes.get('/task/:id', authMiddleware, TaskController.indexById);
routes.delete('/task/:id', authMiddleware, TaskController.delete);
routes.put('/task/:id', authMiddleware, TaskController.update);


module.exports = routes;
