import {motion} from 'framer-motion';
import classes from './CallToAction.module.scss';

import { MButton } from 'components/Button'

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const btnAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const CallToAction = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      className={classes.CallToAction}
      style={{overflow: 'hidden'}}
    >
      <motion.h2 variants={textAnimation}>Boost your links today</motion.h2>
      <MButton variants={btnAnimation}>Get Started</MButton>
    </motion.section>
  )
}

export {CallToAction};