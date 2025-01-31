import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const appVersion = 'v1'
export const trackingId = 'G-S7S3E0XTRH'

export const sendCustomGaEvent = (options) => {
  ReactGA.event(options)
}

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

    const sendData = (type, data) => {
      ReactGA.send({ hitType: type, ...data });
    };

    setOption('app_version', appVersion);
    sendData("pageview", { page: pagePath });
  };

  return {
    setOption,
    trackPageView,
  };
}
