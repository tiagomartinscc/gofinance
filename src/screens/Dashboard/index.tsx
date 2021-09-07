import React from 'react'

import { HightlightCard } from '../../components/HightlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HightlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){

    const data: DataListProps[]  = [
    {
        id: '1',
        title: 'Desenvolvimento de site',
        amount: 'R$ 12.000,00',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: '13/04/2021',
        type:'positive'
    },
    {
        id: '2',
        title: 'Hamburgeria Pizzy',
        amount: 'R$ 59,00',
        category: {
            name: 'Alimentação',
            icon: 'coffee'
        },
        date: '13/04/2021',
        type:'negative'
    },
    {
        id: '3',
        title: 'Aluguel do apartamento',
        amount: 'R$ 1.200,00',
        category: {
            name: 'Casa',
            icon: 'shopping-bag'
        },
        date: '27/03/2021',
        type:'negative'
    },    
]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://github.com/tiagomartinscc.png'}} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Tiago</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HightlightCards>
                <HightlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" />
                <HightlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction="Última saída dia 03 de abril" />
                <HightlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 a 16 de abril" />
            </HightlightCards>

            <Transactions>
                <Title>Lista de transações</Title>
                <TransactionList
                    data={data} 
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item}/>}
                />
            </Transactions>
        </Container>
    )
}