var names = ["dave", "tom", "jean", "alex"],
    namesLength = names.length,
    firstName,
    lastName,
    age,
    i;

for (i = 0; i < namesLength; i += 1) {
  $.ajax({
    url: "http://gerardluskin.com/city/service/people/?callback=&name=" + names[i],
    dataType: "jsonp",
    success: function (data, textStatus, jqXHR) {
      firstName = data.firstName || "No first name";
      lastName = data.lastName || "No last name";
      age = data.age || "No age";
      console.log(firstName + " " + lastName + ", " + age);
    },
    error: function (jqXHR, textStatus, err) {
      console.log('Oops error!');
    },
    complete: function (jqXHR, textStatus) {
    }
  });
};
