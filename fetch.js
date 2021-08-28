fetch("https://reqres.in/api/users?page=2").then(
  res => {
    res.json().then(
      data => {
        console.log(data.data);
        if (data.data.length > 0) {

          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.first_name + "</td>";
            temp += "<td>" + itemData.last_name + "</td>";
            temp += "<td>" + itemData.avatar + "</td></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)