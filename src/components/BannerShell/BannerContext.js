import { createContext, useContext } from 'react';

export const BannerContext = createContext({ inView: true });
export const useBanner = () => useContext(BannerContext);
