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
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
      </BoxLayout>
      <BoxLayout isPosition="flex-end">
        <FooterText>Copyright@Penmask{new Date().getFullYear()}</FooterText>
      </BoxLayout>
    </FooterContainer>
  );
}
