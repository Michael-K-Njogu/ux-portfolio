import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './util/ScrollToTop'
import '@fontsource-variable/ibm-plex-sans';
import '@fontsource/libre-caslon-text';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { ContentfulLivePreview } from '@contentful/live-preview';

// Initialize Contentful Live Preview globally
ContentfulLivePreview.init({
  locale: 'en-US',
  debugMode: true, // Optional – logs live preview activity to console
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ScrollToTop />
      <ContentfulLivePreviewProvider
        locale="en-US"
        enableInspectorMode
        enableLiveUpdates
        debugMode
        targetOrigin="https://app.contentful.com"
      >      
        <App />
      </ContentfulLivePreviewProvider>
    </BrowserRouter>
);
