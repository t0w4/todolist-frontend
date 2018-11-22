import client from './client';

export default {
  fetch: () => {
    return new Promise((resolve, reject) => {
      client.get('/tasks')
        .then((res) => resolve({ tasks: res.data.tasks}))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message ));
        });
    });
  },

  create: (task: {title: string, detail: string, status: string}) => {
    return new Promise((resolve, reject) => {
      client.post('/tasks', {
        title: task.title,
        detail: task.detail,
        status: task.status,
      })
        .then((res) => resolve(res.data))
        .catch((err) => {
          reject(new Error(err.message));
        });
    });
  },

  delete: (uuid: string) => {
    return new Promise((resolve, reject) => {
      client.delete(`/tasks/${uuid}`)
        .then((res) => resolve())
        .catch((err) => {
          reject(new Error(err.message));
        });
    });
  },
};
