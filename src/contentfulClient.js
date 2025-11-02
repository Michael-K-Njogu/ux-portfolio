import { createClient } from 'contentful';
import { ContentfulLivePreview } from '@contentful/live-preview';

// Initialize the Live Preview SDK once
ContentfulLivePreview.init({
  enableInspectorMode: true,
  enableLiveUpdates: true,
  debugMode: true,
  locale: 'en-US',
});

export const selectClient = (usePreview = false) => {
  const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
  const deliveryToken = process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN;
  const previewToken = process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN;

  const accessToken = usePreview ? previewToken : deliveryToken;
  const host = usePreview ? "preview.contentful.com" : "cdn.contentful.com";

  // ✅ Fail early with clear diagnostics
  if (!space || !accessToken) {
    console.error("❌ Missing Contentful environment variables:");
    console.table({
      REACT_APP_CONTENTFUL_SPACE_ID: space ? "✅ present" : "❌ missing",
      REACT_APP_CONTENTFUL_DELIVERY_TOKEN: deliveryToken ? "✅ present" : "❌ missing",
      REACT_APP_CONTENTFUL_PREVIEW_TOKEN: previewToken ? "✅ present" : "❌ missing",
      "Preview Mode": usePreview ? "ON" : "OFF",
    });

    throw new Error(
      "Missing Contentful credentials — please check your environment variables."
    );
  }

  // ✅ Create and return the client
  const client = createClient({
    space,
    accessToken,
    host,
  });

  return client;
};