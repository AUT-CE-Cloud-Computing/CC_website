import { FC, PropsWithChildren } from "react";
import classes from "./index.module.css";

interface PresentCard extends PropsWithChildren {
  name: string;
  topic: string;
  slides?: string;
  demo?: string;
  topic_cover: string;
  avatar: string;
}
export const PresentCard: FC<PresentCard> = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__img}>
        <img src={props.topic_cover} alt={props.topic} />
      </div>
      <div className={classes.card__avatar}>
      <img src={props.avatar} alt={props.name} />
      </div>
      <div className={classes.card__title}>{props.name}</div>
      <div className={classes.card__subtitle}>{props.topic}</div>
      <div className={classes.card__wrapper}>
        {props.slides && <a className={classes.card__btn}>{props.slides}</a>}
        {props.demo && (
          <a className={`${classes.card__btn} ${classes.card__btn_solid}`}>
            {props.demo}
          </a>
        )}
      </div>
    </div>
  );
};
