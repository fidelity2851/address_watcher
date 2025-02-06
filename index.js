require('dotenv').config();
const express = require('express');
const { ethers } = require("ethers");

const app = express();
const port = process.env.PORT || 3000;

// Create provider (Only pass the URL, do not pass a network parameter)
    const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/KuxiuG2jRKnXufMcLsvfLvea1g6j2rt4");

// Test connection
provider.on('pending', async (txHash) => {
    const tx = await provider.getTransaction(txHash);
    console.log('Transfer detected:', tx);

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
