import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  const newChildren = children + 2;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {newChildren}입니다.
      <br />
      제가 제일 좋아하는 숫자는 {favoriteNumber + 5}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름1",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
