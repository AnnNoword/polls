# Employee Poll project

Employee Poll project - a web app that lets an employee create polls for coworkers. Users are able to answer polls, see new polls or polls they haven’t answered, see other people's votes, create polls and review the leaderboard.

## TL;DR

To review project:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- run project tests with `npm test`

## A list of Files

```bash
├── README.md - This file.
├── package.json # npm package manager file
├── tailwind.config.js # tailwind configuration
├── babel.config.js # Babel configuration
├── jest.config.js # Jest configuration
├── public
│   ├── favicon.ico # React Icon
│   └── index.html 
└── src
    ├── actions # Folder with action creators
        ├── authedUser.js # AuthedUser actions
        ├── questions.js # Questions actions 
        ├── shared.js # Shared actions 
        ├── users.js # Users actions 
    ├── components # Folder with components 
        ├── elements # Folder with reusable components
            ├── Button.js # Component for a button
            ├── Input.js # Component for an input field
        ├── question # Folder with action creators
            ├── AddQuestion.js # Add question component
            ├── AnswerQuestion.js # Answer Question component 
            ├── Question.js # Question component 
            ├── QuestionsList.js # Component for questions lists
        ├── App.js # Root Component with routing
        ├── Dashboard.js # Component for Dashboard section
        ├── Leaderboard.js # Component for Leaderboard section
        ├── Login.js # Login section
        ├── Nav.js # Navigation section
    ├── dist # Component for display a Book shelf
        ├── output.css # file with compiled styles
    ├── middleware #
        ├── index.js # middleware apply
        ├── logger.js # project logging
    ├── reducers # Folder with reducers
        ├── authedUser.js # AuthedUser reducers
        ├── index.js # Combine reducers 
        ├── questions.js # Questions reducers 
        ├── users.js # Users reducers
    ├── tests # tests for app components and data 
        ├── _DATA.test.js # tests for data submit
        ├── AddQuestion.test.js # tests for Add question component
        ├── App.test.js # tests App component
        ├── Leaderboard.test.js # tests for Leaderboard component
        ├── Login.test.js # tests for Login component
    ├── utils # 
        ├── api.js # backend
    ├── _DATA.js # A JavaScript API for the provided Udacity backend.
    └── index.js # DOM rendering.
```

## Author

* **Anna Sablina** 
