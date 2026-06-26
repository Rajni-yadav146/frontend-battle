export type CurrencyCode = "USD" | "EUR" | "INR";
export type BillingCycle = "monthly" | "annual";

export type PlanId = "starter" | "professional" | "enterprise";

export interface PricingMatrixPlan {
  name: string;
  basePrice: number; // Base monthly price in USD
  regionalMultipliers: Record<CurrencyCode, number>;
}

export interface PricingMatrix {
  plans: Record<PlanId, PricingMatrixPlan>;
  currencies: Record<CurrencyCode, { symbol: string; locale: string }>;
  annualDiscount: number;
}

// Multi-dimensional configuration object (matrix)
export const pricingMatrix: PricingMatrix = {
  plans: {
    starter: {
      name: "Starter",
      basePrice: 19,
      regionalMultipliers: {
        USD: 1.0,
        EUR: 0.9,
        INR: 75.0, // regional multiplier (PPP adjusted rate)
      },
    },
    professional: {
      name: "Professional",
      basePrice: 49,
      regionalMultipliers: {
        USD: 1.0,
        EUR: 0.9,
        INR: 70.0,
      },
    },
    enterprise: {
      name: "Enterprise",
      basePrice: 149,
      regionalMultipliers: {
        USD: 1.0,
        EUR: 0.9,
        INR: 65.0,
      },
    },
  },
  currencies: {
    USD: { symbol: "$", locale: "en-US" },
    EUR: { symbol: "€", locale: "de-DE" },
    INR: { symbol: "₹", locale: "en-IN" },
  },
  annualDiscount: 0.20, // 20% discount
};

export function calculatePrice(planId: PlanId, currency: CurrencyCode, billingCycle: BillingCycle) {
  const plan = pricingMatrix.plans[planId];
  const multiplier = plan.regionalMultipliers[currency];
  
  // Base price multiplied by regional multiplier
  let price = plan.basePrice * multiplier;
  
  // Apply 20% discount for annual billing cycle
  if (billingCycle === "annual") {
    price = price * (1 - pricingMatrix.annualDiscount);
  }
  
  // Format using Intl.NumberFormat for local currency representation
  const formatter = new Intl.NumberFormat(pricingMatrix.currencies[currency].locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return {
    name: plan.name,
    basePrice: plan.basePrice,
    regionalMultiplier: multiplier,
    annualDiscount: billingCycle === "annual" ? pricingMatrix.annualDiscount : 0,
    computedPrice: price,
    formattedPrice: formatter.format(price),
  };
}
