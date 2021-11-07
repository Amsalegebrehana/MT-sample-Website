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