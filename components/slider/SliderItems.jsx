import Image from "next/image"
import Link from "next/link"
export default function SliderItems() {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
      <Link href="/">
        <a>
        <Image
        src="/assets/images/carousel-pics/slidepic1.jpg"
        alt='slidepic1'
        className='d-block w-100 carousel-image'
        width={1200}
        height={400}
        layout="responsive"
        priority="true"
      />
        </a>
      </Link>
      
      
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label1</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
      <Link href="/">
        <a>
        <Image
        src="/assets/images/carousel-pics/slidepic2.jpg"
        alt='slidepic2'
        className='d-block w-100 carousel-image'
        width={1200}
        height={400}
        layout="responsive"
        priority="true"
      />
        </a>
      </Link>
   
       
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label2</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item" >
      <Link href="/">
        <a>
        <Image
        src="/assets/images/carousel-pics/slidepic3.jpg"
        alt='slidepic3'
        className='d-block w-100 carousel-image'
        width={1200}
        height={400}
        layout="responsive"
        priority="true"
      />
        </a>
      </Link>
    
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label3</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
  )
}
