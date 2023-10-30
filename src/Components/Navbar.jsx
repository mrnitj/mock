import '../Style/Navbar.css'

import React from 'react'
import { Stack, Box, Typography, Button,IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()


return(


    <Stack className='Navbar_Main_Stack' 
    sx={{
        height: '4rem', backgroundColor: 'Transparent', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'    


    }}>

        <Box>
            <Typography sx={{ fontFamily: 'Mina', fontSize: '1.5rem' }}>
                My Products
            </Typography>
        </Box>
        
        
       



        <Box sx={{ display: 'flex', gap:'1rem' }}>
            <Typography sx={{ fontFamily: 'Mina', fontSize: '1.1rem',cursor:'pointer' }}
            
            onClick = {()=>navigate('/shop')}
                       >
               Shop
            </Typography>
            <Typography sx={{ fontFamily: 'Mina', fontSize: '1.1rem',cursor:'pointer'  }}>
               cart
            </Typography>
            <Typography sx={{ fontFamily: 'Mina', fontSize: '1.1rem',cursor:'pointer'  }}>
                Login
            </Typography>
        </Box>



    </Stack>
)
}

export default Navbar