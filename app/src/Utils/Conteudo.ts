interface Socio {
    nome: string,
    atuacao: string,
    descritivo: string
}

interface EmpresaInvestidaProps {
    nome: string,
    logo: string,
    areaAtuacao?: string
    description: string,
    link: string
}

export const ConteudoSocios: Socio[] = [
    {
        nome: "Enéas Zamboni",
        atuacao: "Lorem ispsum",
        descritivo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        nome: "Luiza Zamboni",
        atuacao: "Lorem ispsum",
        descritivo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        nome: "Caio Zamboni",
        atuacao: "Lorem ispsum",
        descritivo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

export const EmpresasInvestidas: EmpresaInvestidaProps[] = [
    {
        nome: "UX Group",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        logo: "",
        areaAtuacao: "Lorem ipsum",
        link: ""
    },
    {
        nome: "Lorem",
        description: "",
        logo: "",
        areaAtuacao: "",
        link: ""
    },
    {
        nome: "Lorem",
        description: "",
        logo: "",
        areaAtuacao: "",
        link: ""
    }
]