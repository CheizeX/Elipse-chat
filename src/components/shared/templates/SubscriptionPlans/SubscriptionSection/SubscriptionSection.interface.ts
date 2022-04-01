import { Dispatch, SetStateAction } from 'react';

export interface SubscriptionSectionProps {
  userName?: string;
  plan?: string;
  trial?: boolean;
  trialEnd?: 'string';
  active?: boolean;
}

export enum PlanName {
  TRIAL = 'TRIAL',
  START = 'START',
  GROWTH = 'GROWTH',
  BUSINESS = 'BUSINESS',
  CORPORATE = 'CORPORATE',
  ENTERPRISE = 'ENTERPRISE',
}
export enum PlanStatus {
  ACTIVE = 'ACTIVE',
  WARNING = 'WARNING',
  INACTIVE = 'INACTIVE',
  EXTENDED = 'EXTENDED',
}
export interface PaymentMethodsProps {
  stripeId: string;
  expMonth: number;
  expYear: number;
  last4: string;
  brand: string;
  funding: string;
}

export interface SubscriptionDataProps {
  initDate?: string;
  endDate?: string;
  plan?: PlanName | string;
  nextPlan?: {
    plan: PlanName | string;
    invitationsAvailable: number;
  };
  planStatus?: PlanStatus | string;
  _id?: string;
  paymentMethods?: PaymentMethodsProps[];
  mainPaymentMethod?: string;
}
export interface InvoicesDataProps {
  id: string;
  date?: number;
  planName?: PlanName | string;
  price?: number;
  link?: string;
}
export interface SubscriptionSectionItemsProps {
  setShowCard: Dispatch<SetStateAction<boolean>>;
  planNameSelected?: string;
  setPlanNameSelected: Dispatch<SetStateAction<string>>;
  onClose?: () => void;
  title?: string;
  buttonTitle?: string;
  stripeId?: string;
}
