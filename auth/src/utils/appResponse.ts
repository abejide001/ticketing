const sendSuccessResponse = (res: any, code: any, data:any) => {
  return res.status(code).json({
    status: "success",
    data,
  });
};

const sendFailureResponse = (res: any, code: any, data:any) => {
  return res.status(code).json({
    status: "fail",
    message: data,
  });
};

export {
  sendFailureResponse,
  sendSuccessResponse
}