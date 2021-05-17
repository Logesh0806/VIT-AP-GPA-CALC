const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const credits = document.querySelector("#credits");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGpa = document.querySelector("#calc-gpa");
const clear = document.querySelector("#clear");

let gpArry = [];

add.addEventListener("click", () => {
  if (
    courseCode.value === "" ||
    credits.value <= 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Wrong input,check and try again");
  } else {
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdCredits = document.createElement("td");
    tdCredits.innerHTML = credits.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdCredits);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGpa.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      credits: credits.value,
      grade: grade.options[grade.selectedIndex].value,
    });
    console.log(gpArry);
    courseCode.value = "";
    credits.value = "";
    grade.selectedIndex = "0";
  }
});

calcGpa.addEventListener("click", () => {
  let credits = 0,
    productOfCreditsAndGrades = 0,
    sumOfProductOfCreditsAndGrades = 0;

  gpArry.forEach((result) => {
    credits += parseInt(result.credits);
    productOfCreditsAndGrades =
      parseInt(result.credits) * parseInt(result.grade);
    sumOfProductOfCreditsAndGrades += productOfCreditsAndGrades;
  });
  const tr = document.createElement("tr");

  tdTotalCredits = document.createElement("td");
  tdTotalCredits.innerHTML = `Your Credits Earned is ${credits}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `Your GPA is ${(
    sumOfProductOfCreditsAndGrades / credits
  ).toFixed(2)} `;

  tr.appendChild(tdTotalCredits);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
  tfoot.appendChild(tr);
});

clear.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("display-none");
  calcGpa.classList.add("display-none");
  clear.classList.add("display-none");
});
