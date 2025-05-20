const translations = {
  en: {
    navAbout: "About",
    navContact: "Contact",
    navBrand: "Andrea Flowers",
    heroHeading: "Flowers for every occasion",
    heroText: "Welcome to Andrea Flowers where every flower tells a story...",
    getInTouch: "Get in touch",
    featuredBouquets: "Featured Bouquets",
    roseBouquet: "Rose Bouquet",
    roseDescription: "Classic red roses for romantic occasions.",
    springMix: "Spring Mix",
    springDescription: "A vibrant selection of seasonal blooms.",
    sunflowerShine: "Sunflower Shine",
    sunflowerDescription: "Bright sunflowers to light up your day.",
    elegantLilies: "Elegant Lilies",
    liliesDescription: "Elegant white lilies perfect for any occasion.",
    reviewsHeading: "What Our Customers Say...",
    review1Name: "Jane D.",
    review1Quote:
      "Absolutely stunning arrangements! The flowers made my event magical.",
    review2Name: "Mike R.",
    review2Quote:
      "Great customer service and beautiful flowers delivered on time.",
    review3Name: "Lila S.",
    review3Quote:
      "Andrea Flowers never disappoints! I’ve ordered multiple times and love it.",
  },
  hu: {
    navAbout: "Rólunk",
    navContact: "Kapcsolat",
    navBrand: "Andrea Virágok",
    heroHeading: "Virágok minden alkalomra",
    heroText:
      "Üdvözöljük az Andrea Flowers-nál, ahol minden virág egy történetet mesél el...",
    getInTouch: "Lépjen kapcsolatba velünk",
    featuredBouquets: "Kiemelt Csokrok",
    roseBouquet: "Rózsa Csokor",
    roseDescription: "Klasszikus vörös rózsák romantikus alkalmakra.",
    springMix: "Tavaszi Vegyes",
    springDescription: "Élénk szezonális virágok válogatása.",
    sunflowerShine: "Napraforgó Fény",
    sunflowerDescription: "Ragyogó napraforgók, hogy feldobják a napod.",
    elegantLilies: "Elegáns Liliomok",
    liliesDescription: "Elegáns fehér liliomok minden alkalomra.",
    reviewsHeading: "Mit mondanak ügyfeleink...",
    review1Name: "Jánosné D.",
    review1Quote:
      "Lenyűgöző virágkompozíciók! A virágok varázslatossá tették az eseményemet.",
    review2Name: "Miklós R.",
    review2Quote:
      "Nagyszerű ügyfélszolgálat és gyönyörű virágok időben szállítva.",
    review3Name: "Lívia S.",
    review3Quote:
      "Az Andrea Flowers sosem okoz csalódást! Többször rendeltem már és imádom.",
  },
};

let currentLang = "en";

function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");

  if (langToggle) {
    langToggle.addEventListener("click", (e) => {
      e.preventDefault();
      currentLang = currentLang === "en" ? "hu" : "en";
      updateTexts();
    });
  }

  updateTexts();
});
