import React, {useState,useEffect} from 'react';
import { getAllItems } from '../../helpers/apicalls';
const IndexPage = () => {
    const[items,setItems] = useState([]);


    useEffect(() => {
        fetchAllItems();
    },[])
    
    const fetchAllItems = async () => {
        try{
            const responde = await getAllItems();
            setItems(responde);
        } catch (error) {
            console.error('Error fetching items', error)
        }
    }

    return (
        <div>
        
            <h1>Porperty Listing</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                     <h3>{item.title}</h3>
                     <p>{item.descriptions}</p>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default IndexPage;
