import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const MediumRegister = () => {
  const Map: {}[] = [
    {
      icon: <FaFacebook />,
    },
    {
      icon: <AiFillGoogleCircle />,
    },
    {
      icon: <AiOutlineMail />,
    },
  ];
  return (
    <div>
      <Container>
        <Card>
          <Div>
            <Cancel />
          </Div>
          <IconHolder>
            {Map.map((el: any) => {
              return <Icon>{el.icon}</Icon>;
            })}
          </IconHolder>
          <Head>Join Medium</Head>
          <InputHolder>
            <Name>userName</Name>
            <Input placeholder="Your username" type="text" />
          </InputHolder>
          <br />
          <InputHolder>
            <Name>email</Name>
            <Input placeholder="Your email address" type="text" />
          </InputHolder>
          <br />
          <InputHolder>
            <Name>password</Name>
            <Input placeholder="Your password" type="password" />
          </InputHolder>
          <br />
          <InputHolder>
            <Name>confirm</Name>
            <Input placeholder="confirm password" type="password" />
          </InputHolder>
          <Txt>
            Already have an account? <span>Sign in</span>
          </Txt>
        </Card>
      </Container>
    </div>
  );
};

export default MediumRegister;

const IconHolder = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

const Icon = styled.div`
  font-size: 20px;
`;

const Txt = styled.div`
  font-size: 14px;
  margin-top: 20px;
  span {
    color: orange;
    cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  margin-right: 5px;
  width: 100%;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 45%;
  min-height: 90%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Cancel = styled(GrClose)`
  color: silver;
  font-size: 20px;
`;

const Head = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  margin: 20px 0;
`;

const InputHolder = styled.div``;

const Name = styled.div`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid orange;
  outline: none;
  padding-left: 15px;
`;
