import React from "react";

const CarInfo = () => {

  return (
      <div className="cars">
    <div className="tacoma">
      <h1>Toyota Tacoma </h1>
      <ul>Model: TRD Pro</ul>
      <ul>Price: $40,000</ul>
      <ul>Gas Milage : 18 City/22 Highway</ul>
    </div>
    <div className="mustang">
    <h1> Ford Mustang</h1>
    <ul>Model: EcoBoostPremium / GT</ul>
    <ul>Price: $32,495 / $37,545 </ul>
    <ul>Gas Milage: 21City/30Highway / 15City/24Highway</ul>
    </div>
    <div className="subaru">
        <h1>Subaru</h1>
        <ul>Model: WRX Premium</ul>
        <ul>Price: $34,155</ul>
        <ul>Gas Milage: 19City/26Highway</ul>
    </div>
    <div className="dodge">
        <h1>Dodge Challenger</h1>
        <ul>Model: GT / RT</ul>
        <ul>Price: $33,800 / $39,075</ul>
        <ul>Gas Milage: 19City/30Highway / 15City/23Highway</ul>
    </div>
    <div className="camry">
        <h1>Toyota Camry</h1>
        <ul>Model: TRD</ul>
        <ul>Price: $32,910</ul>
        <ul>Gas Milage: 21City/31Highway</ul>
    </div>
    </div>
  );
};

export default CarInfo;