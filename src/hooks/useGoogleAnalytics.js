import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const trackingId = 'G-S7S3E0XTRH'
const appVersion = 'v1'

export const sendGAData = (type, data) => {
  ReactGA.send({ hitType: type, ...data });
};

export const useGoogleAnalytics = () => {
  useEffect(() => {
    try {
      ReactGA.initialize(trackingId)
      ReactGA.set({ app_version: appVersion })
    } catch (error) {
      console.log("Error initializing Google Analytics", { Error: error });
    }
  }, [])

  const setOption = (key, value) => {
    ReactGA.set({ [key]: value });
  };

  const trackPageView = (pagePath) => {

    if (!pagePath) {
      // eslint-disable-next-line no-restricted-globals
      pagePath = location.pathname;
    }

    setOption('app_version', appVersion);
    sendGAData("pageview", { page: pagePath });
  };

  return {
    setOption,
    trackPageView,
  };
}
