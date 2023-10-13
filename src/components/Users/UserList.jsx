import { List, SimpleList } from "react-admin";

const UserList = () => (
  <List>
    <SimpleList
      primaryText={(record) => record.name}
      secondaryText={(record) => `${record.username}`}
      tertiaryText={(record) => record.email}
      linkType={(record) => "show"}
      rowSx={(record) => ({
        backgroundColor: record.website.length >= 13 ? "#efe" : "white",
      })}
    />
  </List>
);

export default UserList;
