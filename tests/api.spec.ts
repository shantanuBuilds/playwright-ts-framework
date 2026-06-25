import { test, expect, request } from '@playwright/test';

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