import styled from '@emotion/styled';

export const ContactsItem = styled.li`
  display: inline-grid;
  // align-items: center;
  gap: 20px;
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 30px;
`;

export const ContactsItemName = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;

export const ContactsItemNumber = styled.p`
  font-size: 30px;
`;

export const ContactsItemCreatedAt = styled.p`
  font-size: 30px;
  display: block;
`;

// export const ContactsItemSpan = styled.span`
//   color: blue;
// `;

export const ContactsItemButton = styled.button`
  width: 100px;
  height: 25px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #fff;
`;
