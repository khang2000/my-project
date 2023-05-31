import Header from "../../components/header/header";
import InforUser from "../../components/inforUser/inforUser";
import { useParams } from "react-router-dom";
const User = (props) => {
  const params = useParams();
  const id = params.id;
  const { users } = props;
  const user = users.find((item) => {
    return item.id === id;
  });
  return (
    <div>
      <Header />
      <div className="user-page">
        <InforUser user={user} />
      </div>
    </div>
  );
};

export default User;
