import { test, expect, request } from '@playwright/test';
import { TokenManager } from '../utils/TokenManager';

test('Create New Post API Test', async({ request}) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts',
    {
        data: 
        {
            title: 'Playwright API Testing',
            body: 'First POST request using Playwright'
        }
    }
);

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

});


test('Get Post API Test', async ({ request }) => {

    //Returns API response - so responseBody contain status-Headers-Metadata
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    
    //This converts the response into JSON
    const responseBody = await response.json();

    expect(response.status()).toBe(200);

    console.log(responseBody.id);
    console.log(responseBody.title);

});


test('Update Post API Test', async ({ request}) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                id: 1,
                title: 'Updated Playwright API Testing',
                body: 'Learning PUT Request',
                userId: 1
            }
        }

    );

    expect(response.status()).toBe(200);
    
    console.log("Status code:", response.status());

    const responseBody = await response.json();

    console.log(responseBody);
});

//Delete
test('Delete Post API Test', async ({ request}) =>{

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    console.log("Status code:", response.status());

    expect(response.status()).toBe(200);

});

//Path Parameter
test('Get User By ID', async({ request })=> {

    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody.name);

});

//Query Parameter
test('Get User By Query Parameter', async({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users?id=1');

    expect(response.status()).toBe(200);

    console.log('Status code:', response.status());

    const responseBody = await response.json();

    console.log(responseBody[0].name);
});


//Login API
test('Login API - DummyJSON', async({ request }) => {

    const response = await request.post('https://dummyjson.com/auth/login',
        {
            data: {
                username: 'emilys',
                password: 'emilyspass'
            }
        }
    );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        console.log("Status Code:", response.status());
        console.log("Access Token:", responseBody.accessToken);
        console.log(responseBody);
});

//
test.only('Get Token Using Utility', async({ request }) => {

        const token = await TokenManager.getToken(request);

        console.log(token);
});