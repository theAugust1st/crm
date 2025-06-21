import { RiExpandUpDownLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsPlusCircleDotted } from "react-icons/bs";
import "./Table.css";
import avatar from "../assets/name-avatar.png";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { useState } from "react";

const headings = [
  "Name",
  "Added from",
  "Tags",
  "Internal Id",
  "Client Id",
  "Phone",
  "Client Portal",
  "Assignee",
  "Followers",
  "Status",
  "Application",
  "Last Updated",
];

const clientsData = [
  {
    id: 1,
    name: "Full Name",
    email: "example@gmail.com",
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779876****",
    portal: "Deactivated",
    assignee: "Name",
    assigneeCompany: "Interlace Studies Pty",
    followers: "Name",
    status: "Completed",
    application: 1,
    updatedAt: "24-09-023",
  },
  {
    id: 2,
    name: "Full Name",
    email: "example@gmail.com",
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779876****",
    portal: "Deactivated",
    assignee: "Name",
    assigneeCompany: "Interlace Studies Pty",
    followers: "Name",
    status: "Completed",
    application: 1,
    updatedAt: "24-09-023",
  },
  {
    id: 3,
    name: "Full Name",
    email: "example@gmail.com",
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779876****",
    portal: "Deactivated",
    assignee: "Name",
    assigneeCompany: "Interlace Studies Pty",
    followers: "Name",
    status: "Completed",
    application: 1,
    updatedAt: "24-09-023",
  },
  {
    id: 4,
    name: "Full Name",
    email: "example@gmail.com",
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779876****",
    portal: "Deactivated",
    assignee: "Name",
    assigneeCompany: "Interlace Studies Pty",
    followers: "Name",
    status: "Completed",
    application: 1,
    updatedAt: "24-09-023",
  },
  {
    id: 5,
    name: "Full Name",
    email: "example@gmail.com",
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779876****",
    portal: "Deactivated",
    assignee: "Name",
    assigneeCompany: "Interlace Studies Pty",
    followers: "Name",
    status: "Completed",
    application: 1,
    updatedAt: "24-09-023",
  },
  {
    id: 6,
    name: "Full Name",
    email: "example@gmail.com",
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779876****",
    portal: "Deactivated",
    assignee: "Name",
    assigneeCompany: "Interlace Studies Pty",
    followers: "Name",
    status: "Completed",
    application: 1,
    updatedAt: "24-09-023",
  },
  {
    id: 7,
    name: "Full Name",
    email: "example@gmail.com",
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779876****",
    portal: "Deactivated",
    assignee: "Name",
    assigneeCompany: "Interlace Studies Pty",
    followers: "Name",
    status: "Completed",
    application: 1,
    updatedAt: "24-09-023",
  },
  {
    id: 8,
    name: "Full Name",
    email: "example@gmail.com",
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779876****",
    portal: "Deactivated",
    assignee: "Name",
    assigneeCompany: "Interlace Studies Pty",
    followers: "Name",
    status: "Completed",
    application: 1,
    updatedAt: "24-09-023",
  },
];

