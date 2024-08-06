import "./output.css";
import { useState, useEffect } from 'react';

function Car({link, image, name, powerCV, powerKW, maxSpeed, zeroH}){
  return <div className="car w-screen h-screen absolute pb-192 top-0 left-0 flex flex-col justify-center items-start">
    <img src={image} className="w-screen h-screen pb-192 z-negative absolute top-0 left-0 object-cover object-center"/>
    <div className="ml-36 flex flex-col gap-5 drop-shadow-text">
      <h1 className="text-7xl">{name}</h1>
      <div className="flex flex-wrap tracking-wide gap-8">
        <div>
          <h1 className="font-bold text-2xl">POWER(CV) / POWER(KW)</h1>
          <h1 className="text-2xl">{powerCV}CV / {powerKW}KW</h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl">MAX. SPEED</h1>
          <h1 className="text-2xl">{maxSpeed}km/h</h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl">0-100km/h</h1>
          <h1 className="text-2xl">{zeroH}s</h1>
        </div>
      </div>
      <div onClick={() => window.location = link} className="group border-2 cursor-pointer hover:bg-white hover:rotate-0 border-white w-20 h-20 flex justify-center items-center rounded-3xl rotate-45">
        <div className="arrow group-hover:text-black group-hover:rotate-0 rotate-n45 text-3xl">&#62;</div>
      </div>
    </div>
  </div>
}

function SliderCar({link, func, image, name, powerCV, powerKW, maxSpeed, zeroH}){
  return <div onClick={() => func(link, image, name, powerCV, powerKW, maxSpeed, zeroH)} className="group flex justify-center items-end h-full min-w-72 w-72 cursor-pointer hover:translate-y-n8 hover:border-2 hover:border-white overflow-hidden rounded-3xl shadow-md shadow-black">
    <img src={image} className="w-full h-full object-cover object-center group-hover:opacity-50"/>
    <h1 className="max-w-72 z-1 opacity-0 group-hover:opacity-100 absolute text-xl box-shdaow-md mb-4">{name}</h1>
  </div>
}

function Slider({func}){
  return <div className="slider bg-black p-2 h-48 w-screen flex gap-2 overflow-x-hidden absolute bottom-0 left-0">
    <SliderCar link="https://www.lamborghini.com/en-en/models/huracan/huracan-sto" image={require("./images/hura_sto_over_02.jpg")} func = {func} name = "Lamborghini STO" powerCV = {640} powerKW = {470} maxSpeed = {310} zeroH = "3.0"/>
    <SliderCar link="https://www.lamborghini.com/en-en/models/huracan/huracan-sterrato" image={require("./images/over_new.jpg")} func = {func} name = "Lamborghini Sterrato" powerCV = {610} powerKW = {449} maxSpeed = {260} zeroH = "3.4"/>
    <SliderCar link="https://www.lamborghini.com/en-en/models/revuelto" image={require("./images/revuelto_over_01.jpg")} func = {func} name = "Lamborghini Revuelto" powerCV = {1015} powerKW = {746} maxSpeed = {350} zeroH = "2.5"/>
    <SliderCar link="https://www.lamborghini.com/en-en/models/huracan/huracan-evo-spyder" image={require("./images/hura_evo_spy_over_01.jpg")} func = {func} name = "Lamborghini Huracan Evo" powerCV = {640} powerKW = {470} maxSpeed = {325} zeroH = "3.1"/>
    <SliderCar link="https://www.porsche.com/international/models/911/911-gt3-rs/911-gt3-rs/" image={require("./images/2023-Porsche-911-GT3-RS-in-motion-3.jpg")} func = {func} name = "Porsche 911 GT3 RS" powerCV = {525} powerKW = {386} maxSpeed = {296} zeroH = "3.2"/>
    <SliderCar link="https://www.ferrari.com/en-EN/auto/laferrari-aperta" image={require("./images/aperta05.jpg")} func = {func} name = "Laferrari Aperta" powerCV = {800} powerKW = {588} maxSpeed = {350} zeroH = "2.8"/>
    <SliderCar link="https://www.ferrari.com/it-IT/auto/812-competizione" image={require("./images/Ferrari 812 Competizione 2021-2.jpg")} func = {func} name = "Ferrari 812 Competizione" powerCV = {830} powerKW = {610} maxSpeed = {350} zeroH = "2.6"/>
    <SliderCar link="https://cars.mclaren.com/en/gts" image={require("./images/01_GT_Front_34_Static_centered-1_crop-16x9.jpg")} func = {func} name = "McLaren GTS" powerCV = {626} powerKW = {466} maxSpeed = {326} zeroH = "2.9"/>
  </div>
}

export default function App(){
  const[props, setProps] = useState({
    name:"Lamborghini STO",
    powerCV:640,
    powerKW:470,
    maxSpeed:310,
    zeroH:"3.0",
    image:require("./images/hura_sto_over_02.jpg"),
    link:"https://www.lamborghini.com/en-en/models/huracan/huracan-sto"
  })

  useEffect(() => {
    window.addEventListener("wheel", (wheel) => {
      let el = document.querySelector(".slider");
      if(wheel.deltaY > 0)
        el.scrollLeft += 10;
      else
        el.scrollLeft -= 10;
      console.log(el.scrollLeft)
    })
  }, []);
  function setVariables(link1, image1, name1, powerCV1, powerKW1, maxSpeed1, zeroH1){
    setProps({
      name:name1,
      powerCV:powerCV1,
      powerKW:powerKW1,
      maxSpeed:maxSpeed1,
      zeroH:zeroH1,
      image:image1,
      link:link1
    });
  }
  return <div className="container w-screen h-screen">
    <Car link={props.link} image={props.image} name={props.name} powerCV={props.powerCV} powerKW={props.powerKW} maxSpeed={props.maxSpeed} zeroH={props.zeroH}/>
    <Slider func={setVariables}/>
  </div>
}