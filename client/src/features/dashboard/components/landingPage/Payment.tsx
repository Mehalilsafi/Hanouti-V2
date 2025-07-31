import { Input } from '@/components/ui/input';
import { DollarSign, CreditCard, Banknote } from 'lucide-react'; 
function Payment() {
  return (
    <div className='min-h-screen p-4 sm:p-6 lg:p-8 bg-brand-accent'>
      <div className='max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto'>
       
        <div className="text-center mb-8">
          <h1 className='text-3xl sm:text-4xl font-bold mb-2 text-brand-primary'>Currency & Payment</h1>
          <p className='text-gray-700 text-lg'>Select the currency for this product and your preferred payment method.</p>
        </div>


        <div className='bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-6'>
          <h2 className='text-2xl font-bold mb-5 text-brand-primary flex items-center gap-2'>
            <DollarSign className="w-6 h-6" /> Currency
          </h2>
          <div className='p-4 my-4 bg-brand-highlight rounded-lg flex items-center justify-between shadow-sm border border-brand-accent'>
            <div className='flex items-center gap-3'>
              <Input type='radio' name="currency" id="currency-dzd" defaultChecked className='w-5 h-5 accent-brand-primary' />
              <label htmlFor="currency-dzd" className='text-lg font-medium text-brand-primary'>Algeria</label>
            </div>
            <p className='text-xl font-semibold text-brand-primary'>DZD</p>
          </div>
          
        </div>

      
        <div className='bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100'>
          <h2 className='text-2xl font-bold mb-5 text-brand-primary flex items-center gap-2'>
            <CreditCard className="w-6 h-6" /> Payment Methods
          </h2>
          <div className='flex flex-col gap-4'>
         
            <label htmlFor="cod-method" className='flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors'>
              <Input type='radio' name="payment-method" id="cod-method" defaultChecked className='w-5 h-5 accent-brand-primary' />
              <Banknote className="w-6 h-6 text-brand-primary" />
              <div className='flex flex-col'>
                <span className='text-lg font-medium text-gray-900'>Cash on Delivery (COD)</span>
                <span className='text-sm text-gray-600'>Customers pay when they receive the product.</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;