import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import cx from "classnames";

import styles from "./Resume.module.css";

const query = gql`
  # Write your query or mutation here
  {
    roles {
      title
      employers {
        name
        startDate
        endDate
        accomplishments
      }
    }
  }
`;

function Resume() {
  // const [isActive, setIsActive] = useState(false);
  const { data, loading, error } = useQuery(query);

  console.log({
    data,
    loading,
    error
  });

  if (loading) return "Loading...";

  const { roles } = data;

  return (
    <div className={styles.container}>
      {roles.map(role => (
        <div>
          <h3>{role.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Resume;

// <div className={styles.container}>
//       <ul>
//         <li
//           className={cx([
//             styles.listItem,
//             {
//               [styles.listItemHighlighted]: isActive
//             }
//           ])}
//         >
//           Active
//         </li>
//         <li className={styles.listItem}>Inactive</li>
//       </ul>
//       <button
//         onClick={() => {
//           setIsActive(!isActive);
//         }}
//       >
//         Oh haaay
//       </button>
//     </div>
