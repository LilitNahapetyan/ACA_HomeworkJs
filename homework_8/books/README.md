3. Create a page to search books. For search API use this endpoint: http://openlibrary.org/search.json. 
There should be an input field and a button on the page. Input field is for entering the book name and the button is for searching(something like google). To search for the entered book you should add a parameter to the endpoint, like this: 
http://openlibrary.org/search.json?q= . If the name of the book consists of several parts like: “The lord of the rings”, then as a parameter its value should be the+lord+of+the +rings. 
So the final look of the endpoint when searching should be 
http://openlibrary.org/search.json?q=the+lord+.of+the+rings 
After getting the result the following information should be shown: 
Total count of results (numFound). 
The list of the results with the following fields: 
Title 
Author Name
First publish year 
Subject (only first 5 items) 
** Create pagination for this list. 
The information about pages count you can get using numFound and the fact that one page contains 100 results. Having that creates a pagination for the list. To get information of the other pages use the following endpoint format: 
http://openlibrary.org/search.json?q=&page= 
