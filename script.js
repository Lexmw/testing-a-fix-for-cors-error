const dogBtn = document.getElementById("dogBtn");
const spinner = document.getElementById("spinner");
const dogBox = document.getElementById("dogBox");

dogBtn.addEventListener("click", async () => {
  spinner.style.display = "inline-block";
  dogBox.innerHTML = "";

  try {
    const response = await fetch("http://localhost:3000/api/data");
    const data = await response.json();
    console.log(data);
    dogBox.innerHTML = `
      <div class="card mx-auto shadow" style="width: 18rem;">
        <div class="card-body">
          <pre> {data.response} </pre>
        </div>
      </div>
    `;
  } catch (error) {
    dogBox.innerHTML = `
      <div class="alert alert-danger">Failed to fetch a dog. Try again!</div>
    `;
  } finally {
    spinner.style.display = "none";
  }
});
