import React from 'react'
import Svg from '../Svg/index'

function Media() {
let a = "6"
  console.log(a++)

  const playVid = (e) => {
    let parent = e.target.closest('.image-wrapper')
    parent.children[1].play()
  }

  const pauseVid = (e) =>{
    let parent = e.target.closest('.image-wrapper')
    parent.children[1].pause()
  }

  return (
    <div className='content-center photo-wrapper'>



      <div className="content-center media-header">
        <h3 className='text-1'>Related Photos</h3>
        <span className='text-2'>* hover your mouse over the item to play</span>
      </div>


      <div className="media-outer-wrapper">
        <div className="media-wrapper">

          <div 
            onMouseEnter={(e)=>playVid(e)} 
            onMouseOut={(e)=>pauseVid(e)}
            className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            {/* <img src="/images/p1.jpg" alt=""/> */}
            <video className="photo-item__video" muted preload>
              <source src="https://player.vimeo.com/external/210741646.hd.mp4?s=93ebd660d233a825b1777328cf13d740f767ff84&profile_id=174&oauth2_token_id=57447761" type="video/mp4" />
            </video>
          </div>
          
          <div 
            onMouseEnter={(e)=>playVid(e)} 
            onMouseOut={(e)=>pauseVid(e)}
            className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <video 
              className="photo-item__video" muted preload>
              <source src="https://player.vimeo.com/external/207561527.hd.mp4?s=a672f4505af1cd98c666607a1e9980ee39c08a86&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
            </video>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p3.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p4.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p5.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p6.jpg" alt=""/>
          </div>
        </div>

        <div className="media-wrapper">
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p4.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p5.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p6.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p1.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p2.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p3.jpg" alt=""/>
          </div>
        </div>

          <div className="media-wrapper">
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p6.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p1.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p2.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p3.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p4.jpg" alt=""/>
          </div>
          <div className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2'>
                  <img src="/images/photographer.png" alt=""/>
                  Aiman Adlawan
                </span>
                <div className="content-center action-wrapper">
                  <span><Svg svg='download'/></span>
                  <span><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <img src="/images/p5.jpg" alt=""/>
          </div>
        </div>
      </div>





      <div className="content-center load-wrapper">
        <button className='text-2'>Load More</button>
      </div>






    </div>
  )
}

export default Media
