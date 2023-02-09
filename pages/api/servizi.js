// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      services: [
        {
          id: 1,
          title: "Pulizia interna",
          subtitle:
            "include pulizia completa interno abitacolo, lavaggio e protezione di tutte le plastiche e panelli, lavaggio di sedili in pelle o tessuto.",
          price: [{ piccolo: "€110" }, { medio: "€130" }, { grande: "€150" }],
          src: "/img/pulizia-interna.jpg",
        },
        {
          id: 2,
          title: "Lavaggio carrozeria",
          subtitle:
            "include pulizia cerchi e passaruote, prelavaggio, lavaggio a due secchi.",
          price: [{ piccolo: "€45" }, { medio: "€50" }, { grande: "€65" }],
          src: "/img/lavaggio-carrozeria.jpg",
        },
        {
          id: 3,
          title: "Lavaggio motore",
          subtitle:
            "include sgrassamento e pulizia con vapore e protezione con dressing per le plastiche.",
          price: [{ standard: "€50" }],
          src: "/img/lavaggio-motore.jpg",
        },
        {
          id: 4,
          title: "Lucidatura fanali",
          subtitle:
            "include pulizia e sgrassamento del fanale, levigatura, lucidatura e protezione nanotech.",
          price: [{ standard: "€50" }],
          src: "/img/lucidatura-fanali.jpg",
        },
        {
          id: 5,
          title: "Lucidatura one step",
          subtitle:
            "include decontaminazione, mascheratura, lucidatura in un passaggio e sigillante spray per finitura.",
          price: [{ piccolo: "€200" }, { medio: "€300" }, { grande: "€450" }],
          src: "/img/lucidatura-one-step.jpg",
        },
        {
          id: 6,
          title: "Lucidatura two step",
          subtitle:
            "include decontaminazione, mascheratura, lucidatura in due passagi e wax/sio2 per finitura.",
          price: [{ piccolo: "€300" }, { medio: "€400" }, { grande: "€550" }],
          src: "/img/lucidatura-two-step.jpg",
        },
        {
          id: 7,
          title: "Correzione totale",
          subtitle:
            "include decontaminazione, mascheratura, lucidatura in numerosi step (percentuale di correzione 90%-95%), passaggio di finitura, protezione ceramic coating.",
          price: [{ piccolo: "€500" }, { medio: "€750" }, { grande: "€1000" }],
          src: "/img/correzione-totale.jpg",
        },
        {
          id: 8,
          title: "Trattamento cerchi e pinze",
          subtitle:
            "include pulizia cerchi e passaruote, pinze freni e protezione nanotech.",
          price: [{ piccolo: "€50" }, { medio: "€60" }, { grande: "€75" }],
          src: "/img/trattamento-cerchi-pinze.jpg",
        },
        {
          id: 9,
          title: "Trattamento pelle",
          subtitle:
            "include lavaggio delle sedute e protezione con nanotech. (Il prezzo varia in base alla quantità di sedili da trattare)",
          price: [{ standard: "€20" }],
          src: "/img/trattamento-pelle.jpg",
        },
      ],
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
