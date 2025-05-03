function validateName() {
  const input = document.getElementById("full-name");
  const errorGeneric = document.getElementById("errorName");
  const errorIronhack = document.getElementById("errorNameIronhack");
  const name = input.value.trim().toLowerCase();

  if (!name) {
    input.classList.add("input-error");
    if (errorGeneric) errorGeneric.hidden = false;
    if (errorIronhack) errorIronhack.hidden = true;
    return false;
  } else if (name === "ironhack") {
    input.classList.add("input-error");
    if (errorGeneric) errorGeneric.hidden = true;
    if (errorIronhack) errorIronhack.hidden = false;
    return false;
  }

  input.classList.remove("input-error");
  if (errorGeneric) errorGeneric.hidden = true;
  if (errorIronhack) errorIronhack.hidden = true;
  return true;
}

function validateMail() {
  const input = document.getElementById("email");
  const errorEmpty = document.getElementById("errorEmail");
  const errorFormat = document.getElementById("errorFormatEmail");
  const email = input.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email) {
    input.classList.add("input-error");
    if (errorEmpty) errorEmpty.hidden = false;
    if (errorFormat) errorFormat.hidden = true;
    return false;
  } else if (!emailRegex.test(email)) {
    input.classList.add("input-error");
    if (errorEmpty) errorEmpty.hidden = true;
    if (errorFormat) errorFormat.hidden = false;
    return false;
  }

  input.classList.remove("input-error");
  if (errorEmpty) errorEmpty.hidden = true;
  if (errorFormat) errorFormat.hidden = true;
  return true;
}

function validatePhone() {
  const input = document.getElementById("phone");
  const error = document.getElementById("errorPhone");
  const phone = input.value.trim();
  const phoneRegex = /^[0-9]{9,15}$/;

  if (!phone || !phoneRegex.test(phone)) {
    input.classList.add("input-error");
    error.hidden = false;
    return false;
  }

  input.classList.remove("input-error");
  error.hidden = true;
  return true;
}

function validateMessage() {
  const input = document.getElementById("message");
  const error = document.getElementById("errorMessageUser");
  const message = input.value.trim();

  if (message.length < 5) {
    input.classList.add("input-error");
    error.hidden = false;
    return false;
  }
  input.classList.remove("input-error");
  error.hidden = true;
  return true;
}

function SendForm() {
  const form = document.getElementById("contact-form");

  const validName = validateName();
  const validMail = validateMail();
  const validPhone = validatePhone();
  const validMessage = validateMessage();

  const errorSubmit = document.getElementById("errorSubmit");
  errorSubmit.hidden = validName && validMail && validPhone && validMessage;

  if (validName && validMail && validPhone && validMessage) {
    showModal();
    setTimeout(() => {
      if (form) form.reset();
    }, 500);
  }
}

/* Modal */
function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const form = document.getElementById("contact-form");

  if (modal) {
    modal.style.display = "none";
  }

  if (form) {
    form.reset();
  }
}
