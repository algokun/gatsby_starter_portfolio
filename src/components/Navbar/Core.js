import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SmallMenu = styled.div`
  display: none;
  text-align: center;
  @media (max-width: ${props => props.size}) {
    display: block;
  }
`;

const LargeMenu = styled.div`
  display: block;
  text-align: right;
  @media (max-width: ${props => props.size}) {
    display: none;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
);

function ResponsiveMenu(props) {
  const [open, setOpen] = useState(false);
  const {
    menu,
    largeMenuClassName,
    smallMenuClassName,
    changeMenuOn,
    menuOpenButton,
    menuCloseButton,
    smallMenuBrand
  } = props;
  return (
    <div>
      <LargeMenu className={largeMenuClassName} size={changeMenuOn}>
        {menu}
      </LargeMenu>
      <SmallMenu className={smallMenuClassName} size={changeMenuOn}>
        {!open ? (
          <FlexBox>
            {smallMenuBrand}
            <MenuIcon onClick={() => setOpen(true)} icon={menuOpenButton} />
          </FlexBox>
        ) : (
          <FlexBox>
            {smallMenuBrand}
            <MenuIcon onClick={() => setOpen(false)} icon={menuCloseButton} />
          </FlexBox>
        )}
        {open ? <div>{menu}</div> : null}
      </SmallMenu>
    </div>
  );
}

ResponsiveMenu.propTypes = {
  menu: PropTypes.node.isRequired,
  largeMenuClassName: PropTypes.string,
  smallMenuClassName: PropTypes.string,
  changeMenuOn: PropTypes.string.isRequired,
  menuOpenButton: PropTypes.node.isRequired,
  menuCloseButton: PropTypes.node.isRequired,
  smallMenuBrand: PropTypes.node.isRequired
};

ResponsiveMenu.defaultProps = {
  largeMenuClassName: "",
  smallMenuClassName: ""
};
export default ResponsiveMenu;
