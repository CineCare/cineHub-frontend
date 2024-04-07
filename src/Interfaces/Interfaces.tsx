import { ReactNode } from "react";

type AccessibilityObject = {
  audio         : string;
  description   : string;
  id            : number;
  name          : string;
  picto         : string;
};

type CinemaObject = {
  accessibilities : AccessibilityObject[];
  address1        : string;
  address2?       : string;
  audio?          : string;
  city            : string;
  createdAt       : string;
  description?    : string;
  email           : string;
  gps             : string;
  id              : number;
  name            : string;
  phone           : string;
  photo?          : string;
  postalCode      : string;
  updatedAt       : string;
};

interface ArrowProps {
  className?    : string;
  onClick?      : () => void;
  style?        : React.CSSProperties;
}

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}


export type {
  AccessibilityObject,
  ArrowProps,
  CinemaObject,
  ThemeContextType,
  ThemeProviderProps
}