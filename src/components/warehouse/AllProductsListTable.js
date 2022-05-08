import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllProductsListTable = (props) => {
    const { _id } = props.product
    const currentProduct = props.product
    const navigate = useNavigate()
    const [product, setProduct] = useState([currentProduct])
    return (
        <div>
            {
                product.map(item => <tr>

                    {/* <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>${item.quantity}.0</td>
                    <td>{item.supplierName}</td> */}
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>${item.quantity}.0</td>
                    <td>{item.supplierName}</td>
                    <td>
                        <Button onClick={() => navigate(`/inventories/${_id}`)} className="btn btn-primary text-light px-4" >Update</Button>
                    </td>
                    <td>
                        <Button className="btn btn-danger text-light px-4 border-0" >Delete</Button>
                    </td>
                </tr>
                )
            }


        </div>
    );
};

export default AllProductsListTable;