var currentDay = moment().format("MMM Do YYYY");
$("#currentDay").text(currentDay);


function addHours() {
    for (var i = 0; i < 10; i++) {
        var time = 7 + i;
        return time;
    }
}

function timeBlocks() {
    var i = 0,
        blocks = [],
        b = {};

    for (i; i < 24; i++) {
        b = block(i / 2);
        blocks.push({ standard: b.std, text: " ", save: $("#saveBtn") });
    }

    return blocks;
}

function block(t) {
    var m = t,
        meridian = t >= 12 ? "pm" : "am",
        s = !Math.floor(t) % 12 ? (t % 12) + 12 : t % 12;

    function convert(time) {
        var hrs = Math.floor(time),
            mins = (time - hrs) * 60;

        return {
            std: `${hrs}:${mins < 10 ? "0" + mins : mins} ${meridian}`,
            mil: `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}`
        };
    }

    return {
        std: convert(s).std,
        mil: convert(m).mil
    };
}

var b = timeBlocks();
console.log(b);