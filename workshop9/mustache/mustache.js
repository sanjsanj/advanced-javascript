var peopleData = {
    "people": [
        {
            "name": "Bob",
            "age": "43"
        },
        {
            "name": "Mary",
            "age": "31"
        },
        {
            "name": "Geoff",
            "age": "27"
        }
    ]
};

var tpl = "{{#people}}<li>{{name}}</li>{{/people}}";
var output = Mustache.render(tpl, peopleData);
document.getElementById("page-header").insertAdjacentHTML("beforeend", output);
