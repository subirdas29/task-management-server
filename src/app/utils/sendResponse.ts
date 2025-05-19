import { Response } from 'express';

type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?: TMeta;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    meta: data?.meta,
    statusCode: data?.statusCode,
    data: data.data,
  });
};

export default sendResponse;
