import classes from './Footer.module.scss';
import {ReactComponent as Logo} from 'images/logo.svg';

import {footer} from './data';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
        <div className={`${classes.content} container`}>
            <Logo className={classes.logo} />

            <div className={classes.menu}>
                {footer.menu.map(menuItem => (
                    <MenuGroup key={menuItem.id} {...menuItem} />
                ))}
            </div>

            <div className={classes.socials}>
                {footer.socials.map(({id, url, image: Svg}) => (
                    <a key={id} href={url}>
                        <Svg />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

const MenuGroup = ({groupTitle, links}) => (
    <div className={classes.menuGroup}>
        <h4>{groupTitle}</h4>
        {links.map(link => (
            <a key={link.text} href={link.url}>{link.text}</a>
        ))}
    </div>
);

export {Footer};
