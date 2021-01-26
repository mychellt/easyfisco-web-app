import React from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import {Container, Sigin} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import RecoverPassword from '../RecoverPassword';

const Login: React.FC = () => (
    <Container>
        <Sigin>
            <form>
                <h1>Faça seu logon</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail"/>
                <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                <Button type="submit">Entrar</Button>

                <a href="RecoverPassword">Esqueci minha senha</a>
            </form>

            <a href="">
                <FiLogIn/>
                Criar conta
            </a>
        </Sigin>
    </Container>
);

export default Login;