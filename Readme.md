## Clone the repository:

```bash
git clone https://github.com/sammy429b/You_Search.git
```

### Navigate to the client directory:

```bash
cd You_Search\client
```

### Install dependencies:

```bash
npm install
```
or
```bash
yarn install
```

### Start the development server:

```bash
npm run dev
```
or

```bash
yarn run dev
```

### Open the app in your browser:
```bash
http://localhost:5173/
```

# Backend Configuration
Before running the server, you need to configure certain settings. 

### Environment Variables
Create a `.env` file in the root directory of your project and add the following variables:

```plaintext
PORT = 3000
SERPAPI_API_KEY = "Enter_Your_API_Key"
```

### Running the Server
To run the Express server, follow these steps:
1. Open a command line or terminal window.
2. Navigate to the project directory if you haven't already done so.
    ``` 
    cd You_Search\server
    ```
3. Install dependencies by running the following command:
    ```
    npm install
    ```
4. Once the dependencies are installed, start the development server by running the following command:
    ```
    npm run dev
    ```
5. If the server starts successfully, you should see a message indicating that the server is running and listening on a specific port.