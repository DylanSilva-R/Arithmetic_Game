function getUserFirstLast()
{
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;

    sessionStorage.setItem('firstName', firstName);
    sessionStorage.setItem('lastName', lastName);
}

function showNextButton()
{
    var x = document.getElementById("nextPage");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}