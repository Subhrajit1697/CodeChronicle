import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ProductDetailData {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  description: string;
  sizes: string[];
  materials: string;
}

export const getProductById = async (id: string): Promise<ProductDetailData> => {
  // Mock implementation - replace with actual API call
  return Promise.resolve({
    id,
    name: 'Sample Product',
    price: 99.99,
    images: ['/placeholder-product.jpg'],
    category: 'Sample Category',
    description: 'Sample product description',
    sizes: ['S', 'M', 'L'],
    materials: '100% Cotton'
  });
};