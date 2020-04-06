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

###### Main Function: **_createAppendComment(input)_**

The main part of the JavaScript file is the createAppendComment function. This function does the main work of the challenge. It takes in the input object, processes the input, defines an HTML template string with the processed inputs inserted, and appends the HTML template string into the commentsContainer div. The newer insertAdjacentHTML JS method is used for the appending operation. This newer method overcomes the downfall of using the addition-assignment(+=) operator to insert innerHTML into the DOM, namely losing reference to other elements within the append destination element.

###### There are four other functions to mention:

###### **(1) _getDateTimeAttribute(ms):_**

I used descriptive tags in the HTML template for better standing regarding web-indexing and screenreader accessibility. Meeting this standard requires that the time tag include a datetime attribute in a particular machine-readable format. This is why this function is necessary. It takes in ms since UNIX epoch and outputs a string in a valid datetime format that an HTML time tag would expect.

###### **(2) _addZeroToSingleDigit(digit):_**

Employed as a utility function within the aforementioned getDateTimeAttribute function. The valid datetime format for the HTML time tag requires a leading zero in front of single digits. The addZeroToSingleDigit function does what is expected: take in a digit and if less than 10, adds a leading zero to the returned digit.

###### **(3) _getReplyString(replyNumber):_**

Depending on the amount of replies, the HTML for the "{n} REPLIES" part of the comment needs different grammar. If there is only one reply, the proper grammar would read singularly as "1 REPLY". Every other amount of replies--including zero--would read plurally as "{n} REPLIES". The getReplyString takes in the number of replies as input and outputs the grammar appropriate HTML string.

###### **(4) _getViewTimeString(ms):_**

The "{time} AGO" information at the top of the comment would need to change in several ways. Firstly, different units of time--seconds, minutes, hours, days, weeks--should be presented as appropriate. Secondly, the time information needs to be mindful of proper grammar regarding singular and plural values.

The function takes as input the ms since UNIX epoch that the comment was published at. This input along with the current ms since UNIX epoch is used to find the elapsed ms(elapsedMS) since the comment was published. Variables store the millisecond measure for a minute, hour, day, and week, as well as the millisecond measure for 2 minutes, 2 hours, 2 days, and 2 weeks. These measures are employed in a following conditional list that checks where the elapsedMS falls regarding being mere seconds ago, between minutes, hours, days, and weeks. Each conditional block then calculates the amount of the appropriate units and updates a string-holding variable with the proper grammar appropriate for the amount of units.


### Accomplishments & Details

- comment is fully responsive.
- uses descriptive HTML tags.
- fills HTML time tag datetime attribute with correct datetime format. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
- the `{time} AGO` information at the top of a comment is filled with appropriate units(seconds, minutes, hours, weeks) and employs proper grammar(singular vs plural).
- the `{n} REPLIES` information in the comment footer also employs proper grammar.
- the specific counts for `{time} AGO`, `{n} REPLIES`, as well as the upvote/downvote counts will insert commas into the number for increased readability.
- if there is no provided profile picture in the input, a default placeholder will be used instead.
- the visual scale and style of the comment is almost an exact 1-1 representation of the provided mock. The colours were approximately matched with a color-find tool in a vector drawing program. Regarding color matching, the number of the `{n} REPLIES` part of the comment footer shows slightly darker than the other lighter elements in the footer in the mock. I also copied this odd visual artifact. - the desired hover effect is detailed in that it employs a transition-delay. This is beneficial because fast mouse movements over comments will not instantly darken the text and this cuts down on visual noise. Also, the transition to darker text is slightly faster than the transition to lighter text. A small change that adds to perceived smoothness.

###### Visual Differences

The only somewhat obvious difference between my output and the provided mock is the font-family. I used Helvetica as a close approximation of the comment's text body. This isn't 100% correct and the difference shows with with the periods and dotted letters. The mock's dots are smaller and rounder, while Helvetica uses larger and more square-ish dots. Also, the `{time} AGO` text at the top of the comment is very close to Arial, which is what I used. But you can tell that it isn't exactly Arial by the shape of the "O" in "AGO". It's more narrow in the mock.


### Testing

To view testing results for each of the included tests, open up the included HTML file in a browser and inspect the console output.

I tested code without using third party tools. Perhaps this is seen as informal. I still got an unexpected benefit from testing as a test did catch an inconsequential error that I missed.

The main function to test was the getViewTimeString function. This is because it is perhaps the most complex function with a fairly long conditional list employed within it. The test was meant to ensure that I got a time information string that used appropriate time units for different amounts of elapsed time, as well as using appropriate grammar.

The array of inputs included measures of time in ms that ranged from under a minute to 1 million weeks. I included values where I expected grammar appropriate for a singular unit, as well as 1 ms before and after each of these singular outliers.

The array of outputs contained the expected strings at each input index. The truth value result of the test at each index was determined by comparing the returned input from the function in question with the corresponding expected string from the output array.

This test yielded a surprising beneficial result by catching an error in comment.js at line 128, within the "else if" block that tests between "1hr - 1hr:59min". It had caught an extra space at the end of the viewTimeString. This error would not have been caught upon visual inspection of the interface because there would have been no visual indication of this error.

The other included tests are nothing to write home about. One other is to test the getReplyString function for proper grammar. All tested inputs passed. Another test is for multiple comments and is only meant to demonstrate a visual output of multiple comments with different potentially problematic inputs. The outputted visuals seem correct.


### Last Comments

The challenge requires that one have the footer elements light in color while darkening on hover. This UI feature would probably be advised against because there is the problem of touch screens. On these type of screens one would always want the footer elements to be darkened for visual clarity. Solutions could be deployed to have the hover effect for desktops and a persistently dark footer for touch devices. Still, a neat and consistent solution does not exist.

Merely detecting by a smaller screen size to assume mobile is an incomplete solution since tablets like the iPad Pro have longwise pixel widths larger than some laptops. There are also laptops with touch-enabled screens. These cases would not be covered by merely assuming a smaller screen size for mobile.

Another solution could be to detect specific browser OS. But this is an inconsistent solution as there are many different browser OS to detect, sometimes the OS string used for the detection is changed by the vendor, and new browser OS strings are introduced for new implementations. This solution would always be trying to catch a constantly moving target.

The last solution I know of is to detect for touch-enabled features on the document when it loads, and if touch-enabled features are detected, then serve the persistently darkened footer. Still, this would mean that devices like the laptops with touch-enabled screens would not have the UI with the hovers effects.
