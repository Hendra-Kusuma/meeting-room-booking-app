import Button from "../components/button/button";
import CardProducts from "../components/fragment/CardProducts";
import Counter from "../components/fragment/Counter";

const products = [
  {
    id: 1,
    title: "2 Pcs Dualsense",
    price: "Rp.1.250.000,-",
    image: "public/image/stick.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, animi
    rerum molestias odio sapiente quisquam debitis, doloribus quibusdam
    obcaecati quo error a ab recusandae fugiat est! Animi velit ipsam
    dignissimos?`,
  },
  {
    id: 2,
    title: "3 Pcs Dualsense",
    price: "Rp.2.000.000,-",
    image: "public/image/stick.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, animi
    rerum molestias odio sapiente quisquam debitis, doloribus quibusdam
    obcaecati quo error`,
  },
  {
    id: 3,
    title: "PlayStation 5",
    price: "Rp.8.000.000,-",
    image: "public/image/stick.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, animi
    rerum molestias odio sapiente quisquam debitis, doloribus quibusdam
    obcaecati quo error, pengen banget PS5,. huhuhu`,
  },
];

function HandleLogout () {
  localStorage.removeItem('email')
  localStorage.removeItem('password')
  window.location.href = "/login";
  alert('Loggout sukses')
}

const email = localStorage.getItem('email')
function ProductPage() {
  return (
    <>
      <div className="text-xl flex h-13 justify-end bg-blue-400 text-white items-center px-8">
        {email}
        <Button color="bg-blue-800" text="Logout" onClick={HandleLogout} />
      </div>
      <div className="flex justify-center">
      {products.map((product) => (
        <CardProducts key={product.id}>
          <CardProducts.Header image={product.image} />
          <CardProducts.Body title={product.title}>
            {product.description}
          </CardProducts.Body>
          <CardProducts.Footer price={product.price} />
        </CardProducts>
      ))}
    </div>
    <div className="flex justify-center w-100">
      <Counter/>
    </div>
    </>
    
  );
}

export default ProductPage;
