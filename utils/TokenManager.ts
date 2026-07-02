import { APIRequestContext , expect } from "@playwright/test";

export class TokenManager{

    static async getToken(request: APIRequestContext): Promise<string> {

        const response = await request.post('https://dummyjson.com/auth/login',
            {
                data: {
                    username: 'emilys',
                    password: 'emilyspass'
                }
            }
        );

        expect(response.status()).toBe(200);

        const responseBody = await response.json()

        return responseBody.accessToken;
    }
}