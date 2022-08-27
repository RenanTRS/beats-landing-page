import { Container } from '../../Container'
import { Section } from '../../Section'
import { Title } from '../../Title'

import s from './Products.module.scss'

import productImg1 from '../../../assets/img/products/product1.png'
import productImg2 from '../../../assets/img/products/product2.png'
import productImg3 from '../../../assets/img/products/product3.png'
import productImg4 from '../../../assets/img/products/product4.png'
import productImg5 from '../../../assets/img/products/product5.png'

import { Handbag } from 'phosphor-react'
import { Button } from '../../Button'

export const Products = () => {
  const products = [
    {
      img: productImg1,
      name: 'Black',
      price: '249'
    },
    {
      img: productImg2,
      name: 'Red Black',
      price: '249'
    },
    {
      img: productImg3,
      name: 'Night Black',
      price: '249'
    },
    {
      img: productImg4,
      name: 'Blue',
      price: '249'
    },
    {
      img: productImg5,
      name: 'Twilight gray',
      price: '249'
    }
  ]

  return (
    <Section sectionClass={s.products} grid={false} id={'products'}>
      <Title titleStyle={s.products__line}>
        Chose <br /> Your Style
      </Title>

      <Container containerClass={s.products__container}>
        {products.map((product, key) => {
          return (
            <article className={s.products__card} key={key}>
              <div className={s.products__content}>
                <img src={product.img} alt="" className={s.products__img} />

                <h3 className={s.products__title}>{product.name}</h3>

                <span className={s.products__price}>${product.price}</span>

                <Button.NormalButton isAbsolute={true}>
                  <Handbag className="button__icon" />
                </Button.NormalButton>
              </div>
            </article>
          )
        })}
      </Container>
    </Section>
  )
}
