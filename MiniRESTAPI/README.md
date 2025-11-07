\# Mini REST API



A simple \*\*Node.js REST API\*\* built using only the native `http` and `fs` modules.

This project demonstrates how to handle \*\*GET\*\* and \*\*POST\*\* requests, log each request to a file, and send responses for different routes — all without external frameworks like Express.



---



\## 🚀 Features



\* Handles multiple HTTP methods (`GET`, `POST`)

\* Simple route management using `switch` statements

\* Logs every incoming request (method, path, timestamp) into `log.txt`

\* Clean, minimal example of a native Node.js REST API



---



\## 📂 Folder Structure



```

mini-rest-api/

├── index.js        # Main server file

├── log.txt         # Automatically created, stores all request logs

└── package.json    # Project configuration

```



---



\## ⚙️ Installation



1\. Clone the repository:



&nbsp;  ```bash

&nbsp;  git clone https://github.com/<your-username>/mini-rest-api.git

&nbsp;  cd mini-rest-api

&nbsp;  ```



2\. Install dependencies (optional, only if @types/node is included):



&nbsp;  ```bash

&nbsp;  npm install

&nbsp;  ```



3\. Start the server:



&nbsp;  ```bash

&nbsp;  npm start

&nbsp;  ```



---



\## 🧠 API Endpoints



\### `GET /`



Returns a friendly greeting.



```

Hello from the server :)

```



\### `GET /contact-us`



Returns contact information.



```

Email: srivatsava47@gmail.com, Phone: 9999999

```



\### `GET /tweet`



Returns mock tweet data.



```

Tweet1

Tweet2

```



\### `POST /tweet`



Simulates creating a tweet.



```

Your tweet was created

```



\### Any Other Route



Returns:



```

400 Bad Request - You're lost

```



---



\## 🪵 Logging



Each request is appended to `log.txt` in the following format:



```

\[1731012345678]: GET /tweet

```



(The timestamp is in milliseconds since the Unix epoch.)



---



\## 🧰 Tech Stack



\* \*\*Node.js\*\* (built-in `http` and `fs` modules)

\* \*\*No external dependencies\*\*



---



\## 💡 Use Cases



\* Learning how HTTP servers work internally in Node.js

\* Testing with Thunder Client, Postman, or curl

\* Practicing REST fundamentals without frameworks



---



\## 📜 License



This project is open source and available under the \[MIT License](LICENSE).





