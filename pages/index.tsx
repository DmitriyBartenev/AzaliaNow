import React from 'react';

import Head from 'next/head'

import Card from '@/components/Card';

import styles from '../styles/CardsPage.module.scss';
import Header from '@/components/Header';

interface Card {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
  rating:{
    count: number,
    rate: number
  }
}

interface CardsPageProps {
  cards: Card[]
}

const CardsPage: React.FC<CardsPageProps> = ({cards}) => {

  console.log(cards)

  return (
    <>
      <Head>
        <title>AzaliaNow</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <ul>
          {
            cards.map(item => (
              <Card key={item.id} {...item}/>
            ))
          }
        </ul>
      </main>
    </>
  )
}

export default CardsPage;

export async function getServerSideProps(){
  
  const response = await fetch('https://fakestoreapi.com/products');

  const cards = await response.json();

  return{
    props:{
      cards
    }
  }
}