window.onload = function () {
    const increase = document.querySelector("#increase");
    const decrease = document.querySelector("#decrease");
    const reset = document.querySelector("#reset");
    const count = document.querySelector("#count");
  
    increase.addEventListener("click", function () {
      count.innerText = parseInt(count.innerText) + 1;
    });
  
    decrease.addEventListener("click", function () {
      // logic for decrease
      if (parseInt(count.innerText) > 0) {
        count.innerText = parseInt(count.innerText) - 1;
      }
    });
  
    reset.addEventListener("click", function () {
      count.innerText = 0;
    });
  
    // setTimeout -->
    //   setTimeout(() => {
    //     alert("hey");
    //   }, 2000);
  
    //setInterval
    //   setInterval(() => {
    //     alert("hey");
    //   }, 2000);
  };