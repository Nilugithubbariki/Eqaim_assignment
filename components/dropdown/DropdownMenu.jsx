import React, { useState } from "react";
import styles from "./DropdownMenu.module.scss";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className="font-bold text-sm not-italic leading-normal text-[#fff]"
        onClick={toggleDropdown}
      >
        Most Upvotes
      </button>
      {isOpen && (
        <div className={styles["dropdown-content"]}>
          <a href="#">Most Upvotes</a>
          <hr />
          <a href="#">Least Upvotes</a>
          <hr />
          <a href="#">Most Comments</a>
          <hr />
          <a href="#">Least Comments</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
