import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "./Navbar.module.css";

import Image from 'next/image'

const Navbar = (props) => {
  const { username } = props;

  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleDropdown = (e) => {
      e.preventDefault()
      setShowDropdown(!showDropdown)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" passHref>
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <Image src={'/static/netflix.svg'} alt="netflxi logo" width='24px' height='24px' />
            </div>
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}  onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
              <p className={styles.username}>{username}</p>
              <Image src={'/static/expand-more.svg'} alt="netflxi logo" width="25px" height="30px" />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown} >
                <div>
                  <Link href="/login">
                    <a className={styles.linkName}>Sign out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
