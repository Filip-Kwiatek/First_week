let test = {
  title: "Ja",
  author: "Ty",
  pageCount: 100,
  publisher: "yes",
  showDetails: function () {
    console.log(123);
    for (const key in this) {
      console.log("property", key);
    }
  },
};

test.showDetails();
