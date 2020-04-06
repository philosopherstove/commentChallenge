let nowMS = Date.now();

let inputs = [
    {
        name: "Brad",
        title: "author",
        image: "brad.png",
        comments: [
            {
                text: "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
                time: nowMS - 120000, // forcing input for desired "2 MINUTES AGO" output by subtracting 2 minutes worth of milliseconds
                replies: 21,
                upvotes: 123,
                downvotes: 0
            }
        ]
    },
    {
        name: "Steven",
        title: "philosopher",
        image: "steven.png",
        comments: [
            {
                text: "A philosopher cuts through the superfluous to get at the essential.",
                time: nowMS,
                replies: 0,
                upvotes: 0,
                downvotes: 0
            }
        ]
    },
    {
        name: "Marcus",
        title: "Quality Assurance Tester",
        image: "",
        comments: [
            {
                text: "The comment component can handle seconds, minutes, hours, weeks; and is mindful of singular vs plural grammar. Numbers that are large also get comma's inserted for better readability.",
                time: nowMS - (60000),
                replies: 1,
                upvotes: 1,
                downvotes: 1
            }
        ]
    },
    {
        name: "Marcus",
        title: "Quality Assurance Tester",
        image: "",
        comments: [
            {
                text: "Comment's 'time ago' info goes as far as using week units. Just like Instagram. ",
                time: nowMS - (60000 * 60 * 24 * 7 * 1000),
                replies: 1000,
                upvotes: 1000,
                downvotes: 1000
            }
        ]
    },
    {
        name: "Marcus",
        title: "Quality Assurance Tester",
        image: "",
        comments: [
            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                time: nowMS - (60000 * 60 * 24 * 7 * 1234567890),
                replies: 9876543210,
                upvotes: 1234567890,
                downvotes: 1
            }
        ]
    },
];

let createAppendComment = (input)=>{
    /* Process input */
    let name              = input.name;
    let title             = input.title.toUpperCase();
    let image             = input.image;
    if( image === ""){
        image = "default.png";
    };
    let text              = input.comments[0].text;
    let upvoteNumber      = (input.comments[0].upvotes).toLocaleString(); // toLocaleString inserts commas for large numbers
    let downvoteNumber    = (input.comments[0].downvotes).toLocaleString();
    let dateTimeAttribute = getDateTimeAttribute(input.comments[0].time); // for datetime attribute in HTML time tag
    let viewTimeString    = getViewTimeString(input.comments[0].time);    // for appropriate time unit(sec, min, hr, week) and proper grammar(singular vs plural)
    let replyString       = getReplyString(input.comments[0].replies);
    /* Fill template */
    let html = `
        <div class="comment">
            <div class="imageColumn">
                <img src="${image}" alt="user image">
            </div>
            <div class="commentColumn">
                <header>
                    <h6 class="name">${name}</h6>
                    <p class="title">${title}</p>
                    <span>.</span>
                    <time datetime="${dateTimeAttribute}">${viewTimeString}</time>
                </header>
                <p class="text">${text}</p>
                <footer>
                    <div class="replyButton" onclick="clickReplyButton(this)">REPLY</div>
                    <div class="replyDropper" onclick="clickRepliesDropper(this)">${replyString}</div>
                    <div class="upvoteButton" onclick="clickUpvoteButton(this)">
                        <span class="chevron up"></span>
                        <p class="upvotes">${upvoteNumber}</p>
                    </div>
                    <div class="downvoteButton" onclick="clickDownvoteButton(this)">
                        <span class="chevron down"></span>
                        <p class="downvotes">${downvoteNumber}</p>
                    </div>
                </footer>
            </div>
        </div>
    `;
    /* Append to destination */
    let commentsContainer = document.querySelector(".commentsContainer");
        commentsContainer.insertAdjacentHTML('beforeend', html);
};

let addZeroToSingleDigit = (digit)=>{
    if( digit < 10){
        digit = `0${digit}`;
    };
    return digit;
};

let clickReplyButton = (me)=>{
    console.log("clicked this REPLY button: ", me);
};

let clickRepliesDropper = (me)=>{
    console.log("clicked this REPLIES dropper: ", me);
};

let clickUpvoteButton = (me) =>{
    console.log("clicked this UPVOTE button: ", me);
};

