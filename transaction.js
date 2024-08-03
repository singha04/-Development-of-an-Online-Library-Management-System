// routes/transaction.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

router.post('/', async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.json(transaction);
});

router.get('/:id', async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  res.json(transaction);
});

router.put('/:id', async (req, res) => {
  const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(transaction);
});

router.delete('/:id', async (req, res) => {
  await Transaction.findByIdAndRemove(req.params.id);
  res.json({ message: 'Transaction deleted successfully' });
});

module.exports = router;
