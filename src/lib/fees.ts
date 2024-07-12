export interface FisioterapiaService {
    title: string;
    description: string;
    price: number | string;
    image: string;
}

export const fees: FisioterapiaService[] = [
    {
        title: "Sesión de fisioterapia",
        description: "Nuestra sesión de fisioterapia de 1 hora se centra en tu rehabilitación y bienestar, utilizando terapias y ejercicios personalizados para aliviar el dolor y mejorar tu movilidad.",
        price: 38,
        image: "/media/fees/sesion.png"
    },
    {
        title: "Media Sesión",
        description: "La sesión de fisioterapia de 30 minutos para niños, donde se abordan problemas de movilidad y lesiones específicas de manera efectiva en un tiempo reducido",
        price: 26,
        image: "/media/fees/half.png"
    },
    {
        title: "Urgencias",
        description: "Atención especializada y rápida (de 21:00 a 22:00) para abordar lesiones críticas y aliviar el dolor de manera efectiva e innmediata. Enfoque en fisioterapia para lesiones urgentes y dolor agudo.",
        price: 75,
        image: "/media/fees/urgency.png"
    },
    {
        title: "Drenaje linfático",
        description: "Un tratamiento diseñado para estimular el sistema linfático, reducir la retención de líquidos y promover la salud circulatoria, logrando una sensación de bienestar y alivio.",
        price: 40,
        image: "/media/fees/drainage.png"
    },
    {
        title: "Suelo Pélvico",
        description: "Un tratamiento personalizado para fortalecer y rehabilitar los músculos del suelo pélvico, abordando condiciones específicas y mejorando la calidad de vida.",
        price: 43,
        image: "/media/fees/pelvis.png"
    },
    {
        title: "Preparación al Parto",
        description: "Una sesión enfocada en fortalecer los músculos específicos involucrados en el proceso de parto, como los del suelo pélvico y abdominales.",
        price: 41,
        image: "/media/fees/pregnant.png"
    },
    // {
    //     title: "A domicilio",
    //     description: "Nuestro equipo de profesionales se desplaza hasta tu hogar para brindarte atención en la comodidad de tu entorno, adaptando el tratamiento a tus necesidades.",
    //     price: "+70",
    //     image: "assets/_media/img/sesionDomicilio.png"
    // }
];
