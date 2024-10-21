import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const trackingId = 'G-S7S3E0XTRH'
const appVersion = 'v1'

export default function useGoogleAnalytics () {
  useEffect(() => {
    try {
      console.log({
        trackingId,
        gaOptions: {
          anonymizeIp: true,
          clientId: 'test-client-id-1'
        }
      });
      ReactGA.initialize({
        trackingId,
        gaOptions: {
          anonymizeIp: true,
          clientId: 'test-client-id-1'
        }
      })
      ReactGA.set({ app_version: appVersion })
    } catch (error) {
      console.log("Error initializing Google Analytics", { Error: error });
    }
  }, [])

  const setOption = (key, value) => {
    ReactGA.set({ [key]: value });
  };

  const sendData = (type, data) => {
    ReactGA.send({ hitType: type, ...data });
  };

  const trackPageView = (pagePath) => {

    if (!pagePath) {
      // eslint-disable-next-line no-restricted-globals
      pagePath = location.pathname;
    }

    setOption('app_version', appVersion);
    sendData("pageview", { page: pagePath });
  };

  return {
    setOption,
    trackPageView,
  };
}
