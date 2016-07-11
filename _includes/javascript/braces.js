/* Good example */
function () {
}

if (foo) {
    bar();
}
else {
    baz();
}

while (foo) {
  bar()
}

/* Bad example */
function ()
{
}

function (){
}

if (foo) bar();

if (foo) {
    bar();
} else {
    baz();
}

while (foo)
  bar();
