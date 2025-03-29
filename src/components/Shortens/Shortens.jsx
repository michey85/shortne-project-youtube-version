import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { deleteShortLink, selectLinks } from '../../store/slice/linkSlice';
import { Button } from '../Button';
import classes from './Shortens.module.scss';

const Shortens = () => {
  const [copiedLinks, setCopiedLink] = useState(null);
  const links = useSelector(selectLinks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteShortLink(id));
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    });
  };

  if (!links?.length) return null;

  return (
    <section className={classes.Shortens}>
      <div className="container">
        {links.map((item) => (
          <AnimatePresence key={item.id}>
            <motion.div
              className={classes.item}
              data-active={copiedLinks === item.shortLink}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <span>{item.originalLink}</span>
              <span>{item.shortLink}</span>
              <Button
                variant="square"
                onClick={() => copyToClipboard(item.shortLink)}
              >
                {copiedLinks === item.shortLink ? 'Copied!' : 'Copy'}
              </Button>
              <Button onClick={() => handleDelete(item.id)} variant="square">
                <IoClose />
              </Button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
};

export { Shortens };
