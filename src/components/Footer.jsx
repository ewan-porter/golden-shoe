import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import styled from "styled-components";

import 'hover.css';

import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  BusinessOutlined,
  Email,
  Phone,
} from "@material-ui/icons";

const StyledMDBFooter = styled(MDBFooter)`
  background-color: #1f1f1f;
  color: #fff !important;
`;

const ContactInfo = styled.span`
  padding-left: 8px;
`;

const Title = styled.h6`
    color: #e6ce1d;
`;



const Footer = () => {
  return (
    <StyledMDBFooter
      color="color"
      bgColor="none"
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center  p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset hvr-grow">
            <Facebook style={{ fill: "#e6ce1d" }} />
          </a>
          <a href="" className="me-4 text-reset hvr-grow">
            <Twitter style={{ fill: "#e6ce1d" }} />
          </a>
          <a href="" className="me-4 text-reset hvr-grow">
            <Instagram style={{ fill: "#e6ce1d" }} />
          </a>
          <a href="" className="me-4 text-reset hvr-grow">
            <YouTube style={{ fill: "#e6ce1d" }} />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <Title className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Golden Shoe
              </Title>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                adipisci quasi incidunt tempora totam?
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <Title className="text-uppercase fw-bold mb-4">Products</Title>
              <p>
                <a href="#!" className="text-reset">
                  Men
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Women
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Sale
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Brands
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <Title className="text-uppercase fw-bold mb-4">Useful links</Title>
              <p>
                <a href="#!" className="text-reset">
                  Returns and Refunds
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Shipping and Delivery
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Store Locator
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <Title className="text-uppercase fw-bold mb-4">Contact</Title>
              <p>
                <BusinessOutlined style={{ fill: "#e6ce1d" }} />{" "}
                <ContactInfo>61 York Road, London, EC65 9JG</ContactInfo>
              </p>
              <p>
                <Email style={{ fill: "#e6ce1d" }} />
                <ContactInfo>info@goldenshoe.com</ContactInfo>
              </p>
              <p>
                <Phone style={{ fill: "#e6ce1d" }} />{" "}
                <ContactInfo>01632 960462</ContactInfo>
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </StyledMDBFooter>
  );
};

export default Footer;
