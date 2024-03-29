const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const port = 8080; // You can use any port you like
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