let clickDownvoteButton = (me)=>{
    console.log("clicked this DOWNVOTE button: ", me);
};

/* input milliseconds since 1970 => output valid format for HTML time tag datetime attribute */
let getDateTimeAttribute = (ms)=>{
    let jsDateTimeObject = new Date(ms);
    let jsDateTimeString = jsDateTimeObject.toString();
    let splits           = jsDateTimeString.split(" ");
    let year             = jsDateTimeObject.getUTCFullYear();
    let month            = addZeroToSingleDigit(jsDateTimeObject.getUTCMonth() + 1);
    let day              = addZeroToSingleDigit(jsDateTimeObject.getUTCDate());
    let hour             = addZeroToSingleDigit(jsDateTimeObject.getUTCHours());
    let minute           = addZeroToSingleDigit(jsDateTimeObject.getUTCMinutes());
    let second           = addZeroToSingleDigit(jsDateTimeObject.getUTCSeconds());
    let dateTime         = `${year}-${month}-${day}T${hour}:${minute}:${second}`;
    return dateTime;
};

/* input (n)replies => output HTML string with proper grammar(singular vs plural) */
let getReplyString = (replyNumber)=>{
    let replyString = "";
    if( replyNumber === 1){
        replyString = `<span>${replyNumber}</span> REPLY`;
    }
    else{
        replyNumber = replyNumber.toLocaleString(); // inserts commas for large numbers
        replyString = `<span>${replyNumber}</span> REPLIES`;
    };
    return replyString;
};

/* input milliseconds since 1970 => output string with appropriate time unit(sec, min, hr, week) and proper grammar(singular vs plural) */
let getViewTimeString = (ms)=>{
    let elapsedMS      = nowMS - ms;
    let msInMinute     = 60000;
    let msIn2Minutes   = 2 * msInMinute;
    let msInHour       = 3600000;
    let msIn2Hours     = 2 * msInHour;
    let msInDay        = 86400000;
    let msIn2Days      = 2 * msInDay;
    let msInWeek       = 604800000;
    let msIn2Weeks     = 2 * msInWeek;
    let viewTimeString = "";
         // less 1 min
    if( elapsedMS < msInMinute){
        viewTimeString = `SECONDS AGO`;
    }
    else // 1 min - 1min:59sec
    if( elapsedMS >= msInMinute
    &&  elapsedMS <  msIn2Minutes){
        viewTimeString = `1 MINUTE AGO`;
    }
    else // 2 min - 59min
    if( elapsedMS >= msIn2Minutes
    &&  elapsedMS <  msInHour){
        let elapsedMinutes = parseInt(elapsedMS / msInMinute);
        viewTimeString = `${elapsedMinutes} MINUTES AGO`;
    }
    else // 1hr - 1hr:59min
    if( elapsedMS >= msInHour
    &&  elapsedMS <  msIn2Hours){
        viewTimeString = `1 HOUR AGO`;
    }
    else // 2hr - 23hr:59min
    if( elapsedMS >= msIn2Hours
    &&  elapsedMS <  msInDay){
        let elapsedHours = parseInt(elapsedMS / msInHour);
        viewTimeString = `${elapsedHours} HOURS AGO`;
    }
    else // 1day - 1day:23hr
    if( elapsedMS >= msInDay
    &&  elapsedMS <  msIn2Days){
        viewTimeString = `1 DAY AGO`;
    }
    else // 2day - 6day:23hr
    if( elapsedMS >= msIn2Days
    &&  elapsedMS <  msInWeek){
        let elapsedDays = parseInt(elapsedMS / msInDay);
        viewTimeString = `${elapsedDays} DAYS AGO`;
    }
    else // 1week - 1week:6day
    if( elapsedMS >= msInWeek
    &&  elapsedMS <  msIn2Weeks){
        viewTimeString = `1 WEEK AGO`;
    }
    else // 2 weeks or more
    if( elapsedMS >= msIn2Weeks){
        let elapsedWeeks = parseInt(elapsedMS / msInWeek);
            elapsedWeeks = elapsedWeeks.toLocaleString(); // inserts commas for large numbers
        viewTimeString = `${elapsedWeeks} WEEKS AGO`;
    }
    return viewTimeString;
};

/**********
TEST OUTPUT
***********/
for(i in inputs){
    let input = inputs[i];
    createAppendComment(input);
};
