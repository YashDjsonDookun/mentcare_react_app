import React from 'react'
import { Button, Form, Message, Segment, Header } from 'semantic-ui-react'
const axios = require('axios');

export default function CreatePatient(){
	const genderOptions = [
	  { key: 'm', text: 'MALE', value: 'MALE' },
	  { key: 'f', text: 'FEMALE', value: 'FEMALE' },
	]
	const selfHarm_violenceOptions = [
	  { key: 'y', text: 'YES', value: 'YES' },
	  { key: 'n', text: 'NO', value: 'NO' },
	]
	const vip_classifiedOptions = [
	  { key: 'n', text: 'N/A', value: 'N/A' },
	  { key: 'v', text: 'VIP', value: 'VIP' },
	  { key: 'c', text: 'CLASSIFIED', value: 'CLASSIFIED' },
	]

	async function testFunc(){
		await axios({
			method: 'post',
			url: 'http://localhost:5000/createPatient',
			data: {
				firstName:"",
				lastName:"",
				email:"",
				address:"",
				DOB:"",
				phoneNumber:"",
				gender:"",
				assignedDoctor:"",
				Conditions:"",
				Treatments:"",
				selfharm_violence:"",
				vip:"",
				classified:""
			}
		})
	}

	return(
		<div>
		    <Form className='attached fluid segment'>
				<Form.Group widths='equal'>
					<Segment raised>
						<Header as='h2' color='teal' textAlign='center'>
		                    Enter Your Doctor ID:
		                </Header>
						<Form.Input
						  fluid
						  label='First Name'
						  placeholder='First Name'
						  type='text'
						  required
						/>
						<Form.Input
						  fluid
						  label='Last Name'
						  placeholder='Last Name'
						  type='text'
						  required
						/>
						<Form.Input
						  fluid
						  label='Email'
						  placeholder='Email'
						  type='email'
						  required
						/>

						<Form.Input
						  fluid
						  label='Address'
						  placeholder='Address'
						  type='text'
						  required
						/>
						<Form.Input
						  fluid
						  label='Date Of Birth'
						  placeholder='Last Name'
						  type='date'
						  required
						/>
						<Form.Input
						  fluid
						  label='Phone Number'
						  placeholder='Phone Number'
						  type='bumber'
						  required
						/>

						<Form.Select
				            fluid
				            label='Gender'
				            options={genderOptions}
				            placeholder='Gender'
				            required
				          />
						<Form.Input
						  fluid
						  label='Assigned Doctor'
						  placeholder=''
						  type='text'
						  readOnly
						/>
						<Form.Input
						  fluid
						  label='Conditions'
						  placeholder='Conditions'
						  type='text'
						  required
						/>

						<Form.Input
						  fluid
						  label='Treatments'
						  placeholder='Treatments'
						  type='text'
						  required
						/>
						<Form.Select
				            fluid
				            label='History Of Self-Harm or Violence?'
				            options={selfHarm_violenceOptions}
				            placeholder='History Of Self-Harm or Violence?'
				            required
				          />
						<Form.Select
				            fluid
				            label='VIP or Classified?'
				            options={vip_classifiedOptions}
				            placeholder='VIP or Classifieds'
				            required
				          />
			          </Segment>
				</Form.Group>
		      <Button onClick={testFunc} color='teal'>Submit</Button>
			</Form>
	 	 </div>
	)
}