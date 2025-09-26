import {config } from 'dotenv';


main();
function main (){
    config();

    if(process.env.PORT === undefined){
        throw new Error("PORT is not defined");
    }

    const port = parseInt(process.env.PORT);
    console.log(`Server is running on port ${port}`);
}