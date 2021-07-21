
$('.nav-link').click(function(e) {
    var target = e.target;
    var name = target.name;
    $('.nav-item').removeClass('active');
    $(target).parent().addClass('active');
    $('.section').hide();
    $('#' + name).show();
});

var STAFF = [
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    },
    {
        name: 'David Jiang',
        role: 'Public Relations',
        pic: 'https://scibowlleague.com/static/images/team/david.jpg',
        discord: 'xpoes#2892'
    }
];
var NUM_COLS = 5;

$(function() {
var staffTable = $('#staff-table');
var prototype = $('#cell-prototype');

//var PROTO_BOX_WIDTH = prototype.width() + parseInt(prototype.css('marginLeft')) + parseInt(prototype.css('marginRight'));
/*var PROTO_BOX_WIDTH = 200;
var NUM_COLS = Math.floor(prototype.parent().get()[0].clientWidth / PROTO_BOX_WIDTH);
console.log(NUM_COLS);
console.log(PROTO_BOX_WIDTH);
console.log(prototype.parent().get()[0].clientWidth);
console.log(prototype.parent());
console.log('a');*/

//var numRows = Math.ceil(STAFF.length / NUM_COLS);
var soFar = 0;
var currParent;
for (var i = 0; i < STAFF.length; i++) {
    if (soFar % NUM_COLS === 0) {
        if (currParent) {
            staffTable.append(currParent);
        }
        currParent = $('<div class="row text-center"></div>');
    }
    var mem = STAFF[i];
    var currCell = prototype.clone();
    currCell.find('.staff-pic').attr('src', mem.pic);
    currCell.find('.staff-name').text(mem.name);
    currCell.find('.staff-role').text(mem.role);
    currCell.find('.staff-discord').text(mem.discord);
    currCell.attr('id', '');
    currParent.append(currCell);
    console.log(currCell);
    console.log(currParent);
    soFar++;
}
staffTable.append(currParent);

$('#countdown-container').ClassyCountdown({
    theme: 'white',
    end: 1628344800000,
    now: new Date().getTime(),
    days: {
        textCSS: 'font-family: Raleway'
    }
});

$('.section').hide();
$('#home').show();

var questionsWrapper = $('#questions-wrapper');

$.get('SBST_FAQ.txt')
    .then(function(faq) {
        faq = faq.trim();
        indiv = faq.split('Q:');
        for (var i = 1; i < indiv.length; i++) {
            var m = indiv[i].trim();
            var s = m.split('\n|\r\n');
            var q = s[0].replace('Q:', '').trim();
            var a = s[1].replace('A:', '').trim();
            var elem = $('<div class="faq-question  card card-body" data-role="collapsible"></div>');
            var qElem = $('<a class="faq-question-q" data-toggle="collapse" href="#faq-question-a-' + i + '"></a>');
            qElem.text(q);
            var aElem = $('<p class="faq-question-a collapse" id="faq-question-a-' + i + '"></p>');
            aElem.text(a);
            qElem.appendTo(elem);
            aElem.appendTo(elem);
            elem.appendTo(questionsWrapper);
        }
    })
    .catch(console.error);

});