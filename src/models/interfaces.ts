export interface IError {
  data: {
    message: string;
    stack: string;
  };
  status: number;
}

export interface IParam {
  cd: string;
}

export interface IUser {
  id?: string | number;
  name?: string;
  email?: string | number | null;
  phone?: string | number;
  description?: string | string[];
  token?: string;
}

export interface IСaptcha {
  token: string;
}

export interface IСaptchaRes {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  errorСodes: string[];
}
