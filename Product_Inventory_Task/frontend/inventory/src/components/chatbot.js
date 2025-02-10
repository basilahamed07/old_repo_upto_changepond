import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Snackbar,
    CircularProgress,
    Box,
    Paper,
} from '@mui/material';
import { Alert } from '@mui/material';

const ChatBot = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!userInput) {
            setMessage('Please enter a message');
            setOpenSnackbar(true);
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userInput }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setChatHistory((prev) => [
                ...prev,
                { sender: 'User', text: userInput },
                { sender: 'Bot', text: data.response },
            ]);
            setUserInput('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Chat with Bot
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', maxHeight: '400px', overflowY: 'auto' }}>
                {chatHistory.map((chat, index) => (
                    <Box key={index} style={{ marginBottom: '10px' }}>
                        <Typography variant="body1" align={chat.sender === 'User' ? 'right' : 'left'}>
                            <strong>{chat.sender}:</strong> {chat.text}
                        </Typography>
                    </Box>
                ))}
                {loading && (
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress size={24} />
                    </Box>
                )}
            </Paper>
            <TextField
                label="Type your message"
                variant="outlined"
                fullWidth
                margin="normal"
                value={userInput}
                onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
                Send
            </Button>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ChatBot;
