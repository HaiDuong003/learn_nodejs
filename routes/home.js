// const express = require('express');
import express from 'express';
const router = express.Router();


router.get('/', (request, response) => {
  response.send(`
    <h1>Home page</h1>
  `);
});


export default router