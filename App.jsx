import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid,
  Container,
  Flag,
  Button, Image,
  Input, Header, Label, 
  Divider } from 'semantic-ui-react'

function App() {

  return (
    <>
      <div>
        
       
      <Grid container columns={3}>
        <Grid.Column>
          <Flag name='id'></Flag>
          <Button>Button1</Button>
          <Button>Button2</Button>
        </Grid.Column>
        <Grid.Column>
         <Input></Input>
        </Grid.Column>
        <Grid.Column>
        <Header as="h3" color="red">
            <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
            Sonny Faristrianto
          </Header>
        </Grid.Column>
      </Grid>
      <Divider horizontal>SELAMAT DATANG!!!</Divider>
      <Container textAlign='right'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </Container>
          <Grid Container columns={3}>
            <Grid.Column>1</Grid.Column>
            <Grid.Column>
          <Button color='blue' class='ui labeled icon button'>
          <i class='add icon'></i>  
            Tambah Tautan Ke List</Button>
            </Grid.Column>
            <Grid.Column>3</Grid.Column>
            </Grid>
  </div>
  </>
  )
}

export default App
