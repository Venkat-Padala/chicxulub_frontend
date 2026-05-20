export interface MealItem {
  name: string;
  item: string;
}

export interface Plan {
  _id: string;
  name: string;
  badge: string;
  badgeType: 'starter' | 'most-popular' | 'advanced';
  calories: number;
  description: string;
  pricePerDay: number;
  featured: boolean;
  accentColor: string;
  meals: MealItem[];
}

export interface Zone {
  _id: string;
  name: string;
  detail: string;
  status: 'live' | 'coming_soon';
  pincodes: string[];
}

export interface Testimonial {
  _id: string;
  name: string;
  location: string;
  plan: string;
  rating: number;
  text: string;
  result: string;
  resultEmoji: string;
  initials: string;
  avatarColor: string;
  featured: boolean;
  verified: boolean;
}

export interface OrderFormData {
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  deliveryAddress?: string;
  pincode?: string;
  planCategory?: string;
  subscriptionMode: string;
  primaryGoal: string;
  combos: string[];
  drinks: string[];
  snacks: string[];
  addons: string[];
  paymentMethod: string;
  upiId: string;
  specialNotes: string;
}

export interface PincodeResult {
  ok: boolean;
  area: string;
}
