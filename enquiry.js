document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("enquiry-date");
  const warning = document.getElementById("date-warning");
  const submitBtn = document.getElementById("submit-btn");
  const messageBox = document.querySelector("textarea[name='message']");
  const charCount = document.getElementById("char-count");

  dateInput.addEventListener("change", function () {
    const selectedDate = dateInput.value;

    if (bookedDates.includes(selectedDate)) {
      warning.textContent = "This date is unavailable. Please choose another date.";
      submitBtn.disabled = true;
    } else {
      warning.textContent = "";
      submitBtn.disabled = false;
    }
  });

  messageBox.addEventListener("input", function () {
    charCount.textContent = messageBox.value.length;
  });
});