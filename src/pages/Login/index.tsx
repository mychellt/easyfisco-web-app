import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import {Container, Sigin} from './style';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Login: React.FC = () => (
    <Container>
        <Sigin>
            <form>
                <h1>Faça seu logon</h1>
                <Input name="email" placeholder="E-mail"/>
                <Input name="password" type="password" placeholder="Senha"/>
                <Button type="submit">Entrar</Button>

                <a href="">Esqueci minha senha</a>
            </form>

            <a href="">
                <FiLogIn/>
                Criar conta
            </a>
        </Sigin>
    </Container>
);

export default Login;