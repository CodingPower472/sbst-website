
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
//var NUM_COLS = 5;

var staffTable = $('#staff-table');
var prototype = $('#cell-prototype');

//var PROTO_BOX_WIDTH = prototype.width() + parseInt(prototype.css('marginLeft')) + parseInt(prototype.css('marginRight'));
var PROTO_BOX_WIDTH = 200;
var NUM_COLS = Math.floor(prototype.parent().width() / PROTO_BOX_WIDTH);
console.log(NUM_COLS);
console.log(PROTO_BOX_WIDTH);
console.log(prototype.parent().width());

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

