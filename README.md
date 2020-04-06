# commentChallenge


### What the Challenge Encompassed

The challenge was to create a JavaScript comment component that met the following requirements:

- visually match a provided mock.
- have its data separate from the template and pulled in from JavaScript.
- have the footer elements at the bottom of the comment, namely the "REPLY", "{n} REPLIES", and up/down arrows with related counts, coded as interactive elements. They do not, however, need to function.
- when the entire comment is hovered the light-grey aforementioned footer items should become visibly darker.
- include tests of some sort.
- include a README.


### Initial Thoughts on the Challenge

Initially, the challenge seemed suspiciously simple. When I thought about what the challenge would be testing I initially concluded that it would be primarily testing CSS skills, what kind of object would be built to store the data, and what kind of function would be built to pull data from the object into a view template.

I had the thought to expand the scope of the challenge and work to make the non-functioning interactive elements function. To do so, I would create three accounts in local storage that a tester could switch between right on the page. This would facilitate extending functionality to the up/down arrows as well as functionality for sub-comments.

I asked for clarification on whether this more ambitious approach would be encouraged. I was informed that quality over quantity is encouraged and that only one comment is expected as output.

I was glad I asked prying questions about the challenge because it changed my plan from going beyond the scope of the challenge to show off more skills to focusing on demonstrating how detailed I could be. I concluded that this was what the challenge was meant to test: detail over broad skills.


### Execution

##### File Structure:

I employ one HTML file, one CSS file, and one JavaScript file. These files along with needed images were all put into one folder. This was done out of want for simplicity when viewing the files. This simplicity was prioritized over employing a more complicated folder structure, which would have been done merely to show thinking about code organization.

The HTML file includes a viewport meta tag to facilitate responsiveness on smaller screens, the imported CSS and JS files, and a single div that will serve as the append destination for the generated comment.

##### Variables:

In the JavaScript file, my two variables are for the current time and the input for the comment.

The current time is saved as milliseconds(ms) elapsed since the UNIX epoch. This data is stored because the current time is needed a couple of times in the code and must be the exact same value. This would not be guaranteed if I used the JS method for retrieving such data at the two separate times I needed this data.

The input variable stores the data object for the comment. The object itself was conceived primarily as a user object, storing a user's name, title, profile image, and comments. The "comments" bucket in the object was conceived as an array wherein comment objects would be stored. As per the challenge, only one comment holding a comment's text, published time, number of replies, up and down vote counts, is stored in the array. This is also a simplified conception that I would not expect in reality. In reality I would expect the user object to store comment data as IDs correlating to the actual comment data stored somewhere else. Disassociating comment data from the user object would be done in reality for privacy concerns--somebody viewing user data would not also have access to comment text.

##### Functions:

**Main Function: _createAppendComment(input)_**

The main part of the JavaScript file is the createAppendComment function. This function does the main work of the challenge. It takes in the input object, processes the input, defines an HTML template string with the inputs inserted, and appends the HTML template string into the commentsContainer div. The newer insertAdjacentHTML JS method is used for the appending operation. This newer method overcomes the downfall of using the addition-assignment(+=) operator to insert innerHTML into the DOM, namely losing reference to other elements within the append destination element.


