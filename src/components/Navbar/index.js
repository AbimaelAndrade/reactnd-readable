import React, { Component } from "react";
import { connect } from "react-redux";
import { handdleReceiveCategories } from "../../store/actions/categories";
import { withRouter } from "react-router-dom";
import {
  Menu,
  Icon,
  Segment,
  Container,
  Visibility,
  Responsive
} from "semantic-ui-react";

const menuStyle = {
  margingTop: "2em",
  border: "none",
  boxShadow: "none",
  transition: "box-shadow 0.5s ease, padding 0.5s ease"
};

const fixedMenuStyle = {
  padding: "1em 1em",
  backgroundColor: "#1b1c1d",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
};

class Navbar extends Component {
  state = {
    selected: "",
    menuFixed: false
  };

  componentDidMount() {
    this.props.dispatch(handdleReceiveCategories());
  }

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  handleMenuChange = (e, name, route) => {
    e.preventDefault();
    this.setState({ selected: name });

    this.props.history.push(route);
  };

  goToHome = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    const { menuFixed, selected } = this.state;
    const { categories } = this.props;

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Segment
          inverted
          style={{ borderRadius: 0, marginTop: "1em", marginBottom: "25px" }}
        >
          <Menu
            inverted
            pointing
            secondary
            stackable
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container>
              <Menu.Item href="/" onClick={e => this.goToHome(e)}>
                <Icon name="home" size="large" />
              </Menu.Item>

              {categories.map(category => (
                <Menu.Item
                  as="a"
                  href={`/${category.path}`}
                  key={category.path}
                  name={category.name}
                  active={selected === category.path}
                  onClick={e =>
                    this.handleMenuChange(e, category.path, `/${category.path}`)
                  }
                />
              ))}

              <Menu.Menu position="right">
                <Responsive as={Menu.Menu} position="right" minWidth={768}>
                  <Menu.Item
                    href="https://www.linkedin.com/in/abimaelandrade/"
                    target="_blank"
                  >
                    <Icon name="linkedin" size="large" />
                  </Menu.Item>
                  <Menu.Item
                    href="https://github.com/abimaelandrade/"
                    target="_blank"
                  >
                    <Icon name="github" size="large" />
                  </Menu.Item>
                </Responsive>
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.list
});

export default withRouter(connect(mapStateToProps)(Navbar));
