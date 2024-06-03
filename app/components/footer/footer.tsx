"use client";

import { Container, Group, Anchor } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./footer.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Container className={classes.inner}>
      <MantineLogo size={28} />
      <Group className={classes.links}>{items}</Group>
    </Container>
  );
}
