/*
========================================
PROMO SLIDES DATA
========================================
This array stores the image pairs used in the promo slider
on the home page. Each object represents one slide.
*/
const promoSlides = [
    {
        leftImage: "images/promo-tools.jpg",
        rightImage: "images/promo-sale.jpg"
    },
    {
        leftImage: "images/promo-cookware.jpg",
        rightImage: "images/promo-clothing-sale.jpg"
    },
    {
        leftImage: "images/promo-lawn.jpg",
        rightImage: "images/promo-big-deal.jpg"
    }
];

/*
========================================
POPULAR SLIDES DATA
========================================
This array stores the groups of items shown in the popular
categories slider. Each inner array is one full slide with
3 category cards.
*/
const popularSlides = [
    [
        { image: "images/fashion.jpg", label: "Fashion" },
        { image: "images/tools.jpg", label: "Tools" },
        { image: "images/outdoor.jpg", label: "outdoor" }
    ],
    [
        { image: "images/appliance.jpg", label: "Appliances" },
        { image: "images/cookware.jpg", label: "Cookware" },
        { image: "images/decor.jpg", label: "Home Decor" }
    ],
    [
        { image: "images/shoes.jpg", label: "Shoes" },
        { image: "images/garden.jpg", label: "Garden" },
        { image: "images/electronics.jpg", label: "Electronics" }
    ]
];

/*
========================================
SLIDE TRACKING VARIABLES
========================================
These variables keep track of which promo slide and which
popular slide is currently being displayed.
*/
let promoIndex = 0;
let popularIndex = 0;

/*
========================================
HOME PAGE ELEMENTS
========================================
These variables grab the HTML elements used by the sliders,
including images, labels, dots, and arrow buttons.
*/
const promoLeftImage = document.getElementById("promoLeftImage");
const promoRightImage = document.getElementById("promoRightImage");
const promoDots = document.querySelectorAll("#promoDots .dot");

const popularImage1 = document.getElementById("popularImage1");
const popularImage2 = document.getElementById("popularImage2");
const popularImage3 = document.getElementById("popularImage3");

const popularLabel1 = document.getElementById("popularLabel1");
const popularLabel2 = document.getElementById("popularLabel2");
const popularLabel3 = document.getElementById("popularLabel3");

const popularDots = document.querySelectorAll("#popularDots .dot");

const promoPrev = document.getElementById("promoPrev");
const promoNext = document.getElementById("promoNext");
const popularPrev = document.getElementById("popularPrev");
const popularNext = document.getElementById("popularNext");

/*
========================================
PROMO CAROUSEL FUNCTION
========================================
This function updates the promo slider images based on the
current slide index. It also updates the active dot.
*/
function showPromoSlide(index) {
    // If the promo images are not found on the page, stop the function
    if (!promoLeftImage || !promoRightImage) {
        return;
    }

    // Change the left and right promo images
    promoLeftImage.src = promoSlides[index].leftImage;
    promoRightImage.src = promoSlides[index].rightImage;

    // Remove the active class from all dots, then add it to the current one
    promoDots.forEach((dot, dotIndex) => {
        dot.classList.remove("active");

        if (dotIndex === index) {
            dot.classList.add("active");
        }
    });
}

/*
========================================
POPULAR CAROUSEL FUNCTION
========================================
This function updates the 3 popular category cards for the
current slide and also updates the active dot.
*/
function showPopularSlide(index) {
    // If any needed image or label is missing, stop the function
    if (
        !popularImage1 || !popularImage2 || !popularImage3 ||
        !popularLabel1 || !popularLabel2 || !popularLabel3
    ) {
        return;
    }

    // Update first card image, alt text, and label
    popularImage1.src = popularSlides[index][0].image;
    popularImage1.alt = popularSlides[index][0].label;
    popularLabel1.textContent = popularSlides[index][0].label;

    // Update second card image, alt text, and label
    popularImage2.src = popularSlides[index][1].image;
    popularImage2.alt = popularSlides[index][1].label;
    popularLabel2.textContent = popularSlides[index][1].label;

    // Update third card image, alt text, and label
    popularImage3.src = popularSlides[index][2].image;
    popularImage3.alt = popularSlides[index][2].label;
    popularLabel3.textContent = popularSlides[index][2].label;

    // Update which dot is active
    popularDots.forEach((dot, dotIndex) => {
        dot.classList.remove("active");

        if (dotIndex === index) {
            dot.classList.add("active");
        }
    });
}

