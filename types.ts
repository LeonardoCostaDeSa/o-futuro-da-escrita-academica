
export interface Module {
  id: number;
  title: string;
  description: string;
  lessons: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice: string;
  features: string[];
  recommended?: boolean;
}
