import React from "react";

export default function Favs() {
  return (
    <div className="favsBody">
      <div className="centerHeader">
        <h1>Favorites</h1>
      </div>

      <div className="linksBody">
        <a
          target="_blank"
          href="https://cookieandkate.com/best-vegan-lasagna-recipe/"
        >
          Vegan Lasagna with Cashew Cheese
        </a>
        <a
          target="_blank"
          href="https://www.connoisseurusveg.com/crispy-orange-ginger-tofu-with-broccoli/"
        >
          Orange tofu with broccoli
        </a>
        <a
          target="_blank"
          href="https://minimalistbaker.com/easy-vegan-fried-rice/"
        >
          Vegan Fried Rice with Tofu
        </a>
        <a
          target="_blank"
          href="https://www.inspiredtaste.net/15938/easy-and-smooth-hummus-recipe/"
        >
          Homemade Hummus
        </a>
      </div>
    </div>
  );
}
