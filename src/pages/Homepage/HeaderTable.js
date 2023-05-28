import React from "react";

const HeaderTable = () => {
  return (
    <thead className="table-primary">
      <tr>
        <th className="Stt" scope="col">
          STT
        </th>
        <th scope="col">Ảnh</th>
        <th scope="col">Tên nhân viên</th>
        <th scope="col">Giới tính</th>
        <th scope="col">Ngày sinh</th>
        <th scope="col">Nơi sinh</th>
        <th scope="col">Số CMND</th>
        <th scope="col">Tình trạng</th>
        <th scope="col">Xem</th>
        <th scope="col">Sửa</th>
        <th scope="col">Xóa</th>
      </tr>
    </thead>
  );
};

export default HeaderTable;
