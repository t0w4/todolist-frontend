import client from './client';

export default {
  fetch: () => {
    return new Promise((resolve, reject) => {
      client.get('/tasks')
        .then(res => console.log(res.data.tasks));
    });
  },
};
