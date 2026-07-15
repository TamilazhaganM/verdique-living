import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product.service";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ product }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchRelatedProducts();

    }, [product]);

    const fetchRelatedProducts = async () => {

        try {

            const response = await getAllProducts({

                category: product.category,

                limit: 4,

            });

            const filtered = response.data.filter(

                (item) => item._id !== product._id

            );

            setProducts(filtered);

        } catch (error) {

            console.log(error);

        }

    };

    if (products.length === 0) return null;

    return (

        <section className="mt-24">

            <h2 className="text-3xl font-bold mb-10">

                You May Also Like

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {products.map((item) => (

                    <ProductCard
                        key={item._id}
                        product={item}
                    />

                ))}

            </div>

        </section>

    );

};

export default RelatedProducts;