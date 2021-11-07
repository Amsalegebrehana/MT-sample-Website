# MT-talent

## **Introduction**
this is the backed implementation of MT sample project 
 
> technology 
 * node js
 * express
 * mongodb

> **API ENDPOINT ⚙️**

http://localhost:5000/api

### user endpoint
```diff
+ POST 
/user/login
/user/register

+ GET all user
/user

+ GET user by id
/user:userID 

+GET logout user
/user/logout

! PUT update user profileImg 
/user:userID 

- DELETE user by id
/user:userID 

```
### company endpoint
```diff
+ POST 
/company/login
/company/register

+ GET all company
/company

+ GET company by id
/company:companyID 

+GET logout company
/company/logout

! PUT update company profileImg 
/company:companyID 

- DELETE company by id
/company:companyID 

```
 ### job endpoint
```diff
+ POST post new job 
/job/post

+ GET all posted jobs 
/job/all

+ GET job by posted company 
/job:postBy 

! PUT update posted job
/job:jobID 

- DELETE delete posted jobs 
/job:jobID

``` 

> user api response example

```json
 {
        "_id": "6187e418fade34bef8b27d26",
        "firstName": "Lillian ",
        "lastName": "Burgess",
        "gender": "male",
        "email": "leonorcross@gronsk.com",
        "profileImg": "avatar.png",
        "address": "A.A",
        "skill": [
            "React",
            "Node.js",
            "Flutter"
        ],
        "skillLevel": "intermediate",
        "category": "Flutter Developer"
    }

```
> company api response example

```json
   {
        "_id": "6187e5f9608b056f4dc67600",
        "businessName": "MT PLC",
        "logo":"logo.png",
        "email": "mtplce@gmail.com",
        "description": "new start up PLC",
        "address": [
            "A.A"
        ],
        "category": "start up"
    }
```
> job api response example
```json
   {
        "_id": "6187e153829994bd6b186adb",
        "postBy": "618791d2745bc5f37d371a09",
        "companyName": "Top Jobs ",
        "jobTitle": "Website content writer and social media manager",
        "jobRequirements": [
            "Driving traffic for our our websites applicants should be good at English"
        ],
        "description": "Top Jobs is looking for applicants for the position of content writer and social media manager",
        "jobType": "full-time",
        "salary": "800birr/month and commission per your success rate",
        "jobEndDate": "2021-11-07T00:00:00.000Z",
        "category": "Web Developer",
        "CreateAt": "2021-11-07T14:23:15.956Z",
        "__v": 0
    }
```

