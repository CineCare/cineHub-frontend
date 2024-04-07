type AccessibilityObject = {
  id: number;
  name: string;
  description: string;
  audio: string;
  picto: string;
};

type CinemaObject = {
  id: number;
  name: string;
  address1: string;
  address2?: string;
  city: string;
  postalCode: string;
  email: string;
  phone: string;
  photo?: string;
  gps: string;
  description?: string;
  audio?: string;
  createdAt: string;
  updatedAt: string;
  accessibilities: AccessibilityObject[];
};

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export type {
  CinemaObject,
  AccessibilityObject,
  ArrowProps,
}