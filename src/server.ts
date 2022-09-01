const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req: any, res: any) => {
    res.send("Welcome to Express!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});