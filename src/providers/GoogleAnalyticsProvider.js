import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const GoogleAnalyticsProvider = ({ children }) => {
  const { trackPageView } = useGoogleAnalytics()
  const location = useLocation()

  useEffect(() => {
    try {
      trackPageView(location.pathname + location.search)
    } catch (error) {
      console.log('Error executing trackPageView Google Analytics', { Error: error });
    }
  }, [location, trackPageView])

  return <>{children}</>
}

export default GoogleAnalyticsProvider;
