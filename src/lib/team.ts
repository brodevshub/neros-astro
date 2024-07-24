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
        img: '/media/team/fer.png',
        description: 'Fernando no solo es un apasionado de la fisioterapia, sino también un amante entusiasta de los deportes al aire libre. En su tiempo libre, disfruta practicando pádel y atletismo, actividades que le permiten mantenerse en forma y comprender mejor las necesidades y desafíos de sus pacientes deportistas. Esta experiencia personal con el deporte le brinda una perspectiva única y valiosa para abordar las lesiones y mejorar el rendimiento de aquellos que confían en su expertise. Fernando no solo aporta su amplio conocimiento profesional, sino también un enfoque humano y cercano, asegurándose de que cada paciente se sienta escuchado y comprendido.',
        bgColor: "#7da4e3"
    },
    {
        id: "belen_colmenero_rubio",
        name: 'Belén Colmenero Rubio',
        role: 'Recepcionista',
        img: '/media/team/belen.png',
        description: 'Belén, nuestra recepcionista, es una persona alegre y organizada que siempre está dispuesta a ayudar. Su carácter sociable y su atención al detalle hacen que cada paciente se sienta bienvenido y cuidado desde el momento en que entra en la clínica, asegurando una experiencia agradable y sin estrés para todos. Fuera del trabajo, Belén tiene una gran pasión por la lectura y además, disfruta enormemente de pasar tiempo con su familia y amigos, valorando cada momento de conexión y creando recuerdos inolvidables. Su capacidad para equilibrar su vida personal y profesional con tanta gracia es inspiradora.',
        bgColor: "#8d8d8d"
    },
    {
        id: "laura_sanchez_colmenero",
        name: 'Laura Sánchez Colmenero',
        role: 'Fisioterapeuta',
        img: '/media/team/laura.png',
        description: 'Laura es una entusiasta comprometida con el bienestar integral de sus pacientes. En cada una de sus sesiones, busca no sólo promover la recuperación física, sino también fomentar el equilibrio emocional, creando un ambiente de confianza y relajación que permita a sus pacientes sentirse seguros y apoyados. Dentro del campo de la fisioterapia, cuenta con una profunda pasión por tratar a bebés, enfocándose en las necesidades específicas de los más pequeños. Además, está especializada en el tratamiento del suelo pélvico, ayudando a sus pacientes a mejorar su calidad de vida mediante técnicas y terapias personalizadas.',
        bgColor: "#c8bfe7"
    },
];
