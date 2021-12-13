import classes from './Features.module.scss';

import { features } from './data';

const Features = () => {
  return (
    <section className={classes.Features}>
      <div className="container">
          <h2 className={classes.title}>{features.title}</h2>
          <p className={classes.description}>{features.description}</p>
          <div className={classes.items}>
            {features.items.map(item => (
              <FeatureItem key={item.id} {...item} />
            ))}
          </div>
      </div>
    </section>
  )
}

const FeatureItem = ({title, body, icon}) => (
  <article className={classes.item}>
    <figure>
      <img src={icon} alt={title} />
    </figure>
    <h3>{title}</h3>
    <p>{body}</p>
  </article>
)

export {Features};