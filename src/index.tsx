import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model, Response } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    tasklist: Model,
  },

  seeds(server) {
    server.db.loadData({
      tasklists: [
        {
          id: 1,
          title: 'learn javascript',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'learn typescript',
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/tasklist', () => {
      return this.schema.all('tasklist');
    });

    this.post('/tasklist', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('tasklist', data);
    });

    this.delete('/tasklist/:id', (schema, request) => {
      const { id } = request.params;

      if (id !== null && id) {
        schema.find('tasklist', id)?.destroy();
        return new Response(200);
      }

      return new Response(204);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
