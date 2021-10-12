const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
  console.error(err);

  if (statusCode === 404) {
  }

  res.status(statusCode || 500).json({ message });
};

export default errorHandler;
