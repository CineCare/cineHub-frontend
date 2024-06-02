import { ReactNode } from "react";

type ActionFunction = (gps: string) => void;

interface ChildProps {
  onAction: ActionFunction;
}

type AccessibilityObject = {
  audio: string;
  description: string;
  id: number;
  name: string;
  picto: string;
};

type CinemaObject = {
  accessibilities: AccessibilityObject[];
  address1: string;
  address2?: string;
  audio?: string;
  city: string;
  createdAt: string;
  description?: string;
  email: string;
  gps: string;
  id: number;
  name: string;
  phone: string;
  photo?: string;
  postalCode: string;
  updatedAt: string;
  distance: string;
};

interface ArrowProps {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

interface CinemaCardProps {
  cinema: CinemaObject;
  distance: number;
  onRelocate: ActionFunction; // Utilisez directement ActionFunction ici
}

interface ConversationHandlerProps {
  question: string;
}

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}



export type {
  AccessibilityObject,
  ArrowProps,
  CinemaObject,
  ChildProps,
  CinemaCardProps,
  ActionFunction,
  ThemeContextType,
  ThemeProviderProps,
  ConversationHandlerProps,
  ModalProps,
};
