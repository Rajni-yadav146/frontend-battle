import { useSyncExternalStore } from "react";
import { CurrencyCode, BillingCycle } from "./pricingEngine";

export interface PricingState {
  currency: CurrencyCode;
  billingCycle: BillingCycle;
}

type Listener = () => void;

class PricingStore {
  private state: PricingState = {
    currency: "USD",
    billingCycle: "monthly",
  };
  private listeners = new Set<Listener>();

  getState = (): PricingState => {
    return this.state;
  };

  setState = (newState: Partial<PricingState>): void => {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener());
  };

  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
}

export const pricingStore = new PricingStore();

// Hydration-safe subscription selector
export function usePricingSelector<T>(selector: (state: PricingState) => T): T {
  return useSyncExternalStore(
    pricingStore.subscribe,
    () => selector(pricingStore.getState()),
    () => selector({ currency: "USD", billingCycle: "monthly" }) // SSR fallback
  );
}
