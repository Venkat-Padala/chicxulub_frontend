import axios from 'axios';
import type { Plan, Zone, Testimonial, PincodeResult, OrderFormData } from '../types';

const api = axios.create({
  baseURL: '/api',
  timeout: 8000,
});

export const fetchPlans = async (): Promise<Plan[]> => {
  const { data } = await api.get('/plans');
  return data;
};

export const fetchZones = async (): Promise<Zone[]> => {
  const { data } = await api.get('/zones');
  return data;
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const { data } = await api.get('/testimonials');
  return data;
};

export const checkPincode = async (pincode: string): Promise<PincodeResult> => {
  const { data } = await api.get(`/zones/check/${pincode}`);
  return data;
};

export const submitOrder = async (orderData: OrderFormData): Promise<{ success: boolean }> => {
  const { data } = await api.post('/orders', orderData);
  return data;
};
