import catImage from '../../assets/cat-11.png';
import cat9 from '../../assets/cat-9.png';
import cat3 from '../../assets/cat-3.png'
import cat1 from '../../assets/cat-1.png'
import cat2 from '../../assets/cat-2.png'
import cat4 from '../../assets/cat-4.png'
import cat5 from '../../assets/cat-5.png'
import cat14 from '../../assets/cat-14.png'
import cat15 from '../../assets/cat-15.png'
import cat13 from '../../assets/cat-13.png'
import cat12 from '../../assets/cat-12.png'
const categories = [
    { name: 'Peach', items: 14, image: catImage },
    { name: 'Red Apple', items: 54, image: cat9 },
    { name: 'Snack', items: 61, image: cat3 },
    { name: 'Vegetables', items: 72, image: cat1 },
    { name: 'Strawberry', items: 36, image: cat2 },
    { name: 'Black Plum', items: 123, image: cat4 },
    { name: 'Custard Apple', items: 34, image: cat5 },
    { name: 'Coffee & Tea', items: 89, image: cat14 },
    { name: 'Cake & Milk', items: 26, image:cat15 },
    { name: 'Cake & Milk', items: 26, image: cat13 },
    { name: 'Organic Kiwi', items: 28, image: cat12 },
];

const FeaturedCategories = () => {
  return (
    <div className="container mx-auto pb-5">
      <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-10 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="p-4 py-10 bg-white shadow-lg rounded-lg flex flex-col items-center hover:border-1 group hover:border-gray-200 cursor-pointer">
            <img src={category.image} alt={category.name} className="h-20 w-20 mb-2 hover:scale-110 scale-100 transition-all duration-700"/>
            <h3 className="text-md font-semibold group-hover:text-[#3BB77E] transition-all duration-100">{category.name}</h3>
            <p className="text-gray-600">{category.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
