import { test, expect } from '@playwright/test';

test('Get Post API Test', async ({ request }) => {

    //Returns API response - so responseBody contain status-Headers-Metadata
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    
    //This converts the response into JSON
    const responseBody = await response.json();
    
    console.log(responseBody.id);
    console.log(responseBody.title);

});