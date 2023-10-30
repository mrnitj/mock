import '../Style/Shop.css'
import { Box, Button, Card, CardMedia, Stack,CardContent, Typography } from '@mui/material'

import axios from 'axios'



import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
    const navigate = useNavigate();

    // const dispatch = useDispatch();
    // const produc = useSelector((state) => state.Prod);
    // console.log('dispatched',produc);
    
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Error", err);
        });
        setProducts(response.data)
        // dispatch(productsList(response.data));
        // console.log(response);
        
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log('produts', products);
      return (
      <Stack spacing={2} sx={{height:'100vh', backgroundColor:'lightblu'}}>
        <Navbar/>

        <Stack className='Shop_Main_Stack' sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'1rem'}}>

            {
                products.map((prod)=>(


        <Card sx={{height:'194', width:'15rem', boxShadow:'none'}}>
            <CardMedia
            component={'img'}
                height='194'
                image={prod.image}
            />
            <CardContent>
                <Typography>
                    {prod.title}
                </Typography>
                <Typography>
                   ${prod.price}
                </Typography>
               
            </CardContent>
        </Card>
                ))
            }

       

        </Stack>

    </Stack>
  )
}

export default Shop