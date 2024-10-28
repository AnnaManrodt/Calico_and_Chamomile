import '../app.css';
import '../stylesheets/the_team.css'
import '../stylesheets/imgs.css'
import placerHolder from '../assets/placeholderprofileimg.png'
import { Box, Typography } from '@mui/material';

export default function TheTeam() {
    return (
        <>
            <Box className="main_content">
                <Typography variant="h1" sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}>
                    Meet the Team!!
                </Typography>
                <Box className="main_profile_content">
                    <img src={placerHolder} alt='' className='profile_img' />
                    <Box className="text_profile_content">
                        <Typography variant='h3' sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}>Anna </Typography>
                        <Typography sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}>this is a short paragrahp descripting this person </Typography>
                    </Box>
                </Box>
                <Box className="main_profile_content"> 
                    <Box className="text_profile_content">>
                        <Typography variant='h3' sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}>Isabel  </Typography>
                        <Typography sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}>this is a short paragrahp descripting this person </Typography>
                    </Box>
                    <img src={placerHolder} alt='' className='profile_img' />
                </Box>
                <Box className="main_profile_content">
                    <img src={placerHolder} alt='' className='profile_img' />
                    <Box className="text_profile_content">>
                    <Typography variant='h3' sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}>Artist </Typography>
                    <Typography sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}>this is a short paragrahp descripting this person </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}