import 'bootstrap/scss/bootstrap.scss';
import './assets/style.css';
import { render } from 'solid-js/web';
import App from './App';
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

const analytics = Analytics({
  app: 'nif-generator-solid',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-1234567',
    }),
  ],
});

render(() => <App analytics={analytics} />, document.getElementById('root'));