/*
========================================
PROMO BUTTON EVENTS
========================================
These event listeners let the user click the previous and
next arrows to move through the promo slider.
*/
if (promoPrev && promoNext) {
    promoPrev.addEventListener("click", function () {
        // Move backward one slide and wrap around if needed
        promoIndex = (promoIndex - 1 + promoSlides.length) % promoSlides.length;
        showPromoSlide(promoIndex);
    });

    promoNext.addEventListener("click", function () {
        // Move forward one slide and wrap around if needed
        promoIndex = (promoIndex + 1) % promoSlides.length;
        showPromoSlide(promoIndex);
    });
}

/*
========================================
POPULAR BUTTON EVENTS
========================================
These event listeners let the user click the previous and
next arrows to move through the popular slider.
*/
if (popularPrev && popularNext) {
    popularPrev.addEventListener("click", function () {
        // Move backward one slide and wrap around if needed
        popularIndex = (popularIndex - 1 + popularSlides.length) % popularSlides.length;
        showPopularSlide(popularIndex);
    });

    popularNext.addEventListener("click", function () {
        // Move forward one slide and wrap around if needed
        popularIndex = (popularIndex + 1) % popularSlides.length;
        showPopularSlide(popularIndex);
    });
}

/*
========================================
CLICKABLE DOTS
========================================
These listeners allow the user to click a dot to jump
directly to a specific slide.
*/
promoDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        promoIndex = index;
        showPromoSlide(promoIndex);
    });
});

popularDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        popularIndex = index;
        showPopularSlide(popularIndex);
    });
});

/*
========================================
INITIAL HOME PAGE LOAD
========================================
When the page first loads, these lines display the starting
promo and popular slides.
*/
if (promoLeftImage && promoRightImage) {
    showPromoSlide(promoIndex);
}

if (
    popularImage1 && popularImage2 && popularImage3 &&
    popularLabel1 && popularLabel2 && popularLabel3
) {
    showPopularSlide(popularIndex);
}

/*
========================================
SIDEBAR ELEMENTS
========================================
These variables grab the buttons and containers used for
opening and closing the sidebar menu.
*/
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");

/*
========================================
SIDEBAR FUNCTIONALITY
========================================
This makes the sidebar open when the menu button is clicked
and close when the close button or overlay is clicked.
*/
if (openBtn && closeBtn && sidebar && overlay) {
    openBtn.addEventListener("click", function () {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
}

/*
========================================
LOADER ELEMENTS
========================================
These variables get the loader overlay, loader text, and
progress bar used during page transitions.
*/
const pageLoader = document.getElementById("pageLoader");
const loaderText = document.getElementById("loaderText");
const progressBarFill = document.getElementById("progressBarFill");

/*
This simple function just shows the loader screen.
*/
function showPageLoader() {
    if (pageLoader) {
        pageLoader.classList.add("active");
    }
}

/*
This function shows the loader with a progress bar animation,
updates the text, and then redirects to another page when
the progress reaches 100%.
*/
function showPageLoaderWithProgress(text, targetPage) {
    if (!pageLoader || !progressBarFill) {
        return;
    }

    // Change the message shown in the loader
    if (loaderText) {
        loaderText.textContent = text;
    }

    // Reset the progress bar to 0 and show the loader
    progressBarFill.style.width = "0%";
    pageLoader.classList.add("active");

    let progress = 0;

    // Slowly increase the progress bar
    const interval = setInterval(function () {
        progress += 10;
        progressBarFill.style.width = progress + "%";

        // When full, stop the interval and go to the target page
        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = targetPage;
        }
    }, 180);
}

/*
========================================
INTERNAL LINK LOADING
========================================
This block adds a loading effect to normal internal page
links before actually moving to the new page.
*/
const allLinks = document.querySelectorAll("a[href]");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        // Ignore empty links or special links
        if (!href) return;
        if (href.startsWith("#")) return;
        if (href.startsWith("http")) return;
        if (href.startsWith("mailto:")) return;
        if (href.startsWith("tel:")) return;

        // Stop the page from changing immediately
        event.preventDefault();
        showPageLoader();

        // Wait 2 seconds, then go to the page
        setTimeout(function () {
            window.location.href = href;
        }, 2000);
    });
});

