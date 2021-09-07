import React from 'react'
import { HightlightCard } from '../../components/HightlightCard'
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
    HightlightCards
} from './styles'

export function Dashboard(){
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
                <HightlightCard />
                <HightlightCard />
                <HightlightCard />
            </HightlightCards>
        </Container>
    )
}