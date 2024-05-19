import styled from "styled-components";

const SearchIcon = styled.div`
  position: absolute;
  font-size: 1rem;
  margin-left: 280px;
  margin-top: -84px;
`;

const Icon = () => {
  return (
    <SearchIcon role="img" aria-label="search">
      🔍
    </SearchIcon>
  );
};

export default Icon;