/*
========================================
BUTTON REDIRECT LOADING
========================================
This block adds a loading state to buttons that use the
data-loading-target attribute for page navigation.
*/
const loadingButtons = document.querySelectorAll("[data-loading-target]");

loadingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const target = button.getAttribute("data-loading-target");
        if (!target) return;

        button.classList.add("loading");
        showPageLoader();

        setTimeout(function () {
            window.location.href = target;
        }, 2000);
    });
});

/*
========================================
SIGN UP LOADING STATE
========================================
This block adds a loading effect to the sign up button and
redirects the user to the success page.
*/
const signupButton = document.getElementById("signupButton");

if (signupButton) {
    signupButton.addEventListener("click", function () {
        signupButton.disabled = true;
        signupButton.classList.add("loading");
        signupButton.textContent = "Signing Up...";

        if (progressBarFill) {
            showPageLoaderWithProgress("Creating your account...", "signup-success.html");
        } else {
            showPageLoader();

            setTimeout(function () {
                window.location.href = "signup-success.html";
            }, 2000);
        }
    });
}

/*
========================================
SIGN IN LOADING STATE
========================================
This block adds a loading effect to the sign in button and
redirects the user to the sign in success page.
*/
const signinButton = document.getElementById("signinButton");

if (signinButton) {
    signinButton.addEventListener("click", function () {
        signinButton.disabled = true;
        signinButton.classList.add("loading");
        signinButton.textContent = "Signing In...";

        if (progressBarFill) {
            showPageLoaderWithProgress("Signing you in...", "signin-success.html");
        } else {
            showPageLoader();

            setTimeout(function () {
                window.location.href = "signin-success.html";
            }, 2000);
        }
    });
}

/*
========================================
HELP PAGE DROPDOWN
========================================
This block makes each help section open and close when
its arrow button is clicked.
*/
const categories = document.querySelectorAll(".help-category");

categories.forEach(cat => {
    const btn = cat.querySelector(".arrow-btn");
    const details = cat.querySelector(".help-details");

    if (btn && details) {
        btn.addEventListener("click", () => {
            details.classList.toggle("open");
            btn.classList.toggle("rotated");
        });
    }
});

/*
========================================
CART COUNTER + ADD TO CART
========================================
This section keeps track of how many items are in the cart,
shows the cart badge, saves the count in localStorage, and
adds a small toast message when an item is added.
*/
const addCartButtons = document.querySelectorAll(".add-cart-btn");
const cartCount = document.getElementById("cartCount");

// Get current cart total from localStorage, or start at 0
let cartTotal = Number(localStorage.getItem("cartTotal")) || 0;

/*
This function updates the cart badge number and hides it
if the cart total is 0.
*/
function updateCartBadge() {
    if (!cartCount) return;

    cartCount.textContent = cartTotal;

    if (cartTotal > 0) {
        cartCount.classList.remove("hidden");
    } else {
        cartCount.classList.add("hidden");
    }
}

// Show the correct cart number when the page loads
updateCartBadge();

if (addCartButtons.length > 0) {
    // Create a toast notification element once
    const toast = document.createElement("div");
    toast.classList.add("cart-toast");
    toast.textContent = "Item added to cart!";
    document.body.appendChild(toast);

    addCartButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            // Increase the cart total and save it
            cartTotal++;
            localStorage.setItem("cartTotal", cartTotal);
            updateCartBadge();

            // Show button and toast feedback
            button.textContent = "Added!";
            button.classList.add("added");
            toast.classList.add("show");

            // After a short delay, reset button and go to cart page
            setTimeout(function () {
                button.textContent = "Add to Cart";
                button.classList.remove("added");
                toast.classList.remove("show");
                window.location.href = "cart.html";
            }, 800);
        });
    });
}

/*
========================================
ABOUT PAGE LOAD MORE
========================================
This block shows or hides extra text on the about page
when the user clicks the load more button.
*/
var loadBtn = document.querySelector(".load-more");
var detail = document.querySelector(".extra-detail");

