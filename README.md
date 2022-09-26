## Installation

-   First Create MongoDB Atlas then create database and collection named contacts
-   Download zip or clone source code using git clone command
-   Open source code on code editor
-   Create .env file
-   Create DB_Connection dan PORT variable in .env file
-   Store MongoDB connection on DB_Connection variable
-   Open terminal and then enter `npm install` command
-   After installing the package enter `npm run start` to running API

## API ROUTE

### GET

-   Route : `/api/contact`

### POST

-   Route : `/api/contact/create`
    -   add JSON request firstName, lastName, phoneNumber, and address on body

### PUT

-   Route : `/api/contact/edit/:id`,
    -   add contact id as parameter
    -   add JSON request firstName, lastName, phoneNumber, and address on body

### PATCH

-   Route : `/api/contact/update/:id`
    -   add contact id as parameter
    -   add JSON request firstName, lastName, phoneNumber, and address on body

## DELETE

-   Route : `/api/contact/delete/:id`
    -   add contact id as parameter
