# databases schemas
### database movie
* **movie**
    * movies
        * id primary key int(11)
        * name vachar(100)
        * href varchar(200)
        * count int(11)
        * remoteAddress  varchar(50)
        * createdAt datetime
        * updatedAt datetime
        
    * movies_details
        * id primary key int(11)
        * name varchar(100)
        * url varchar(200);
        * count int(11)
        * movie_id int(11) foreign key
        * createdAt datetime
        * updatedAt datetime
                
                
                                