import React from "react";
import { aboutUs } from "../../data/abautUs";
import AbautUsCard from "../AbautUsCards";
import s from "./index.module.css";

export default function AbautUs() {
  return (
    <section className={["wrapper", s.abaut_us_section].join(" ")}>
      <div>
        <p className="subheader">О нас</p>
        <h2>
          Компания <span className={s.acent}> ИвановПром</span>
        </h2>
        <p className={s.abaut_us_info}>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн.
        </p>
      </div>
      <div className={s.about_us_cards}>
        {aboutUs.map((el) => (
          <AbautUsCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
