const Message = require("../models/userMessage");
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require("../models/userModel");

exports.sendChat = catchAsync(async(req, res, next) => {
  const senderChat =await User.create({
    
  })

})