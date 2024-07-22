import { useState } from 'react';
import './hamburger.css';

const Hamburger = ({ pages, pathname }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    return (
        <>
            <button className={`hamburger hamburger--squeeze ${isActive ? 'is-active' : ''}`} type="button" onClick={toggleMenu}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <div className={`overlay ${isActive ? 'is-active' : ''}`}>
                <div>
                    {pages.map((page) => (
                        <a
                            key={page.href}
                            href={page.href}
                            className={pathname === page.href ? 'actual-page' : ''}
                        >
                            <page.icon fill='white' />
                            {page.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hamburger;
