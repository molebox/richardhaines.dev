/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/layout/main";
import Divider from "../components/common/divider";
import ContactLayout from "./../components/site/contact/contact-layout";
import Form from "../components/site/contact/form";
import P from "../components/common/p";
import H1 from "../components/common/H1";
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
            Im most active on Twitter where you can reach me{" "}
            <ExternalLink href="https://twitter.com/studio_hungry">
              @studio_hungry
            </ExternalLink>
            , if you would prefer to contact me via email you can do so at{" "}
            <ExternalLink href="mailto:hello@richardhaines.dev">
              hello@richardhaines.dev
            </ExternalLink>
            .
          </P>
          <P>
            Otherwise feel free to fill out the form and i will get back to you
            within a couple of days.
          </P>
        </div>
        <Form />
      </ContactLayout>
    </Main>
  );
};

export default Contact;