if (loadBtn && detail) {
    loadBtn.onclick = function () {
        if (detail.style.display === "none") {
            detail.style.display = "block";
        } else {
            detail.style.display = "none";
        }
    };
}

/*
========================================
SEARCH SUGGESTIONS
========================================
This block gives the user simple search suggestions while
they type in the header search box.
*/
const headerSearchInput = document.getElementById("headerSearchInput");
const suggestionsBox = document.getElementById("suggestions");

if (headerSearchInput && suggestionsBox) {
    // Example items used for fake search suggestions
    const items = [
        "Dress",
        "Deals",
        "Dryer",
        "Appliances",
        "Appliances set",
        "Appliances kit",
        "Tools",
        "Tool set",
        "Tool kit"
    ];

    headerSearchInput.addEventListener("input", () => {
        const value = headerSearchInput.value.toLowerCase();

        // Clear old suggestions first
        suggestionsBox.innerHTML = "";

        if (value === "") return;

        // Only keep items that start with the typed text
        const filtered = items.filter(item =>
            item.toLowerCase().startsWith(value)
        );

        // Show message if nothing matches
        if (filtered.length === 0) {
            suggestionsBox.innerHTML = "<p>no results found</p>";
        } else {
            // Show up to 5 suggestions
            filtered.slice(0, 5).forEach(item => {
                const div = document.createElement("div");
                div.textContent = item;
                suggestionsBox.appendChild(div);
            });
        }
    });
}

/*
========================================
SEARCH PAGE LOADING
========================================
This section creates a fake search experience by showing
loading skeleton cards first, then replacing them with
fake results after a delay.
*/
const searchButton = document.getElementById("searchButton");
const searchLoadingInput = document.getElementById("searchInput");
const searchStatus = document.getElementById("searchStatus");
const searchResults = document.getElementById("searchResults");

/*
This function shows skeleton loading cards while the search
is pretending to load.
*/
function showSearchSkeletons() {
    if (!searchResults) return;

    searchResults.innerHTML = `
        <div class="skeleton-card">
            <div class="skeleton-left">
                <div class="skeleton-circle"></div>
                <div class="skeleton-text">
                    <div class="skeleton-line title"></div>
                    <div class="skeleton-line subtitle"></div>
                </div>
            </div>
            <div class="skeleton-image"></div>
        </div>

        <div class="skeleton-card">
            <div class="skeleton-left">
                <div class="skeleton-circle"></div>
                <div class="skeleton-text">
                    <div class="skeleton-line title"></div>
                    <div class="skeleton-line subtitle"></div>
                </div>
            </div>
            <div class="skeleton-image"></div>
        </div>

        <div class="skeleton-card">
            <div class="skeleton-left">
                <div class="skeleton-circle"></div>
                <div class="skeleton-text">
                    <div class="skeleton-line title"></div>
                    <div class="skeleton-line subtitle"></div>
                </div>
            </div>
            <div class="skeleton-image"></div>
        </div>
    `;
}

/*
This function replaces the skeleton loaders with fake
search results using the user's search text.
*/
function showFakeSearchResults(queryText) {
    if (!searchResults) return;

    searchResults.innerHTML = `
        <div class="search-card">
            <div class="card-left">
                <div class="circle">1</div>
                <div>
                    <p class="title">${queryText || "Tools"}</p>
                    <p class="subtitle">Popular matching result</p>
                </div>
            </div>
            <img src="images/tools.jpg" alt="Search result">
        </div>

        <div class="search-card">
            <div class="card-left">
                <div class="circle">2</div>
                <div>
                    <p class="title">Appliances</p>
                    <p class="subtitle">Recommended for you</p>
                </div>
            </div>
            <img src="images/appliance.jpg" alt="Search result">
        </div>

        <div class="search-card">
            <div class="card-left">
                <div class="circle">3</div>
                <div>
                    <p class="title">Cookware</p>
                    <p class="subtitle">Top searched item</p>
                </div>
            </div>
            <img src="images/cookware.jpg" alt="Search result">
        </div>
    `;
}