function Table({ showDropDown, setShowDropDown }) {
  const [clients, setClients] = useState(clientsData);
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    tags: "",
    internalId: "",
    clientId: "",
    phone: "",
    portal: "",
    assignee: "",
    assigneeCompany: "",
    followers: "",
    status: "",
    application: "",
    updatedAt: "",
  });
  const [isSelected, setIsSelected] = useState(null);
  const [editingCell, setEditingCell] = useState({ row: null, column: null });
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openHiddenDropDown, setOpenHiddenDropDown] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(() => {
    return new Set(headings);
  });
  function handleInputChange(e) {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  }

  function handleAddNewClient() {
    setClients([...clients, newClient]);
    setShowDropDown(false);
    setNewClient({
      name: "",
      email: "",
      tags: "",
      internalId: "",
      clientId: "",
      phone: "",
      portal: "",
      assignee: "",
      assigneeCompany: "",
      followers: "",
      status: "",
      application: "",
      updatedAt: "",
    });
  }

  function handleRow(i) {
    if (editingCell.row === null) {
      setIsSelected(i);
    }
  }

  function renderEditableCell(client, column, rowIndex) {
    const isEditing =
      editingCell.row === rowIndex && editingCell.column === column;

    const editableColumns = [
      "name",
      "email",
      "addedFrom",
      "tags",
      "internalId",
      "clientId",
      "phone",
      "portal",
      "assignee",
      "assigneeCompany",
      "followers",
      "status",
      "application",
      "updatedAt",
    ];

    const currentColIndex = editableColumns.indexOf(column);

    return (
      <div
        className={isEditing ? "editing-cell" : ""}
        onDoubleClick={() => setEditingCell({ row: rowIndex, column })}
      >
        {isEditing ? (
          <input
            value={client[column] || ""}
            onChange={(e) => {
              const updatedClients = [...clients];
              updatedClients[rowIndex][column] = e.target.value;
              setClients(updatedClients);
            }}
            onBlur={() => setEditingCell({ row: null, column: null })}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                e.preventDefault();
                const nextIndex = e.shiftKey
                  ? currentColIndex - 1
                  : currentColIndex + 1;

                if (nextIndex >= 0 && nextIndex < editableColumns.length) {
                  const nextColumn = editableColumns[nextIndex];
                  setEditingCell({ row: rowIndex, column: nextColumn });
                } else {
                  setEditingCell({ row: null, column: null });
                }
              }
            }}
          />
        ) : Array.isArray(client[column]) ? (
          client[column].join(", ")
        ) : (
          client[column]
        )}
      </div>
    );
  }
  function toggleDropdown(index) {
    setOpenDropDown((prev) => (prev === index ? null : index));
  }
  function hideColumn(columnName) {
    setVisibleColumns((prev) => {
      const newSet = new Set(prev);
      newSet.delete(columnName);
      return newSet;
    });
  }
  const hiddenColumns = headings.filter((col) => !visibleColumns.has(col));
  return (
    <div className="table-wrapper">
      <table className="client-table">
        <thead>
          <tr>
            <th className="checkbox-col">
              <input type="checkbox" className="checkbox" />
            </th>
            {headings.map((heading, i) =>
              visibleColumns.has(heading) ? (
                <th key={i}>
                  <div className="heading-flex">
                    <div className="heading-left">
                      <span>{heading}</span>
                      <RiExpandUpDownLine className="sort-icon" />
                    </div>
                    <div
                      onClick={() => toggleDropdown(i)}
                      style={{ cursor: "pointer" }}
                    >
                      <BsThreeDotsVertical className="three-dots" />
                    </div>

                    {openDropDown === i && (
                      <div
                        className="dropdown-menu"
                        onClick={() => {
                          hideColumn(heading);
                          setOpenDropDown(false);
                        }}
                      >
                        Hide
                      </div>
                    )}
                  </div>
                </th>
              ) : null
            )}
            <th
              style={{ cursor: "pointer", position: "relative" }}
              onClick={() => {
                setOpenHiddenDropDown((pre) => !pre);
              }}
            >
              <div className="addButton">+Add Column</div>
              {openHiddenDropDown && hiddenColumns.length > 0 && (
                <div className="dropdown-menu">
                  {hiddenColumns.map((hiddenCol, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setVisibleColumns((prev) =>
                          new Set(prev).add(hiddenCol)
                        );
                      }}
                    >
                      {hiddenCol}
                    </div>
                  ))}
                </div>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, i) => (
            <tr
              key={`client-${client.id ?? i}-${i}`}
              onClick={() => handleRow(i)}
              className={`${isSelected === i ? "selected" : ""} ${
                editingCell.row === i ? "editing-row" : ""
              }`}
            >
              <td className="checkbox-col">
                <input type="checkbox" className="checkbox" />
              </td>
              {visibleColumns.has("Name") && (
                <td className="name-col">
                  <div className="profile-name">
                    <img
                      src={avatar}
                      alt="name-avatar"
                      className="name-avatar"
                    />
                    <div>
                      <div>{renderEditableCell(client, "name", i)}</div>
                      <div>{renderEditableCell(client, "email", i)}</div>
                    </div>
                  </div>
                  <BsPlusCircleDotted />
                </td>
              )}
              {visibleColumns.has("Added from") && (
                <td>{renderEditableCell(client, "addedFrom", i)}</td>
              )}
              {visibleColumns.has("Tags") && (
                <td>{renderEditableCell(client, "tags", i)}</td>
              )}
              {visibleColumns.has("Internal Id") && (
                <td>{renderEditableCell(client, "internalId", i)}</td>
              )}
              {visibleColumns.has("Client Id") && (
                <td>{renderEditableCell(client, "clientId", i)}</td>
              )}
              {visibleColumns.has("Phone") && (
                <td>{renderEditableCell(client, "phone", i)}</td>
              )}
              {visibleColumns.has("Client Portal") && (
                <td>{renderEditableCell(client, "portal", i)}</td>
              )}
              {visibleColumns.has("Assignee") && (
                <td className="name-col">
                  <div className="profile-name">
                    <img
                      src={avatar}
                      alt="name-avatar"
                      className="name-avatar"
                    />
                    <div>
                      <div>{renderEditableCell(client, "assignee", i)}</div>
                      <div>{renderEditableCell(client, "assigneeCompany", i)}</div>
                    </div>
                  </div>
                  <HiMiniArrowUturnRight />
                </td>
              )}
              {visibleColumns.has("Followers") && (
                <td className="followers-col">
                  <div className="follower-box">
                    <span>{renderEditableCell(client, "followers", i)}</span>
                    <HiMiniArrowUturnRight />
                  </div>
                </td>
              )}
              {visibleColumns.has("Status") && (
                <td
                  style={{
                    backgroundColor:
                      client.status === "Completed"
                        ? "#4AC86E"
                        : client.status === "In Progress"
                        ? "#4786E7"
                        : "transparent",
                    color: "#fff",
                  }}
                >
                  {renderEditableCell(client, "status", i)}
                </td>
              )}
              {visibleColumns.has("Application") && (
                <td>{renderEditableCell(client, "application", i)}</td>
              )}
              {visibleColumns.has("Last Updated") && (
                <td>{renderEditableCell(client, "updatedAt", i)}</td>
              )}
            </tr>
          ))}
          {!showDropDown &&
          
          <tr>
                          <td className="checkbox-col">
                <input type="checkbox" className="checkbox" />
              </td>
              <td colSpan={headings.length}>+ Add Client's Details</td>

          </tr>
          }
          {showDropDown && (
            <tr>
              <td className="checkbox-col">
                <input type="checkbox" className="checkbox" />
              </td>
              <td className="name-col">
                <div className="profile-name">
                  <img src={avatar} alt="avatar" className="name-avatar" />
                  <div className="input-name">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={newClient.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={newClient.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <BsPlusCircleDotted />
              </td>
              <td>
                <select
                  name="addedFrom"
                  value={newClient.addedFrom || "System"}
                  onChange={handleInputChange}
                >
                  <option value="System">System</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  name="tags"
                  value={newClient.tags}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Internal Id"
                  name="internalId"
                  value={newClient.internalId}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Client Id"
                  name="clientId"
                  value={newClient.clientId}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={newClient.phone}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <select
                  name="portal"
                  value={newClient.portal || "Deactivated"}
                  onChange={handleInputChange}
                >
                  <option value="Deactivated">Deactivated</option>
                </select>
              </td>
              <td className="name-col">
                <div className="profile-name">
                  <img src={avatar} alt="avatar" className="name-avatar" />
                  <div className="input-name">
                    <input
                      type="text"
                      placeholder="Assignee"
                      name="assignee"
                      value={newClient.assignee}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Assignee Company"
                      name="assigneeCompany"
                      value={newClient.assigneeCompany}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </td>
              <td className="followers-col">
                <div className="follower-box">
                  <input
                    type="text"
                    placeholder="Followers"
                    name="followers"
                    value={newClient.followers}
                    onChange={handleInputChange}
                  />
                </div>
              </td>
              <td>
                <select
                  name="status"
                  value={newClient.status}
                  onChange={handleInputChange}
                >
                  <option value="">Select status</option>
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Application"
                  name="application"
                  value={newClient.application}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Updated At"
                  name="updatedAt"
                  value={newClient.updatedAt}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <button onClick={handleAddNewClient}>Add</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
