import React from "react";
import Head from "next/head";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../../index.module.css";
import { Cloudinary } from "cloudinary-core";

const cloudinaryCore = new Cloudinary({ cloud_name: "vks-images" });

export default function Glassess() {
  const content = [
    {
      type: "directory",
      name: "cat",
      displayName: "Кошки",
      price: 1700,
      description:
        "Силикон содержащая оправа (эластичная, не вызывает аллергических реакций), с флекс фиксаторами на дужках, чистая линза (без покрытий) утоплена в оправу, литые носики",
      contents: [
        { type: "file", name: "1_ydprzw.png" },
        { type: "file", name: "2_vwqzgf.png" },
        { type: "file", name: "3_zbpy0i.png" },
        { type: "file", name: "4_l24ugo.png" },
        { type: "file", name: "5_sbcflu.png" },
        { type: "file", name: "6_ly8468.png" },
      ],
    },
    {
      type: "directory",
      name: "cat_p",
      displayName: "Кошки Премиум",
      price: 1700,
      description:
        "Силикон содержащая оправа (эластичная, не вызывает аллергических реакций), с мощными завесами на дужках, чистая линза (без покрытий) утоплена в оправу, литые носики",
      contents: [
        { type: "file", name: "1_f1hb4t.jpg" },
        { type: "file", name: "2_eqpn99.jpg" },
        { type: "file", name: "3_o9kfyo.jpg" },
      ],
    },
    {
      type: "directory",
      name: "cls",
      displayName: "Классика",
      price: 1300,
      description:
        "Силикон содержащая оправа (не вызывает аллергических реакций), флекс фиксаторы на дужках, чистая линза (без покрытий) утоплена в оправу, литые носики",
      contents: [
        { type: "file", name: "1_huu1zy.png" },
        { type: "file", name: "2_ntsqcp.png" },
        { type: "file", name: "3_yvsirq.png" },
      ],
    },
    {
      type: "directory",
      name: "comp_1",
      displayName: "Компьютерная защита",
      price: 1850,
      description:
        "Линзы антибликовые(которые дают желтизну и блокируют синий спектр) , защищают от попадания в глаза ультрафиолета, мерцаний кадра монитора  и люминесцентных ламп",
      contents: [
        { type: "file", name: "1_gya8h5.jpg" },
        { type: "file", name: "2_emirnd.jpg" },
      ],
    },
    {
      type: "directory",
      name: "comp_2",
      displayName: "Компьютерная защита",
      price: 1850,
      description:
        "Линзы антибликовые(которые дают желтизну и блокируют синий спектр) , защищают от попадания в глаза ультрафиолета, мерцаний кадра монитора  и люминесцентных ламп",
      contents: [
        { type: "file", name: "1_icvdnc.jpg" },
        { type: "file", name: "2_qfmlou.jpg" },
      ],
    },
    {
      type: "directory",
      name: "comp_3",
      displayName: "Компьютерная защита",
      price: 1850,
      description:
        "Линзы антибликовые(которые дают желтизну и блокируют синий спектр) , защищают от попадания в глаза ультрафиолета, мерцаний кадра монитора  и люминесцентных ламп",
      contents: [
        { type: "file", name: "1_v8fqmt.jpg" },
        { type: "file", name: "2_m48ak3.jpg" },
        { type: "file", name: "3_ctm0ha.jpg" },
        { type: "file", name: "4_ql7led.jpg" },
      ],
    },
    {
      type: "directory",
      name: "comp_4",
      displayName: "Компьютерная защита",
      price: 1850,
      description:
        "Линзы антибликовые(которые дают желтизну и блокируют синий спектр) , защищают от попадания в глаза ультрафиолета, мерцаний кадра монитора  и люминесцентных ламп",
      contents: [
        { type: "file", name: "1_whcaqj.jpg" },
        { type: "file", name: "2_pc7jzq.jpg" },
        { type: "file", name: "3_b9vajr.jpg" },
        { type: "file", name: "4_hrygzx.jpg" },
      ],
    },
    {
      type: "directory",
      name: "comp_5",
      displayName: "Компьютерная защита",
      price: 1850,
      description:
        "Линзы антибликовые(которые дают желтизну и блокируют синий спектр) , защищают от попадания в глаза ультрафиолета, мерцаний кадра монитора  и люминесцентных ламп",
      contents: [
        { type: "file", name: "1_aqopxm.jpg" },
        { type: "file", name: "2_m7uefr.jpg" },
      ],
    },
    {
      type: "directory",
      name: "comp_6",
      displayName: "Компьютерная защита",
      price: 1850,
      description:
        "Линзы антибликовые(которые дают желтизну и блокируют синий спектр) , защищают от попадания в глаза ультрафиолета, мерцаний кадра монитора  и люминесцентных ламп",
      contents: [
        { type: "file", name: "1_eytl6w.jpg" },
        { type: "file", name: "2_laozne.jpg" },
      ],
    },
    {
      type: "directory",
      name: "eleg",
      displayName: "Элегант",
      price: 1500,
      description:
        "Силикон содержащая оправа (эластичная, не вызывает аллергических реакций), модели с флекс фиксаторами, линзы чистые (без покрытий) утоплены в оправу, литые носики",
      contents: [
        { type: "file", name: "1_mcnyuv.jpg" },
        { type: "file", name: "2_c30e7o.jpg" },
      ],
    },
    {
      type: "directory",
      name: "eleg_2",
      displayName: "Элегант",
      price: 1500,
      description:
        "Силикон содержащая оправа (эластичная, не вызывает аллергических реакций), модели с флекс фиксаторами, линзы чистые (без покрытий) утоплены в оправу, литые носики",
      contents: [
        { type: "file", name: "1_j1r75q.jpg" },
        { type: "file", name: "2_iffxyj.jpg" },
        { type: "file", name: "3_ljipxw.jpg" },
      ],
    },
    {
      type: "directory",
      name: "eleg_prem",
      displayName: "Элегант Премиум",
      price: 1500,
      description:
        "Силикон содержащая оправа (эластичная, не вызывает аллергических реакций), модели с флекс фиксаторами, линзы чистые (без покрытий) утоплены в оправу, литые носики",
      contents: [
        { type: "file", name: "1_gtssfj.jpg" },
        { type: "file", name: "2_bfmdit.jpg" },
        { type: "file", name: "3_tlg7xd.jpg" },
      ],
    },
    {
      type: "directory",
      name: "far",
      displayName: "Для водителей",
      price: 2250,
      description:
        "Очки антифары специально для вождения. Улучшает видимость в туман, пасмурную погоду, дождь , снег, гасят дальний и ближний свет фар – встречный поток Вас не слепит",
      contents: [
        { type: "file", name: "1_vuvhbe.png" },
        { type: "file", name: "2_xay7j4.png" },
        { type: "file", name: "3_icqa5c.png" },
      ],
    },
    {
      type: "directory",
      name: "fedor",
      displayName: "Очки Фёдорова",
      price: 1000,
      description:
        "Очки-тренажеры-корректируют остроту зрения благодаря воздействию на естественный механизм аккомодации глаз",
      contents: [
        { type: "file", name: "1_fhncli.png" },
        { type: "file", name: "2_a77qo1.jpg" },
        { type: "file", name: "3_wboe8g.jpg" },
        { type: "file", name: "4_vqoi4u.png" },
      ],
    },
    {
      type: "directory",
      name: "gla",
      displayName: "Антиглаукомные",
      price: 1500,
      description:
        "Глаукомные очки - преломляют световые лучи и нейтрализуют вредный ультрафиолет, расслабляют зрительный нерв",
      contents: [
        { type: "file", name: "1_rsv7kp.png" },
        { type: "file", name: "2_ohxqt0.jpg" },
        { type: "file", name: "3_cnjdu4.jpg" },
        { type: "file", name: "4_pookjo.jpg" },
      ],
    },
    {
      type: "directory",
      name: "photo_chrome",
      displayName: "Фотохромные",
      price: 2000,
      description:
        "Меняют степень затемнения линз в зависимости от яркости освещения. Линза выполнена из стекла. Модели с флекс фиксаторами, линзы утоплены в оправу, литые носики",
      contents: [
        { type: "file", name: "1_umkeqx.jpg" },
        { type: "file", name: "2_ro0tpn.jpg" },
        { type: "file", name: "3_xpxyce.jpg" },
      ],
    },
    {
      type: "directory",
      name: "prest",
      displayName: "Престиж",
      price: 1500,
      description:
        "Силикон содержащая оправа (эластичная, не вызывает аллергических реакций), модели с флекс фиксаторами, линзы чистые (без покрытий) утоплены в оправу, литые носики",
      contents: [
        { type: "file", name: "1_nnylcq.png" },
        { type: "file", name: "2_oxshlh.png" },
        { type: "file", name: "3_mscfut.png" },
        { type: "file", name: "4_rd3c0x.png" },
      ],
    },
    {
      type: "directory",
      name: "prest_2",
      displayName: "Престиж",
      price: 1500,
      description:
        "Силикон содержащая оправа (эластичная, не вызывает аллергических реакций), модели с флекс фиксаторами, линзы чистые (без покрытий) утоплены в оправу, литые носики",
      contents: [
        { type: "file", name: "1_vxgvh3.jpg" },
        { type: "file", name: "2_yqazqi.jpg" },
        { type: "file", name: "3_l7yart.jpg" },
        { type: "file", name: "4_qo4vuq.jpg" },
      ],
    },
    {
      type: "directory",
      name: "prest_prem",
      displayName: "Престиж Премиум",
      price: 1700,
      description:
        "Силикон содержащая оправа (эластичная, не вызывает аллергических реакций), с мощными завесами на дужках, чистая линза (без покрытий) утоплена в оправу, литые носики",
      contents: [
        { type: "file", name: "1_jdchd8.jpg" },
        { type: "file", name: "2_qmqkn1.jpg" },
        { type: "file", name: "3_mrcmid.jpg" },
      ],
    },
    {
      type: "directory",
      name: "ton",
      displayName: "Тонировка",
      price: 1700,
      description:
        "Металлическая полу-оправа, на дужках присутствуют флекс-фиксаторы(оправа не растягивается и не деформируется). Линза тонированная(Стабилизирует внутриглазное давление)",
      contents: [
        { type: "file", name: "1_uayu14.jpg" },
        { type: "file", name: "2_war8ww.png" },
        { type: "file", name: "3_psvrdo.png" },
      ],
    },
  ];
  return (
    <div style={{ marginTop: "36px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {content
          .sort((a, b) => a.displayName.localeCompare(b.displayName))
          .map((item) => {
            const image = cloudinaryCore.url(
              `optics/${item.name}/${item.contents[0].name}`
            );
            return (
              <Card
                key={image}
                style={{
                  maxWidth: "450px",
                  width: "100%",
                  margin: "16px",
                  minWidth: "350px",
                  flex: "1 1 calc(33.33% - 32px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                variant="outlined"
              >
                <CardMedia
                  style={{
                    height: "200px",
                    maxHeight: "200px",
                  }}
                  image={image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.displayName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span>от {item.price || 0} руб</span>
                  {/* <Button size="small" color="primary">
                    Сделать заказ
                  </Button> */}
                </CardActions>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
