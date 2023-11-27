const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const getUsers = catchAsync(async (req, res) => {
  const result = await userService.getUsers();

  res.send(result);
});

module.exports = {
  getUsers,
};
