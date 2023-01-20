import styled from '@emotion/styled';

const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 20px;
  box-shadow: #8b5c5c86 1px 1px 4px;
  border-radius: 20px;
`;

const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ friendStatus }) => (friendStatus ? 'green' : 'red')};
`;

const FriendAvatar = styled.img`
  width: 48px;
`;

const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export { FriendItem, FriendStatus, FriendAvatar, FriendName };
