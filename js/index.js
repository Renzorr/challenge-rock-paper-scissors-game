const closeModal = document.querySelector(".rules_modal_close");
const rule = document.querySelector(".rules");
const ruleModal = document.querySelector(".rules_modal");
const wrapper = document.querySelector(".wrapper");

rule.addEventListener("click", () => {
  ruleModal.classList.add("active");
  wrapper.classList.add("active");
});

closeModal.addEventListener("click", () => {
  ruleModal.classList.remove("active");
  wrapper.classList.remove("active");
});
