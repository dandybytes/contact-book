# 👥 CONTACT BOOK

**Contact Book** is a responsive address book / contact management app made with _React.js_.

![](https://github.com/dandybytes/contact-book/blob/master/docs/contactbook-min.png)


## 👾 Tech Stack

| tool             | description   |
| :---------------------------------------------------:|---------------------------------------------|
| [React](http://facebook.github.io/react/index.html)  | front-end JavaScript-based library          |
| [Redux](https://redux.js.org/)                       | state management system                     |
| [Babel](https://babeljs.io/)                         | ECMAScript transpiler                       |
| [Webpack](https://webpack.js.org/)                   | task management and module bundling toolkit |
| [Netlify](https://www.netlify.com/)                  | cloud hosting solution                      |

## 🔐 Prerequisites

- node
- npm
- yarn (optional)
- netlify-cli (optional)
```sh
npm install netlify-cli -g
```

## 🛠 Installation

```bash
# Clone this repository
$ git clone https://github.com/dandybytes/contact-book.git

# Navigate into the repository
$ cd contact-book

# Install the required dependencies
$ yarn || npm i

# Start the local development server
$ yarn start || npm start
```

## 🚀 Production:
This project is already set up for easy deployment with Netlify:
```sh
# using Yarn
yarn run deploy

# using NPM
npm run deploy
```
To deploy it on a sub-path on another site, fill out the expected relative path in the `PUBLIC_URL` variable in a `.env.production.local` file (example provided in `.env.production.local.sample`).

## 🎓 Features:

-   display contact list
-   expand/collapse contact details
-   add new contact
-   delete existing contact
-   edit existing contact
-   change rendering of contact names (first, last / last, first)
-   sort contact list (e.g. by first name or last name)
-   filter contact list by status (e.g. favorite, blocked)
-   search contacts
-   select the number of contacts to show per page
-   load default contacts from sample list
-   save app state to and load from browser localStorage
