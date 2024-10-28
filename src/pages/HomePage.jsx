import { Box, Typography } from "@mui/material";
import CoverArt from '../assets/placeholdercoverart.png'

export default function HomePage() {
    return (
        <>
            <Box className='main_content'>
                <Box sx={{margin: '10px'}}>
                <Typography variant="h1">
                    Welcome to Daturas Crow Games
                </Typography>
                <Typography variant="h3" sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}> <i>
                    Every Choice Reveals Secrets Untold.
                </i>
                </Typography>
                <Box sx={{ display: 'flex'}}>
                    <img src={CoverArt} alt='image of game cover art' className="cover_art" />
                    <Box sx={{ color: theme => theme.palette.primary.light}}>
                        <Typography variant="h3">
                            The Mysteries of Stonewood Forest
                        </Typography>
                        <Typography sx={{ color: theme => theme.palette.primary.light }}>
                            first game published by us Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta, ex ab, inventore magnam officia ratione exercitationem ipsa iusto odio necessitatibus saepe ipsum modi aliquam repellendus sapiente, et assumenda ad.
                        </Typography>
                    </Box>
                </Box>
                </Box>
            </Box>
        </>
    )
}