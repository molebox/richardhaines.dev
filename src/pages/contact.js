/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import Divider from "../components/common/divider";
import ContactLayout from "./../components/site/contact/contact-layout";
import Form from "../components/site/contact/form";
import P from "../components/common/p";
import H1 from "../components/common/h1";
import ExternalLink from "./../components/common/external-link";

const Contact = () => {
  return (
    <Main>
      <Divider />
      <H1>Contact</H1>
      <Divider />
      <ContactLayout>
        <div
          sx={{
            fontFamily: "body"
          }}
        >
          <P>
            If you would like to get in touch about a project, or if you have
            any questions for me, dont hesitate to send me a message by filling
            out the form. I will aim to get back to you within a couple of days
          </P>
        </div>
        <Form />
      </ContactLayout>
    </Main>
  );
};

export default Contact;
