import React from "react";
import { plans } from "./data/plans";
import s from "./index.module.css";
import PlanCard from "../PlanCard";

export default function Plans() {
  return (
    <div className={s.plans_block}>
    <div>
      <h2>Find the right plan</h2>
      <div className={s.cards_container}>
        {plans.map((el) => (
          <PlanCard key={el.id} {...el} />
        ))}
      </div>
      <p>*Overages</p>
      <p>
        {" "}
        apply if contact or email send limit is exceeded. Free plan sending will
        be paused if contact or email send limit is exceeded.
      </p>
      <a href="#">Lear more</a>
    </div>
    </div>
  );
}
