import '../App.css';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ContentWarnings() {
    const [isVisible, setIsVisible] = useState(true);
    const [showSpoilers, setShowSpoilers] = useState(false); // State for showing spoilers

    const handleClose = () => {
        alert("Thanks and enjoy!");
        setIsVisible(false);
    };

    const handleViewSpoilers = () => {
        setShowSpoilers(prev => !prev);
    };

    if (!isVisible) return null; // Don't render if not visible

    return (
        <>
            <Box className="main_content" sx={{ marginTop: '10px' }}>
                <Box sx={{ margin: '10px' }}>
                    <Typography variant="h1" sx={{ color: theme => theme.palette.primary.light }}>Content Warning</Typography>
                    <Typography variant="h6" sx={{ color: theme => theme.palette.primary.light }}>
                        Games made by Datura's Crow Games contain content that some players may find distressing, including:
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme => theme.palette.primary.light, margin: '10px 0' }}>
                        - Violence and gore
                        <br />
                        - Strong language
                        <br />
                        - Themes of mental health
                        <br />
                        - References of suicide
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={handleClose} sx={{ margin: '10px' }}>
                        Acknowledge
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleViewSpoilers} sx={{ margin: '10px' }}>
                        View Spoilers To Learn More Details About Content Warnings
                    </Button>
                </Box>

                {/* Spoilers section */}
                {showSpoilers && (
                    <Box sx={{ margin: '10px', marginTop: '20px' }}>
                        <Typography variant="h6" sx={{ color: theme => theme.palette.primary.light }}>Spoilers</Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="violence-content" id="violence-header">
                                <Typography variant="body1">Violence and Gore</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Detailed descriptions of violent acts, including blood and injuries.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="language-content" id="language-header">
                                <Typography variant="body1">Strong Language</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Frequent use of profanity and offensive language.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="mental-health-content" id="mental-health-header">
                                <Typography variant="body1">Themes of Mental Health</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Exploration of mental health issues and their impact on individuals.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="suicide-content" id="suicide-header">
                                <Typography variant="body1">References of Suicide</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Content includes discussions of suicidal thoughts and actions.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                )}
            </Box>
        </>
    );
}
