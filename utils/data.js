import bcrypt from "bcrypt"
const data = {
 users:[
{
  name:"مدیر",
  email:"admin@gmail.com",
  password:bcrypt.hashSync("123456",Math.LOG2E),
  isAdmin:true
},
{
  name:"مهدی بهور",
  email:"user@gmail.com",
  password:bcrypt.hashSync("123456",Math.LOG2E),
  isAdmin:false
}
  ],
    products: [
      {
        name: 'هدست',
        slug: 'هدست',
        category: 'digitals',
        image: '/assets/images/products/product1.png',
        price: 10,
        brand: 'a4tech',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'This is a very nice headset',
        like:1000
      },
      {
        name: 'هدست',
        slug: '2هدست',
        category: 'digitals',
        image: '/assets/images/products/product1.png',
        price: 200,
        brand: 'a4tech',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'This is a very nice headset',
        like:100
      },
      {
        name: 'هدست',
        slug: '3هدست',
        category: 'digitals',
        image: '/assets/images/products/product1.png',
        price: 300,
        brand: 'a4tech',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'This is a very nice headset',
        like:100
      },
      {
        name: 'دسته بازی2',
        slug: 'دسته بازی',
        category: 'digitals',
        image: '/assets/images/products/product2.png',
        price: 400,
        brand: 'sony',
        rating: 4.2,
        numReviews: 10,
        countInStock: 20,
        description: 'This is a very nice joystick',
        like:100
      },
      {
        name: ' دوهدست',
        slug: 'هدست ابی',
        category: 'digitals',
        image: '/assets/images/products/product3.jpg',
        price: 500,
        brand: 'sony',
        rating: 3.2,
        numReviews: 100,
        countInStock: 240,
        description: 'This is a very nice headset',
        like:100
      },
      {
        name: 'موبایل',
        slug: 'موبایل',
        category: 'digitals',
        image: '/assets/images/products/product4.jpg',
        price: 800,
        brand: 'sony',
        rating: 2.2,
        numReviews: 110,
        countInStock: 2,
        description: 'This is a very nice mobile',
        like:100
      },
      {
        name: 'اداپتور',
        slug: '1اداپتور',
        category: 'digitals',
        image: '/assets/images/products/product5.webp',
        price: 8000,
        brand: 'a4tech',
        rating: 9.2,
        numReviews: 150,
        countInStock: 250,
        description: 'This is a very nice charger',
        like:100
      },
      {
        name: 'اداپتور',
        slug: '2اداپتور',
        category: 'digitals',
        image: '/assets/images/products/product5.webp',
        price: 850,
        brand: 'a4tech',
        rating: 9.2,
        numReviews: 150,
        countInStock: 250,
        description: 'This is a very nice charger',
        like:100
      },
      {
        name: 'هندسفری',
        slug: 'هندسفری',
        category: 'digitals',
        image: '/assets/images/products/product6.jpg',
        price: 8000,
        brand: 'sony',
        rating: 4.2,
        numReviews: 10,
        countInStock: 0,
        description: 'This is a very nice headset',
        like:100
      },
      {
        name: 'هندسفری',
        slug: '2هندسفری',
        category: 'digitals',
        image: '/assets/images/products/product6.jpg',
        price: 10000,
        brand: 'sony',
        rating: 4.2,
        numReviews: 10,
        countInStock: 0,
        description: 'This is a very nice headset',
        like:1300
      },
     
    ],
  };
  export default data;

///bcrypt convert the password to an encrypted password.
///bcrypt is a library to help you hash passwords.
///Why is async mode recommended over sync mode?
///If you are using bcrypt on a simple script, 
///using the sync mode is perfectly fine. However,
/// if you are using bcrypt on a server, the async mode is recommended.
/// This is because the hashing done by bcrypt is CPU intensive,
/// so the sync version will block the event loop and prevent your application 
///from servicing any other inbound requests or events.
/// The async version uses a thread pool which does not block the main event loop.