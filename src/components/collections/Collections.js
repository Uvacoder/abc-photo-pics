import React from 'react'
import Link from 'next/link'

function Collections() {
  return (
    <div className='content-center collections-wrapper'>



      <section className="collections-header">
        <h3 className='text-1 ts-2 collection-title'>Popular Collections</h3>
        <div className="content-center text-2 ts-6 collection-buttons">
          <div className="button-scroll">
            <Link href='/'>
              <a><span>Celebrate</span></a>
            </Link>
            <Link href='/'>
              <a><span>Trends</span></a>
            </Link>
            <Link href='/'>
              <a><span>Clothing</span></a>
            </Link>
            <Link href='/'>
              <a><span>Cars</span></a>
            </Link>
            <Link href='/'>
              <a><span>Parties</span></a>
            </Link>
            <Link href='/'>
              <a><span>Travels</span></a>
            </Link>
          </div>
        </div>        
        <div className="collection-images-wrapper">
          <div className="image-scroll">
            <Link href='/'>
              <a>
                <div className="collection-images">
                  <img src="/images/birthday01.jpg" alt=""/>
                  <img src="/images/birthday02.jpg" alt=""/>
                  <img src="/images/birthday03.jpg" alt=""/>
                  <h3 className='text-1 ts-3 collection-album'>Birthdays</h3>
                </div>
              </a>
            </Link>
            <Link href='/'>
              <a>
                <div className="collection-images">
                  <img src="/images/seasons01.jpg" alt=""/>
                  <img src="/images/seasons02.jpg" alt=""/>
                  <img src="/images/seasons03.jpg" alt=""/>
                  <h3 className='text-1 ts-3 collection-album'>Seasons</h3>
                </div>
              </a>
            </Link>
            <Link href='/'>
              <a>
                <div className="collection-images">
                  <img src="/images/conversations01.jpg" alt=""/>
                  <img src="/images/conversations02.jpg" alt=""/>
                  <img src="/images/conversations03.jpg" alt=""/>
                  <h3 className='text-1 ts-3 collection-album'>Conversations</h3>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>



      <section className="collections-header">
        <h3 className='text-1 ts-2 collection-title'>Popular Collections</h3>
        <div className="content-center text-2 ts-6 collection-buttons">
          <div className="button-scroll">
            <Link href='/'>
              <a><span>Celebrate</span></a>
            </Link>
            <Link href='/'>
              <a><span>Trends</span></a>
            </Link>
            <Link href='/'>
              <a><span>Clothing</span></a>
            </Link>
            <Link href='/'>
              <a><span>Cars</span></a>
            </Link>
            <Link href='/'>
              <a><span>Parties</span></a>
            </Link>
            <Link href='/'>
              <a><span>Travels</span></a>
            </Link>
          </div>
        </div>        
        <div className="collection-images-wrapper">
          <div className="image-scroll">
            <Link href='/'>
              <a>
                <div className="collection-images">
                  <img src="/images/house-interiors01.jpg" alt=""/>
                  <img src="/images/house-interiors02.jpg" alt=""/>
                  <img src="/images/house-interiors03.jpg" alt=""/>
                  <h3 className='text-1 ts-3 collection-album'>House Interiors</h3>
                </div>
              </a>
            </Link>
            <Link href='/'>
              <a>
                <div className="collection-images">
                 <img src="/images/streets-&-alleys01.jpg" alt=""/>
                  <img src="/images/streets-&-alleys02.jpg" alt=""/>
                  <img src="/images/streets-&-alleys03.jpg" alt=""/>
                  <h3 className='text-1 ts-3 collection-album'>Streets & Alleys</h3>
                </div>
              </a>
            </Link>
            <Link href='/'>
              <a>
                <div className="collection-images">
                  <img src="/images/vacations01.jpg" alt=""/>
                  <img src="/images/vacations02.jpg" alt=""/>
                  <img src="/images/vacations03.jpg" alt=""/>
                  <h3 className='text-1 ts-3 collection-album'>Vacations</h3>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      

{/* 

      <div className="collections-header">
        <h3 className='text-1'>Recommended For You</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Fish</span></a>
          </Link>
          <Link href='/'>
            <a><span>Cats</span></a>
          </Link>
          <Link href='/'>
            <a><span>Felines</span></a>
          </Link>
          <Link href='/'>
            <a><span>Birds</span></a>
          </Link>
          <Link href='/'>
            <a><span>Insects</span></a>
          </Link>
          <Link href='/'>
            <a><span>Animals</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/house-interiors01.jpg" alt=""/>
                <img src="/images/house-interiors02.jpg" alt=""/>
                <img src="/images/house-interiors03.jpg" alt=""/>
                <h3 className='text-1'>House Interiors</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/streets-&-alleys01.jpg" alt=""/>
                <img src="/images/streets-&-alleys02.jpg" alt=""/>
                <img src="/images/streets-&-alleys03.jpg" alt=""/>
                <h3 className='text-1'>Streets & Alleys</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/vacations01.jpg" alt=""/>
                <img src="/images/vacations02.jpg" alt=""/>
                <img src="/images/vacations03.jpg" alt=""/>
                <h3 className='text-1'>Vacations</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>


      <div className="collections-header">
        <h3 className='text-1'>Photography Photos</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Mountains</span></a>
          </Link>
          <Link href='/'>
            <a><span>Vegetables</span></a>
          </Link>
          <Link href='/'>
            <a><span>Buildings</span></a>
          </Link>
          <Link href='/'>
            <a><span>Sunrise</span></a>
          </Link>
          <Link href='/'>
            <a><span>Fruits</span></a>
          </Link>
          <Link href='/'>
            <a><span>Landscapes</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/nature01.jpg" alt=""/>
                <img src="/images/nature02.jpg" alt=""/>
                <img src="/images/nature03.jpg" alt=""/>
                <h3 className='text-1'>Nature</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/food01.jpg" alt=""/>
                <img src="/images/food02.jpg" alt=""/>
                <img src="/images/food03.jpg" alt=""/>
                <h3 className='text-1'>Food</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/cities01.jpg" alt=""/>
                <img src="/images/cities02.jpg" alt=""/>
                <img src="/images/cities03.jpg" alt=""/>
                <h3 className='text-1'>Cities</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>






      <div className="collections-header">
        <h3 className='text-1'>Animal Collections</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Mountains</span></a>
          </Link>
          <Link href='/'>
            <a><span>Vegetables</span></a>
          </Link>
          <Link href='/'>
            <a><span>Buildings</span></a>
          </Link>
          <Link href='/'>
            <a><span>Sunrise</span></a>
          </Link>
          <Link href='/'>
            <a><span>Fruits</span></a>
          </Link>
          <Link href='/'>
            <a><span>Landscapes</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/cute-cats01.jpg" alt=""/>
                <img src="/images/cute-cats02.jpg" alt=""/>
                <img src="/images/cute-cats03.jpg" alt=""/>
                <h3 className='text-1'>Cute Cats</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/animals01.jpg" alt=""/>
                <img src="/images/animals02.jpg" alt=""/>
                <img src="/images/animals03.jpg" alt=""/>
                <h3 className='text-1'>Animals</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/wild-animals01.jpg" alt=""/>
                <img src="/images/wild-animals02.jpg" alt=""/>
                <img src="/images/wild-animals03.jpg" alt=""/>
                <h3 className='text-1'>Wild Animals</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>






      <div className="collections-header">
        <h3 className='text-1'>Background Collections</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Mountains</span></a>
          </Link>
          <Link href='/'>
            <a><span>Vegetables</span></a>
          </Link>
          <Link href='/'>
            <a><span>Buildings</span></a>
          </Link>
          <Link href='/'>
            <a><span>Sunrise</span></a>
          </Link>
          <Link href='/'>
            <a><span>Fruits</span></a>
          </Link>
          <Link href='/'>
            <a><span>Landscapes</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/art-background01.jpg" alt=""/>
                <img src="/images/art-background02.jpg" alt=""/>
                <img src="/images/art-background03.jpg" alt=""/>
                <h3 className='text-1'>Art Background</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/pretty-background01.jpg" alt=""/>
                <img src="/images/pretty-background02.jpg" alt=""/>
                <img src="/images/pretty-background03.jpg" alt=""/>
                <h3 className='text-1'>Pretty Background</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/florals01.jpg" alt=""/>
                <img src="/images/florals02.jpg" alt=""/>
                <img src="/images/florals03.jpg" alt=""/>
                <h3 className='text-1'>Florals</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>







      <div className="collections-header">
        <h3 className='text-1'>Health Collections</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Mountains</span></a>
          </Link>
          <Link href='/'>
            <a><span>Vegetables</span></a>
          </Link>
          <Link href='/'>
            <a><span>Buildings</span></a>
          </Link>
          <Link href='/'>
            <a><span>Sunrise</span></a>
          </Link>
          <Link href='/'>
            <a><span>Fruits</span></a>
          </Link>
          <Link href='/'>
            <a><span>Landscapes</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/health-&-lifestyle01.jpg" alt=""/>
                <img src="/images/health-&-lifestyle02.jpg" alt=""/>
                <img src="/images/health-&-lifestyle03.jpg" alt=""/>
                <h3 className='text-1'>Health & Lifestyle</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/healthy-food01.jpg" alt=""/>
                <img src="/images/healthy-food02.jpg" alt=""/>
                <img src="/images/healthy-food03.jpg" alt=""/>
                <h3 className='text-1'>Healthy Food</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/wellness01.jpg" alt=""/>
                <img src="/images/wellness02.jpg" alt=""/>
                <img src="/images/wellness03.jpg" alt=""/>
                <h3 className='text-1'>Wellness</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>


     


      <div className="collections-header">
        <h3 className='text-1'>Marine Collections</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Mountains</span></a>
          </Link>
          <Link href='/'>
            <a><span>Vegetables</span></a>
          </Link>
          <Link href='/'>
            <a><span>Buildings</span></a>
          </Link>
          <Link href='/'>
            <a><span>Sunrise</span></a>
          </Link>
          <Link href='/'>
            <a><span>Fruits</span></a>
          </Link>
          <Link href='/'>
            <a><span>Landscapes</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/marine-life01.jpg" alt=""/>
                <img src="/images/marine-life02.jpg" alt=""/>
                <img src="/images/marine-life03.jpg" alt=""/>
                <h3 className='text-1'>Marine Life</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/seascape01.jpg" alt=""/>
                <img src="/images/seascape02.jpg" alt=""/>
                <img src="/images/seascape03.jpg" alt=""/>
                <h3 className='text-1'>Seascapes</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/sea-fish01.jpg" alt=""/>
                <img src="/images/sea-fish02.jpg" alt=""/>
                <img src="/images/sea-fish03.jpg" alt=""/>
                <h3 className='text-1'>Sea Fish</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>



      <div className="collections-header">
        <h3 className='text-1'>Art Collections</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Mountains</span></a>
          </Link>
          <Link href='/'>
            <a><span>Vegetables</span></a>
          </Link>
          <Link href='/'>
            <a><span>Buildings</span></a>
          </Link>
          <Link href='/'>
            <a><span>Sunrise</span></a>
          </Link>
          <Link href='/'>
            <a><span>Fruits</span></a>
          </Link>
          <Link href='/'>
            <a><span>Landscapes</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/paintings01.jpg" alt=""/>
                <img src="/images/paintings02.jpg" alt=""/>
                <img src="/images/paintings03.jpg" alt=""/>
                <h3 className='text-1'>Paintings</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/sculptures01.jpg" alt=""/>
                <img src="/images/sculptures02.jpg" alt=""/>
                <img src="/images/sculptures03.jpg" alt=""/>
                <h3 className='text-1'>Sculptures</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/art-works01.jpg" alt=""/>
                <img src="/images/art-works02.jpg" alt=""/>
                <img src="/images/art-works03.jpg" alt=""/>
                <h3 className='text-1'>Art Works</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>




      <div className="collections-header">
        <h3 className='text-1'>Drink Collections</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Mountains</span></a>
          </Link>
          <Link href='/'>
            <a><span>Vegetables</span></a>
          </Link>
          <Link href='/'>
            <a><span>Buildings</span></a>
          </Link>
          <Link href='/'>
            <a><span>Sunrise</span></a>
          </Link>
          <Link href='/'>
            <a><span>Fruits</span></a>
          </Link>
          <Link href='/'>
            <a><span>Landscapes</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/fresh-juice01.jpg" alt=""/>
                <img src="/images/fresh-juice02.jpg" alt=""/>
                <img src="/images/fresh-juice03.jpg" alt=""/>
                <h3 className='text-1'>Fresh Juice</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/water01.jpg" alt=""/>
                <img src="/images/water02.jpg" alt=""/>
                <img src="/images/water03.jpg" alt=""/>
                <h3 className='text-1'>Water</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/fresh-tea01.jpg" alt=""/>
                <img src="/images/fresh-tea02.jpg" alt=""/>
                <img src="/images/fresh-tea03.jpg" alt=""/>
                <h3 className='text-1'>Fresh Tea</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>






      <div className="collections-header">
        <h3 className='text-1'>Botany Collections</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Mountains</span></a>
          </Link>
          <Link href='/'>
            <a><span>Vegetables</span></a>
          </Link>
          <Link href='/'>
            <a><span>Buildings</span></a>
          </Link>
          <Link href='/'>
            <a><span>Sunrise</span></a>
          </Link>
          <Link href='/'>
            <a><span>Fruits</span></a>
          </Link>
          <Link href='/'>
            <a><span>Landscapes</span></a>
          </Link>
        </div>        
        <div className="collection-images-wrapper">
          <Link href=''>
            <a>
              <div className="collection-images">
                <img src="/images/plants01.jpg" alt=""/>
                <img src="/images/plants02.jpg" alt=""/>
                <img src="/images/plants03.jpg" alt=""/>
                <h3 className='text-1'>Plants</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/seeds01.jpg" alt=""/>
                <img src="/images/seeds02.jpg" alt=""/>
                <img src="/images/seeds03.jpg" alt=""/>
                <h3 className='text-1'>Seeds</h3>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div className="collection-images">
                <img src="/images/trees01.jpg" alt=""/>
                <img src="/images/trees02.jpg" alt=""/>
                <img src="/images/trees03.jpg" alt=""/>
                <h3 className='text-1'>Trees</h3>
              </div>
            </a>
          </Link>
        </div>
      </div> */}


    </div>
  )
}

export default Collections
