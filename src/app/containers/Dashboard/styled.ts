import styled from 'styled-components/macro';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;

  /* Debug styling to make sure it's visible */
  border: 1px solid #ccc;

  > div {
    background-color: #fff;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
