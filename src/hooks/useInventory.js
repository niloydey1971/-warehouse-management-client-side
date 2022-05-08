import { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        
        fetch("https://floating-inlet-40982.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return [items, setItems]
};

export default useInventory;