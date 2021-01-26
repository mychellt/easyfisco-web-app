import React from 'react';
import {FiArrowLeft, FiMail, FiLock, FiUser, FiPhone} from 'react-icons/fi';

import {Container, Sigup} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import RecoverPassword from '../RecoverPassword';

const Login: React.FC = () => (
    <Container>
        <Sigup>
            <form>
                <h1>Simplifique a Emissão de Notas Fiscais com o Easyfisco</h1>
                <Input name="name" icon={FiUser} placeholder="Nome"/>
                <Input name="email" icon={FiMail} placeholder="E-mail"/>
                <Input name="phone" icon={FiPhone} placeholder="Telefone"/>
                <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                <Button type="submit">Cadastrar</Button>
            </form>

            <a href="">
                <FiArrowLeft/>
                Acessar o Sistema   
            </a>
        </Sigup>
    </Container>
);

export default Login;