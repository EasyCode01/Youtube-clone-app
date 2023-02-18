import MusicNote from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/HomeIcon';
import LiveTvIcon from '@mui/icons-material/LiveTvIcon';


export const categories = [
    {name:'News', icon: <HomeIcon />},
    {name: 'Live', icon: <LiveTvIcon />}
]


// sideBar component 

import { Stack, Button } from '@mui/material';
import { categories } from '../lslk';
import SelectInput from '@mui/material/Select/SelectInput';
 

const selectedCategory = 'News'



const Sidebar = () => (
    <Stack direction="row"
    sx={{overFlow : 'auto', height:{sx:'auto', md:'95vh'},
flexDirection:{md:'column'}}}
    >
        {
            categories.map( category => {
                let {name, icon} = category;
                return(
                    <button 
                    className="category-btn"
                    key={category.name}
                    style = {{backgroundColor: name === selectedCategory
                    && '#FE4566', 
                    color: 'White'}}
                    >

                        <span
                        style = {{color: name === selectedCategory
                        ? 'white' : 'red', 
                    marginRight:'10px'}}
                        >{icon}</span>
                        <span
                        style={{opacity: name === selectedCategory 
                        ? '1' : '.8'}}
                        >{name}</span>
                    </button>
                )
            })
        }
       
    </Stack>
)
