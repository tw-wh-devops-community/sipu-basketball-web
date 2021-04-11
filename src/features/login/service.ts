import { AxiosBasicCredentials } from 'axios';
import { HttpClient } from '../../app/http/http-client';

class LoginService extends HttpClient {
  async login(authInfo: AxiosBasicCredentials): Promise<any> {
    return this.instance.post('/api/authorize', authInfo).then((res) => res.data);
  }
}

export default new LoginService();
