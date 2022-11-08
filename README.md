## Project Structure

1. Add Header 
   1.1 Generate Componet
   1.2 Add HTML
   1.3 Add CSS

2. List Foods
   2.1 Create Food model
   2.2 Create data.ts
       2.2.1 Add sample foods
   3. Add images to assets
   4. Create Home component
       4.1 Add ts
       4.2 Add html
       4.3 Add css

3. Search 
    3.1 Add method to Food service
    3.2 Add search route
    3.3 show search result in Home component
    3.4 Generate search component
        3.4.1 Add to Home component
        3.4.2 Add TS
        3.4.3 Add HTML
        3.4.4 Add CSS

4. Tags Bar 
     4.1. Create Tag model
     4.2. Add sample tags to data.ts
     4.3. Food Service 
        4.3.1 Add get all tags method
        4.3.2 Add get all foods by tag method
    4.4. Add tags route 
    4.5. Show tag result in Home component
    4.6. Generate tags component
       4.6.1 Add to home component
       4.6.2 Add ts
       4.6.3 Add html
       4.6.4 Add css

5. Food Page
   5.1 Add method to food service
   5.2 Generate Food Page Component
       5.2.1 Add Route
       5.2.2 Add ts
       5.2.3 Add html
       5.2.4 Add css

5. Cart Page

    5.1 Create CartItem Model
    5.2 Create Cart Model
    5.3 Generate Cart service
    5.4 Add to Cart Button in Food Page
    5.5 Generate Cart page  component
         5.5.1 Add Route
         5.5.2 Add ts
         5.5.3 Add html
         5.5.4 Add css

6. Not Found!

   6.1 Generate Component
        6.1.1 Add ts
        6.1.2 Add html
        6.1.3 Add css
   6.2 Add To Pages
        6.2.1 Home Page
        6.2.2  Food Page
        6.2.3  Cart Page

7. Connect To Backend

    7.1 Create backend folder
    7.2 npm init
    7.3 npm install typescript
    7.4 Create tsconfig.json
    7.5 Create .gitignore
    7.6 Copy data.ts to backend/src
    7.7 npm install express cors
    7.8 Create server.ts
         7.8.1 install @types
         7.8.2 Add Apis
    7.9 npm install nodemon ts-node        --save-dev
    7.10 Add urs.ts to frontend
    7.11 Add HttpClient module
    7.12 Update food service

8. Login Page

    8.1 Generate Component

       8.1.1 Add to routes
       8.1.2 Add ts
       8.1.3 Add html
            8.1.3.1 Import Reactive Forms Module
       8.1.4 Add Css
    8.2 Add Login Api
        8.2.1 Use json
        8.2.2 Add jsonwebtoken
        8.2.3 Test Using Postman   



9. Generate User Service

Generate User model
Add User Subject
Add Login Method
Add User Urls
Generate IUserLogin interface
Add ngx-toastr
Import Module
Import BrowserAnimationsModule
Add styles in angular.json
Add to Header
Add Local Storage methods
Add Logout Method
Add to Header


10. Make Components For Login Page

Input Container
Input Validation
Text Input
Default Button


11. Connect Login API To MongoDB Atlas

Moving Apis into routers
Create MongoDB Atlas
Create .env file
Install
mongoose
dotenv
bcryptjs
express-async-handler
Connect to MongoDB Atlas
Use MongoDB instead of data.ts in apis


12. Register User

Add Register api
Add Register service method
Add Register link
Add Register Component

13. Loading!

Add Image
Add Component
Add Service
Add Interceptor


14. Checkout Page

Create Order Model
Create Checkout Page Component
Add To Router
Add User to User Service
Add Cart to Cart Service
Create Order Items List Component
Adding Map To The Checkout Page
Add Leaflet npm package
Add @types/leaflet
Add Css to angular.json
Add AddressLatLng to Order Model
Create Map component
Add to checkout page
Add TS
Change app-map selector to map
Add Html
Add CSS
Add Auth Guard


15. Save Order
Add Order Model
Add Order Status Enum
Add Auth Middleware
Add Order Router
Add create API
Add Order Urls to urls.ts
Add Order Service
Add create Method
Add Auth Interceptor


16. Payment Page

Generate Component
Add 'getOrderForCurrentUser' api
Add Order Service method
Connect Component to Service
Make the map component readonly


17. Adding Paypal

Generate Component
Add to payment page
Get Paypal client Id
Add Paypal JS to index.html
Set up Paypal button
Add Pay api to order router
Get Paypal sandbox account


18. Order Track Page

Generate Component
Add to routes
Add API
Add to urls.ts
Add method to order.service
Add HTML
Add CSS


19. Deploy On Heroku

OutputPath in angular.json
package.json
frontend
backend
root
BASE_URL in urls.ts
Public folder config in server.ts
Run commands
Add built folder to .gitignore
Commit and Push