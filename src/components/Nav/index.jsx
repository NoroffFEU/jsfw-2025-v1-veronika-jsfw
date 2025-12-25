import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div>
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
          <li>
            <Link>Contact us</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link>
          <FontAwesomeIcon icon={faBasketShopping} />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
