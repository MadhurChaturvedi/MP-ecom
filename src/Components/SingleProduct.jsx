
import { useState, useEffect } from "react";
import  {useParams} from "react-router";

function Singleproduct(){
    
    const [product,setproduct] = useState(null);
    const {id} = useParams();
   async function fetchData(){
       const product = await fetch(`https://dummyjson.com/products/${id}`);
       const projson = await product.json();
    //    console.log(projson);
       setproduct(projson);
    }

    useEffect(()=>{
      fetchData();
    },[])
    // const {image} = product
    if(!product) return <p>Loading...</p>
    const image = product.images;
    const title = product.title;
    const category = product.category;
    const price = product.price;
    const description = product.description;
    const brand = product.brand;

    return(
            <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full transition-all duration-300">
        
        {/* Product Image */}
        <div className="md:w-1/2 group relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full shadow">
            NEW
          </span>
        </div>

        {/* Product Details */}
        <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-medium text-gray-900">Category:</span> {category}</p>
              <p><span className="font-medium text-gray-900">Brand:</span> {brand}</p>
              <p className="text-2xl font-semibold text-green-600">Rs. {price}</p>
            </div>
          </div>

          <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
    )
}

export default Singleproduct