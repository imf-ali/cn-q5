class ApplicationError extends Error{
  constructor(message, status){
    super(message);
    this.status = status;
  }
};

export const applicationErrorHandler = (err, req, res, next) => {
  if(err instanceof ApplicationError){
    return res.status(err.status).json({ success: false, message: err.message });
  }
  return res.status(400).json({ success: true, message: 'Something went wrong' });
}

export default ApplicationError;