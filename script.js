
// =================================
// SEJAL HENNA ESSENCE
// Website functionality
// =================================

// IMPORTANT: Replace this with Sejal's actual WhatsApp number.
// Include country code 91, without + or spaces.
const WHATSAPP_NUMBER = "919876543210";

// Replace with the actual Instagram profile URL.
const INSTAGRAM_URL = "https://www.instagram.com/";

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Set current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Set minimum event date to today
const eventDate = document.getElementById("eventDate");
const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

eventDate.min = localToday;

// WhatsApp booking links
const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent("Hello Sejal! I would like to enquire about mehndi booking.");

document.getElementById("contactWhatsapp").href = whatsappURL;
document.getElementById("floatingWhatsapp").href = whatsappURL;

// Instagram link
document.getElementById("instagramLink").href = INSTAGRAM_URL;

// Booking form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const mehndi = document.getElementById("mehndiType").value;
    const date = eventDate.value;
    const message = document.getElementById("message").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("formMessage").textContent =
            "Please enter a valid 10-digit phone number.";
        return;
    }

    if (date < localToday) {
        document.getElementById("formMessage").textContent =
            "Please select today or a future date.";
        return;
    }

    const bookingMessage =
`Hello Sejal Henna Essence!

I would like to book a mehndi appointment.

Name: ${name}
Phone: ${phone}
Mehndi Type: ${mehndi}
Event Date: ${date}
Additional Details: ${message || "Not provided"}

Please share your availability and pricing. Thank you!`;

    const bookingURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(bookingMessage);

    document.getElementById("formMessage").textContent =
        "Opening WhatsApp to send your booking request...";

    window.open(bookingURL, "_blank", "noopener,noreferrer");
});
