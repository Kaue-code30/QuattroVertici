import logoUX from "@/app/src/Home/Assets/ux-branco.svg"
import luiza from "@/app/src/Home/Assets/luiza.jpeg"


interface Socio {
    nome: string,
    atuacao: string,
    descritivo: string,
    foto: string
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
        descritivo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        foto: ""
    },
    {
        nome: "Luiza Zamboni",
        atuacao: "Lorem ispsum",
        foto: luiza.src,
        descritivo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        nome: "Caio Zamboni",
        foto: "",
        atuacao: "Lorem ispsum",
        descritivo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

export const EmpresasInvestidas: EmpresaInvestidaProps[] = [
    {
        nome: "UX Group",
        description: "A UX atua como agente de transformação de ponta a ponta nas etapas de venda dos clientes, com a missão de solucionar diretamente as dores, elevando a performance das operações e permitindo aos clientes focar exclusivamente em sua estratégia comercial. Isso é possível graças a uma estrutura criada para atender demandas de serviços, tecnologia e operações.",
        logo: logoUX,
        areaAtuacao: "Um ecossistema de tecnologia, logística e sustentabilidade para melhor experiência do cliente digital.",
        link: "https://uxgroup.com.br"
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