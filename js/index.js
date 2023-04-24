const closeModal = document.querySelector(".rules_modal_close");
const rule = document.querySelector(".rules");
const ruleModal = document.querySelector(".rules_modal");
const wrapper = document.querySelector(".wrapper");

const ruleState = (state) => {
  if (!state) {
    ruleModal.classList.remove("active");
    wrapper.classList.remove("active");
  } else {
    ruleModal.classList.add("active");
    wrapper.classList.add("active");
  }
};

const closeModalWrapper = (event) => {
  if (event.target === wrapper) ruleState(false);
};

rule.addEventListener("click", () => {
  ruleState(true);
});

closeModal.addEventListener("click", () => {
  ruleState(false);
});

document.addEventListener("click", closeModalWrapper);
