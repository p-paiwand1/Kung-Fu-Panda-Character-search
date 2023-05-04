// Kung Fu Panda Character Search

// Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //  Get Search Input
  let name = document.getElementById("search-in").value.toLowerCase();
  console.log(name);

  // Test the search Name - Chained
  if (name === "po" || name === "panda") {
    document.getElementById("char-info").innerHTML = `
        <img src="Po.png" alt="kung fu panda character" />
        <h2>Po</h2>
        <p class="quote">"Buddy, I am the Dragon Warrior"</p>`;
  } else if (name === "mantis" || name === "khairullah") {
    document.getElementById("char-info").innerHTML = `
        <img src="mantis.png" alt="kung fu panda character" />
        <h2>Mantis</h2>
        <p class="quote">"Fear the bug!"</p>`;
  } else if (name === "monkey" || name === "ape") {
    document.getElementById("char-info").innerHTML = `
    <img src="monkey.png" alt="kung fu panda character" />
    <h2>Monkey</h2>
    <p class="quote">"We should hang out!"</p>`;
  } else if (name === "crane" || name === "fraidoon") {
    document.getElementById("char-info").innerHTML = `
    <img src="crane.png" alt="kung fu panda character" />
    <h2>Crane</h2>
    <p class="quote">"You can chain my body, but you will never chain my warrior spirit!"</p>`;
  } else if (name === "tigress" || name === "farangiz") {
    document.getElementById("char-info").innerHTML = `
    <img src="tigress.png" alt="kung fu panda character" />
    <h2>Tigress</h2>
    <p class="quote">"That was pretty hardcore!"</p>`;
  } else if (name === "viper" || name === "parwin") {
    document.getElementById("char-info").innerHTML = `
    <img src="viper.png" alt="kung fu panda character" />
    <h2>Viper</h2>
    <p class="quote">"I don't need to bite to fight!"</p>`;
  } else {
    document.getElementById("char-info").innerHTML = `
    <img src="question-mark.png" alt="kung fu panda character" />
    <h2>????????</h2>
    <p class="quote">----------</p>`;
  }
}

// Po: "Buddy, I am the Dragon Warrior."
// Crane: "You can chain my body, but you will never chain my warrior spirit!"
// Mantis: "Fear the bug!"
// Monkey: "We should hang out!"
// Tigress: "That was pretty hardcore!"
// Viper: "I don't need to bite to fight!"
