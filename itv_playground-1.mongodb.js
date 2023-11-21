// show dbs;
db;

use('sample');
db;

use('sample');
db.users.insertOne({
    name:"scott",
    age:18
});

use('sample');
db.users.insertOne({
    name:"mike",
    age:19
});

use('sample');
db.users.find()