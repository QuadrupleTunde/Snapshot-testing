import Card from 'react-bootstrap/Card'
import Olapic from './olapic.jpg'

function GitHubCard(){

    return(
    <div>
        <h2>GitHub Profile</h2>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Github Page</Card.Title>
    <Card.Text>
     Username : QuadrupleTunde
     {Olapic}
     
    </Card.Text>
    <Card.Text>
      A very cool headed guy with positive demeanor, classic, energetic, passionation 
      and a goal oriented persom. Possesses a problem solving skills, timely response to problem 
      and providing adequate solution to it.
    </Card.Text>
  </Card.Body>
</Card>

</div>
    )

}


export default GitHubCard