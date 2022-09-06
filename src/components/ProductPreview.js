import desktopProductImg from '../images/image-product-desktop.jpg'
import mobileProductImg from '../images/image-product-mobile.jpg'
import cartIcon from '../images/icon-cart.svg'

function ProductPreview(){
  
  return (
    <div className="flex sm:flex-row flex-col justify-center content-center max-w-sm overflow-hidden border-none rounded-lg bg-white font-['Montserrat'] m-8">
      <div className="sm:w-1/2">
        <picture>
          <source media="(min-width: 640px)" srcset={desktopProductImg} />
          <img src={mobileProductImg} alt="channel parfum" className='object-cover h-full w-full'/>
        </picture>
      </div>
      <div className='py-4 px-5 sm:w-1/2'>
        <div className='mb-2'>
            <p class="tracking-[0.40em] text-[12px] text-stone-700">PERFUME</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-2xl font-['Fraunces'] text-stone-900	">Gabrielle Essence Eau De Parfum</p>
        </div>
        <div className="mb-4">
          <p className="text-stone-700 text-[12px]">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        </div>
        <div>
          <div className="flex gap-3 items-center mb-4">
            <p className="text-[#437e6a] font-bold text-2xl font-['Fraunces']">$149.99</p>
            <p className="ext-stone-700 text-[12px] line-through	">$169.99</p>
          </div>
          <div>
            <button className="bg-[#437e6a] text-white text-[12px] font-bold px-4 py-3 border-none rounded w-full hover:bg-[#1a4031]">
              <span>
                <img src={cartIcon} alt="cart icon" className="inline mr-2"/>
              </span>
              Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview;