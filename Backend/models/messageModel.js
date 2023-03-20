const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const messageSchema = new mongoose.Schema({
  sender_msg_id: {
    type: String,
  },
  recipient_msg_id: {
    type: String,
  },
  chat_message: {
    type: String,
  }  
})


const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
