import styled from "styled-components/macro";
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Picture = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 769px) {
    display: none;
  } ;
`;

export const BigImg = styled.div`
  aspect-ratio: 7/12;
  position: relative;
  width: ${({ width }) => (width ? `${width}` : "60%")};
  border-radius: 20px;
  background: url(${({ src }) => (src ? `${src}` : null)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  @media (max-width: 1301px) {
    width: 70%;
  }

  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 769px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const FormCol = styled(Column)`
  padding-left: 0;
  width: 100%;
`;

export const FormRow = styled(Row)`
  gap: 20px;
  margin: 10px 0;
`;

export const InputForm = styled.input`
  border: 1px solid white;
  background-color: var(--primary-bg);
  border-radius: 10px;
  width: 100%;
  height: 56px;
  padding: 10px 20px;
  color: white;
`;

export const SubscribeButton = styled.button`
  background-color: var(--primary-bg);
  border-radius: 40px;
  border: 2px solid var(--secondary-bg);
  color: var(--secondary-bg);
  width: fit-content;
  padding: 5px 50px;
  margin: 20px 0;

  &:hover {
    background-color: var(--secondary-bg);
    color: white;
  }
`;

export const SubmitButton = styled(SubscribeButton)`
  margin: 20px auto;
  margin-bottom: 0;

  h3 {
    margin: 0;
    font-weight: normal;
  }
`;

const BuildDataset = () => {
  return (
    <Row>
      <Picture>
        <BigImg src="images/image20.png" width="100%" />
      </Picture>
      <Column>
        <h2>
          Want to build your own{" "}
          <span style={{ color: "var(--secondary-bg)" }}>dataset</span>?
        </h2>
        <p>
          Contact us now to learn how we can collect a custom dataset for your
          unique AI solution.
        </p>
        <FormRow>
          <FormCol>
            <p>First Name *</p>
            <InputForm></InputForm>
          </FormCol>
          <FormCol>
            <p>Last Name *</p>
            <InputForm></InputForm>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <p>Email *</p>
            <InputForm type="email"></InputForm>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <p>Telephone *</p>
            <InputForm type="tel"></InputForm>
          </FormCol>
          <FormCol>
            <p>Company *</p>
            <InputForm></InputForm>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <p>Comment *</p>
            <InputForm style={{ height: "100px" }}></InputForm>
          </FormCol>
        </FormRow>
        <SubmitButton>
          <h3>Submit</h3>
        </SubmitButton>
      </Column>
    </Row>
  );
};

export default BuildDataset;
