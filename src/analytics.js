import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!TRACKING_ID) {
    console.warn('GA tracking ID not found');
    return;
  }
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};