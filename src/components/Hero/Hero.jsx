import classes from './Hero.module.scss';
import {Button} from 'components/Button';
import Img from 'images/illustration-working.svg';

const Hero = () => {
  return (
    <section className={`${classes.hero} container`}>
        <div className={classes.imgContainer}>
         <img src={Img} alt="hero" className={classes.img} />
        </div>
     <article className={classes.text}>
         <h1 className={classes.title}>More than just shorter links</h1>
         <p className={classes.description}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
         <Button size="large">Get Started</Button>
    </article> 
    </section>
  )
}

export {Hero};
