import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
    className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

  export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    return (
      <Dropdown className={`ml-auto ${styles.Dots}`} drop="left">
        <Dropdown.Toggle as={ThreeDots} />
  
        <Dropdown.Menu
          className="text-center"
          popperConfig={{ strategy: "fixed" }}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label="edit"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleDelete}
            aria-label="delete"
          >
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Are you sure you want to delete your post?!</Tooltip>}
            >
            <i className="fas fa-trash-alt" />
            </OverlayTrigger>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };