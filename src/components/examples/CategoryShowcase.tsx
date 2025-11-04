import CategoryShowcase from '../CategoryShowcase';
import dressImage from '@assets/generated_images/Black_cocktail_dress_85fd198d.png';

export default function CategoryShowcaseExample() {
  const mockCategories = [
    { name: 'Dresses', image: dressImage, itemCount: '120+ Styles' },
    { name: 'Tops', image: dressImage, itemCount: '85+ Styles' },
    { name: 'Bottoms', image: dressImage, itemCount: '95+ Styles' },
    { name: 'Accessories', image: dressImage, itemCount: '60+ Styles' }
  ];

  return <CategoryShowcase categories={mockCategories} />;
}
