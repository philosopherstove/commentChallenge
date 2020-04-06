let nowMS      = Date.now();
let msInMinute = 60000;
let msInHour   = 3600000;
let msInDay    = 86400000;
let msInWeek   = 604800000;

let inputs = [
    nowMS,                        //  0: (IN) current millisecond            => (OUT) "SECONDS AGO"
    nowMS - (msInMinute - 1),     //  1: (IN) 1 millisecond before 1 minute  => (OUT) "SECONDS AGO"
    nowMS - (msInMinute),         //  2: (IN) 1 minute                       => (OUT) "1 MINUTE AGO"
    nowMS - (msInMinute + 1),     //  3: (IN) 1 millisecond after 1 minute   => (OUT) "1 MINUTE AGO"
    nowMS - (2 * msInMinute - 1), //  4: (IN) 1 millisecond before 2 minutes => (OUT) "1 MINUTE AGO"
    nowMS - (2 * msInMinute),     //  5: (IN) 2 minutes                      => (OUT) "2 MINUTES AGO"
    nowMS - (2 * msInMinute + 1), //  6: (IN) 1 millisecond after 2 minutes  => (OUT) "2 MINUTES AGO"
    nowMS - (msInHour -1),        //  7: (IN) 1 millisecond before 1 hour    => (OUT) "59 MINUTES AGO"
    nowMS - (msInHour),           //  8: (IN) 1 hour                         => (OUT) "1 HOUR AGO"
    nowMS - (msInHour + 1),       //  9: (IN) 1 millisecond after 1 hour     => (OUT) "1 HOUR AGO"
    nowMS - (2 * msInHour -1),    // 10: (IN) 1 millisecond before 2 hours   => (OUT) "1 HOUR AGO"
    nowMS - (2 * msInHour),       // 11: (IN) 2 hours                        => (OUT) "2 HOURS AGO"
    nowMS - (2 * msInHour + 1),   // 12: (IN) 1 millisecond after 2 hours    => (OUT) "2 HOURS AGO"
    nowMS - (msInDay - 1),        // 12: (IN) 1 millisecond before 1 day     => (OUT) "23 HOURS AGO"
    nowMS - (msInDay),            // 13: (IN) 1 day                          => (OUT) "1 DAY AGO"
    nowMS - (msInDay + 1),        // 14: (IN) 1 millisecond after 1 day      => (OUT) "1 DAY AGO"
    nowMS - (2 * msInDay - 1),    // 15: (IN) 1 millisecond before 2 days    => (OUT) "1 DAY AGO"
    nowMS - (2 * msInDay),        // 16: (IN) 2 days                         => (OUT) "2 DAYS AGO"
    nowMS - (2 * msInDay + 1),    // 17: (IN) 1 millisecond after 2 days     => (OUT) "2 DAYS AGO"
    nowMS - (msInWeek - 1),       // 18: (IN) 1 millisecond before 1 week    => (OUT) "6 DAYS AGO"
    nowMS - (msInWeek),           // 19: (IN) 1 week                         => (OUT) "1 WEEK AGO"
    nowMS - (msInWeek + 1),       // 20: (IN) 1 millisecond after 1 week     => (OUT) "1 WEEK AGO"
    nowMS - (2 * msInWeek -1),    // 21: (IN) 1 millisecond before 2 weeks   => (OUT) "1 WEEK AGO"
    nowMS - (2 * msInWeek),       // 22: (IN) 2 weeks                        => (OUT) "2 WEEKS AGO"
    nowMS - (2 * msInWeek + 1),   // 23: (IN) 1 millisecond after 2 weeks    => (OUT) "2 WEEKS AGO"
    nowMS - (1000 * msInWeek),    // 24: (IN) 1000 weeks                     => (OUT) "1,000 WEEKS AGO"
    nowMS - (10000 * msInWeek),   // 25: (IN) 10000 weeks                    => (OUT) "10,000 WEEKS AGO"
    nowMS - (100000 * msInWeek),  // 26: (IN) 100000 weeks                   => (OUT) "100,000 WEEKS AGO"
    nowMS - (1000000 * msInWeek), // 27: (IN) 1000000 weeks                  => (OUT) "1,000,000 WEEKS AGO"
];

let outputs = [
    "SECONDS AGO",
    "SECONDS AGO",
    "1 MINUTE AGO",
    "1 MINUTE AGO",
    "1 MINUTE AGO",
    "2 MINUTES AGO",
    "2 MINUTES AGO",
    "59 MINUTES AGO",
    "1 HOUR AGO",
    "1 HOUR AGO",
    "1 HOUR AGO",
    "2 HOURS AGO",
    "2 HOURS AGO",
    "23 HOURS AGO",
    "1 DAY AGO",
    "1 DAY AGO",
    "1 DAY AGO",
    "2 DAYS AGO",
    "2 DAYS AGO",
    "6 DAYS AGO",
    "1 WEEK AGO",
    "1 WEEK AGO",
    "1 WEEK AGO",
    "2 WEEKS AGO",
    "2 WEEKS AGO",
    "1,000 WEEKS AGO",
    "10,000 WEEKS AGO",
    "100,000 WEEKS AGO",
    "1,000,000 WEEKS AGO"
];

/***********
EXECUTE TEST
************/
for(let i = 0; i < inputs.length; i++){
    let input  = inputs[i];
    let output = outputs[i];
    let result = getViewTimeString(input); // function to test fired here
    let truth  = result === output;
    if( truth === false){console.log('ERROR BELOW')};
    console.log(`${i}: ${result} === ${output} = ${truth}`);
};

/***************
FUNCTION TO TEST
****************/
/* input milliseconds since 1970 => output string with appropriate time unit(sec, min, hr, week) and proper grammar(singular vs plural) */
function getViewTimeString(ms){
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
