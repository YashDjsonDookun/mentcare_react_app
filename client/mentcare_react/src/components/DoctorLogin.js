import {React, useState} from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
const axios = require('axios');

export default function DoctorLogin ({setDoc}){
    const [id, setId] = useState();
    const [message, setMessage] = useState()
    async function validateDocID(){
        const API_URL = `http://localhost:5000/fetchDocs/${id}`;
        await axios.get(API_URL)
        .then((response)=>{
            setDoc(response.data);
        })
        .catch(error=>{
            setMessage("floating");
            setId("");
            throw(error)
        })
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Enter Your Doctor ID:
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input onChange={e => setId(e.target.value)} fluid icon='user' type="number" required iconPosition='left' placeholder='e.g, 6969696' value={id?id:""} />
                        <Button onClick={validateDocID} color='teal' fluid size='large'>
                            Login
                        </Button>
                    </Segment>
                       {message ? <Message floating>Wrong ID, Please Try Again</Message> : null }
                </Form>
            </Grid.Column>
        </Grid>
    )
}