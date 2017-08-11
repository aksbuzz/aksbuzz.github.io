writeRandomQuote = function () {
    var quotes = new Array();
    var ele = document.getElementById('quote')

    quotes[0] = '"Somewhere, something incredible is waiting to be known."';
    quotes[1] = '"Imagination will often carry us to worlds that never were. But without it we go nowhere."';
    quotes[2] = '"If you wish to make an apple pie from scratch, you must first invent the universe."';
    quotes[3] = '"Cosmos is all that is or ever was or ever will be"';

    var rand = Math.floor(Math.random()*quotes.length);

    ele.innerHTML = quotes[rand];
}
