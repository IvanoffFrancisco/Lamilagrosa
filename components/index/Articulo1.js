import Link from "next/link";
import React, { useState, useEffect } from "react";

const Articulo1 = () => {
  const [quotes, setQuotes] = useState([]);

  const Frases = [
    "Una milanesa no soluciona tus problemas pero ayuda bastante",
    "No dejes para mañana lo que puedas comer hoy!!!",

    "La cocina donde cabemos todos",

    "Sazón y sabor a un costo menor",

    "Un mundo de sabores a un click de distancia",

    "Creando experiencias únicas para tu paladar",

    "No es solo comida, es amor en cada bocado",

    "Frescura y sabor son tu mejor opción",

    "Cada platillo está hecho con el corazón",

    "El verdadero sabor de una cocina mexicana",

    "Calidad y amor en cada cucharada",

    "Alimentos frescos y saludables siempre",
  ];

  const RandomQuotes = async () => {
    const Frases = [
      {
        quote: "No dejes para mañana lo que puedas comer hoy!!!",
      },
      {
        quote: "Sazón y sabor a un costo menor",
      },
      {
        quote: "Un mundo de sabores a un click de distancia",
      },
      {
        quote: "Creando experiencias únicas para tu paladar",
      },
      {
        quote: "No es solo comida, es amor en cada bocado",
      },
      {
        quote: "Frescura y sabor son tu mejor opción",
      },
      {
        quote: "Cada platillo está hecho con el corazón",
      },
      {
        quote: "Calidad y amor en cada comida",
      },
    ];
    const randomQuote = Math.floor(Math.random() * Frases.length);
    setQuotes(Frases[randomQuote].quote);
  };

  useEffect(() => {
    RandomQuotes();
  }, []);

  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col text-center items-center mt-5 md:mt-10 lg:mt-15 xl:mt-20">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-red-700 mx-auto tracking-wide ">
        {quotes}
      </h2>
      <h2 className="lg:text-xl xl:text-xl text-black font-semibold mx-auto tracking-wide mt-8 lg:mt-10 xl:mt-28 mb-4">
        Date el gusto con nuestra amplia variedad de menúes
      </h2>
      <Link href="/menu">
        <button className="py-2.5 lg:text-lg px-6 text-white font-semibold text-md bg-blue-600 rounded-xl uppercase shadow-md shadow-blue-900 hover:shadow-2xl transform transition-all over:-translate-y-2 duration-200 hover:scale-110 hover:-rotate-3 text-xs border-4 border-double hover:border-double hover:border-blue-700 hover:bg-white hover:text-blue-600 hover:font-black ">
          Menú
        </button>
      </Link>
    </div>
  );
};

export default Articulo1;
