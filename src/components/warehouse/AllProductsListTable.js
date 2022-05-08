import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllProductsListTable = (props) => {
    const { _id } = props.product
    const navigate = useNavigate()
    const [product, setProduct] = useState([props.product])

     // delete item
     const handleDeleteItem = (id) => {
        const proceed = window.confirm("Make Sure to Delete this Item ?")
        if (proceed) {
            const url = `https://floating-inlet-40982.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'delete'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = product.filter(item => item._id !== id)

                        setProduct(remaining)

                    }
                })


        }

    }
    return (
        <>
            {
                product.map(item => <tr>

                 
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.supplierName}</td>
                    <td>
                        <Button onClick={() => navigate(`/inventories/${_id}`)} className="btn btn-primary text-light px-4" >Update</Button>
                    </td>
                    <td>
                        <Button onClick={() => handleDeleteItem(_id)} className="btn btn-danger text-light px-4 border-0" >Delete</Button>
                    </td>
                </tr>
                )
            }


        </>
    );
};

export default AllProductsListTable;