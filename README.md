
## Description

Backend section for the quest-log application

## Remarks
  As said, I only worked 3 hours on it as I am sadly really busy and that's all I could afford  
  Due to insufficient time, I only generated the quest api 
  
  I was planning on doing the following:
- I was planning on adding a User table
- I was going to add an api to add user / link it to the quests they've done
- Able to change status for a specific quest listing for the user
- Add aggregation functionality to that user api to get leaderboard standings

## Difficulties

  I had a few issues with new package versions (specifically Jest & MongoDB), 
The new packages had a different styling to them and even though they run, Typescript marks them as errors so I wanted
  to solve those issues, which took me at least 30 minutes of research if not more which could help me finish the User 
  api because all of the infrastructure for the repo has been prepared, including tests. 

## Design decisions

  I decided to make a base mongo service for future features that will all share the core functionality (find, fineOne, Upsert)  
- findOne - specific quest / user status retrieval
- upsert - to add users / quests 
- find - base functionality that I planned on using in the implementation I didn't get to

I feel like this architecture is really convinient  and has a clear intention of what services are shared by features and what 
functionality is feature specific, allowing to edit code simply and effectively if needed.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
