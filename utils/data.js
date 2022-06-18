import bcrypt from "bcrypt"
const data = {
 users:[
{
  name:"مدیر",
  email:"admin@gmail.com",
  password:bcrypt.hashSync("admin",Math.LOG2E),
  isAdmin:true
},
{
  name:"مهدی بهور",
  email:"user@gmail.com",
  password:bcrypt.hashSync("user",Math.LOG2E),
  isAdmin:false
}
  ],
    products: [
      {
        name: 'هدست یک',
        slug: 'هدست',
        category: 'digitals',
        image: '/assets/images/products/product1.png',
        price: 70,
        brand: 'a4tech',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'This is a very nice headset',
      },
      {
        name: 'دسته بازی2',
        slug: 'دسته بازی',
        category: 'digitals',
        image: '/assets/images/products/product2.png',
        price: 80,
        brand: 'sony',
        rating: 4.2,
        numReviews: 10,
        countInStock: 20,
        description: 'This is a very nice joystick',
      },
      {
        name: 'هدست 3',
        slug: 'هدست ابی',
        category: 'digitals',
        image: '/assets/images/products/product3.jpg',
        price: 840,
        brand: 'sony',
        rating: 3.2,
        numReviews: 100,
        countInStock: 240,
        description: 'This is a very nice headset',
      },
      {
        name: 'موبایل4',
        slug: 'موبایل',
        category: 'digitals',
        image: '/assets/images/products/product4.jpg',
        price: 810,
        brand: 'sony',
        rating: 2.2,
        numReviews: 110,
        countInStock: 2,
        description: 'This is a very nice mobile',
      },
      {
        name: 'اداپتور5',
        slug: 'اداپتور',
        category: 'digitals',
        image: '/assets/images/products/product5.webp',
        price: 850,
        brand: 'a4tech',
        rating: 9.2,
        numReviews: 150,
        countInStock: 250,
        description: 'This is a very nice charger',
      },
      {
        name: '6هندسفری',
        slug: 'هندسفری',
        category: 'digitals',
        image: '/assets/images/products/product6.jpg',
        price: 8000,
        brand: 'sony',
        rating: 4.2,
        numReviews: 10,
        countInStock: 0,
        description: 'This is a very nice headset',
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