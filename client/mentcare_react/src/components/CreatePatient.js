import { React, useState } from 'react'
import { Button, Form, Message, Segment, Header } from 'semantic-ui-react'
const axios = require('axios');

export default function CreatePatient(props){
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

	const [gender, setGender] = useState();
	const [selfHarm_violence, setSelfHarm_violence] = useState();
	const [vipClassified, setVipClassified] = useState();

	async function createPatient (e) {
		e.preventDefault();
		let vip = "";
		let classified = "";
		if(vipClassified === "N/A"){
			vip = false
			classified = false
		}
		else if (vipClassified === "VIP") {
			vip = true;
			classified = false;
		}
		else{
			vip = true;
			classified = true;
		}
		await axios({
			method: 'post',
			url: 'http://localhost:5000/createPatient',
			data: {
				firstName: e.target.firstName.value,
				lastName:e.target.lastName.value,
				email:e.target.email.value,
				address:e.target.address.value,
				DOB:e.target.DOB.value,
				phoneNumber:e.target.phoneNumber.value,
				gender:gender,
				assignedDoctor: e.target.assignedDoctor.value,
				conditions:e.target.conditions.value,
				treatments:e.target.treatments.value,
				selfharm_violence:selfHarm_violence,
				vip: vip,
				classified:classified,
				created_at: new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString(),
				last_consultation: new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString()
			}
		})
	}

	return(
		<div>
		    <Form className='attached fluid segment' onSubmit = {createPatient}>
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
						  name= "firstName"
						/>
						<Form.Input
						  fluid
						  label='Last Name'
						  placeholder='Last Name'
						  type='text'
						  required
						  name="lastName"
						/>
						<Form.Input
						  fluid
						  label='Email'
						  placeholder='Email'
						  type='email'
						  required
						  name="email"
						/>

						<Form.Input
						  fluid
						  label='Address'
						  placeholder='Address'
						  type='text'
						  required
						  name="address"
						/>
						<Form.Input
						  fluid
						  label='Date Of Birth'
						  placeholder='Last Name'
						  type='date'
						  required
						  name="DOB"
						/>
						<Form.Input
						  fluid
						  label='Phone Number'
						  placeholder='Phone Number'
						  type='number'
						  required
						  min="7"
						  max="8"
						  name="phoneNumber"
						/>

						<Form.Select
				            fluid
				            label='Gender'
				            options={genderOptions}
				            placeholder='Gender'
				            required
							onChange = {(e) => setGender(e.target.textContent)}
				          />
						<Form.Input
						  fluid
						  label='Assigned Doctor'
						  placeholder=''
						  type='text'
						  readOnly
						  name="assignedDoctor"
						  value={"Dr. " + props.docInfo.lastName + ", " + props.docInfo.firstName}
						/>
						<Form.Input
						  fluid
						  label='Conditions'
						  placeholder='Conditions'
						  type='text'
						  required
						  name="conditions"
						/>

						<Form.Input
						  fluid
						  label='Treatments'
						  placeholder='Treatments'
						  type='text'
						  required
						  name="treatments"
						/>
						<Form.Select
				            fluid
				            label='History Of Self-Harm or Violence?'
				            options={selfHarm_violenceOptions}
				            placeholder='History Of Self-Harm or Violence?'
				            required
							name="selfharm_violence"
							onChange = {(e) => setSelfHarm_violence(e.target.textContent)}
				          />
						<Form.Select
				            fluid
				            label='VIP or Classified?'
				            options={vip_classifiedOptions}
				            placeholder='VIP or Classifieds'
				            required
							name="vip_classified"
							onChange = {(e) => setVipClassified(e.target.textContent)}
				          />
			          </Segment>
				</Form.Group>
		      <Button type="submit" color='teal'>Submit</Button>
			</Form>
	 	 </div>
	)
}