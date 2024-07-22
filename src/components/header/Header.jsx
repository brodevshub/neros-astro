import { Contacto, Home, Nosotros, Novedades, Tecnicas } from '@icons/Icons';
import Hamburger from './Hamburger';
import './hamburger.css';
import './header.css';
import { useHeaderScroll } from './useHeaderScroll';

const Header = ({ pathname }) => {
    const { visible } = useHeaderScroll();

    const pages = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Nosotros', href: '/nosotros', icon: Nosotros },
        { name: 'Técnicas', href: '/tecnicas', icon: Tecnicas },
        { name: 'Contacto', href: '/contacto', icon: Contacto },
        { name: 'Novedades', href: '/novedades', icon: Novedades },
    ];

    return (
        <header style={{
            top: visible ? '0' : '-100px',
            transition: 'top 0.3s ease-in-out'
        }}>
            <picture>
                Fisioterapia
                <img src="/media/logo.png" alt="Logo" />
                Neros
            </picture>
            <nav>
                {pages.map((page) => (
                    <a
                        key={page.href}
                        href={page.href}
                        className={pathname === page.href ? 'actual-page' : ''}
                    >
                        <page.icon />
                        {page.name}
                    </a>
                ))}
            </nav>
            <Hamburger pages={pages} pathname={pathname} />
        </header>
    );
};

export default Header;
