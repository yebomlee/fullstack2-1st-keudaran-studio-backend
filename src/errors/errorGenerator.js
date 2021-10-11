const DEFAULT_HTTP_STATUS_MESSAGES = {
  400: 'Bad Requests',
  401: 'Unauthorized',
  403: 'Foribdden',
  404: 'Not Found',
  409: 'Duplicate',
  500: 'Internal Server Error',
  503: 'Temporary Unavailable',
};

const errorGenerator = (num = 500, message = '') => {
  const err = new Error(message || DEFAULT_HTTP_STATUS_MESSAGES[num]);
  err.statusCode = num;
  console.log(err);
  throw err;
};

export default errorGenerator;
