import React from "react";
import { Link } from "react-router-dom";
import { TopbarDesk, MainMenu } from "../Styled/Desktop.js";
import { Grid } from "@material-ui/core";
import "antd/dist/antd.css";
import { Select, Input, AutoComplete, Button, Tooltip } from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons";

function Header() {
  const { Option } = Select;

  const location = ["TPHCM", "HÀ NỘI", "ĐÀ NẵNG"];
  const types = [
    "Quán ăn",
    "Cà phê",
    "Trà sữa",
    "Nhà hàng",
    "Bar",
    "Pub",
    "Street food",
  ];

  const renderTitle = (title: string) => (
    <span>
      {title}
      <a
        style={{ float: "right" }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );

  const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });
  const options = [
    {
      label: renderTitle("Libraries"),
      options: [
        renderItem("AntDesign", 10000),
        renderItem("AntDesign UI", 10600),
      ],
    },
    {
      label: renderTitle("Solutions"),
      options: [
        renderItem("AntDesign UI FAQ", 60100),
        renderItem("AntDesign FAQ", 30010),
      ],
    },
    {
      label: renderTitle("Articles"),
      options: [renderItem("AntDesign design language", 100000)],
    },
  ];

  //////////////////////
  //Function

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Grid className="Header flex col">
      <TopbarDesk>
        <div style={{ backgroundColor: "black" }} className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a
                style={{ color: "#e32727" }}
                className="navbar-brand button"
                href="/"
              >
                <span>Discovery Foods </span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item">
                    <a className="button" aria-current="page" href="#">
                      <span style={{ color: "black" }}> Contact </span>
                    </a>
                  </li>
                  <li classNAme="nav-item">
                    <a className="button" href="#">
                      <span style={{ color: "black" }}> Blogs </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </TopbarDesk>
      <MainMenu>
        <Grid container spacing={2} className=" flex  jus-center Main-menu">
          <Grid
            items={true}
            style={{ width: "80%", height: "15vh" }}
            className="flex al-center Container"
          >
            <Grid
              style={{ width: "100%", height: "100%" }}
              items={true}
              md={2}
              className=" Logo"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src="./FOUNDFOOD.png"
              ></img>
            </Grid>
            <Grid items={true} md={2}>
              <Select
                placeholder="Địa điểm "
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "1.2rem",
                }}
              >
                {location.map((location, indx) => {
                  return (
                    <Select.Option
                      key={indx}
                      value={location}
                      style={{ fontSize: "1.2rem" }}
                    />
                  );
                })}
              </Select>
            </Grid>
            <Grid items={true} md={2}>
              <Select
                placeholder="Loại hình "
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "1.2rem",
                }}
              >
                {types.map((types, indx) => {
                  return (
                    <Select.Option
                      key={indx}
                      value={types}
                      style={{ fontSize: "1.2rem" }}
                    />
                  );
                })}
              </Select>
            </Grid>
            <Grid items={true} md={3}>
              <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{ width: "100%" }}
                options={options}
              >
                <Input.Search
                  size="large"
                  placeholder="Tìm kiếm Địa điểm , tên quán , loại hình"
                />
              </AutoComplete>
            </Grid>
            <Grid items={true} md={2}>
              <Tooltip title="Login">
                <Button
                  type="dashed"
                  shape="circle"
                  icon={<UserOutlined />}
                  size="large"
                  value="LOgin"
                ></Button>
              </Tooltip>
              <Tooltip title="Notification">
                <Button
                  type="dashed"
                  shape="circle"
                  icon={<BellOutlined />}
                  size="large"
                ></Button>
              </Tooltip>
              >
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="jack">Jack </Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </MainMenu>
    </Grid>
  );
}

export default Header;
