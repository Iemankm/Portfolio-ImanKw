import {Heading1,Heading2,Heading3,Heading4} from '../components/styleGuid/components/text'
import {Spacer} from '../components/styleGuid/components/Spacer'
import {Resumebtn,Sendbtn} from "../components/styleGuid/components/button"
import { Container } from '../components/styleGuid/components/Container';

export default function styleGuide() {
  return (
  <div className='App'>
    
   <Container>
   <div style={{padding:"20px"}}><Heading1>Heading01</Heading1>
    <Heading2>Heading 02</Heading2>
    <Heading3>Heading03</Heading3>
    <Heading4>Heading04</Heading4>
    </div>

    <div style={{display:'flex',padding:"20px"}}>
   
    </div>
   <div style={{display:'flex',padding:"20px"}}>
   <Resumebtn style={{margin:"10px"}}>Resume</Resumebtn>
 
    <Sendbtn style={{margin:"10px"}}>Send</Sendbtn>
    </div>
     </Container>
  </div>

  );
}


