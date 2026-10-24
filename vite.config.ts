import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          login: path.resolve(__dirname, 'login.html'),
          register: path.resolve(__dirname, 'register.html'),
          dashboard: path.resolve(__dirname, 'dashboard.html'),
          books: path.resolve(__dirname, 'books.html'),
          bookDetails: path.resolve(__dirname, 'book-details.html'),
          categories: path.resolve(__dirname, 'categories.html'),
          authors: path.resolve(__dirname, 'authors.html'),
          members: path.resolve(__dirname, 'members.html'),
          memberDetails: path.resolve(__dirname, 'member-details.html'),
          issueBook: path.resolve(__dirname, 'issue-book.html'),
          returnBook: path.resolve(__dirname, 'return-book.html'),
          reservations: path.resolve(__dirname, 'reservations.html'),
          fines: path.resolve(__dirname, 'fines.html'),
          suppliers: path.resolve(__dirname, 'suppliers.html'),
          reports: path.resolve(__dirname, 'reports.html'),
          notifications: path.resolve(__dirname, 'notifications.html'),
          profile: path.resolve(__dirname, 'profile.html'),
          settings: path.resolve(__dirname, 'settings.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
  };
});
