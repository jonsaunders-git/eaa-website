// Accordion Toggle Function
function toggleAccordion(element) {
    let content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

