import styled from "styled-components/macro";

export const SCFlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* text-transform: capitalize; */
  color: rgba(21, 0, 0, 0.7);
  /* border: 2px solid orange; */

  h1 {
    font-size: 1.6rem;
    span {
      font-style: italic;
      text-decoration: underline;
    }
  }

  h2 {
    font-size: 1.2rem;
  }
  h3 {
    /* Inherit fungerar inte för h1 men för button. Varför?  */
    color: rgba(21, 0, 0, 0.7);
  }

  button {
    color: whitesmoke;
    width: 10rem;
    /* color: rgba(0, 0, 0, 0.87); */
    background-color: rgba(215, 160, 44, 0.9);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    /* background-color: #d5d5d5; */
    color: rgba(21, 0, 0, 0.7);
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    line-height: 1.75;
    letter-spacing: 0.02857em;
  }
`;

export const SCImageContainer = styled.div`
  img {
    margin-bottom: 1.5rem;
    display: block;
    max-width: 30rem;
    max-height: 30rem;
    width: auto;
    height: auto;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-radius: 1.5%;
  }
`;

// align-items: center	Centrera horizontellt med en vertikal container
// justify-content: center	Centrera horizontellt i en horizontell container
