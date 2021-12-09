// firsttoken : 3CjZ6CxMIkxiwjFu8PVHxXEpNSckJeZT5lNn8eQzUw4SWGPsEo6bBplbPEd8
import React from 'react'


const api_url = 'https://soccer.sportmonks.com/api/v2.0/leagues?api_token=3CjZ6CxMIkxiwjFu8PVHxXEpNSckJeZT5lNn8eQzUw4SWGPsEo6bBplbPEd8';

async function getInfo(){

    console.log("yay");

    const response = await fetch(api_url);
    const answer = await response.json();
    console.log(answer);

}

getInfo();


