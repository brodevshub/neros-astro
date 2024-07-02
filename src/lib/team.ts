export interface TeamMember {
    id: string;
    name: string;
    img: string;
    description: string;
}

export const team: TeamMember[] = [
    {
        id: "fernando_sanchez_colmenero",
        name: 'Fernando Sánchez Colmenero',
        img: '/media/team/fernando.png',
        description: 'Hola soy fergus'
    },
    {
        id: "belen_colmenero_rubio",
        name: 'Belén Colmenero Rubio',
        img: '/media/team/belen.png',
        description: 'Hola soy beleneara'
    },
    {
        id: "laura_sanchez_colmenero",
        name: 'Laura Sánchez Colmenero',
        img: '/media/team/laura.png',
        description: 'Hola soy laurita'
    },
];
