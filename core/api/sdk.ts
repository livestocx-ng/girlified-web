
import { appAxiosInstance } from './axios-instance';
import { MeApi, SupportApi } from '../sdk/account';

export const ServerPath = process.env.NEXT_APP_CORE_SERVICE_HOST;

export const supportApi = new SupportApi(undefined, ServerPath, appAxiosInstance);
