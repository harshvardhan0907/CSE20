function calculateResult() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = total / 5;

    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 75)
        grade = "A";
    else if (percentage >= 60)
        grade = "B";
    else if (percentage >= 40)
        grade = "C";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML =
        `Total Marks: ${total}<br>
         Percentage: ${percentage.toFixed(2)}%<br>
         Grade: ${grade}`;
}