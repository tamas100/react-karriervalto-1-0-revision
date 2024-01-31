import React from 'react';
import './FlashCards.css'
import Card from './Card/Card';

export default function FlashCards() {
  return (
    <div>
      <h1>Flash Cards</h1>
      <h2>Click on a card to reveal the secret solution.</h2>
      <Card frontSide="9 * 6" backSide="54"/>
      <Card frontSide="2 ** 8" backSide="256"/>
      <Card frontSide="rabbit * 8" backSide="rabbyte"/>
    </div>
  )
}
