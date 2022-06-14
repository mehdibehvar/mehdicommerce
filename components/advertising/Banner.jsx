import Image from "next/image";

export default function Banner() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-12 col-md-3 adds-wrapper mb-2">
          <a href="">
            <Image
              className="img-fluid image-adds"
              src="/assets/images/banner-pics/banner1.jpg"
              alt="banner1"
            width={300}
            height={200}
            layout="responsive"
            quality="30"
            />
          </a>
        </div>
        <div className="col-sm-12 col-md-6 adds-wrapper mb-2">
          <a href="">
          <Image
            className="img-fluid image-adds"
              src="/assets/images/banner-pics/banner2.jpg"
              alt=""
              layout="responsive"
              width={600}
            height={200}
            quality="30"
            />
          
          </a>
        </div>
        <div className="col-sm-12 col-md-3 adds-wrapper mb-2">
          <a href="">
          <Image
              className="img-fluid image-adds"
              src="/assets/images/banner-pics/banner3.jpg"
              alt=""
              layout="responsive"
              width={300}
            height={200}
            quality="30"
            />
          
          </a>
        </div>
      </div>
    </div>
  );
}
