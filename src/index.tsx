import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model, Response } from 'miragejs';
import { App } from './App';

const LOAD_TIMING = 3000;

createServer({
  models: {
    tasklist: Model,
  },

  seeds(server) {
    server.db.loadData({
      tasklists: [
        {
          id: 1,
          title: 'Learn Javascript',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Learn Typescript',
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Learn NodeJS',
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get(
      '/tasklist',
      () => {
        return this.schema.all('tasklist');
      },
      { timing: LOAD_TIMING },
    );

    this.post(
      '/tasklist',
      (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('tasklist', data);
      },
      { timing: LOAD_TIMING },
    );

    this.patch(
      '/tasklist/:id',
      (schema, request) => {
        const { id } = request.params;
        const data = JSON.parse(request.requestBody);

        if (id !== null && id) {
          schema.find('tasklist', id)?.update(data);
          return new Response(200);
        }

        return new Response(204);
      },
      { timing: LOAD_TIMING },
    );

    this.delete(
      '/tasklist/:id',
      (schema, request) => {
        const { id } = request.params;

        if (id !== null && id) {
          schema.find('tasklist', id)?.destroy();
          return new Response(200);
        }

        return new Response(204);
      },
      { timing: LOAD_TIMING },
    );
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
