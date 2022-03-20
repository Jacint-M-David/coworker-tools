const members = [
    {
        "first name" : "John",
        "last name" : "Doe",
        "job title" : "Software Engineer",
        "deparment" : "Engineering",
        "manager" : null,
        "location" : "Glasgow",
        "first aider" : false,
        "slack user name" : "johndoe",
        "timezone" : "America/Los Angeles"
    },
    {
        "first name" : "Jane",
        "last name" : "Doe",
        "job title" : "Software Engineer",
        "deparment" : "Engineering",
        "manager" : "John Doe",
        "location" : "Leeds",
        "first aider" : false,
        "slack user name" : "janedoe",
        "timezone" : "America/Los Angeles"
    },
    {
        "first name" : "Bob",
        "last name" : "Doe",
        "job title" : "Software Engineer",
        "deparment" : "Engineering",
        "manager" : "Jane Doe",
        "location" : "Cape Town",
        "first aider" : false,
        "slack user name" : "bobdoe",
        "timezone" : "America/Los Angeles"
    },
    {
        "first name" : "Sally",
        "last name" : "Doe",
        "job title" : "Software Engineer",
        "deparment" : "Engineering",
        "manager" : "Jane Doe",
        "location" : "Rome",
        "first aider" : false,
        "slack user name" : "sallydoe",
        "timezone" : "America/Los Angeles"
    }
];

module.exports = members;
//made a slight change
/*
first name ,last name ,job title         ,department  ,manager  ,location  ,first aider ,user slack ,timezone
John       ,Doe       ,Software Engineer ,Engineering ,null     ,Glasgow   ,No          ,johndoe    ,America/Los_Angeles
Jane       ,Doe       ,Software Engineer ,Engineering ,John Doe ,Leeds     ,No          ,janedoe    ,America/Los_Angeles
Bob        ,Doe       ,Software Engineer ,Engineering ,Jane Doe ,Cape Town ,No          ,bobdoe     ,America/Los_Angeles
Sally      ,Doe       ,Software Engineer ,Engineering ,Jane Doe ,Rome      ,No          ,sallydoe   ,America/Los_Angeles
*/