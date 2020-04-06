let inputs = [
    0,       //  0: (IN) 0       => (OUT) "<span>0</span> REPLIES"
    1,       //  1: (IN) 1       => (OUT) "<span>1</span> REPLY"
    2,       //  2: (IN) 2       => (OUT) "<span>2</span> REPLIES"
    999,     //  3: (IN) 999     => (OUT) "<span>999</span> REPLIES"
    1000,    //  4: (IN) 1000    => (OUT) "<span>999</span> REPLIES"
    1001,    //  5: (IN) 1001    => (OUT) "<span>999</span> REPLIES"
    9999,    //  6: (IN) 9999    => (OUT) "<span>999</span> REPLIES"
    10000,   //  7: (IN) 10000   => (OUT) "<span>999</span> REPLIES"
    10001,   //  8: (IN) 10001   => (OUT) "<span>999</span> REPLIES"
    99999,   //  9: (IN) 99999   => (OUT) "<span>999</span> REPLIES"
    100000,  // 10: (IN) 100000  => (OUT) "<span>999</span> REPLIES"
    100001,  // 11: (IN) 100001  => (OUT) "<span>999</span> REPLIES"
    999999,  // 12: (IN) 999999  => (OUT) "<span>999</span> REPLIES"
    1000000, // 13: (IN) 1000000 => (OUT) "<span>999</span> REPLIES"
    1000001  // 14: (IN) 1000001 => (OUT) "<span>999</span> REPLIES"
];

let outputs = [
    "<span>0</span> REPLIES",
    "<span>1</span> REPLY",
    "<span>2</span> REPLIES",
    "<span>999</span> REPLIES",
    "<span>1,000</span> REPLIES",
    "<span>1,001</span> REPLIES",
    "<span>9,999</span> REPLIES",
    "<span>10,000</span> REPLIES",
    "<span>10,001</span> REPLIES",
    "<span>99,999</span> REPLIES",
    "<span>100,000</span> REPLIES",
    "<span>100,001</span> REPLIES",
    "<span>999,999</span> REPLIES",
    "<span>1,000,000</span> REPLIES",
    "<span>1,000,001</span> REPLIES"
];

/***********
EXECUTE TEST
************/
for(let i = 0; i < inputs.length; i++){
    let input  = inputs[i];
    let output = outputs[i];
    let result = getReplyString(input);
    let truth  = result === output;
    if( truth === false){console.log('ERROR BELOW')};
    console.log(`${i}: ${result} === ${output} = ${truth}`);
};

/***************
FUNCTION TO TEST
****************/
/* input (n)replies => output HTML string with proper grammar(singular vs plural) */
function getReplyString(replyNumber){
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