if (searchButton && searchStatus && searchResults) {
    searchButton.addEventListener("click", function () {
        const queryText = searchLoadingInput ? searchLoadingInput.value.trim() : "";

        // Show loading state on the button
        searchButton.disabled = true;
        searchButton.classList.add("loading");
        searchStatus.textContent = "Searching...";
        showSearchSkeletons();

        // After a short delay, show fake results
        setTimeout(function () {
            searchStatus.textContent = "Results loaded";
            showFakeSearchResults(queryText);

            searchButton.disabled = false;
            searchButton.classList.remove("loading");
        }, 1800);
    });
}

/*
========================================
CONTACT US FORM
========================================
This section handles validation for the contact form and
shows a fake sending/loading state before success.
*/

/*
========================================
CONTACT FORM VALIDATION
========================================
These variables grab the contact form fields, button, and
error messages.
*/
const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactSubmitBtn = document.getElementById("contactSubmitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

/*
This function checks if the username is at least 4
characters long. It adds valid/invalid classes and
shows or hides the error message.
*/
function validateUsername() {
    if (!contactName) return false;

    const username = contactName.value.trim();

    if (username.length >= 4) {
        contactName.classList.remove("input-invalid");
        contactName.classList.add("input-valid");
        if (nameError) nameError.classList.remove("show");
        return true;
    } else {
        contactName.classList.remove("input-valid");
        contactName.classList.add("input-invalid");
        if (nameError) nameError.classList.add("show");
        return false;
    }
}

/*
This function checks if the email matches one of the allowed
email domains. It also updates the field style and error
message.
*/
function validateEmail() {
    if (!contactEmail) return false;

    const email = contactEmail.value.trim().toLowerCase();
    const validEmailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com|icloud\.com|aol\.com)$/;

    if (validEmailPattern.test(email)) {
        contactEmail.classList.remove("input-invalid");
        contactEmail.classList.add("input-valid");
        if (emailError) emailError.classList.remove("show");
        return true;
    } else {
        contactEmail.classList.remove("input-valid");
        contactEmail.classList.add("input-invalid");
        if (emailError) emailError.classList.add("show");
        return false;
    }
}

/*
These event listeners validate the fields while the user is
typing and also when they click away from the input.
*/
if (contactName) {
    contactName.addEventListener("input", validateUsername);
    contactName.addEventListener("blur", validateUsername);
}

if (contactEmail) {
    contactEmail.addEventListener("input", validateEmail);
    contactEmail.addEventListener("blur", validateEmail);
}

/*
This submit event checks the form before allowing it to
"send". If the inputs are valid, it shows a loading effect,
then resets the form after success.
*/
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const isNameValid = validateUsername();
        const isEmailValid = validateEmail();

        // Stop here if either field is invalid
        if (!isNameValid || !isEmailValid) {
            return;
        }

        // Show loading state on the submit button
        if (contactSubmitBtn) {
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.textContent = "Sending...";
        }

        // Show page loader if it exists
        if (pageLoader) {
            pageLoader.classList.add("active");
        }

        // Fake sending delay
        setTimeout(function () {
            if (pageLoader) {
                pageLoader.classList.remove("active");
            }

            alert("Message sent successfully!");

            // Clear the form
            contactForm.reset();

            // Remove validation colors
            contactName.classList.remove("input-valid", "input-invalid");
            contactEmail.classList.remove("input-valid", "input-invalid");

            // Hide error messages
            if (nameError) nameError.classList.remove("show");
            if (emailError) emailError.classList.remove("show");

            // Reset the submit button
            if (contactSubmitBtn) {
                contactSubmitBtn.disabled = false;
                contactSubmitBtn.textContent = "Send Message";
            }
        }, 1500);
    });
}

/* dark mode */
document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll("[data-theme-toggle]");
    const desktopIcon = document.querySelector(".desktop-theme-toggle i");
    const mobileText = document.querySelector(".mobile-theme-toggle .theme-toggle-text");

    function updateThemeUI() {
        const isDark = document.body.classList.contains("dark-mode");

        if (desktopIcon) {
            desktopIcon.classList.remove("fa-moon", "fa-sun");
            desktopIcon.classList.add(isDark ? "fa-sun" : "fa-moon");
        }

        if (mobileText) {
            mobileText.textContent = isDark ? "Light Mode" : "Dark Mode";
        }
    }

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            updateThemeUI();
        });
    });
    updateThemeUI();
});