const Task = require('../models/Task');


class TaskController {
  async store(request, response) {
    try {
      const task = await Task.create(request.body);

      return response.json(task);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async index(request, response) {
    const task = await Task.find();

    response.json(task);
  }

  async indexById(request, response) {
    try {
      const { id } = request.params;

      const task = await Task.findById(id);


      return response.json(task);
    } catch (error) {
      return response.status(500).json({ error: 'Task not found' });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;


      const task = await Task.findById(id);
      task.remove();

      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ error: 'Task not found' });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { content, date } = request.body;

      const task = await Task.findById(id);


      task.content = content;
      task.date = date;

      const updatedTask = await task.save();

      return response.json(updatedTask);
    } catch (error) {
      return response.status(500).json({ error: 'Task not found' });
    }
  }
}


module.exports = new TaskController();
