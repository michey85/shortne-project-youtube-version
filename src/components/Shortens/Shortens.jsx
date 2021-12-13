import {Button} from 'components/Button';
import classes from './Shortens.module.scss';


const Shortens = () => {
    const links = [];

    if (!links?.length) return null;

    return (
        <section className={classes.Shortens}>
            <div className='container'>
                {links.map(item => (
                    <div
                        key={item.code}
                        className={classes.item}
                    >
                        <span>{item.original_link}</span>
                        <span>{item.full_short_link2}</span>
                        <Button
                            variant="square"
                        >
                            Copy
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export {Shortens};
