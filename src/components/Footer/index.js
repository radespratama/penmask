import {
  BoxLayout,
  FooterContainer,
  FooterLink,
  FooterText,
} from "./footer.style";

export default function Footer() {
  return (
    <FooterContainer>
      <BoxLayout isPosition="flex-start">
        <FooterText>
          Build using{" "}
          <FooterLink href="https://reactjs.org/">⚡React</FooterLink>
        </FooterText>
      </BoxLayout>
      <BoxLayout isPosition="flex-end">
        <FooterText>@Penmask {new Date().getFullYear()}</FooterText>
      </BoxLayout>
    </FooterContainer>
  );
}
