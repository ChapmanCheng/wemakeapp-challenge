# WeMakeApp Code Challenge

## init

To start development, run the following commands:

1. copy `.env.example` to `.env.local`
2. copy your ProductHunt.com keys to .env.local  
though the app fetches oauth token, the graphql data uses the __DEV TOKEN__ to fetch product and collections (__TEST ONLY__)
3. then run `yarn && yarn dev`

## Problems
Product Hunt Api has cors error despite provided the necessary headers and body
Tried with another graphql api [endpoint](https://48p1r2roz4.sse.codesandbox.io) from Apollo Get Started tutorial, it worked 
