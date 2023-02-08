import request from '../plugins/request';
import { environment } from '../../../../environments/environment';

export class HomeService {
    async getList(payload: any, success: any, error: any, done: any) {
        const req: any = {
            method: 'get',
            url: `${environment.FAKE}`,
        };
        return await request(req, success, error, done);
    }
}
