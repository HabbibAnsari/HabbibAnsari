const quotes = [
    {
        quote: `“I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.”`,
        author: `– Marilyn Monroe`
    },

    {
        quote:`“Get busy living or get busy dying.”`,
        author:`– Stephen King`
    },

    {
        quote:`“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”`,
        author:`– Mark Caine`
    },

    {
        quote:`“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”`,
        author:`– Helen Keller`
    },

    {
        quote:`“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.”`,
        author:`– Mark Twain`
    },

];

 //Button Generating Quote
    const btn = document.querySelector('.generate');

//Add Event Listener

    btn.addEventListener('click', () =>{
//Get Randon text of quotes
    let random = Math.floor(Math.random() * quotes.length);

//console.log(random);

//Now show the text on screen
    document.querySelector('.quote').innerHTML = quotes[random].quote;
    document.querySelector('.author').innerHTML = quotes[random].author;
 });
