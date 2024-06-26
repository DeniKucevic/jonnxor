'use client';

import { Container, Group, Burger } from '@mantine/core';

import { Toolbar } from '@/features/toolbar/toolbar';
import { PageHeader } from '@/features/page-header/page-header';

type Props = {
  opened: boolean;
  toggle: () => void;
};

export function AppHeader({ opened, toggle }: Props) {
  return (
    <Container h="100%">
      <Group h="100%" wrap="nowrap">
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Group justify="space-between" style={{ flex: 1 }}>
          <PageHeader />
          <Toolbar ml="xl" visibleFrom="xs" />
        </Group>
      </Group>
    </Container>
  );
}
