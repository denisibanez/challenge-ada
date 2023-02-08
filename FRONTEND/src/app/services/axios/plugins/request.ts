import axiosApiInstance from '../http/interceptor.service';
type Methods = 'head' | 'options' | 'put' | 'post' | 'patch' | 'delete' | 'get';

export default async (
    {
        method,
        url,
        body,
        headers,
    }: { method: Methods; url: any; body: any; headers: any },
    success: any,
    error: any,
    done = () => {
        console.log('done');
    }
) => {
    try {
        const res = await axiosApiInstance[method](url, body, { headers });
        return await success(res);
    } catch (e) {
        return await error(e);
    } finally {
        done();
    }
};
