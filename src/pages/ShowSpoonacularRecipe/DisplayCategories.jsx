import * as React from 'react';
import { Box, Chip } from '@mui/material';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';

const typesArray =
    ["main course",
        "side dish",
        "dessert",
        "appetizer",
        "salad",
        "bread",
        "breakfast",
        "soup",
        "beverage",
        "sauce",
        "marinade",
        "fingerfood",
        "snack",
        "drink"
]

const DisplayCategories = ({ categories }) => {
    

    return (
        <Box
            component={"div"}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    textAlign: 'center',
                    height: 50,
                    lineHeight: '50px',
                    elevation: 6,
                },
            }}
        >
            {categories?.map(category => (
                <Chip
                    label={category}
                    sx={{ backgroundColor:"#E5D3D3",}}
                />
            ))}
        </Box>
    )
}
export default DisplayCategories;
