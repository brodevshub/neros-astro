export interface TeamMember {
    id: string;
    name: string;
    role: string;
    img: string;
    description: string;
    bgColor: string;
}

export const team: TeamMember[] = [
    {
        id: "fernando_sanchez_colmenero",
        name: 'Fernando Sánchez Colmenero',
        role: 'Fisioterapeuta',
        //img: '/media/team/fernando.png',
        img: '/media/team/avatar.webp',
        description: 'Fernando no solo es un apasionado de la fisioterapia, sino también un amante de los deportes al aire libre. En su tiempo libre, disfruta practicando senderismo y ciclismo de montaña, lo que le permite mantenerse en forma y entender mejor las necesidades de sus pacientes deportistas. Su empatía y dedicación se reflejan en cada tratamiento, brindando no solo su conocimiento profesional, sino también un enfoque humano y cercano.',
        bgColor: "#7da4e3"
    },
    {
        id: "belen_colmenero_rubio",
        name: 'Belén Colmenero Rubio',
        role: 'Recepcionista',
        //img: '/media/team/belen.png',
        img: '/media/team/avatar.webp',
        description: 'Belén, nuestra recepcionista, es una persona alegre y organizada que siempre está dispuesta a ayudar. Fuera del trabajo, le encanta la lectura y pasar tiempo con su familia y amigos. Su carácter sociable y su atención al detalle hacen que cada paciente se sienta bienvenido y cuidado desde el momento en que entra en la clínica, asegurando una experiencia agradable y sin estrés para todos.',
        bgColor: "#8d8d8d"
    },
    {
        id: "laura_sanchez_colmenero",
        name: 'Laura Sánchez Colmenero',
        role: 'Fisioterapeuta',
        //img: '/media/team/laura.png',
        img: '/media/team/avatar.webp',
        description: 'Laura es una entusiasta de la vida saludable y el bienestar integral. Aparte de su trabajo en la clínica, dedica su tiempo a la práctica del yoga y la meditación, lo que le ha permitido desarrollar una visión holística de la salud. Esta perspectiva se integra en sus sesiones de fisioterapia, donde busca no solo la recuperación física, sino también el equilibrio mental y emocional de sus pacientes, creando un ambiente de sanación completa.',
        bgColor: "#c8bfe7"
    },
];
