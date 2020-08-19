function parseError(err) {
    let parsedError = {
      message: 'Some Problem Occured',
    };
  
    if (err.response) {
      if (err.response.data &&  err.response.status === 400) {
        parsedError = {
          ...parsedError,
          message: err.response.data,
        };
      }
    }
  
    return parsedError;
  }
  
  
  export const errorParser = {
    parseError,
  };
  