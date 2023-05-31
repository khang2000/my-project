import React from "react";

const InforUser = (props) => {
  const { user } = props;

  return (
    <div className="infor-user">
      <img src={user.userImage} style={{ with: "480px" }}></img>
      <div className="infor-user-text">
        <h2>{user.userName}</h2>

        <h4>Số CCCD/CMND: {user.userCmnd}</h4>

        <h4>Ngày sinh: {user.userDateOfBirth}</h4>

        <h4>Địa chỉ: {user.userAddressBorn}</h4>
        <h4>Chức vụ: {user.userPosition}</h4>
        <p>
          I love playing badminton in my spare time. I spend a lot of my free
          time playing badminton after finishing my homework. I was so
          interested in playing badminton from my childhood and started learning
          to play when I was 7 years old. When I was 8 years old, my dad told my
          teacher about my hobby of badminton. My teacher told my dad that there
          was a facility for playing sports daily in school so he could admit
          his child. Now, I enjoy playing badminton and I participate in
          inter-school competitions.
        </p>
      </div>
    </div>
  );
};

export default InforUser;
