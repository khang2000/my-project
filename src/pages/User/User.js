import InforUser from "../../components/inforUser/inforUser";

const User = (props) => {
  const { users } = props;

  return (
    <div>
      <InforUser users={users} />
    </div>
  );
};

export default User;
