import { useEffect, useState } from "react";
import { getProducts } from "../products/laptopsList";

const MapsMock = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts()
         .then(resp => {
            setProducts(resp);
            setIsLoading(false);
         });
    }, []);

    return(
        <section className="d-flex justify-content-center flex-wrap container">
            { isLoading ? <h3>Cargando Productos...</h3> : products.map(product => (
                <div key={product.id} className="card" style={{ width: "18rem" }}>
                    <img src={product.img} className="card-img-top" alt="..." height={250} />
                    <div className="card-body" style={{ height: 160 }}>
                        <h5 className="card-title">{product.name} - {product.price}</h5>
                        <p className="card-text">{product.descripcion} - Stock: {product.stock}</p>
                        <a href="#" className="btn btn-primary">Ver mas</a>
                    </div>
                </div>
            )) }
        </section>
    );
};

export default MapsMock;