import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateProductCard from './UpdateProductCard';


const UpdateProduct = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `http://localhost:4000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);
    return (
        <div>
            {
                items.map(item => <UpdateProductCard key={item._id} item={item}></UpdateProductCard>
                )
            }

        </div>
    );
};

export default UpdateProduct;