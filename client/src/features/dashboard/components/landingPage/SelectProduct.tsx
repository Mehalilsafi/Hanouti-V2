import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from 'react';
import { Search, CheckCircle } from 'lucide-react'; 

function SelectProduct() {
  type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };

  const [productsData] = useState<ProductType[]>([
    {
      id: 'prod_001',
      name: 'Wireless Bluetooth Headphones',
      price: 4999.00, 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06f2e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'High-quality sound with noise-cancellation and comfortable fit.',
    },
    {
      id: 'prod_002',
      name: 'Smart Fitness Tracker',
      price: 2999.00, 
      image: 'https://images.unsplash.com/photo-1560942479-75f617631980?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Monitor your health and track your workouts with ease.',
    },
    {
      id: 'prod_003',
      name: 'Portable Power Bank 10000mAh',
      price: 1500.00, 
      image: 'https://images.unsplash.com/photo-1620000718665-54649b4c0296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Compact and powerful, keep your devices charged on the go.',
    },
    {
      id: 'prod_004',
      name: 'Ergonomic Office Chair',
      price: 12000.00, 
      image: 'https://images.unsplash.com/photo-1596515814582-8b653835e985?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3xxxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Designed for comfort and support during long working hours.',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='min-h-screen p-4 sm:p-6 lg:p-8 bg-brand-accent'>
      <div className='max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto'>
        <div className="text-center mb-8">
          <h1 className='text-3xl sm:text-4xl font-bold mb-2 text-brand-primary'>Select a Product</h1>
          <p className='text-gray-700 text-lg'>Choose one product to sell, all its details will be displayed on your landing page.</p>
        </div>

        {productsData.length > 0 ? (
          <div className='bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100'>
            <div className='relative mb-6'>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type='text'
                placeholder='Search for products by name, ID, or description...'
                className='pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">Product ID</TableHead>
                      <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">Product Image</TableHead>
                      <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">Product Name</TableHead>
                      <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">Description</TableHead>
                      <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">Price</TableHead>
                      <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <TableRow key={product.id} className="hover:bg-gray-50 transition-colors border-b border-gray-200">
                          <TableCell className="font-medium text-brand-primary px-4 py-4">
                            #{product.id.split('_')[1]}
                          </TableCell>

                          <TableCell className="px-4 py-4">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                          </TableCell>


                          <TableCell className="px-4 py-4">
                            <span className="font-medium text-gray-900">{product.name}</span>
                          </TableCell>


                          <TableCell className="px-4 py-4">
                            <span className="text-sm text-gray-600 line-clamp-2">{product.description}</span>
                          </TableCell>
                          <TableCell className="px-4 py-4">
                            <span className="font-bold text-gray-900">{product.price.toLocaleString('en-DZ', { style: 'currency', currency: 'DZD' })}</span>
                          </TableCell>
                          <TableCell className="px-4 py-4">
                            <div className="flex items-center justify-center">
                              <Button className="p-2 rounded-lg bg-brand-highlight text-brand-primary hover:bg-brand-secondary hover:text-white transition-colors">
                                <CheckCircle className="w-5 h-5" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow className="border-b border-gray-200">
                        <TableCell colSpan={6} className="text-center py-8 text-gray-500 px-4 py-4">
                          No products found matching your search criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        ) : (
          <div className='bg-white rounded-xl p-8 sm:p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-6 mt-5'>
            <h1 className='text-2xl sm:text-3xl font-bold text-brand-primary'>No Products Created Yet!</h1>
            <p className='text-gray-700 text-lg'>It looks like you haven't added any products to your store. Create your first product now to start building your landing pages.</p>
            <Button className='bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-secondary transition-all'>
              Create Your First Product
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectProduct;