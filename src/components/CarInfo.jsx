import React from "react";

const CarInfo = () => {



  return (
      <div className="cars">
    <div className="tacoma">
      <h1>Toyota Tacoma </h1>
      <img className="tacomaImage"src="/images/USC70TOT096E122000.jpg"alt="Tacoma"/>
      <ul>Model: TRD Pro</ul>
      <ul>Price: $40,000</ul>
      <ul>Gas Milage : 18 City/22 Highway</ul>
    </div>
    <div className="camry">
        <h1>Toyota Camry</h1>
        <img className="camryImage"src="/images/USD10TOC021F021001.jpg"alt="Camry"/>
        <ul>Model: TRD</ul>
        <ul>Price: $32,910</ul>
        <ul>Gas Milage: 21City/31Highway</ul>
    </div>
    <div className="subaru">
        <h1>Subaru</h1>
        <img className="subaruImage"src="/images/2020-Subaru-WRX-Limited.webp"alt="Subaru"/>
        <ul>Model: WRX Premium</ul>
        <ul>Price: $34,155</ul>
        <ul>Gas Milage: 19City/26Highway</ul>
    </div>
    <div className="mustang">
    <h1> Ford Mustang</h1>
    <img className="mustangImage"src="/images/vehicle.png"alt="Mustang"/>
    <ul>Model: EcoBoostPremium </ul>
    <ul>Price: $32,495  </ul>
    <ul>Gas Milage: 21City/30Highway</ul>
    </div>
    <div className="mustang">
    <h1> Ford Mustang</h1>
    <img className="mustangImage"src="/images/vehicle.png"alt="Mustang"/>
    <ul>Model: GT</ul>
    <ul>Price: $37,545 </ul>
    <ul>Gas Milage: 15City/24Highway</ul>
    </div>
    <div className="dodgeV6">
        <h1>Dodge Challenger</h1>
        <ul>Model: GT </ul>
        <ul>Price: $33,800 </ul>
        <ul>Gas Milage: 19City/30Highway</ul>
    </div>
    <div className="dodgeV8">
        <h1>Dodge Challenger</h1>
        <ul>Model: RT</ul>
        <ul>Price: $39,075</ul>
        <ul>Gas Milage: 15City/23Highway</ul>
    </div>
    </div>
  );
};

export default CarInfo;