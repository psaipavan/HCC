// import { useState } from "react";
// import "./Settings.css";

// const Settings = () => {
//   const [formData, setFormData] = useState({
//     firstName: "John",
//     lastName: "Anderson",
//     email: "john.anderson@example.com",
//     phoneNumber: "+1 (555) 123-4567",
//     emergencyContact: {
//       name: "Sarah Wilson",
//       relationship: "Sister",
//       phone: "+1 (555) 987-6543",
//       email: "sarah.wilson@example.com",
//     },
//     emailNotifications: true,
//     smsNotifications: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;

//     if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else if (name.includes("emergencyContact")) {
//       const field = name.split(".")[1];
//       setFormData({
//         ...formData,
//         emergencyContact: {
//           ...formData.emergencyContact,
//           [field]: value,
//         },
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSave = () => {
//     console.log("Saved Data:", formData);
//   };

//   return (
//     <div className="settings">
//       <h1>Settings</h1>
//       <p>Manage your account settings and preferences</p>

//       <div className="section">
//         <h2>Personal Settings</h2>
//         <div className="row">
//           <label>
//             First Name
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Last Name
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="row">
//           <label>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Phone Number
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//       </div>

//       <div className="section">
//         <h2>Emergency Contacts</h2>
//         <div className="row">
//           <label>
//             Contact Name
//             <input
//               type="text"
//               name="emergencyContact.name"
//               value={formData.emergencyContact.name}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Relationship
//             <input
//               type="text"
//               name="emergencyContact.relationship"
//               value={formData.emergencyContact.relationship}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="row">
//           <label>
//             Phone Number
//             <input
//               type="text"
//               name="emergencyContact.phone"
//               value={formData.emergencyContact.phone}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Email
//             <input
//               type="email"
//               name="emergencyContact.email"
//               value={formData.emergencyContact.email}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <button className="add-contact">+ Add Another Emergency Contact</button>
//       </div>

//       <div className="section">
//         <h2>Notifications</h2>
//         <div className="toggle-row">
//           <label>Email Notifications</label>
//           <label className="switch">
//             <input
//               type="checkbox"
//               name="emailNotifications"
//               checked={formData.emailNotifications}
//               onChange={handleChange}
//             />
//             <span className="slider round"></span>
//           </label>
//         </div>
//         <div className="toggle-row">
//           <label>SMS Notifications</label>
//           <label className="switch">
//             <input
//               type="checkbox"
//               name="smsNotifications"
//               checked={formData.smsNotifications}
//               onChange={handleChange}
//             />
//             <span className="slider round"></span>
//           </label>
//         </div>
//       </div>

//       <div className="actions">
//         <button onClick={handleSave} className="save">Save Changes</button>
//         <button className="cancel">Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default Settings;


import { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Anderson",
    email: "john.anderson@example.com",
    phoneNumber: "+1 (555) 123-4567",
    emergencyContact: {
      name: "Sarah Wilson",
      relationship: "Sister",
      phone: "+1 (555) 987-6543",
      email: "sarah.wilson@example.com",
    },
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name.includes("emergencyContact")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        emergencyContact: {
          ...formData.emergencyContact,
          [field]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <p>Manage your account settings and preferences</p>

      <div className="section">
        <h2>Personal Settings</h2>
        <div className="row">
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="row">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className="section">
        <h2>Emergency Contacts</h2>
        <div className="row">
          <label>
            Contact Name
            <input
              type="text"
              name="emergencyContact.name"
              value={formData.emergencyContact.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Relationship
            <input
              type="text"
              name="emergencyContact.relationship"
              value={formData.emergencyContact.relationship}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="row">
          <label>
            Phone Number
            <input
              type="text"
              name="emergencyContact.phone"
              value={formData.emergencyContact.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="emergencyContact.email"
              value={formData.emergencyContact.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="add-contact">+ Add Another Emergency Contact</button>
      </div>

      <div className="section">
        <h2>Notifications</h2>
        <div className="toggle-row">
          <label>Email Notifications</label>
          <label className="switch">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="toggle-row">
          <label>SMS Notifications</label>
          <label className="switch">
            <input
              type="checkbox"
              name="smsNotifications"
              checked={formData.smsNotifications}
              onChange={handleChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="actions">
        <button onClick={handleSave} className="save">Save Changes</button>
        <button className="cancel">Cancel</button>
      </div>
    </div>
  );
};

export default Settings;
