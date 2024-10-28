import { Box, Typography } from "@mui/material";

export default function StoneWood() {
    return (
        <Box className="main_content">
            <Box sx={{ margin: '10px' }}>
                <Typography variant="h1">
                    The Mysteries of Stonewood Forest
                </Typography>
                <Typography variant="h3" sx={{ color: theme => theme.palette.primary.light }}>
                    Uncover the Secrets of the Monoliths
                </Typography>
                <Typography variant="body1" sx={{ color: theme => theme.palette.primary.light }}>
                    Dive into the chilling world of Mysteries Of Stonewood Forest, an immersive horror narrative video game where friendship, morality, and ancient folklore collide. Join Rory, Levi, Elliot, Ira, and Carmen as they venture deep into a mysterious forest in search of legendary stone monoliths, only to find themselves ensnared in a web of fear and dark secrets.
                </Typography>
                <Typography variant="h3" sx={{ color: theme => theme.palette.primary.main}}>
                    About the game
                </Typography>
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    What begins as a simple exploration quickly descends into a harrowing fight for survival. After days hiking in the woods, the friends feel an ominous presence lurking in the shadows, preventing them from reaching their destination. When they finally uncover the monoliths, they realize these ancient stones hold terrifying power. Players can immerse themselves in the story from the perspective of each character, unlocking distinct narratives and choices that impact their shared adventure. Your decisions will not only determine Rory’s fate but also influence the journeys of Levi, Elliot, Ira, and Carmen, weaving a rich tapestry of relationships and moral dilemmas that challenge their connections.
                </Typography>
                <br />
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    As you guide Rory on her quest for answers, your choices will shape her journey and the fate of her friends. Determined to uncover the truth behind her brother’s descent into madness after his time lost in the forest, Rory seeks to understand the dark presence that haunts these woods. What is the shadow creature lurking just out of sight, and what secrets do the ancient monoliths conceal? Will you help her confront the darkness, or will your decisions lead to unforgivable actions that could unravel the fragile barriers protecting their world?
                </Typography>
                <Box>
                    <img src="" alt="" />
                    <Typography sx={{ color: theme => theme.palette.primary.light }}>
                        Rory
                    </Typography>
                    <Typography sx={{ color: theme => theme.palette.primary.light }}>
                        About Aurora (Rory)  Wendell
                    </Typography>
                </Box>
                <Box>
                    <img src="" alt="" />
                    <Typography sx={{ color: theme => theme.palette.primary.light }}>
                        Levi
                    </Typography>
                    <Typography sx={{ color: theme => theme.palette.primary.light }}>
                        About Levi Caldwell
                    </Typography>
                </Box>
                <Box>
                <img src="" alt="" />
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    Ira Berg
                </Typography>
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    About Ira  Berg
                </Typography>
                </Box>
                <Box>
                <img src="" alt="" />
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    Carmen May
                </Typography>
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    About Carmen May
                </Typography>
                </Box>
                <Box>
                <img src="" alt="" />
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    Elliot Knox
                </Typography>
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    about Elliot Knox
                </Typography>
                </Box>
                
                <Typography variant="h3" sx={{ color: theme => theme.palette.primary.main}}>
                    Key Features
                </Typography>
                
                {/* Use a separate Box for the list */}
                <Box sx={{ color: theme => theme.palette.primary.light, fontFamily: 'Amatic SC' }}
                >
                    <ul>
                        <li>
                            <b>Multiple Playable Characters:</b> Experience unique storylines and perspectives. Switch between characters to unlock different narratives and endings.
                        </li>
                        <li>
                            <b>Dynamic Choice System:</b> Every decision matters. Shape the story and influence the fate of the seals through moral dilemmas.
                        </li>
                        <li>
                            <b>Atmospheric Horror:</b> Explore a beautifully crafted world filled with haunting landscapes and unsettling folklore.
                        </li>
                        <li>
                            <b>Engaging Storytelling:</b> Immerse yourself in a gripping narrative that challenges your beliefs about friendship and sacrifice.
                        </li>
                    </ul>
                </Box>
                <Typography variant="h3" sx={{ color: theme => theme.palette.primary.main}}>
                    Stay Connected
                </Typography>
                <Typography sx={{ color: theme => theme.palette.primary.light }}>
                    Join our community of players and fans! Follow us on social media for the latest updates, behind-the-scenes content, and exclusive sneak peeks. Share your theories and experiences with fellow adventurers as you unravel the mysteries of the monoliths.
                </Typography>

            </Box>
        </Box>
    )
}
