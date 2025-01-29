import { AxiosError } from "axios";

export default interface APIResponse<T = any> {
  data: T;
  loading: boolean;
  error: AxiosError | null;
}
