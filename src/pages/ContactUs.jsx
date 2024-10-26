import { TextField, Button, Typography, Box } from '@mui/material';
import emailjs from 'emailjs-com';
import { useRef } from "react";
import '../app.css';

const serviceId = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
//const publicKey = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const userId = import.meta.env.REACT_APP_EMAILJS_USER_ID;

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_edl3uvs', 'template_4m49cun', form.current, '5T74TsyhEddQgECCZ')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <Box className="main_content">
            <Typography variant="h1" sx={{ color: theme => theme.palette.primary.light, margin: '10px' }}>
                Contact US!!
            </Typography>
            <Box
                component="form"
                ref={form}
                onSubmit={sendEmail}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', color: theme => theme.palette.primary.light }}
            >
                <Typography variant="h6" gutterBottom>Contact Us</Typography>
                <TextField label="Name" name="name" variant="outlined" required />
                <TextField label="Subject" name="subject" variant="outlined" required />
                <TextField label="Email" name="user_email" variant="outlined" type="email" required />
                <TextField label="Message" name="message" variant="outlined" multiline rows={4} required />
                <Button variant="contained" color="primary" type="submit">Send</Button>
            </Box>
        </Box>
    );
}
