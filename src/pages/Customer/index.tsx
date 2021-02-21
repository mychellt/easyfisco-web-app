import React, {SetStateAction, useState} from 'react';
import classnames from 'classnames';
import {Container, 
    Row, 
    Col, 
    Form, 
    Input,
    Button, 
    Label, 
    FormGroup, 
    Nav,
    NavLink,
    NavItem,
    TabContent,
    TabPane} from 'reactstrap';


const Customer: React.FC = () =>  {
    const [activeTab, setActiveTab] = useState('1');
    function toggle(tab: SetStateAction<string>){
        if(activeTab !== tab) setActiveTab(tab);
    }
return (
    <Container>
        <Row>
            <Col>
                <Form>
                    <h1>Dados do Cliente</h1>
                    <FormGroup>
                        <Row>
                            <Col md="6">
                                <Label for="name">Nome</Label>
                                <Input name="name"/>
                            </Col>
                            <Col>
                                <Label for="birthday" >Data do Nascimento</Label>
                                <Input name="birthday" type="date"/>
                            </Col>
                            <Col>
                                <Label for="gener">Gênero</Label>
                                <Input type="select" name="select" id="gener">
                                    <option>-- Selecione --</option>
                                    <option>Feminino</option>
                                    <option>Masculino</option>
                                    <option>Não Informado</option>
                                </Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label for="cellphone">Celular</Label>
                                <Input name="cellphone"/>
                            </Col>
                            <Col>
                                <Label for="phone">Telefone</Label>
                                <Input name="phone" />
                            </Col>
                            <Col>
                                <Label for="ramal">Ramal</Label>
                                <Input name="ramal"/>
                            </Col>
                            <Col>
                                <Label for="fax">Fax</Label>
                                <Input name="faz"/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Label for="cpf">CPF</Label>
                        <Input name="cpf"/>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col>
                                <Label for="email">E-mail</Label>
                                <Input name="email"/>
                            </Col>
                            <Col>
                                <Label for="website">Website</Label>
                                <Input name="website"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label for="observacoes">Observacoes</Label>
                                <Input name="website" type="textarea" />
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '1' })} 
                            onClick={() => { toggle('1'); }}>
                            Endereços
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { toggle('2'); }}>
                            Informações Extras
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { toggle('3'); }}>
                            Contatos
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Label for="rg">RG</Label>
                                        <Input name="rg"/>
                                    </Col>
                                    <Col>
                                        <Label for="expedidor">Órgão expedidor</Label>
                                        <Input name="expedidor"/>
                                    </Col>
                                    <Col>
                                        <Label for="emissao">Data de emissão</Label>
                                        <Input name="emissao" type="date"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Label for="passaporte">Passaporte</Label>
                                        <Input name="passaporte"/>
                                    </Col>
                                    <Col>
                                        <Label for="estrangeiro">Estrangeiro</Label>
                                        <Input name="estrangeiro"/>
                                    </Col>
                                    <Col>
                                        <Label for="emissao">Data de emissão</Label>
                                        <Input name="emissao" type="date"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md="3">   
                                        <Label for="estadocivil">Estado Civil</Label>
                                        <Input type="select" name="select" id="estadocivil">
                                            <option>-- Selecione --</option>
                                            <option>Solteiro</option>
                                            <option>Casado</option>
                                            <option>Viúvo</option>
                                            <option>Separado</option>
                                            <option>Divorciado</option>
                                            <option>União Estável</option>
                                            <option>Outro</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Label for="activity-start">Início da Atividade</Label>
                                        <Input name="activity-start" type="date"/>
                                    </Col>
                                    <Col>
                                        <Label for="end-activity">Encerramento da Atividade</Label>
                                        <Input name="end-activity" type="date"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                    </TabPane>
                </TabContent>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button type="submit" color="primary">Cadastrar</Button>{' '}
                <Button type="submit" color="secondary">Cancelar</Button>
            </Col>
        </Row>
    </Container>
);
}

export default Customer;